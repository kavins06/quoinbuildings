# Content Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the voice-surgery-plus-tightening content pass to every in-scope page of the Quoin website, and replace the stubs on `/responsible-ai`, `/data-security`, `/accessibility` with full content.

**Architecture:** Next.js 16 App Router. Content lives in page-specific `content.tsx` / `page.tsx` files and in home-page component files under `components/`. This plan is a sequence of surgical edits + one global sweep, landing on a feature branch `feature/content-pass`. The user reviews the branch locally (no push, no deploy) and decides when to merge.

**Tech Stack:** Next.js 16.1.6, React 19, Tailwind CSS 3.4, TypeScript 5.7. No test framework in the repo — verification is `pnpm exec tsc --noEmit` + `pnpm build` + targeted grep + manual review.

**Source spec:** `docs/superpowers/specs/2026-04-21-content-pass-design.md`

**Non-negotiable boundaries:**
- **Do NOT push to origin.** Every task commits locally only. `git push` is explicitly not run.
- **Do NOT merge to master.** The feature branch stays separate until the user approves the full pass.
- **Do NOT run `vercel --prod` or any deploy command.** Nothing goes live during implementation.
- **Do NOT edit Team member bios, Governance pillar bodies, Services description bodies, or Approach phase bodies.** Those stay verbatim per spec §9.2.
- **Do NOT edit `/privacy` or `/terms`.** Out of scope per spec §1.
- **Do NOT edit `components/navigation.tsx`, `components/footer.tsx`, or anything in `components/ui/`.** Those are shell-phase components.

---

## File structure

Files edited by this plan:

**Home-page components (`components/`):**
- `hero.tsx` — Task 2
- `projects-section.tsx` — Task 3
- `why-section.tsx` — Task 4
- `principles-section.tsx` — Task 4
- `studio-section.tsx` — Task 4
- `approach-section.tsx` — Task 6 (CTA label)
- `perspectives-teaser.tsx` — Task 6 (CTA label)
- `contact-section.tsx` — Task 6 (CTA label)
- `proof-strip.tsx` — Task 6 (CTA labels if any)
- `editorial-break.tsx` — Task 6 (voice sweep if anything matches)

**Page content files (`app/`):**
- `app/who-we-help/content.tsx` — Task 5, Task 6
- `app/services/content.tsx` — Task 6
- `app/approach/content.tsx` — Task 6
- `app/team/content.tsx` — Task 5, Task 6
- `app/governance/content.tsx` — Task 5, Task 6
- `app/perspectives/content.tsx` — Task 7
- `app/contact/content.tsx` — Task 8
- `app/responsible-ai/page.tsx` — Task 9 (full rewrite)
- `app/data-security/page.tsx` — Task 10 (full rewrite)
- `app/accessibility/content.tsx` — Task 11 (full rewrite)

**Files explicitly NOT touched:**
- `app/privacy/content.tsx`, `app/terms/content.tsx`
- `components/navigation.tsx`, `components/footer.tsx`, `components/ui/*`
- The `team` array in `app/team/content.tsx` (real member bios)
- The pillar bodies in `app/governance/content.tsx`
- The service description bodies in `app/services/content.tsx`
- The phase bodies in `app/approach/content.tsx`
- The form fields + labels in `app/contact/content.tsx`

---

## Verification model

For each task, verification is:
1. `pnpm exec tsc --noEmit` → exit 0
2. Read the diff you just wrote; confirm it matches the spec
3. (On tasks that touch many files) grep for residual forbidden patterns

The final task runs the full site grep + build + local dev server walk.

---

## Tasks

### Task 1: Create feature branch

**Files:** none.

- [ ] **Step 1: Confirm you are on `master` and working tree has only pre-existing untracked files**

```bash
git status
git branch --show-current
```

Expected: branch is `master`. Working tree may show pre-existing modifications (`.gitignore`, `next-env.d.ts`, `package.json`, `pnpm-lock.yaml`, `vercel.json`) and untracked files (`Headshots/`, `Website-Content-Inventory.md`, `frontend_trust_design_skill.md`). Do not stage or commit these.

- [ ] **Step 2: Create and switch to the feature branch**

```bash
git checkout -b feature/content-pass
```

Expected: `Switched to a new branch 'feature/content-pass'`.

- [ ] **Step 3: Confirm the branch**

```bash
git branch --show-current
```

Expected: `feature/content-pass`.

No commit needed for this task. Subsequent tasks commit to this branch.

---

### Task 2: Hero copy + stat citations (home)

**Files:**
- Modify: `components/hero.tsx`

Implements spec §3.1, §3.2, §3.3.

- [ ] **Step 1: Read the current file**

Use the Read tool on `components/hero.tsx`. Note the current H1 block, the supporting paragraph, and the three stat cards on the right side.

- [ ] **Step 2: Rewrite the hero supporting paragraph (§3.1)**

Find the `<p>` that begins with the string "Most firms have tried a pilot" and replace its children (the paragraph text) with:

