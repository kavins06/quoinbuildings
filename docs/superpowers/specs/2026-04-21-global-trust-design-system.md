# Global Trust Design System

**Date:** 2026-04-21
**Scope:** Cross-cutting design system for the Quoin website. Establishes color, typography, layout, motion, navigation, footer, copy voice, component language, and accessibility baseline. All subsequent per-page specs inherit from this document.
**Source skill:** `frontend_trust_design_skill.md` (trust-first professional services).
**Direction selected:** B — conservative professional-services aesthetic (Accenture/boutique-advisory register, not editorial studio).
**Proof posture:** no case studies available. Trust anchors are credentialed team (DoD / ODNI / BAE / CGI Federal / GMF backgrounds), sourced industry stats with inline citations, published methodology, and governance posture.

---

## 1. Purpose and non-goals

### Purpose
Align the Quoin site with the four trust claims the skill is designed to produce:
1. Quoin is legitimate.
2. Quoin is competent.
3. Quoin is accountable.
4. Quoin is easy to engage.

### Non-goals
- Rebuilding the site from scratch. The page inventory (who-we-help, services, approach, team, perspectives, contact, governance, privacy, terms, accessibility) stays.
- Preserving the current dark/editorial visual identity. It is explicitly being retired.
- Adding case studies. None exist; the design does not depend on them.
- Building a client portal, a search feature, a language selector, or a location selector — none apply today.

---

## 2. Color system

### Surfaces
| Token | Value | Use |
|-------|-------|-----|
| `--surface-base` | `#F7F4EE` | Default page background (warm paper). |
| `--surface-raised` | `#FFFFFF` | Cards, elevated panels. |
| `--surface-sunken` | `#EFEAE1` | Section differentiation (proof strip, footer). |
| `--surface-inverse` | `#1A1A1A` | Reserved for at most ONE emphasis band per page. Not the hero. |

### Text
| Token | Value | Use |
|-------|-------|-----|
| `--text-primary` | `#1A1A1A` | Body and headings. |
| `--text-secondary` | `#4A4A4A` | Metadata, captions. |
| `--text-muted` | `#7A7A7A` | Fine print, timestamps. |

### Accent
| Token | Value | Use |
|-------|-------|-----|
| `--accent` | `#A8804A` | Muted gold. Replaces current `#D4A574`. Passes WCAG AA on paper surface (~4.9:1). |

**Allowed accent uses:** inline link underlines, single highlight on key stat figures, primary CTA border, eyebrow labels, section dividers.
**Disallowed accent uses:** large headline color, decorative fills, icon washes, backgrounds.

### Borders
| Token | Value | Use |
|-------|-------|-----|
| `--border-subtle` | `#E4DFD4` | Hairline on paper. |
| `--border-strong` | `#1A1A1A` | CTA borders, emphasis framing only. |

### Hard rules
- **Large accent emphasis** (stat figures, primary CTA border, inverse-band highlights) appears at most once per visible viewport.
- **Small accent marks** (eyebrow labels, inline link underlines, section hairlines) are not constrained by the one-per-viewport rule, but must remain small and functional — never decorative.
- No gradients. No glows. No color washes.
- `--surface-inverse` appears at most once per page.

---

## 3. Typography

### Families
- **Display (headings):** Source Serif 4 (Google Fonts). Fallback stack: `"Source Serif 4", "Source Serif Pro", Georgia, serif`.
- **Body & UI:** Inter (Google Fonts). Fallback: `Inter, system-ui, -apple-system, "Segoe UI", sans-serif`.
- **Mono (small data labels only):** `ui-monospace, SFMono-Regular, Menlo, monospace`.

### Scale (desktop; mobile scales down ~15%)

