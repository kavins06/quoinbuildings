# Contact Form Wiring — Google Apps Script

**Date:** 2026-04-22
**Scope:** Wire the existing contact form on `/contact` to a Google Apps Script Web App that appends submissions to a Google Sheet and sends an email notification to `kavins@quoinbuildings.com`.
**Status:** Design approved in brainstorming on 2026-04-22.

---

## 1. Problem

The contact form at [app/contact/content.tsx](app/contact/content.tsx) currently does nothing on submit — it just flips a local `submitted` state to show a thank-you message. No email is sent, no record is kept. Submissions are lost.

## 2. Goals

- Every submission creates a row in a Google Sheet owned by `kavins@quoinbuildings.com`.
- Every submission triggers an email notification to `kavins@quoinbuildings.com`.
- Zero recurring cost (no Zapier/Make subscription).
- Replies from the notification email go to the submitter (Reply-To set to the submitter's email).
- Basic spam protection via honeypot field.

## 3. Non-goals

- CRM integration.
- Slack / other notification channels.
- File attachments on the form.
- Rate limiting (can be added later if abuse appears).
- Multi-step form flows or branching logic.

## 4. Architecture

```
Browser form (app/contact/content.tsx)
    │ POST JSON { firstName, lastName, company, email,
    │            portfolioSize, propertyType, role, message,
    │            _hp }   ← honeypot field (must be empty)
    ▼
Next.js server route (app/api/contact/route.ts)
    │ Reads APPS_SCRIPT_CONTACT_URL env var
    │ Drops submission silently if _hp is non-empty (honeypot)
    │ Forwards JSON to Apps Script
    ▼
Google Apps Script Web App (bound to a Google Sheet)
    │ Appends row to the sheet
    │ Sends Gmail notification to kavins@quoinbuildings.com
    ▼
Returns { ok: true } on success
```

### Why the Next.js route in the middle

- Keeps the Apps Script URL in an env var (not shipped in the client bundle).
- Avoids browser-side CORS friction with Apps Script Web Apps (server-to-server has no CORS).
- Gives us a single place to add validation, rate limiting, or logging later without touching the Apps Script or the form.

## 5. Components

### 5.1 Google Sheet

A Google Sheet in `kavins@quoinbuildings.com`'s Drive named **"Quoin — Contact Submissions"**. Single sheet with header row:

| Column | Source field |
|--------|--------------|
| Timestamp | Server-generated (Apps Script) |
| First Name | `firstName` |
| Last Name | `lastName` |
| Company | `company` |
| Email | `email` |
| Your Role | `role` |
| Property Type | `propertyType` |
| Portfolio Size (Units) | `portfolioUnits` |
| Portfolio Size (Sq Ft) | `portfolioSqFt` |
| Message | `message` |

**Portfolio Size change (2026-04-22):** Split into two independent optional dropdowns so firms managing commercial space by square footage and firms managing residential units can each use the metric that fits them. Either or both fields can be populated per submission.

### 5.2 Apps Script (bound to the Sheet)

- `doPost(e)` handler that:
  - Parses JSON from `e.postData.contents`.
  - Appends a row to the active spreadsheet.
  - Sends an email via `MailApp.sendEmail` to `kavins@quoinbuildings.com` with `replyTo` set to the submitter's email.
  - Returns `ContentService` JSON — `{ ok: true }` on success, `{ ok: false, error }` on failure (wrapped in try/catch).
- Deployed as a Web App with:
  - Execute as: **Me** (the script owner).
  - Who has access: **Anyone** (required for public POSTs from the site).

### 5.3 Next.js API route (`app/api/contact/route.ts`)

- POST handler only. Other methods return 405.
- Reads `APPS_SCRIPT_CONTACT_URL` from `process.env`.
- If `_hp` honeypot field is non-empty, returns `{ ok: true }` without forwarding (silently drops bot submissions).
- Required fields: `firstName`, `lastName`, `company`, `email`, `message`. If any are missing, returns 400 with `{ ok: false, error }`.
- Forwards JSON to Apps Script with a 10s timeout.
- Returns `{ ok: true }` on 2xx from Apps Script, otherwise `{ ok: false, error }` with 500.

### 5.4 Form (`app/contact/content.tsx`)

- Add `useState` for each field (controlled inputs).
- Add a hidden honeypot input named `_hp` with CSS `position: absolute; left: -9999px; tabindex: -1; autocomplete: off`. Not `display:none` — some bots skip those.
- On submit:
  - `e.preventDefault()`.
  - Set local `submitting = true`.
  - `fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })`.
  - On success: flip to `submitted = true` (existing thank-you view).
  - On failure: show inline error below the submit button, keep form values populated, allow retry.

## 6. Data shape (client → server)

```ts
{
  firstName: string;        // required
  lastName: string;         // required
  company: string;          // required
  email: string;            // required
  role?: string;            // optional select
  propertyType?: string;    // optional select
  portfolioUnits?: string;  // optional select (unit-count ranges)
  portfolioSqFt?: string;   // optional select (square-footage ranges)
  message: string;          // required (was optional in prior form; making required)
  _hp?: string;             // honeypot — must be empty
}
```

**Change from current form:** the "How can we help?" textarea is currently not `required`. Making it required ensures the submission has actual content. Confirmed scope: this is a small behavior change alongside the wiring.

## 7. Error handling

| Failure | Response |
|---------|----------|
| Missing required field (client) | HTML5 `required` blocks submit |
| Missing required field (server, defensive) | 400 `{ ok: false, error: 'Missing field: X' }` → inline error |
| Honeypot filled | 200 `{ ok: true }` — silently drop, no downstream call |
| Apps Script returns 5xx | 500 `{ ok: false, error: 'Submission failed. Please email us directly.' }` → inline error with `info@quoinbuildings.com` fallback |
| Apps Script timeout (>10s) | 500, same message as above |
| Network error (fetch throws) | Inline error, same fallback message |

## 8. Configuration

- `APPS_SCRIPT_CONTACT_URL` — Vercel environment variable (Production + Preview + Development). Value is the Apps Script Web App deployment URL. Not committed to git.

## 9. Testing plan

1. Local dev: mock the Apps Script URL to a test endpoint, submit the form, verify the network request payload.
2. Deploy to Vercel preview, set the env var, submit a test entry.
3. Verify: a new row appears in the Google Sheet, an email arrives at `kavins@quoinbuildings.com`, reply-to is the submitter's email.
4. Test the error path: temporarily set a bad env var, verify inline error renders.
5. Test honeypot: submit with a populated `_hp` field via devtools, verify no row / no email, response is 200.
6. Deploy to production, send one final live test.

## 10. Sequence — who does what

**User (you):**
1. Create the Google Sheet in `kavins@quoinbuildings.com` Drive.
2. Open Apps Script from the Sheet, paste the provided code, deploy as Web App.
3. Copy the Web App URL back to Claude.
4. Add `APPS_SCRIPT_CONTACT_URL` in Vercel project settings.

**Claude:**
1. Write `app/api/contact/route.ts`.
2. Update `app/contact/content.tsx` to controlled inputs + fetch + error state + honeypot.
3. Commit, push, deploy, test live.

## 11. Out of scope / future considerations

- Rate limiting (add if spam bypasses the honeypot).
- reCAPTCHA / Turnstile (heavier; honeypot is sufficient for now).
- Webhook to Slack or CRM (can add as a second Apps Script action later).
- Analytics event on successful submission (not requested).