```
Pilots, point solutions, and strategy decks have not moved most firms past the AI-investment stage. The gap between investment and operational adoption takes a partner who stays through implementation, governance, and ongoing operations.
```

Keep the surrounding JSX and classNames. Only the text content inside the paragraph changes.

- [ ] **Step 3: Rewrite the hero subheading (§3.2)**

Find the `<p>` that begins with "Quoin prepares your team, data, and governance for AI." and replace its full text with:

```
Quoin prepares your team, data, and governance for AI. We build agents for your workflows and operate them alongside you after launch.
```

Note: the current version includes a `<TextAnimate>`-replaced `<span className="text-accent font-medium">with you</span>` — that span no longer has a reason to exist in the new sentence. Remove that `<span>` along with the surrounding text.

Expected resulting JSX (text-only shape):

```tsx
<p className="mt-8 text-base md:text-lg font-light leading-relaxed text-ink-primary max-w-2xl">
  Quoin prepares your team, data, and governance for AI. We build agents for your workflows and operate them alongside you after launch.
</p>
```

(Do NOT change the className string. Only the children.)

- [ ] **Step 4: Update the three stat cards with new captions and citations (§3.3)**

There are three stat cards on the right of the hero (currently rendering AI Capability / Industry Gap / Results In). For each card, the layout follows this pattern:

```tsx
<p className="... eyebrow...">{eyebrow label}</p>
<p className="... large figure ...">
  <span ...>{figure}</span>{suffix}
</p>
<p className="... caption...">{caption}</p>
```

Replace the caption and add a citation line below each. The citation line uses this exact pattern:

```tsx
<p className="text-[11px] tracking-[0.02em] text-ink-muted mt-1 italic">
  <a href="#" className="underline decoration-accent underline-offset-2">Commercial Observer, 2025</a>
</p>
```

Apply to each card:

**Card 1 — AI Capability (figure: 83%)**
- Caption: `AI outperforms domain experts on specialized tasks`
- Citation link label: `industry research, 2025`

**Card 2 — Industry Gap (figure: 5%)**
- Caption: `CRE firms achieving their AI program goals`
- Citation link label: `Commercial Observer, 2025`

**Card 3 — Results In (figure: 8 Wks)**
- Caption: `First production workflow, typical Quoin engagement`
- No citation — this is Quoin's own engagement model. Do not add a citation line for this card.

For cards 1 and 2, the final JSX of the caption block should read:

```tsx
<p className="text-[10px] lg:text-sm text-ink-primary mt-1">
  AI outperforms domain experts on specialized tasks
</p>
<p className="text-[11px] tracking-[0.02em] text-ink-muted mt-1 italic">
  <a href="#" className="underline decoration-accent underline-offset-2">industry research, 2025</a>
</p>
```

(with the caption + citation text swapped per card).

For card 3, only update the caption text — leave the citation block out.

- [ ] **Step 5: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 6: Commit**

```bash
git add components/hero.tsx
git commit -m "Rewrite hero copy and add stat citations"
```

Do NOT push. Do NOT include Co-Authored-By.

---

### Task 3: Projects section — reassign solutions and add closing citations

**Files:**
- Modify: `components/projects-section.tsx`

Implements spec §3.4 and §4.2 (citations for the closing two stats).

- [ ] **Step 1: Read the current file**

Use the Read tool on `components/projects-section.tsx`. Locate:
- The three pattern objects (titles: "Fragmented Point Solutions", "Strategy Without Implementation", "No Governance, No Green Light").
- The `How Quoin solves this` solution text attached to each pattern.
- The closing statistics block (should contain "5%" and "60%+" figures).

- [ ] **Step 2: Reassign solution text on all three patterns**

Update each pattern's `solution` / "How Quoin solves this" body string to exactly these values:

**Pattern 01 — Fragmented Point Solutions:**
```
We build agents that plug directly into Yardi, RealPage, AppFolio, and Entrata — your existing stack, not a parallel one.
```

**Pattern 02 — Strategy Without Implementation:**
```
We deliver a build, not a deck. Every diagnostic ends with a prioritized roadmap and an engagement to ship the first workflow, not a handoff to someone else.
```

**Pattern 03 — No Governance, No Green Light:**
```
Every engagement includes fair housing guardrails, data privacy controls, and audit trails from day one — informed by two decades of enterprise governance experience.
```

Keep the surrounding JSX and data structure. Only the solution-text strings change.

- [ ] **Step 3: Add inline citations to the two closing stats**

For each of the closing stats (5% and 60%+), add a citation line directly under the stat caption. Use the same citation pattern as in Task 2 Step 4:

```tsx
<p className="text-[11px] tracking-[0.02em] text-ink-muted mt-2 italic">
  <a href="#" className="underline decoration-accent underline-offset-2">Commercial Observer, 2025</a>
</p>
```

