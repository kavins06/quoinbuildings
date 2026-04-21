# Content Pass Design (Voice Surgery + Tightening)

**Date:** 2026-04-21
**Scope:** Page-by-page content pass applying the voice rules from the global trust spec. Targeted polish, tightening where we're already rewriting, and three new/rewritten pages (`/responsible-ai`, `/data-security`, `/accessibility`). Privacy and Terms are out of scope (styling only, per the global spec).

**Option selected:** Option 2 — voice surgery + tighten flabby prose on sections we're already touching. Not a full rewrite; the existing copy is substantially good.

**Deployment:** Work lands on a feature branch locally. Do NOT push to master or deploy to production during implementation. User reviews locally before shipping.

**Source specs:**
- `docs/superpowers/specs/2026-04-21-global-trust-design-system.md` — voice rules (§8), CTA conventions (§6/§8), new-page specifications (§11), accessibility content (§10).
- `Website-Content-Inventory.md` — current verbatim content, the baseline we edit against.

---

## 1. Scope

### In scope — voice polish + tightening

| Page | Components / sections touched |
|------|-------------------------------|
| Home (`/`) | Hero, ProofStrip, ProjectsSection, EditorialBreak, WhySection, PrinciplesSection, StudioSection, ApproachSection (preview), PerspectivesTeaser, ContactSection |
| Who We Help (`/who-we-help`) | Intro, ICP, systems environment, trigger moments, anti-fit list, closing, page CTA |
| Services (`/services`) | Intro, 4 services, deliverables, page CTA |
| Approach (`/approach`) | Intro, 4 phases, trust statement, 7-question FAQ, page CTA |
| Team (`/team`) | Intro, "Why This Team Exists" paragraph, governance note, page CTA *(individual member bios stay verbatim — they are real credentials)* |
| Governance (`/governance`) | Intro, framework intro, 5 pillars, "Honest about where we are" block, page CTA |
| Perspectives (`/perspectives`) | Intro, card interaction (strip ghost-link), subscribe bar (remove), CTA section |
| Contact (`/contact`) | Title + description, "Suggested Participants" block. Form fields stay verbatim. |

### In scope — new or rewritten full content

| Page | Action |
|------|--------|
| Responsible AI (`/responsible-ai`) | Write full ~400-word narrative, replace stub. |
| Data Security (`/data-security`) | Write full ~400-word narrative, replace stub. |
| Accessibility (`/accessibility`) | Rewrite to plain-language format per global spec §10. |

### Out of scope

- `/privacy`, `/terms` — unchanged content (global spec §14).
- Team member bios — real, verified credentials; stay verbatim.
- Form field labels on `/contact` — functional, not voice-relevant.
- Site metadata title/description — already compliant.
- Headers, footers, nav — rewritten during shell phase.

---

## 2. Voice sweep rules (applied everywhere in scope)

### 2.1 Phrase bans (from global spec §8)

| Forbidden | Replacement or action |
|-----------|-----------------------|
| *transform, transformation* | cut or → *operate*, *adopt*, *improve* |
| *unlock, unleash* | cut or → *deliver*, *produce* |
| *journey, your journey* | cut or → *process*, *engagement* |
| *future-ready, future-proof* | cut |
| *next-generation, next-gen* | cut (use plain *new* if needed) |
| *seamless, seamlessly* | cut |
| *empower, empowering* | → *enable* |
| *at scale* (without a specific number) | → specific number, or cut |
| *cutting-edge, bleeding-edge* | cut |
| *revolutionize* | cut |

### 2.2 Pattern bans

| Pattern | Example (current site) | Action |
|---------|------------------------|--------|
| **Clever contrast** — dramatic diagnosis → reveal | *"Most firms have tried a pilot… None of it stuck."* | Rewrite (see §3.1). |
| **Origin-myth framing** — *"We exist because…"*, *"Quoin was founded to be…"* | *"Quoin was founded to be the option that does."* | Rewrite to plain claim (see §3.5). |

### 2.3 Style tightening (where we are already rewriting)

