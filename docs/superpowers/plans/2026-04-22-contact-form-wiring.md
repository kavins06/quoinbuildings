# Contact Form Wiring Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire the existing `/contact` form to a Google Apps Script Web App that logs submissions to a Google Sheet and emails `kavins@quoinbuildings.com`, with a honeypot for spam protection.

**Architecture:** Browser form POSTs JSON to a Next.js `/api/contact` server route, which forwards the payload to a Google Apps Script Web App URL stored in the `APPS_SCRIPT_CONTACT_URL` env var. Apps Script appends a row to a Google Sheet and sends a Gmail notification.

**Tech Stack:** Next.js 16 App Router (server route), React 19 (controlled inputs), Google Apps Script (bound to a Sheet, `MailApp.sendEmail`, `SpreadsheetApp.appendRow`).

**Verification:** Manual — the project has no test harness (no Jest, Vitest, or Playwright configured). Verification is by (1) local `next dev` submission using a test Apps Script URL, and (2) live submission on Vercel production.

**Source spec:** [docs/superpowers/specs/2026-04-22-contact-form-wiring-design.md](../specs/2026-04-22-contact-form-wiring-design.md)

---

## File Structure

| File | Responsibility | Create/Modify |
|------|----------------|---------------|
| `app/api/contact/route.ts` | Server POST handler: honeypot check, required-field validation, forward to Apps Script, return JSON | **Create** |
| `app/contact/content.tsx` | Form: controlled inputs, honeypot field, submit handler calling `/api/contact`, error state | **Modify** |
| `.env.local` | Local dev env var (not committed) | **Create** (user, local only) |
| `docs/superpowers/specs/2026-04-22-contact-form-wiring-design.md` | Spec reference | (already exists) |

Vercel Project Settings (user action): add `APPS_SCRIPT_CONTACT_URL` to Production + Preview + Development environments.

---

## Task 1: User — Create the Google Sheet

**Owner:** User (kavins@quoinbuildings.com)
**Files:** none (external setup)

- [ ] **Step 1: Create a new Google Sheet**

  Go to https://sheets.google.com (signed in as `kavins@quoinbuildings.com`) and create a new blank spreadsheet. Name it **"Quoin — Contact Submissions"**.

- [ ] **Step 2: Add the header row**

  In row 1, type these exact column headers (tab between cells):

  ```
  Timestamp	First Name	Last Name	Company	Email	Your Role	Property Type	Portfolio Size (Units)	Portfolio Size (Sq Ft)	Message
  ```

  Bold the header row (Format → Text → Bold) for readability. No other formatting needed.

- [ ] **Step 3: Confirm the sheet is saved and accessible**

  Confirm the sheet title shows "Quoin — Contact Submissions" and the URL looks like `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`. No need to copy the ID — the Apps Script will bind to this sheet automatically.

---

## Task 2: User — Create and Deploy the Apps Script

**Owner:** User
**Files:** none (external, lives in Google Apps Script UI)

- [ ] **Step 1: Open the Apps Script editor**

  From inside the "Quoin — Contact Submissions" sheet, click **Extensions → Apps Script**. A new tab opens with a blank project named "Untitled project". Rename it to **"Quoin Contact Form Handler"** (click the title top-left to rename).