Apply:
- Below the "5%" stat ("CRE firms … AI program goals"): citation link label → `Commercial Observer, 2025`
- Below the "60%+" stat ("remain unprepared to scale AI beyond pilot stage"): citation link label → `World Economic Forum, 2026`

If the current code already renders a citation-looking line for one or both stats, replace it with the pattern above. If not, add the `<p>` directly under the caption.

- [ ] **Step 4: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add components/projects-section.tsx
git commit -m "Reassign projects-section pattern solutions and add stat citations"
```

---

### Task 4: Why / Principles / Studio closing surgeries

**Files:**
- Modify: `components/why-section.tsx`
- Modify: `components/principles-section.tsx`
- Modify: `components/studio-section.tsx`

Implements spec §3.5, §3.6, §3.7. Also adds one stat citation in `why-section.tsx` per §4.2.

- [ ] **Step 1: Read all three files**

Use Read on `components/why-section.tsx`, `components/principles-section.tsx`, `components/studio-section.tsx`.

- [ ] **Step 2: Update `why-section.tsx` — remove origin-myth + add citation (§3.5)**

Find the paragraph in `why-section.tsx` that begins with "Quoin was founded to be the option that does." Replace its full text with:

```
Quoin is that option. We embed with your operations team, build AI agents that integrate with your existing systems, apply governance from day one, and run the infrastructure as a long-term partner.
```

Then, find the opening stat block in the same file (should contain "5%" or "Only 5%"). Add a citation line directly below the stat caption using the same pattern as Task 2/3:

```tsx
<p className="text-[11px] tracking-[0.02em] text-ink-muted mt-2 italic">
  <a href="#" className="underline decoration-accent underline-offset-2">Commercial Observer, 2025</a>
</p>
```

If the stat is rendered inline within prose (not as a separate card), place the citation as a parenthetical link instead, following the in-prose pattern:

```tsx
Only <span className="text-accent">5%</span> of commercial real estate firms have achieved their AI program goals (<a href="#" className="underline decoration-accent underline-offset-2">Commercial Observer, 2025</a>).
```

Use whichever pattern fits the surrounding structure.

- [ ] **Step 3: Update `principles-section.tsx` — closing paragraph (§3.6)**

Find the paragraph that begins with "We are not a better vendor." Replace its full text with:

```
Quoin is a different model: one that builds, deploys, and runs the AI, then stays to improve it.
```

- [ ] **Step 4: Update `studio-section.tsx` — closing note (§3.7)**

Find the paragraph that begins with "If the diagnostic reveals that AI is not the right investment" Replace its full text with:

```
If the diagnostic concludes that AI is not the right investment for your firm right now, we will say so. We do not build what should not be built.
```

- [ ] **Step 5: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 6: Commit**

```bash
git add components/why-section.tsx components/principles-section.tsx components/studio-section.tsx
git commit -m "Tighten why, principles, and studio closing paragraphs"
```

---

### Task 5: Page content surgeries (Who We Help, Team, Governance)

**Files:**
- Modify: `app/who-we-help/content.tsx`
- Modify: `app/team/content.tsx`
- Modify: `app/governance/content.tsx`

Implements spec §3.9, §3.10, §3.11.

- [ ] **Step 1: Update `who-we-help/content.tsx` closing (§3.9)**

Find the paragraph that begins "If this sounds like your firm, the first step is a conversation." Replace its full text with:

```
If this sounds like your firm, the first step is a conversation. If it does not, we can point you toward alternatives.
```

- [ ] **Step 2: Update `team/content.tsx` "Why This Team Exists" paragraph (§3.10)**

Find the paragraph that begins "Property management AI requires three things most teams do not have in one place". It is currently one long sentence. Replace with two paragraphs:

```
Property management AI requires three things most teams do not have in one place: operational knowledge of how property management actually runs, the engineering to build and deploy production AI, and governance experience that satisfies legal, compliance, and regulatory requirements.
```

Then a separate `<p>` element with:

```
Jonathan brings 30 years of CRE operating experience. Cynthia brings two decades of enterprise technology governance from the Department of Defense and Intelligence Community. The engineering team brings production AI development.
```

Keep the surrounding JSX structure; split the existing single paragraph into two paragraphs at the point indicated.

- [ ] **Step 3: Update `governance/content.tsx` "Honest about where we are" (§3.11)**

Find the paragraph that begins "We are a young firm. We do not yet hold SOC 2 or ISO 27001 certifications." Replace its full text with:

```
Quoin is a young firm. We do not yet hold SOC 2 or ISO 27001 certifications. We do apply the governance framework above to every engagement, and the framework is informed by senior advisors with decades of enterprise compliance and security experience. We will pursue formal certifications as the firm grows.
```

- [ ] **Step 4: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add app/who-we-help/content.tsx app/team/content.tsx app/governance/content.tsx
git commit -m "Tighten closing copy on who-we-help, team, and governance pages"
```

---

### Task 6: Global sweep — forbidden phrases + CTA labels + page CTA block headings