| Role | Size | Weight | Tracking | Leading |
|------|------|--------|----------|---------|
| H1 (hero) | 48–64 px | 400 (serif) | -0.01em | 1.1 |
| H2 (section) | 32–40 px | 400 (serif) | -0.005em | 1.15 |
| H3 (sub) | 22–26 px | 500 (sans) | 0 | 1.25 |
| Eyebrow | 12 px | 600 (sans) | +0.14em uppercase | 1.3 |
| Body L | 18 px | 400 (sans) | 0 | 1.55 |
| Body M | 16 px | 400 (sans) | 0 | 1.55 |
| Metadata | 13 px | 500 (sans) | +0.02em | 1.4 |

### Rules
- Headings are serif, never colored with accent.
- No all-caps headlines. Eyebrows only.
- Measure capped at 68 characters on body.
- No `font-extralight`, no `font-thin`. Regular (400) is the minimum display weight.
- Italics allowed on a single word in H1/H2 for emphasis; no italic paragraphs.

### What this retires
- `font-extralight` on hero (currently 100 weight).
- `clamp(2.25rem, 6vw, 5.5rem)` oversize hero — caps at 64 px.
- All `WordRotate` animated gold headlines (replaced by single static H1).

---

## 4. Layout and grid

### Container
- Max content width: **1280 px**, centered.
- Gutter: 80 px desktop, 24 px mobile.
- No full-bleed sections except the footer and (at most) one inverse-surface emphasis band.

### Grid
- 12 columns on desktop (≥1024 px), 8 px column gutter, 24 px row gutter.
- 6 columns on tablet (768–1023 px).
- Single column on mobile (<768 px).

### Vertical rhythm
| Spacing | Desktop | Mobile |
|---------|---------|--------|
| Section padding (top & bottom) | 96 px | 64 px |
| Heading → body | 24 px | 24 px |
| Paragraph → paragraph | 16 px | 16 px |
| Group → group | 48 px | 32 px |

No parallax. No sticky elements except the header nav.

### Section pattern (non-negotiable, applied on every page)

Every section follows the same internal structure, in order:

1. **Eyebrow** (12 px, accent, uppercase) — one or two words naming the section.
2. **Section heading** (H2 serif) — single sentence or phrase.
3. **Lede** (Body L, max 2 lines) — one sentence of framing.
4. **Body content** — grid, cards, prose, stats, or table.

Predictability is the point. Pages that need to break this pattern must justify it in their per-page spec.

### Cards
- Surface: `--surface-raised` on paper background, or `--surface-base` on sunken background.
- Padding: 32 px desktop, 24 px mobile.
- Equal heights within a grid row.
- Hairline border (`--border-subtle`), no shadow.
- Corner radius: 2 px (near-square).
- One CTA per card max.

### What this retires
- `min-h-screen` hero treatment.
- `rounded-xl`, `rounded-2xl`, and larger radii.
- `backdrop-blur` glass cards.

---

## 5. Motion rules

### Allowed
- **Scroll-triggered fade + 8 px rise**, once, on section entry. Duration 400 ms, ease-out. No chaining, no stagger beyond two adjacent cards.
- **Hover**: underline appears on links; CTA borders shift from `--border-subtle` to `--border-strong`. 150 ms.
- **Focus**: visible 2 px accent outline, 2 px offset (see §9).

### Disallowed
- Particles, starfields, ambient background motion.
- `BorderBeam`, shimmer sweeps, glow pulses.
- `WordRotate`, cycling words, typewriter effects.
- `TextAnimate` character-by-character reveals.
- `ShimmerButton`.
- `NumberTicker` counting animations. Stats render as final value on mount.
- Parallax, scroll-linked scaling, mouse-follow effects.
- Autoplay video, carousels of any kind.

### Components being removed from the codebase
- `components/ui/particles.tsx`
- `components/ui/border-beam.tsx`
- `components/ui/word-rotate.tsx`
- `components/ui/text-animate.tsx`
- `components/ui/shimmer-button.tsx`
- `components/ui/number-ticker.tsx`

`BlurFade` stays but is reconfigured to a single variant (8 px rise, 400 ms, no chained `delay` prop). All existing usages lose their staggered delays.