- Sentences under 25 words. Break anything longer.
- Contractions fine, but cut *simply*, *really*, *actually*.
- First person plural (*we*), not singular.
- Cut introductory hedges (*In many cases…*, *What we typically find…*).

---

## 3. Surgical rewrites (specific before/after)

Each rewrite lists the exact replacement. All structural positions (section order, headings, etc.) stay.

### 3.1 Hero supporting paragraph (home)

**Location:** `components/hero.tsx`, the paragraph starting "Most firms have tried a pilot…"

**Before:**
> Most firms have tried a pilot, bought a point solution, or commissioned a strategy deck. None of it stuck. We exist because the gap between AI investment and operational adoption requires a different kind of partner. One that stays through implementation and beyond.

**After:**
> Pilots, point solutions, and strategy decks have not moved most firms past the AI-investment stage. The gap between investment and operational adoption takes a partner who stays through implementation, governance, and ongoing operations.

### 3.2 Hero subheading (home)

**Location:** `components/hero.tsx`, paragraph immediately after the H1.

**Before:**
> Quoin prepares your team, data, and governance for AI. We build the AI for your workflows. We run and improve them over time **with you**.

**After:**
> Quoin prepares your team, data, and governance for AI. We build agents for your workflows and operate them alongside you after launch.

### 3.3 Hero stat captions + inline citations (home)

**Location:** `components/hero.tsx`, 3 stat cards on the right side.