**Files:** every in-scope page. Specifically, sweep across `app/**/content.tsx`, `app/**/page.tsx`, and `components/*.tsx` (excluding `components/ui/*`, `components/navigation.tsx`, `components/footer.tsx`).

Implements spec §2.1 (phrase bans), §4.3 (CTA labels), §4.4 (page CTA block headings).

- [ ] **Step 1: Initial grep for forbidden phrases**

Use the Grep tool with this pattern across `app/` and `components/`:

Pattern:
```
\b(transform|transformation|unlock|unleash|journey|future-ready|future-proof|next-generation|next-gen|seamless|seamlessly|empower|empowering|cutting-edge|bleeding-edge|revolutionize|revolutionizing)\b
```

Record which files have matches. The phrase may appear with capitalization; also search for capitalized first letters (e.g., `Transform`). Use the regex flag for case-insensitive matching, or run a second grep.

Also run a case-sensitive grep for `at scale` — flag matches for judgment.

- [ ] **Step 2: Apply phrase-ban substitutions per §2.1**

For each matching file, open it, apply these substitutions based on context:

| Find | Context-dependent action |
|------|---------------------------|
| `transform`, `transformation` | cut the sentence fragment if decorative; else replace with `operate` / `adopt` / `improve` |
| `unlock`, `unleash` | replace with `deliver` / `produce` |
| `journey`, `your journey` | cut, or replace with `process` / `engagement` |
| `future-ready`, `future-proof` | cut |
| `next-generation`, `next-gen` | cut or replace with `new` |
| `seamless`, `seamlessly` | cut |
| `empower`, `empowering` | replace with `enable` |
| `at scale` (no nearby number) | cut or make specific with a number |
| `cutting-edge`, `bleeding-edge` | cut |
| `revolutionize`, `revolutionizing` | cut |

Preserve sentence grammar. If cutting leaves a broken sentence, rewrite the sentence to restore flow, keeping the original meaning and the spec's voice (calm, precise, evidence-oriented, under 25 words per sentence).

- [ ] **Step 3: Initial grep for legacy CTA labels**

Pattern to grep across `app/` and `components/` (excluding `components/ui/*`, `components/navigation.tsx`, `components/footer.tsx`):

```
Explore Partnership|See Where AI Delivers First|See Full Engagement Details|Meet the Full Team|Read All Perspectives|Get in Touch|How It Works|Want to continue this conversation|Ready to move forward|Learn more|Discover|Get started
```

Record matches.

- [ ] **Step 4: Apply CTA label substitutions per §4.3**

For each match, apply per this table:

| Find | Replace with |
|------|--------------|
| `Explore Partnership` | `Talk to us` |
| `See Where AI Delivers First →` or `See Where AI Delivers First` | `See our services` |
| `See Full Engagement Details →` or `See Full Engagement Details` | `Read the approach` |
| `Meet the Full Team →` or `Meet the Full Team` | `See the team` |
| `Read All Perspectives →` or `Read All Perspectives` | `See perspectives` |
| `Get in Touch →` or `Get in Touch` | `Talk to us` |
| `How It Works →` or `How It Works` | `Read the approach` |
| `Want to continue this conversation?` | `Want to keep talking?` |
| `Ready to move forward?` | `Ready to talk?` |
| `Learn more` | cut or replace with the specific verb+object that the link actually does (e.g., `See the team` if it links to /team) |
| `Discover` | same as `Learn more` — cut or specific verb |
| `Get started` | `Talk to us` |

Note: `Who We Help →` and `Our Approach →` are page names used as navigation, not CTAs. Keep those unchanged.

For trailing `→` arrow characters, preserve the arrow if it was already there; the arrow is fine as a directional affordance. If the arrow was part of a separate `<span>` or glyph, leave that element in place.

- [ ] **Step 5: Apply page CTA block heading rewrites per §4.4**

For each of these six pages, locate the page CTA block heading (usually at the bottom of the `content.tsx` file, inside a block styled as a final CTA card) and replace:

| Page | File | Current heading | Replacement |
|------|------|-----------------|-------------|
| Who We Help | `app/who-we-help/content.tsx` | `Ready to explore if there is a fit?` | `Is there a fit?` |
| Services | `app/services/content.tsx` | `Ready to see what AI can do for your portfolio?` | `See what AI can do for your portfolio` |
| Approach | `app/approach/content.tsx` | `Ready to see what the diagnostic would reveal for your firm?` | `What the diagnostic would reveal for your firm` |
| Team | `app/team/content.tsx` | `You are hiring people, not a brand.` | `Hiring people, not a brand` |
| Governance | `app/governance/content.tsx` | `Questions about our governance approach?` | `Questions about the framework?` |
| Perspectives | `app/perspectives/content.tsx` | `Ready to move forward?` | `Ready to talk?` *(also covered by Step 4; make sure both land)* |

Keep each block's body copy and CTA button structure. CTA button label was already changed to `Talk to us` in Step 4.

- [ ] **Step 6: Re-grep to confirm zero hits**