- [ ] **Step 2: Paste the handler code**

  In `Code.gs`, replace the entire file contents with:

  ```javascript
  const NOTIFY_EMAIL = 'kavins@quoinbuildings.com';

  function doPost(e) {
    try {
      const data = JSON.parse(e.postData.contents);
      const timestamp = new Date();

      const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.appendRow([
        timestamp,
        data.firstName || '',
        data.lastName || '',
        data.company || '',
        data.email || '',
        data.role || '',
        data.propertyType || '',
        data.portfolioUnits || '',
        data.portfolioSqFt || '',
        data.message || ''
      ]);

      const subject = `New Quoin inquiry — ${data.firstName || ''} ${data.lastName || ''} (${data.company || ''})`.trim();
      const body = [
        `Name:    ${data.firstName || ''} ${data.lastName || ''}`,
        `Company: ${data.company || ''}`,
        `Email:   ${data.email || ''}`,
        `Role:    ${data.role || '—'}`,
        `Property Type:      ${data.propertyType || '—'}`,
        `Portfolio (Units):  ${data.portfolioUnits || '—'}`,
        `Portfolio (Sq Ft):  ${data.portfolioSqFt || '—'}`,
        '',
        'Message:',
        data.message || '(none)',
        '',
        `Submitted: ${timestamp.toLocaleString('en-US', { timeZone: 'America/New_York' })} ET`
      ].join('\n');

      const mailOptions = { replyTo: data.email };
      if (data.email) {
        MailApp.sendEmail(NOTIFY_EMAIL, subject, body, mailOptions);
      } else {
        MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
      }

      return ContentService
        .createTextOutput(JSON.stringify({ ok: true }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  function doGet() {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'Quoin contact handler is live.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  ```

  Press **Ctrl+S** (or Cmd+S on Mac) to save.

- [ ] **Step 3: Deploy as a Web App**

  Click **Deploy → New deployment** (top-right). In the dialog:
  - Click the gear icon next to "Select type" → choose **Web app**.
  - **Description:** `Quoin contact form — v1`
  - **Execute as:** `Me (kavins@quoinbuildings.com)`
  - **Who has access:** `Anyone`

  Click **Deploy**.