| Label | Figure | Caption before | Caption after | Citation |
|-------|--------|----------------|---------------|----------|
| AI Capability | 83% | AI better than experts in their domain | AI outperforms domain experts on specialized tasks | *[industry research, 2025](#)* |
| Industry Gap | 5% | CRE firms achieving AI goals | CRE firms achieving their AI program goals | *[Commercial Observer, 2025](#)* |
| Results In | 8 Wks | make your firm AI native | First production workflow, typical Quoin engagement | *(internal — no external citation)* |

Citation renders in metadata style below each caption (13px, muted, linked). Placeholder `(#)` stays until user drops in real URLs.

### 3.4 Projects section: reassign "How Quoin solves this" on all three patterns

**Location:** `components/projects-section.tsx`.

Current mismatches: Pattern 02's solution text is actually about governance (it belongs on Pattern 03); Pattern 03's solution is actually about long-term operations (it belongs on Pattern 01 alongside integration). Reassign:

| Pattern | Solution text (after) |
|---------|-----------------------|
| 01 — Fragmented Point Solutions | We build agents that plug directly into Yardi, RealPage, AppFolio, and Entrata — your existing stack, not a parallel one. |
| 02 — Strategy Without Implementation | We deliver a build, not a deck. Every diagnostic ends with a prioritized roadmap and an engagement to ship the first workflow, not a handoff to someone else. |
| 03 — No Governance, No Green Light | Every engagement includes fair housing guardrails, data privacy controls, and audit trails from day one — informed by two decades of enterprise governance experience. |

### 3.5 Why Section: remove origin-myth (home)

**Location:** `components/why-section.tsx`, third paragraph.

**Before:**
> Quoin was founded to be the option that does. We embed with your operations team, build AI agents that integrate with your existing systems, apply governance from day one, and stay to manage the infrastructure as a long-term partner.

**After:**
> Quoin is that option. We embed with your operations team, build AI agents that integrate with your existing systems, apply governance from day one, and run the infrastructure as a long-term partner.

### 3.6 Principles Section closing (home)

**Location:** `components/principles-section.tsx`, closing paragraph.

**Before:**
> We are not a better vendor. We are not a better consultant. We are a different model. One that stays through implementation and stays after it.

**After:**
> Quoin is a different model: one that builds, deploys, and runs the AI, then stays to improve it.

### 3.7 Studio Section closing note (home)

**Location:** `components/studio-section.tsx`, final paragraph.

**Before:**
> If the diagnostic reveals that AI is not the right investment for your firm right now, we will tell you. We do not build what should not be built.

**After:**
> If the diagnostic concludes that AI is not the right investment for your firm right now, we will say so. We do not build what should not be built.

### 3.8 Who We Help closing

**Location:** `app/who-we-help/content.tsx`, closing paragraph.

**Before:**
> If this sounds like your firm, the first step is a conversation. If it does not, we respect that, and we are happy to point you toward alternatives that fit better.

**After:**
> If this sounds like your firm, the first step is a conversation. If it does not, we can point you toward alternatives.

### 3.10 Team Page "Why This Team Exists" — break into two paragraphs

**Location:** `app/team/content.tsx`, "Why This Team Exists" block.

**Before:**
> Property management AI requires three things most teams do not have in one place: deep knowledge of how property management operations actually work, the ability to build and deploy production AI systems, and experience designing governance frameworks that satisfy legal, compliance, and regulatory requirements. That is why Jonathan brings 30 years of CRE operating experience, Cynthia brings two decades of enterprise technology governance from the Department of Defense, and the engineering team brings production AI development capability.

**After:**
> Property management AI requires three things most teams do not have in one place: operational knowledge of how property management actually runs, the engineering to build and deploy production AI, and governance experience that satisfies legal, compliance, and regulatory requirements.
>
> Jonathan brings 30 years of CRE operating experience. Cynthia brings two decades of enterprise technology governance from the Department of Defense and Intelligence Community. The engineering team brings production AI development.

### 3.11 Governance "Honest about where we are"

**Location:** `app/governance/content.tsx`, "Our Commitment" block.

**Before:**
> We are a young firm. We do not yet hold SOC 2 or ISO 27001 certifications. What we do hold is a commitment to building governance into every engagement from day one, informed by leadership with decades of experience in enterprise compliance and security. As our practice grows, we will pursue formal certifications. In the meantime, every engagement includes the governance framework described above.

**After:**
> Quoin is a young firm. We do not yet hold SOC 2 or ISO 27001 certifications. We do apply the governance framework above to every engagement, and the framework is informed by senior advisors with decades of enterprise compliance and security experience. We will pursue formal certifications as the firm grows.

---

## 4. Stat citation pattern + universal CTA sweep

### 4.1 Stat citation rendering pattern

Wherever a statistic appears in prose:

```
[figure — accent serif]
[one-line claim — body size]
[source citation — metadata, linked]
```

Concrete example (rendered text):

> **5%**
> CRE firms achieving their AI program goals
> *[Commercial Observer, 2025](#)*

### 4.2 Stats to update site-wide

| Location | Figure | Citation |
|----------|--------|----------|
| Home hero card 1 | 83% | *[industry research, 2025](#)* |
| Home hero card 2 | 5% | *[Commercial Observer, 2025](#)* |
| Home hero card 3 | 8 Wks | *(internal — Quoin engagement model)* |
| Home ProjectsSection closing stat | 5% | *[Commercial Observer, 2025](#)* |
| Home ProjectsSection closing stat | 60%+ | *[World Economic Forum, 2026](#)* |
| Home WhySection opening stat | 5% | *[Commercial Observer, 2025](#)* |
| Perspectives article 1 summary | 95% | *[MIT Media Lab, 2024](#)* (placeholder) |

Citation placeholder `(#)` stays in code until user drops in real source URLs.

### 4.3 CTA label sweep (applied across all in-scope pages)

| Current label | Replacement |
|--------------|-------------|
| Explore Partnership | Talk to us |
| See Where AI Delivers First → | See our services |
| See Full Engagement Details → | Read the approach |
| Meet the Full Team → | See the team |
| Read All Perspectives → | See perspectives |
| Get in Touch → | Talk to us |
| How It Works → | Read the approach |
| Want to continue this conversation? | Want to keep talking? |
| Ready to move forward? | Ready to talk? |
| Learn more | (cut; never use) |
| Discover | (cut; never use) |

### 4.4 Page CTA block headings

| Page | Current heading | Replacement |
|------|----------------|-------------|
| Who We Help | Ready to explore if there is a fit? | Is there a fit? |
| Services | Ready to see what AI can do for your portfolio? | See what AI can do for your portfolio |
| Approach | Ready to see what the diagnostic would reveal for your firm? | What the diagnostic would reveal for your firm |
| Team | You are hiring people, not a brand. | Hiring people, not a brand |
| Governance | Questions about our governance approach? | Questions about the framework? |
| Perspectives | Ready to move forward? | Ready to talk? |

Each block body copy stays (with voice sweep applied). CTA button becomes "Talk to us".

---

## 5. `/responsible-ai` full content

Replaces the current stub. ~400 words. Standard section pattern: eyebrow · H1 · lede · body sections.

**Eyebrow:** Trust & Governance
**H1:** Responsible AI
**Lede:** How Quoin decides what AI to build, how we involve people in the decisions AI touches, and where the lines are between client data and our systems.

**Section: What we will and will not build**

We work on operational AI: leasing triage, maintenance routing, rent-roll reconciliation, document abstraction, tenant communications. We do not build AI that makes final tenant selection decisions, final credit decisions, or any decision that materially affects a household's ability to secure housing. AI assists — a person decides.

**Section: Human-in-the-loop, by default**

Every agent we deploy has a defined scope of autonomy. Routine work (routing a maintenance request by category; drafting a response to a standard inquiry; reconciling a variance within a threshold) can be handled without a human in the path. Anything consequential to a tenant, a vendor, or a lease is routed to a human for confirmation before it acts. The thresholds are set with your operations and compliance teams during the diagnostic, and they are adjustable.

**Section: Model selection and transparency**

We do not train foundation models. We use commercially available models (OpenAI, Anthropic, and selected open-weight models) configured with your data and policies. For every deployment we document: which model powers which workflow, what data it sees, what data it does not, and what happens to that data after the task. You receive the documentation, and it updates when the underlying model or configuration changes.

**Section: Data boundaries**

Your operational data stays within your tenant. We do not use client data to train or improve models. We do not pool data across clients. When a workflow requires an external API call, the request is scoped to the minimum data needed and logged for audit.

**Section: Fair housing and algorithmic bias**

Any agent that touches tenant-facing decisions is designed with fair housing constraints from the first line of code. Pre-deployment bias testing against protected classes is mandatory. Post-deployment monitoring runs continuously. Disparate-impact findings trigger defined remediation, not optional review.

**Section: Ongoing evaluation**

Every deployed agent is evaluated monthly against the metrics set during the diagnostic. Accuracy, coverage, escalation rate, and bias metrics are reported in writing. Degradation triggers retraining or deprecation; we do not run stale agents in production.

**Footer line:** Questions: [ethics@quoinbuildings.com](mailto:ethics@quoinbuildings.com).

---

## 6. `/data-security` full content

Replaces the current stub. ~400 words.

**Eyebrow:** Trust & Governance
**H1:** Data Security
**Lede:** How Quoin handles client data at rest and in transit, who can access it, how we vet the systems that touch it, and what happens if something goes wrong.

**Section: Data handling**

All client data is encrypted at rest with AES-256 and in transit with TLS 1.3. Operational data — tenant records, lease documents, maintenance tickets, financial reports — lives inside client-controlled environments where possible (your Yardi, RealPage, AppFolio, or Entrata instance; your cloud; your database). Where data must move into a Quoin-managed environment for model training or orchestration, it moves through documented, audited pipelines and is retained only for the duration of the engagement plus a defined windback period.

**Section: Access control**

Quoin personnel access client systems only under named, time-bound credentials issued through your identity provider (or ours, when we host the environment). Access is role-based, follows least-privilege by default, and is revoked at engagement end or role change. All access is logged.

No Quoin engineer has standing production access to a live client environment without an open, scoped ticket.

**Section: Vendor review**

Every third-party service that touches client data — model providers (OpenAI, Anthropic), observability tools, orchestration platforms — is reviewed before it enters an engagement. We check data-processing agreements, data-retention policies, sub-processor lists, and geographic processing. The vendor list for each engagement is documented and shared with the client.

**Section: Incident response**

If we detect or are informed of a security incident affecting client data, we notify the client's designated contact within 24 hours of confirmation, regardless of the severity of the incident or whether we believe the notification threshold has been legally triggered. A written post-incident report follows within 10 business days, detailing what happened, what was affected, what we did, and what we are changing.

Clients can report a suspected security issue to [security@quoinbuildings.com](mailto:security@quoinbuildings.com) at any time.

**Section: What this is not**

This page describes our posture. It is not a SOC 2 report, an ISO 27001 certification, or a penetration-test result. Quoin is a young firm and has not yet undergone those audits; we will pursue them as the firm grows. In the meantime, we are transparent about the practices we have in place and happy to walk any prospective client through them in detail.

**Footer line:** Security questions: [security@quoinbuildings.com](mailto:security@quoinbuildings.com).

---

## 7. `/accessibility` rewrite

Replaces the current content with a plain-language version per global spec §10.

**Eyebrow:** Accessibility
**H1:** Accessibility at Quoin
**Lede:** Our target is WCAG 2.2 AA. Here is the current state, the known gaps, and how to tell us about barriers you encounter.

**Section: The standard we target**

We build the Quoin website to conform with Web Content Accessibility Guidelines (WCAG) 2.2 at the AA level, the guidelines published by the W3C for making web content usable by people with visual, auditory, motor, and cognitive disabilities.

**Section: What is in place today**

- Semantic HTML with a logical heading order (one H1 per page, nested H2 / H3).
- Real landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- A skip-to-content link, available as the first focusable element on every page.
- Visible focus indicators on every interactive element (2 px accent outline, 2 px offset).
- Color contrast verified at WCAG AA or better for body text and UI.
- `prefers-reduced-motion` is respected — scroll-entry fade animations are disabled for visitors who request reduced motion.
- Responsive layouts from 320 px through 1440 px; zoom to 200 % supported without loss of content.
- Meaningful images have descriptive `alt` text; decorative images are marked as such.
- Form fields have visible labels (not placeholder-only) and clear validation messages.
- Navigation works end-to-end with a keyboard; no mouse-only interactions.

**Section: Known gaps**

As of April 2026:
- No automated accessibility regression tests in CI yet — we run manual audits with axe DevTools and VoiceOver/NVDA before each deploy.
- Some third-party content (e.g., embedded LinkedIn links) inherits the accessibility posture of the source site, which we do not control.

We update this page when gaps are fixed or new ones are found.

**Section: If you hit a barrier**

Email [accessibility@quoinbuildings.com](mailto:accessibility@quoinbuildings.com). Tell us what you were trying to do and what went wrong — a page URL and a short description are enough. We will acknowledge within two business days and tell you when we expect to have it fixed.

If you need the content of this site in a different format (larger text, plain document, a phone call), ask at the same address.

**Section: How we review**

We audit the site manually at least once per quarter and whenever we ship a significant change to a shared layout, component, or navigation pattern. Results are not published, but we will share audit findings on request.

---

## 8. Perspectives behavior change + Contact page tightening

### 8.1 Perspectives card behavior

**Location:** `app/perspectives/content.tsx`.

Strip ghost-link behavior on each of the 3 article cards:
- Change wrapper from `<a href="#">` to `<div>` (non-clickable).
- Remove `ArrowUpRight` icon from each card.
- Remove `group-hover:text-muted-foreground` / any hover styles that imply clickability.
- Add a small metadata line at bottom of each card: *"Full piece coming soon."* in `text-ink-muted text-[12px]`.

Article content (date, tag, title, summary, author) stays verbatim.

When user drops in real articles later: replace the "Full piece coming soon." line with a real link pointing at `/perspectives/<slug>`, wrap the card back in `<Link href>`, and re-add an arrow affordance.

### 8.2 Perspectives subscribe bar

**Location:** `app/perspectives/content.tsx`, section directly under the page header.

Current: a non-functional email input + Subscribe button.

**Action:** remove the entire subscribe section (both the prompt text and the form).

### 8.3 Contact page tightening

**Location:** `app/contact/content.tsx`.

**Description under title** — before → after:

> Tell us about your firm and your operations. We will respond within one business day. If there is a fit, the typical next step is a scoping conversation for a 2-week Executive Diagnostic.

→

> Tell us about your firm. We respond within one business day. If there is a fit, the next step is a scoping call for a 2-week Executive Diagnostic.

**Suggested Participants block** — before → after:

> The initial conversation works best with the executive sponsor (COO, CEO, or VP Operations). If your CTO or IT lead is involved in the AI question, they are welcome to join. Keep it to 1–3 people. This is a conversation, not a presentation.

→

> The first call works best with the executive sponsor — COO, CEO, or VP Operations. If your CTO or IT lead is part of the AI decision, they are welcome. One to three people; no presentation deck needed.

Success-state message stays verbatim: *"Thank you. We will be in touch within one business day."*

Form fields, field labels, placeholders, and validation stay verbatim.

---

## 9. Implementation boundaries

### 9.1 Files that will be edited

Home components (`components/`):
- `hero.tsx` — §3.1, §3.2, §3.3 (stats with citations), CTA labels
- `proof-strip.tsx` — CTA label sweep (if any)
- `projects-section.tsx` — §3.4 (solution text reassignment), citations on closing stats
- `editorial-break.tsx` — voice sweep only
- `why-section.tsx` — §3.5 (origin myth), citation on opening stat
- `principles-section.tsx` — §3.6 (closing)
- `studio-section.tsx` — §3.7 (closing note), CTA label
- `approach-section.tsx` — CTA label sweep
- `perspectives-teaser.tsx` — CTA label sweep
- `contact-section.tsx` — CTA label sweep

Page content files (`app/*/content.tsx` or `app/*/page.tsx`):
- `app/who-we-help/content.tsx` — §3.9 and voice sweep
- `app/services/content.tsx` — voice sweep + page CTA rewrite
- `app/approach/content.tsx` — voice sweep + page CTA rewrite
- `app/team/content.tsx` — §3.10 and voice sweep (bios stay)
- `app/governance/content.tsx` — §3.11 and voice sweep
- `app/perspectives/content.tsx` — §8.1, §8.2, voice sweep
- `app/contact/content.tsx` — §8.3, voice sweep
- `app/responsible-ai/page.tsx` — full rewrite per §5
- `app/data-security/page.tsx` — full rewrite per §6
- `app/accessibility/content.tsx` — full rewrite per §7

### 9.2 Files NOT touched

- `app/privacy/content.tsx` — unchanged.
- `app/terms/content.tsx` — unchanged.
- `components/navigation.tsx`, `components/footer.tsx` — shell-phase components; no changes.
- `components/ui/*` — no UI component changes.
- Team member bios inside `app/team/content.tsx` — the `team` array with 5 member entries stays verbatim. Only the page-level copy around the array changes.
- Governance pillar bodies inside `app/governance/content.tsx` — the 5 pillar descriptions stay verbatim; only the intro and the "Honest about where we are" paragraph change (§3.11).
- Services description bodies inside `app/services/content.tsx` — the 4 service blocks stay verbatim except for voice-sweep touches; only the CTA changes structurally.
- Approach phase bodies inside `app/approach/content.tsx` — the 4 phase descriptions stay verbatim; only intro and CTA change structurally.

### 9.3 Branch and deploy policy

All work lands on a feature branch (e.g., `feature/content-pass`). Do NOT push to master during implementation. Do NOT run `vercel --prod`. The user reviews locally (via `pnpm dev`) and decides when to merge + deploy.

---

## 10. Success criteria

- No phrase from §2.1's banned list appears in any in-scope page's prose (grep confirms).
- No "clever contrast" or "origin myth" pattern remains (manual inspection of §3 surgeries).
- Every stat in §4.2 has a visible source citation (or is marked as internal).
- Every CTA label in §4.3 has been swept.
- `/responsible-ai`, `/data-security`, `/accessibility` render the new content end-to-end.
- Perspectives cards are not clickable and have no `href="#"` — verified by inspection.
- Perspectives subscribe bar is removed.
- `pnpm build` and `pnpm exec tsc --noEmit` both pass on the feature branch.
- Manual review of every in-scope page at `http://localhost:3000` before any merge or deploy.