Repeat Step 1 grep and Step 3 grep. Expected: zero hits in either (excluding `components/ui/*`, `components/navigation.tsx`, `components/footer.tsx`, and excluding the plan/spec docs under `docs/`).

- [ ] **Step 7: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 8: Commit**

```bash
git add app components
git commit -m "Sweep forbidden phrases, CTA labels, and page CTA headings"
```

---

### Task 7: Perspectives — strip ghost links and remove subscribe bar

**Files:**
- Modify: `app/perspectives/content.tsx`

Implements spec §8.1 and §8.2.

- [ ] **Step 1: Read the current file**

Use the Read tool on `app/perspectives/content.tsx`. Note the `ArticleCard` function, the subscribe section directly under the `PageHeader`, and the `ArrowUpRight` import.

- [ ] **Step 2: Strip ghost-link behavior on each article card (§8.1)**

Locate the `ArticleCard` function. It currently wraps each card in `<a href="#" className="group block py-12 ...">` and includes an `<ArrowUpRight />` icon.

Replace the wrapping `<a>` with a `<div>` (non-clickable):

```tsx
function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={index * 0.1}>
      <div className="block py-12 md:py-16 border-b border-subtle last:border-b-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.15em] text-ink-muted tabular-nums">
              {article.date}
            </p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-accent mt-2">
              {article.tag}
            </p>
          </div>

          <div className="lg:col-span-9 lg:col-start-4">
            <div>
              <h2 className="text-xl md:text-2xl font-normal tracking-tight text-ink-primary mb-4">
                {article.title}
              </h2>
              <p className="text-sm leading-[1.75] text-ink-secondary max-w-2xl">
                {article.summary}
              </p>
              <p className="text-[11px] tracking-[0.15em] text-ink-muted mt-4">
                By {article.author}
              </p>
              <p className="text-[12px] text-ink-muted mt-2 italic">
                Full piece coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}
```

Key changes from current:
- `<a href="#">` → `<div>`
- Remove `group-hover:text-muted-foreground` and `group` class (no hover affordance).
- Remove the `<div className="flex items-start justify-between gap-6">` wrapper that held the `ArrowUpRight` icon on the right; collapse to a single inner `<div>` holding the text content.
- Remove the `<ArrowUpRight />` element entirely.
- Replace legacy token classes on the inner elements with new-system tokens: `text-muted-foreground/50` → `text-ink-muted`, `text-accent/70` → `text-accent`, `text-foreground` → `text-ink-primary`, `text-muted-foreground` → `text-ink-secondary`, `text-muted-foreground/40` → `text-ink-muted`, `border-border` → `border-subtle`.
- Add the new `<p>` with "Full piece coming soon." at the bottom of the inner text block.

- [ ] **Step 3: Remove the `ArrowUpRight` import if unused**

After Step 2, grep `ArrowUpRight` in the file. If there are zero remaining usages, remove the import line at the top:

```tsx
import { ArrowUpRight } from "lucide-react"
```

If `ArrowUpRight` is still used elsewhere in this file (e.g., in the final CTA section), leave the import.

**Note on the 95% statistic in article 1's summary:** the spec §4.2 lists the 95% figure (in the phrase "The 95% failure rate for AI pilots is well documented") as a candidate for inline citation. Since the article itself is not yet published (user will drop in real article bodies later) and the summary is a teaser, leave the summary text unchanged. The citation treatment will land with the full article body, not with the summary card. No change needed for this stat in Task 7.

- [ ] **Step 4: Remove the subscribe bar (§8.2)**

Locate the `<section>` directly under the `PageHeader` that contains the text "Get future perspectives by email." and the `<input type="email" ...>` + `<button>Subscribe</button>`. Delete the entire `<section>` element, including its children.

- [ ] **Step 5: Verify typecheck and build**

```bash
pnpm exec tsc --noEmit
pnpm build
```

Expected: both pass. Build warnings OK; errors not.

- [ ] **Step 6: Commit**

```bash
git add app/perspectives/content.tsx
git commit -m "Strip ghost article links and remove non-functional subscribe bar"
```

---

### Task 8: Contact page tightening

**Files:**
- Modify: `app/contact/content.tsx`

Implements spec §8.3.

- [ ] **Step 1: Read the current file**

Use the Read tool on `app/contact/content.tsx`. Locate the description directly under the page title, and the "Suggested Participants" block.

- [ ] **Step 2: Rewrite the description under the title**

Find the paragraph beginning "Tell us about your firm and your operations." Replace its full text with:

```
Tell us about your firm. We respond within one business day. If there is a fit, the next step is a scoping call for a 2-week Executive Diagnostic.
```

- [ ] **Step 3: Rewrite the "Suggested Participants" block**

Find the paragraph beginning "The initial conversation works best with the executive sponsor". Replace its full text with:

```
The first call works best with the executive sponsor — COO, CEO, or VP Operations. If your CTO or IT lead is part of the AI decision, they are welcome. One to three people; no presentation deck needed.
```