- [ ] **Step 4: Authorize the script**

  Google will prompt: "Authorize access". Click **Authorize access** → choose your `kavins@quoinbuildings.com` account → you may see a "Google hasn't verified this app" warning (it's your own script, this is expected). Click **Advanced → Go to Quoin Contact Form Handler (unsafe)** → **Allow**.

- [ ] **Step 5: Copy the Web App URL**

  After deployment completes, Google shows a **Web app URL** that looks like:

  ```
  https://script.google.com/macros/s/AKfycbx.../exec
  ```

  Copy this URL. This is the value for `APPS_SCRIPT_CONTACT_URL`. **Paste it back in chat.**

- [ ] **Step 6: Smoke test the URL (optional)**

  Open the URL in a browser. You should see:

  ```json
  {"ok":true,"message":"Quoin contact handler is live."}
  ```

  If you see an error or a Google login page, the deployment access setting is wrong — redeploy with "Who has access: Anyone".

---

## Task 3: User — Add Env Var in Vercel

**Owner:** User
**Files:** none (external, Vercel dashboard)

- [ ] **Step 1: Open Vercel project settings**

  Go to https://vercel.com → select the Quoin project → **Settings → Environment Variables**.

- [ ] **Step 2: Add the variable**

  - **Key:** `APPS_SCRIPT_CONTACT_URL`
  - **Value:** (the URL from Task 2 Step 5)
  - **Environments:** check all three — **Production**, **Preview**, **Development**
  - Click **Save**.

- [ ] **Step 3: (Local dev) Add to `.env.local`**

  In the project root, create or edit `.env.local`:

  ```bash
  APPS_SCRIPT_CONTACT_URL=https://script.google.com/macros/s/AKfycbx.../exec
  ```

  Confirm `.env.local` is in `.gitignore` (it is — Next.js includes it by default, but check).

---

## Task 4: Create the `/api/contact` Next.js Route

**Owner:** Claude
**Files:**
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Create the route file**

  Create `app/api/contact/route.ts` with this exact content:

  ```typescript
  import { NextResponse } from "next/server"

  export const runtime = "nodejs"

  type ContactPayload = {
    firstName?: string
    lastName?: string
    company?: string
    email?: string
    role?: string
    propertyType?: string
    portfolioUnits?: string
    portfolioSqFt?: string
    message?: string
    _hp?: string
  }

  const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
    "firstName",
    "lastName",
    "company",
    "email",
    "message",
  ]

  export async function POST(request: Request) {
    let body: ContactPayload
    try {
      body = (await request.json()) as ContactPayload
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON body." },
        { status: 400 },
      )
    }

    if (body._hp && body._hp.trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    for (const field of REQUIRED_FIELDS) {
      const value = body[field]
      if (typeof value !== "string" || value.trim().length === 0) {
        return NextResponse.json(
          { ok: false, error: `Missing required field: ${field}` },
          { status: 400 },
        )
      }
    }

    const url = process.env.APPS_SCRIPT_CONTACT_URL
    if (!url) {
      return NextResponse.json(
        { ok: false, error: "Server not configured." },
        { status: 500 },
      )
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)

    try {
      const upstream = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: body.firstName,
          lastName: body.lastName,
          company: body.company,
          email: body.email,
          role: body.role ?? "",
          propertyType: body.propertyType ?? "",
          portfolioUnits: body.portfolioUnits ?? "",
          portfolioSqFt: body.portfolioSqFt ?? "",
          message: body.message,
        }),
        signal: controller.signal,
        redirect: "follow",
      })

      if (!upstream.ok) {
        return NextResponse.json(
          { ok: false, error: "Submission failed. Please email info@quoinbuildings.com." },
          { status: 502 },
        )
      }

      return NextResponse.json({ ok: true })
    } catch {
      return NextResponse.json(
        { ok: false, error: "Submission failed. Please email info@quoinbuildings.com." },
        { status: 502 },
      )
    } finally {
      clearTimeout(timeout)
    }
  }

  export function GET() {
    return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 })
  }
  ```

- [ ] **Step 2: Verify the route compiles**

  Run `pnpm build` (or `npm run build`) to confirm the new route compiles without TypeScript errors.

  Expected: build succeeds, and the output lists `ƒ /api/contact` in the routes table (the `ƒ` denotes a dynamic/server route).

- [ ] **Step 3: Commit**

  ```bash
  git add app/api/contact/route.ts
  git commit -m "Add /api/contact server route forwarding to Apps Script"
  ```

---

## Task 5: Update the Contact Form (Controlled Inputs + Submit Handler + Honeypot)

**Owner:** Claude
**Files:**
- Modify: `app/contact/content.tsx`

- [ ] **Step 1: Replace the form block with controlled state + fetch**

  Replace the entire contents of `app/contact/content.tsx` with the version below. Key changes from the current file:
  - Adds `useState` for all form fields + `submitting` + `errorMessage`.
  - Makes the `<textarea>` required.
  - Adds a visually-hidden honeypot input named `_hp`.
  - Replaces the placeholder `onSubmit` with an async handler that POSTs to `/api/contact`.
  - Shows inline error message on failure; keeps values populated for retry.
  - Disables the submit button while submitting; changes label to "Sending…".

  ```tsx
  "use client"

  import { useState } from "react"
  import Link from "next/link"
  import { PageHeader } from "@/components/page-header"
  import { BlurFade } from "@/components/ui/blur-fade"

  const steps = [
    { number: "01", text: "You submit the form or email us." },
    { number: "02", text: "Kavin responds personally within one business day." },
    { number: "03", text: "30-minute conversation: your operations, your challenges, mutual fit." },
    { number: "04", text: "If there is a fit, we scope an Executive Diagnostic." },
  ]

  export function ContactContent() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [portfolioUnits, setPortfolioUnits] = useState("")
    const [portfolioSqFt, setPortfolioSqFt] = useState("")
    const [message, setMessage] = useState("")
    const [hp, setHp] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if (submitting) return
      setSubmitting(true)
      setErrorMessage(null)

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            company,
            email,
            role,
            propertyType,
            portfolioUnits,
            portfolioSqFt,
            message,
            _hp: hp,
          }),
        })

        const data = (await res.json().catch(() => null)) as
          | { ok: boolean; error?: string }
          | null

        if (!res.ok || !data?.ok) {
          setErrorMessage(
            data?.error ??
              "Submission failed. Please email info@quoinbuildings.com.",
          )
          setSubmitting(false)
          return
        }

        setSubmitted(true)
      } catch {
        setErrorMessage(
          "Submission failed. Please email info@quoinbuildings.com.",
        )
        setSubmitting(false)
      }
    }

    return (
      <main>
        <PageHeader
          eyebrow="Next Step"
          title="Let&rsquo;s talk."
          description="Tell us about your firm. We respond within one business day. If there is a fit, the next step is a scoping call for a 2-week Executive Diagnostic."
          backgroundImage="/header-contact.jpg"
        />

        <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            <BlurFade inView direction="up" className="lg:col-span-7">
              {submitted ? (
                <div className="py-16">
                  <div className="w-10 h-px bg-accent/40 mb-8" />
                  <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-4">
                    Thank you.
                  </h2>
                  <p className="text-sm leading-[1.75] text-muted-foreground">
                    We will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate={false}>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label>
                      Do not fill this field
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                        placeholder="First name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        Your Role
                        <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select your role</option>
                        <option value="ceo-owner">CEO/Owner</option>
                        <option value="coo-vp-operations">COO/VP Operations</option>
                        <option value="cto-vp-technology">CTO/VP Technology</option>
                        <option value="cfo-vp-finance">CFO/VP Finance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        Property Type
                        <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="mixed-use">Mixed-Use</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        Portfolio Size — Units
                        <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                      </label>
                      <select
                        value={portfolioUnits}
                        onChange={(e) => setPortfolioUnits(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select a range</option>
                        <option value="1000-5000">1,000&ndash;5,000 units</option>
                        <option value="5000-15000">5,000&ndash;15,000 units</option>
                        <option value="15000-50000">15,000&ndash;50,000 units</option>
                        <option value="50000+">50,000+ units</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                        Portfolio Size — Sq Ft
                        <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                      </label>
                      <select
                        value={portfolioSqFt}
                        onChange={(e) => setPortfolioSqFt(e.target.value)}
                        className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select a range</option>
                        <option value="under-500k">Under 500,000 sq ft</option>
                        <option value="500k-2m">500,000&ndash;2M sq ft</option>
                        <option value="2m-10m">2M&ndash;10M sq ft</option>
                        <option value="10m+">10M+ sq ft</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none placeholder:text-muted-foreground/30"
                      placeholder="What prompted you to reach out?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="self-start mt-4 px-10 py-4 bg-foreground text-background text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-foreground/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Submit"}
                  </button>

                  {errorMessage && (
                    <p className="text-[11px] leading-relaxed text-red-600/90 mt-1" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <p className="text-[11px] leading-relaxed text-muted-foreground/50 mt-2">
                    Your information is handled in accordance with our{" "}
                    <Link href="/privacy" className="text-muted-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors duration-300">
                      Privacy Policy
                    </Link>.
                  </p>
                </form>
              )}
            </BlurFade>

            <BlurFade inView delay={0.2} direction="up" className="lg:col-span-4 lg:col-start-9">
              <div className="flex flex-col gap-12">
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
                    Direct
                  </p>
                  <a
                    href="mailto:info@quoinbuildings.com"
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 border-b border-border pb-0.5"
                  >
                    info@quoinbuildings.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">
                    Washington, DC
                  </p>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
                    What to Expect
                  </p>
                  <div className="flex flex-col gap-4">
                    {steps.map((step) => (
                      <div key={step.number} className="flex items-start gap-4">
                        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/30 mt-0.5 shrink-0">
                          ({step.number})
                        </span>
                        <p className="text-sm leading-[1.6] text-muted-foreground">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
                    Suggested Participants
                  </p>
                  <p className="text-sm leading-[1.75] text-muted-foreground">
                    The first call works best with the executive sponsor — COO, CEO, or VP Operations. If your CTO or IT lead is part of the AI decision, they are welcome. One to three people; no presentation deck needed.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    )
  }
  ```

- [ ] **Step 2: Verify the form renders and builds**

  Run `pnpm build` and confirm no TypeScript errors.

- [ ] **Step 3: Commit**

  ```bash
  git add app/contact/content.tsx
  git commit -m "Wire contact form to /api/contact with honeypot + error state"
  ```

---

## Task 6: Local End-to-End Test

**Owner:** Claude + User
**Files:** none

- [ ] **Step 1: Confirm `.env.local` has `APPS_SCRIPT_CONTACT_URL`**

  (From Task 3 Step 3.) If missing, the local route returns 500.

- [ ] **Step 2: Start the dev server**

  Run `pnpm dev`. Expected: server starts on `http://localhost:3000`.

- [ ] **Step 3: Submit a test entry**

  Navigate to `http://localhost:3000/contact`. Fill the form:
  - First Name: `Test`
  - Last Name: `Submission`
  - Company: `Quoin Dev`
  - Email: `kavins@quoinbuildings.com` (or any valid address)
  - Message: `Local dev test.`

  Click **Submit**. Expected: button shows "Sending…" briefly, then the thank-you view appears.

- [ ] **Step 4: Verify the sheet and email**

  - Open the "Quoin — Contact Submissions" sheet — a new row should appear with the test data.
  - Check `kavins@quoinbuildings.com` inbox — an email with subject `New Quoin inquiry — Test Submission (Quoin Dev)` should arrive within a few seconds.

  If either is missing: check the terminal output from `pnpm dev` for the API route response, check the Apps Script execution log (Apps Script editor → Executions) for errors.

- [ ] **Step 5: Test honeypot (optional but recommended)**

  Open devtools, find the hidden `<input>` inside the `aria-hidden` div, set its value to `"bot"`. Resubmit. Expected: thank-you view appears but no new sheet row or email.

- [ ] **Step 6: Test error path (optional)**

  Temporarily change `.env.local` to `APPS_SCRIPT_CONTACT_URL=https://example.com/fake`. Restart `pnpm dev`. Submit. Expected: inline error "Submission failed. Please email info@quoinbuildings.com." appears; form values remain populated. Restore the real URL after.

---

## Task 7: Ship — Commit, Push, Deploy, Verify

**Owner:** Claude
**Files:** none

- [ ] **Step 1: Confirm all code changes are committed**

  Run `git status`. Expected: clean working tree on branch `feature/content-pass` (the new route and form edit should already be committed from Tasks 4-5).

- [ ] **Step 2: Push to the remote**

  ```bash
  git push
  ```

  Confirm branch is up to date with remote.

- [ ] **Step 3: Verify Vercel env var is set**

  Confirm with the user that `APPS_SCRIPT_CONTACT_URL` is set in **Production** on Vercel (Task 3 Step 2). Without this, the production route will 500.

- [ ] **Step 4: Deploy**

  Vercel auto-deploys on push. Wait for the branch deployment to complete (check Vercel dashboard or `vercel ls`). If on the `feature/content-pass` branch, this creates a Preview deployment. Ask the user whether to merge to `master` for production deploy, or test on the Preview URL first.

- [ ] **Step 5: Live submission test**

  On the deployed URL (preview or production), submit a test entry (use "Production Test" in the name fields and a real email for reply-to verification).

  Verify:
  - Sheet row appears.
  - Email arrives at `kavins@quoinbuildings.com`.
  - Reply-To on the email is the submitter's email (reply in Gmail → confirm To: shows the submitter).

- [ ] **Step 6: Mark feature done**

  Delete the test row from the Sheet (optional — or keep as a "first submission" record). Notify user that wiring is live.

---

## Self-Review

**Spec coverage:**
- ✅ Form wiring → Tasks 4, 5
- ✅ Google Sheet logging → Tasks 1, 2
- ✅ Gmail notification with Reply-To → Task 2 (Apps Script code)
- ✅ Zero recurring cost → All tasks use free tiers
- ✅ Honeypot spam protection → Tasks 4 (server), 5 (client)
- ✅ Error handling (honeypot, missing fields, Apps Script failure, timeout) → Task 4
- ✅ Env var config → Task 3
- ✅ Testing plan (local + live) → Tasks 6, 7

**Placeholder scan:** No TBDs, TODOs, or "add error handling" placeholders. All code is complete and copy-paste ready.

**Type consistency:** `ContactPayload` field names in Task 4 match the form state setters in Task 5 and the Apps Script handler in Task 2. Required fields list (`firstName, lastName, company, email, message`) consistent across all tasks.

**Ambiguity:** One intentional decision point in Task 7 Step 4 — whether to deploy to preview vs. master. Surface this to user rather than deciding unilaterally (the project's deploy workflow memory says "push to master," but that needs explicit confirmation given the work is on `feature/content-pass`).