### Principle
Motion exists only to confirm intentional entry. It never draws the eye on its own.

---

## 6. Navigation and header

### Structure
- **Left:** QUOIN wordmark (serif, charcoal). The current cube glyph is removed from the header.
- **Center/right (main nav):** Who We Help · Services · Approach · Team · Perspectives
- **Right (utility zone):** Contact (plain nav link) · **Talk to us** (bordered CTA)

### Label changes from current state
- CTA label: "Explore Partnership" → **"Talk to us"** (specific, low-friction; "Explore Partnership" matches the skill's vague-CTA anti-pattern).
- Contact moves into the main nav as a plain link (in addition to the CTA).

### Visual treatment
- Header height: 72 px desktop, 60 px mobile.
- Background: `--surface-base` (paper). 1 px `--border-subtle` bottom border appears when scrolled past 24 px. No blur, no translucency.
- Main nav links: 14 px sans, `--text-secondary`. Hover → `--text-primary` with accent underline.
- CTA: 1 px `--border-strong`, no fill, no shimmer. Hover → fills with `--surface-inverse`, text becomes paper.

### Mobile
- Hamburger button → full-screen paper-colored overlay (no dark).
- Links stack, 24 px tap targets.
- Hamburger is a real `<button aria-expanded aria-controls>`.

### Utility items deferred
No location selector, language selector, search, or client portal. None apply to Quoin today.

### Retires from current nav
- Cube glyph in header (moves to footer only).
- `ShimmerButton` CTA treatment.
- `WordRotate`-adjacent animations in the header area.

---

## 7. Footer (trust hub)

The footer is the single most important trust element. Every accountability path must be visible here.

### Structure
Four columns on desktop, stacked on mobile, on `--surface-sunken` background.

**Column 1 — Brand**
- QUOIN wordmark + small cube glyph.
- One-line descriptor: *"AI operating partner for property management firms."*
- Headquarters line: *"Headquarters · Washington, DC"*

**Column 2 — Company**
- Who We Help
- Services
- Approach
- Team
- Perspectives

**Column 3 — Trust & Governance**
- Governance
- Methodology *(links to Approach page anchor)*
- Responsible AI *(new page — see §11)*
- Data Security *(new page — see §11)*
- Accessibility
- Privacy Policy
- Terms of Service
- Report a Concern *(mailto: `ethics@quoinbuildings.com`)*

**Column 4 — Contact**
- `info@quoinbuildings.com`
- LinkedIn
- Inquiry routing note:
  *"For partnership inquiries, use [Talk to us](/contact)."*
  (Press line only if a press address is set up; otherwise omit.)

### Bottom bar
- `© 2026 Quoin Buildings, LLC. All rights reserved.`
- `Headquarters · Washington, DC`

### What this changes from current state
- Adds three new items: Methodology, Responsible AI, Data Security, Report a Concern.
- Reorders Trust & Governance column to lead with governance/methodology/AI principles before legal pages.

---

## 8. Copy voice

### Voice
Calm. Precise. Evidence-oriented. Sentences short. Jargon only where it is the actual term of art.

### Five rules
1. **Lead with audience and outcome.** Not *"Your AI Operating Infrastructure"* but *"We prepare property management firms to run AI in daily operations."* Name the buyer; name the result.
2. **Every claim carries its proof in the same sentence or the next.** Stats get inline citations. Methodology claims link to the Approach page. Team credentials link to the Team page.
3. **No decorative verbs.** Cut *elevate, unlock, transform, empower, journey, partner with you on the future*. Use *build, deploy, govern, train, integrate, measure*.
4. **No clever contrast.** Dramatic diagnosis (*"Most firms have tried a pilot… None of it stuck"*) is removed. Diagnosis is made plainly.
5. **Specific over abstract, always.** Replace *"AI for property management"* with named workflow examples when a real wedge exists.

### Forbidden phrases (hard ban site-wide)
- *transform, transformation*
- *unlock, unleash*
- *journey, your journey*
- *future-ready, future-proof*
- *next-generation, next-gen*
- *seamless, seamlessly*
- *empower, empowering*
- *at scale* (unless paired with a specific number)
- *cutting-edge, bleeding-edge*
- *revolutionize*
- origin-myth framing (*"We exist because…"* and similar)

### Headline formulas
- *"Helping property management firms [outcome] with [capability]."*
- *"[Outcome] for property management firms."*
- *"[Capability], built for property management operations."*

### Stat presentation
- Figure rendered in accent color, serif display weight, static (no ticker).
- One-line claim in Body M below.
- Source citation in Metadata style below that, hyperlinked.
  Example: *"Only 5% of CRE firms are achieving their AI goals ([CBRE, 2025](#))."*

### CTA labels
**Allowed:** Talk to us · Read the methodology · See the team · Read the report · Submit an RFP · Find a local office
**Banned:** Learn more · Discover · Explore · Get started · Start your journey

---

## 9. Component language

Rules for recurring building blocks. Applied consistently across every page.

### Hero
- Structure: Eyebrow · H1 (static serif) · Body L lede (≤2 lines) · primary CTA + secondary text link.
- Optional: one supporting photograph or abstract graphic at right, ≤40% width, never full-bleed.
- Height: natural content height, roughly 560–640 px desktop. No `min-h-screen`.
- Surface: `--surface-base` (paper). No dark, no particles, no hero-bg image.

### Proof strip (homepage only, directly under hero)
- Horizontal row of 3 items on `--surface-sunken`.
- Each item: figure (accent, serif, 32 px, static) + one-line claim + source citation (Metadata style, linked).
- Vertical hairline dividers between items. No surrounding border.
- Retires: border-beam glass cards, backdrop blur, number-ticker.

### Cards
- Surface: `--surface-raised` on paper, or `--surface-base` on sunken.
- Padding: 32 px desktop, 24 px mobile.
- Radius: 2 px.
- Border: hairline `--border-subtle`. No shadow.
- Structure: eyebrow · H3 title · one-paragraph description · single text link (`Read more →` in accent).
- Equal heights across a row.
- One action per card.

### Stats (inline in prose)
- Figure in accent serif, static.
- Citation inline in parentheses, metadata style, linked.
  Example: *"Only 5% of CRE firms are achieving their AI goals ([CBRE, 2025](#))."*

### Buttons
- **Primary CTA:** 1 px `--border-strong`, paper fill, charcoal text. Hover → inverse fill, paper text. 150 ms.
- **Secondary:** plain text link, accent underline on hover. Arrow glyph allowed (`→`).
- Label rule: verb + object. Never vague verbs.

### Eyebrows
- 12 px sans, 600 weight, +0.14em tracking, uppercase, accent color.
- Always paired with an H2 directly below. Never floating alone.

### Section dividers
- Default: 96 px vertical padding is the divider. No rule.
- When a visual break is needed between same-surface sections: 1 px `--border-subtle` hairline, full container width, no ornament.

### Imagery
- Photography: real people, real offices, real buildings. No stock handshakes, no server rooms, no AI-robot illustrations.
- Abstract graphics: simple geometric line art in charcoal + a single accent mark. No animation.
- Dark hero backgrounds, starfields, and cosmic sand textures are deprecated site-wide.
- Existing `hero-bg.jpg` and similar assets are removed.

### Tables
- Allowed and encouraged for methodology, comparison, pricing.
- Hairline borders, no zebra striping, 16 px body, 14 px metadata headers.

---

## 10. Accessibility baseline

### Contrast
- Body text on paper: ~15:1 (AAA).
- Accent on paper: ~4.9:1 (AA for normal text and UI).
- Color is never the only carrier of meaning. Links use underline + accent color. Required-field indicators use glyph + color.

### Focus
- Every interactive element has a visible 2 px accent outline with 2 px offset on `:focus-visible`.
- Never `outline: none` without a replacement.
- Focus order follows DOM order; no `tabindex` higher than 0.

### Semantics
- One `<h1>` per page, the hero heading.
- Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- No `<div onClick>` for interactive elements; use real `<a>` or `<button>`.

### Motion
- All motion respects `prefers-reduced-motion: reduce`.
- Under reduced motion: 8 px rise becomes 0 px; fade becomes instant (opacity 1 on mount).

### Images
- Every image has an `alt` attribute. Decorative images: `alt=""`.
- Team photos use descriptive alt: *"Portrait of Dr. Cynthia J. Mendoza"*.

### Forms (contact page)
- Labels visible above the field, not placeholder-only.
- Errors announced via `aria-live="polite"` and described inline.
- Every field has an associated `<label for>`.

### Typography
- Body never below 16 px.
- Measure capped at 68 characters.
- No justified text; left-aligned only.

### Navigation
- Skip-to-content link as the first focusable element on every page.
- Hamburger is a real `<button aria-expanded aria-controls>`.

### Accessibility statement (`/accessibility`) content
Rewritten to plain language: *"Quoin targets WCAG 2.2 AA. Known gaps: [enumerate or state none]. If you hit a barrier, email `accessibility@quoinbuildings.com`."* No boilerplate.

---

## 11. New pages this creates

Two new pages are introduced by this design system and must be built as part of the first per-page implementation cycle.

### `/responsible-ai`
- Length: ~400 words narrative, one page.
- Structure follows §4 section pattern (eyebrow, H2, lede, body).
- Content outline: how Quoin decides what AI to build and deploy, human-in-the-loop expectations, data boundaries with client systems, model-selection transparency, ongoing evaluation. Signed by the Senior Advisor, Governance & Security (Mendoza) where appropriate.

### `/data-security`
- Length: ~400 words narrative, one page.
- Content outline: data-handling posture (at rest, in transit), access control principle, vendor review practice, incident response contact. High-level, not a SOC 2 substitute.

Both pages are linked from the footer (§7). Full copy drafted in the per-page spec.

---

## 12. Components being removed

After migration, delete:
- `components/ui/particles.tsx`
- `components/ui/border-beam.tsx`
- `components/ui/word-rotate.tsx`
- `components/ui/text-animate.tsx`
- `components/ui/shimmer-button.tsx`
- `components/ui/number-ticker.tsx`

Associated imports and usages are replaced by the static component language in §9. `BlurFade` is kept but simplified (single variant, no chained delays).

---

## 13. Success criteria

This design system succeeds when, against the skill's scorecard (§"Quick evaluation scorecard"), the homepage and every service/trust page score 40+ out of 50. Specifically:

- A visitor who lands on any page answers *"What do you do? Who is it for? Why should I believe you? What standards govern your work? How do I reach the right person?"* within two scrolls.
- No forbidden phrase from §8 appears anywhere on the site.
- No motion component from §5's disallowed list is imported anywhere.
- Every claim on the homepage has a visible source or a link to its proof.
- Every footer trust link resolves to a real page with real content.

---

## 14. Per-page specs that inherit from this document

This global document does not specify per-page content. Each of the following will get its own brainstorm → spec → implementation cycle, inheriting every rule above:

1. Homepage (`/`)
2. Who We Help (`/who-we-help`)
3. Services (`/services`)
4. Approach (`/approach`)
5. Team (`/team`)
6. Perspectives (`/perspectives`)
7. Contact (`/contact`)
8. Governance (`/governance`)
9. Responsible AI (`/responsible-ai`) — new
10. Data Security (`/data-security`) — new
11. Accessibility (`/accessibility`) — content rewrite only
12. Privacy Policy (`/privacy`) — unchanged content, new styling only
13. Terms of Service (`/terms`) — unchanged content, new styling only

The first implementation cycle covers the global shell: color tokens, typography loading, layout primitives, motion rules, navigation, footer, removal of deprecated motion components. After that, per-page cycles begin with the homepage.