- [ ] **Step 4: Leave form fields, labels, placeholders, validation, and the success-state message unchanged**

Do NOT edit: form field labels, form field placeholders, validation messages, the "Thank you. We will be in touch within one business day." success-state text.

- [ ] **Step 5: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 6: Commit**

```bash
git add app/contact/content.tsx
git commit -m "Tighten contact page description and participants block"
```

---

### Task 9: Rewrite `/responsible-ai`

**Files:**
- Modify: `app/responsible-ai/page.tsx`

Replaces the current stub with the full content from spec §5.

- [ ] **Step 1: Overwrite the file**

Use the Write tool to replace `app/responsible-ai/page.tsx` with this exact content:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsible AI | Quoin",
  description: "How Quoin decides what AI to build and deploy, with human-in-the-loop expectations and data boundaries.",
}

export default function ResponsibleAIPage() {
  return (
    <article className="container-shell py-24 lg:py-32">
      <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
        Trust &amp; Governance
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
        Responsible AI
      </h1>
      <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
        How Quoin decides what AI to build, how we involve people in the decisions AI touches, and where the lines are between client data and our systems.
      </p>

      <section className="mt-16 measure">
        <h2 className="font-serif text-2xl text-ink-primary">What we will and will not build</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          We work on operational AI: leasing triage, maintenance routing, rent-roll reconciliation, document abstraction, tenant communications. We do not build AI that makes final tenant selection decisions, final credit decisions, or any decision that materially affects a household&apos;s ability to secure housing. AI assists — a person decides.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Human-in-the-loop, by default</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Every agent we deploy has a defined scope of autonomy. Routine work (routing a maintenance request by category; drafting a response to a standard inquiry; reconciling a variance within a threshold) can be handled without a human in the path. Anything consequential to a tenant, a vendor, or a lease is routed to a human for confirmation before it acts. The thresholds are set with your operations and compliance teams during the diagnostic, and they are adjustable.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Model selection and transparency</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          We do not train foundation models. We use commercially available models (OpenAI, Anthropic, and selected open-weight models) configured with your data and policies. For every deployment we document: which model powers which workflow, what data it sees, what data it does not, and what happens to that data after the task. You receive the documentation, and it updates when the underlying model or configuration changes.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Data boundaries</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Your operational data stays within your tenant. We do not use client data to train or improve models. We do not pool data across clients. When a workflow requires an external API call, the request is scoped to the minimum data needed and logged for audit.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Fair housing and algorithmic bias</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Any agent that touches tenant-facing decisions is designed with fair housing constraints from the first line of code. Pre-deployment bias testing against protected classes is mandatory. Post-deployment monitoring runs continuously. Disparate-impact findings trigger defined remediation, not optional review.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Ongoing evaluation</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Every deployed agent is evaluated monthly against the metrics set during the diagnostic. Accuracy, coverage, escalation rate, and bias metrics are reported in writing. Degradation triggers retraining or deprecation; we do not run stale agents in production.
        </p>
      </section>

      <p className="text-sm text-ink-muted mt-16">
        Questions: <a className="underline decoration-accent underline-offset-4" href="mailto:ethics@quoinbuildings.com">ethics@quoinbuildings.com</a>
      </p>
    </article>
  )
}
```

- [ ] **Step 2: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add app/responsible-ai/page.tsx
git commit -m "Write full /responsible-ai content"
```

---

### Task 10: Rewrite `/data-security`

**Files:**
- Modify: `app/data-security/page.tsx`

Replaces the current stub with the full content from spec §6.

- [ ] **Step 1: Overwrite the file**

Use the Write tool to replace `app/data-security/page.tsx` with:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Security | Quoin",
  description: "Quoin's data-handling posture: access control, vendor review, incident response.",
}

export default function DataSecurityPage() {
  return (
    <article className="container-shell py-24 lg:py-32">
      <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
        Trust &amp; Governance
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
        Data Security
      </h1>
      <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
        How Quoin handles client data at rest and in transit, who can access it, how we vet the systems that touch it, and what happens if something goes wrong.
      </p>

      <section className="mt-16 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Data handling</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          All client data is encrypted at rest with AES-256 and in transit with TLS 1.3. Operational data — tenant records, lease documents, maintenance tickets, financial reports — lives inside client-controlled environments where possible (your Yardi, RealPage, AppFolio, or Entrata instance; your cloud; your database). Where data must move into a Quoin-managed environment for model training or orchestration, it moves through documented, audited pipelines and is retained only for the duration of the engagement plus a defined windback period.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Access control</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Quoin personnel access client systems only under named, time-bound credentials issued through your identity provider (or ours, when we host the environment). Access is role-based, follows least-privilege by default, and is revoked at engagement end or role change. All access is logged.
        </p>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          No Quoin engineer has standing production access to a live client environment without an open, scoped ticket.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Vendor review</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Every third-party service that touches client data — model providers (OpenAI, Anthropic), observability tools, orchestration platforms — is reviewed before it enters an engagement. We check data-processing agreements, data-retention policies, sub-processor lists, and geographic processing. The vendor list for each engagement is documented and shared with the client.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">Incident response</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          If we detect or are informed of a security incident affecting client data, we notify the client&apos;s designated contact within 24 hours of confirmation, regardless of the severity of the incident or whether we believe the notification threshold has been legally triggered. A written post-incident report follows within 10 business days, detailing what happened, what was affected, what we did, and what we are changing.
        </p>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Clients can report a suspected security issue to <a className="underline decoration-accent underline-offset-4" href="mailto:security@quoinbuildings.com">security@quoinbuildings.com</a> at any time.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="font-serif text-2xl text-ink-primary">What this is not</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          This page describes our posture. It is not a SOC 2 report, an ISO 27001 certification, or a penetration-test result. Quoin is a young firm and has not yet undergone those audits; we will pursue them as the firm grows. In the meantime, we are transparent about the practices we have in place and happy to walk any prospective client through them in detail.
        </p>
      </section>

      <p className="text-sm text-ink-muted mt-16">
        Security questions: <a className="underline decoration-accent underline-offset-4" href="mailto:security@quoinbuildings.com">security@quoinbuildings.com</a>
      </p>
    </article>
  )
}
```

- [ ] **Step 2: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add app/data-security/page.tsx
git commit -m "Write full /data-security content"
```

---

### Task 11: Rewrite `/accessibility`

**Files:**
- Modify: `app/accessibility/content.tsx`

Replaces the current content with the plain-language version from spec §7.

- [ ] **Step 1: Overwrite the file**

The current file uses a `PageHeader` + a `sections` array mapped through `BlurFade` into section blocks. The rewrite replaces the whole structure with a plain article. PageHeader is dropped because the new content opens with its own eyebrow + H1 + lede (matches the format used for `/responsible-ai` and `/data-security`).

Use the Write tool to overwrite `app/accessibility/content.tsx` with exactly this content:

```tsx
export function AccessibilityContent() {
  return (
    <main>
      <article className="container-shell py-24 lg:py-32">
        <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
          Accessibility
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
          Accessibility at Quoin
        </h1>
        <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
          Our target is WCAG 2.2 AA. Here is the current state, the known gaps, and how to tell us about barriers you encounter.
        </p>

        <section className="mt-16 measure">
          <h2 className="font-serif text-2xl text-ink-primary">The standard we target</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            We build the Quoin website to conform with Web Content Accessibility Guidelines (WCAG) 2.2 at the AA level, the guidelines published by the W3C for making web content usable by people with visual, auditory, motor, and cognitive disabilities.
          </p>
        </section>

        <section className="mt-12 measure">
          <h2 className="font-serif text-2xl text-ink-primary">What is in place today</h2>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base text-ink-secondary leading-relaxed">
            <li>Semantic HTML with a logical heading order (one H1 per page, nested H2 / H3).</li>
            <li>Real landmarks: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.</li>
            <li>A skip-to-content link, available as the first focusable element on every page.</li>
            <li>Visible focus indicators on every interactive element (2 px accent outline, 2 px offset).</li>
            <li>Color contrast verified at WCAG AA or better for body text and UI.</li>
            <li><code>prefers-reduced-motion</code> is respected — scroll-entry fade animations are disabled for visitors who request reduced motion.</li>
            <li>Responsive layouts from 320 px through 1440 px; zoom to 200&nbsp;% supported without loss of content.</li>
            <li>Meaningful images have descriptive <code>alt</code> text; decorative images are marked as such.</li>
            <li>Form fields have visible labels (not placeholder-only) and clear validation messages.</li>
            <li>Navigation works end-to-end with a keyboard; no mouse-only interactions.</li>
          </ul>
        </section>

        <section className="mt-12 measure">
          <h2 className="font-serif text-2xl text-ink-primary">Known gaps</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">As of April 2026:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base text-ink-secondary leading-relaxed">
            <li>No automated accessibility regression tests in CI yet — we run manual audits with axe DevTools and VoiceOver/NVDA before each deploy.</li>
            <li>Some third-party content (e.g., embedded LinkedIn links) inherits the accessibility posture of the source site, which we do not control.</li>
          </ul>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            We update this page when gaps are fixed or new ones are found.
          </p>
        </section>

        <section className="mt-12 measure">
          <h2 className="font-serif text-2xl text-ink-primary">If you hit a barrier</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            Email <a className="underline decoration-accent underline-offset-4" href="mailto:accessibility@quoinbuildings.com">accessibility@quoinbuildings.com</a>. Tell us what you were trying to do and what went wrong — a page URL and a short description are enough. We will acknowledge within two business days and tell you when we expect to have it fixed.
          </p>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            If you need the content of this site in a different format (larger text, plain document, a phone call), ask at the same address.
          </p>
        </section>

        <section className="mt-12 measure">
          <h2 className="font-serif text-2xl text-ink-primary">How we review</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            We audit the site manually at least once per quarter and whenever we ship a significant change to a shared layout, component, or navigation pattern. Results are not published, but we will share audit findings on request.
          </p>
        </section>
      </article>
    </main>
  )
}
```

Note what this removes:
- The `"use client"` directive (no client hooks needed for static content).
- The `PageHeader` import and its usage.
- The `BlurFade` import and its usage.
- The `sections` data array.

If `app/accessibility/page.tsx` imports from `./content` expecting `AccessibilityContent` as a named export, that still works — the export name is preserved.

- [ ] **Step 3: Verify typecheck and build**

```bash
pnpm exec tsc --noEmit
pnpm build
```

Expected: both pass.

- [ ] **Step 4: Commit**

```bash
git add app/accessibility/content.tsx
git commit -m "Rewrite /accessibility to plain-language format"
```

---

### Task 12: Final verification (local-only)

**Files:** none.

This task runs final checks. It does NOT push, NOT merge, NOT deploy.

- [ ] **Step 1: Comprehensive grep for banned phrases**

Pattern (across `app/` and `components/`, excluding `components/ui/*`, `components/navigation.tsx`, `components/footer.tsx`):

Case-insensitive grep for:
```
transform|transformation|unlock|unleash|journey|future-ready|future-proof|next-generation|next-gen|seamless|seamlessly|empower|empowering|cutting-edge|bleeding-edge|revolutionize|revolutionizing
```

Expected: zero hits. If any remain, they slipped through Task 6 — open the offending file, apply the substitution, commit with `-m "Mop up missed forbidden phrase in <file>"`, then re-run the grep.

Case-sensitive grep for:
```
Explore Partnership|See Where AI Delivers First|See Full Engagement Details|Meet the Full Team|Read All Perspectives|Get in Touch
```

Expected: zero hits. Same mop-up pattern if any remain.

Case-sensitive grep for:
```
href="#"
```

Expected: zero hits in `app/perspectives/content.tsx`. Other files may have legitimate `href="#"` but perspectives must not.

- [ ] **Step 2: Typecheck + build**

```bash
pnpm exec tsc --noEmit
pnpm build
```

Expected: both pass cleanly. If build fails, diagnose the failing file, fix, commit, re-run.

- [ ] **Step 3: Start the dev server**

```bash
pnpm dev
```

Run in the background. Expected output contains `Ready in NNNms` and `Local:        http://localhost:3000`.

- [ ] **Step 4: Manual review checklist (user performs this; plan documents the checks)**

User walks through these URLs at `http://localhost:3000`:

- `/` — hero reads with the new headline + tightened paragraph; stat cards show figures with italic citations below (except card 3); no "Explore Partnership" anywhere.
- `/who-we-help` — closing paragraph is the shortened version; page CTA block heading reads "Is there a fit?"; CTA button is "Talk to us".
- `/services` — each service block body unchanged; page CTA heading reads "See what AI can do for your portfolio".
- `/approach` — intro + phase bodies largely unchanged; page CTA heading reads "What the diagnostic would reveal for your firm".
- `/team` — "Why This Team Exists" reads as two paragraphs; member bios unchanged; CTA heading reads "Hiring people, not a brand".
- `/perspectives` — no subscribe bar under the header; 3 article cards render as non-clickable summaries with "Full piece coming soon." line; CTA heading reads "Ready to talk?".
- `/governance` — "Honest about where we are" uses the tightened three-sentence version; pillar bodies unchanged.
- `/responsible-ai` — 6 sections of full content: *What we will and will not build*, *Human-in-the-loop*, *Model selection*, *Data boundaries*, *Fair housing*, *Ongoing evaluation* + ethics mailto at bottom.
- `/data-security` — 5 sections of full content: *Data handling*, *Access control*, *Vendor review*, *Incident response*, *What this is not* + security mailto at bottom.
- `/accessibility` — plain-language structure: *Standard we target*, *What is in place today* (bulleted), *Known gaps* (bulleted), *If you hit a barrier*, *How we review*. No "committed to ensuring" boilerplate.
- `/contact` — tightened description under the title; "Suggested Participants" block reads as the shortened version; form fields unchanged.
- `/privacy` and `/terms` — load successfully, content unchanged (spec requirement).

- [ ] **Step 5: Stop the dev server**

If started in background, stop it. Otherwise Ctrl-C in the dev server terminal.

- [ ] **Step 6: Do NOT push, NOT merge, NOT deploy**

Confirm no `git push` has been run. Confirm `vercel --prod` has not been run. The branch `feature/content-pass` stays local until the user explicitly says "merge and deploy."

- [ ] **Step 7: Report completion**

Summarize to the user:
- Branch `feature/content-pass` has N commits (count them with `git log master..feature/content-pass --oneline | wc -l`).
- All 11 in-scope pages have been edited.
- Dev server verified typecheck + build.
- Awaiting user review.

Do NOT run a final `vercel --prod` under any circumstance in this task.
