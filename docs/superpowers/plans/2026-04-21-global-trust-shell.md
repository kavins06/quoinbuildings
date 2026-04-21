# Global Trust Shell — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Quoin website's global shell (design tokens, typography, motion system, navigation, footer) from the current dark/editorial identity to the conservative professional-services system defined in `docs/superpowers/specs/2026-04-21-global-trust-design-system.md`.

**Architecture:** Next.js 16 App Router with Tailwind CSS. The refactor happens in three layers: (1) design tokens in `app/globals.css` + `tailwind.config.ts`, (2) shell components (`Navigation`, `Footer`, simplified `BlurFade`), (3) migration of deprecated motion components across 23 consuming files. Per-page content rewrites are *not* in this plan — they come in later per-page cycles. After this plan, every page will visually shift to the new system but content will still carry some legacy copy until its page-specific cycle runs.

**Tech Stack:** Next.js 16.1.6, React 19, Tailwind CSS 3.4, TypeScript 5.7, `next/font/google` for type loading, pnpm for package management.

**Source spec:** `docs/superpowers/specs/2026-04-21-global-trust-design-system.md`

**Deployment workflow:** Per the project convention, every task ends with `git push origin master` and a Vercel production deploy. The final task verifies the live site.

---

## File structure

Files created or modified by this plan:

**Design tokens & type loading**
- Modify: `app/globals.css` — replace all CSS variables, remove legacy `@theme inline` shimmer/marquee keyframes, add type-loading rules
- Modify: `tailwind.config.ts` — swap color token mapping, add `font-serif` family, add surface/border utility aliases
- Modify: `app/layout.tsx` — swap fonts (Source Serif 4 + Inter, drop Spectral + Open_Sans)

**Motion system cleanup**
- Modify: `components/ui/blur-fade.tsx` — simplify to a single variant
- Delete: `components/ui/particles.tsx`
- Delete: `components/ui/border-beam.tsx`
- Delete: `components/ui/word-rotate.tsx`
- Delete: `components/ui/text-animate.tsx`
- Delete: `components/ui/shimmer-button.tsx`
- Delete: `components/ui/number-ticker.tsx`
- Modify: 23 consuming files (enumerated in Task 5) — strip deprecated imports & usages

**Shell components**
- Modify: `components/navigation.tsx` — rewrite for paper surface, new CTA label "Talk to us," accessible hamburger, skip-to-content
- Modify: `components/footer.tsx` — rewrite for 4-column trust hub

**New stub pages** (so footer links resolve)
- Create: `app/responsible-ai/page.tsx` — minimal stub, full content in later per-page cycle
- Create: `app/data-security/page.tsx` — minimal stub, full content in later per-page cycle

**Root layout hygiene**
- Modify: `app/layout.tsx` — add `<a href="#main">Skip to content</a>` and `<main id="main">` wrapper

---

## Verification model

This codebase has no unit tests. For a shell refactor, the operative verification at each task boundary is:

1. **Typecheck**: `pnpm exec tsc --noEmit` exits with code 0.
2. **Build**: `pnpm build` completes successfully.
3. **Dev render**: navigate to each of `/`, `/who-we-help`, `/services`, `/approach`, `/team`, `/perspectives`, `/contact`, `/governance`, `/privacy`, `/terms`, `/accessibility`, `/responsible-ai`, `/data-security` and confirm no runtime errors in the browser console.

Not every task requires the full render sweep — per-task verification scopes are specified inline. The final task (Task 12) runs the full sweep.

---

## Tasks

### Task 1: Replace CSS design tokens in `app/globals.css`

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Overwrite `app/globals.css` with new tokens**

Replace the entire file contents with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Surfaces */
    --surface-base: 40 33% 95%;      /* #F7F4EE warm paper */
    --surface-raised: 0 0% 100%;     /* #FFFFFF */
    --surface-sunken: 38 28% 91%;    /* #EFEAE1 */
    --surface-inverse: 0 0% 10%;     /* #1A1A1A */

    /* Text */
    --text-primary: 0 0% 10%;        /* #1A1A1A */
    --text-secondary: 0 0% 29%;      /* #4A4A4A */
    --text-muted: 0 0% 48%;          /* #7A7A7A */

    /* Accent (muted gold) */
    --accent: 30 39% 47%;            /* #A8804A */

    /* Borders */
    --border-subtle: 37 25% 86%;     /* #E4DFD4 */
    --border-strong: 0 0% 10%;       /* #1A1A1A */

    /* shadcn compatibility aliases — map to surface tokens so existing components still render */
    --background: var(--surface-base);
    --foreground: var(--text-primary);
    --card: var(--surface-raised);
    --card-foreground: var(--text-primary);
    --popover: var(--surface-raised);
    --popover-foreground: var(--text-primary);
    --primary: var(--text-primary);
    --primary-foreground: var(--surface-base);
    --secondary: var(--surface-sunken);
    --secondary-foreground: var(--text-primary);
    --muted: var(--surface-sunken);
    --muted-foreground: var(--text-secondary);
    --accent-foreground: var(--surface-base);
    --destructive: 0 50% 40%;
    --destructive-foreground: 0 0% 100%;
    --border: var(--border-subtle);
    --input: var(--border-subtle);
    --ring: var(--accent);
    --radius: 0.125rem; /* 2px */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  h1, h2, h3, blockquote {
    font-family: var(--font-serif), "Source Serif 4", "Source Serif Pro", Georgia, serif;
    font-feature-settings: 'kern' 1, 'liga' 1;
    text-rendering: optimizeLegibility;
    font-weight: 400;
  }
  ::selection {
    background-color: hsl(var(--accent));
    color: hsl(var(--surface-base));
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid hsl(var(--accent));
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .measure {
    max-width: 68ch;
  }
  .container-shell {
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }
  @media (min-width: 1024px) {
    .container-shell {
      padding-inline: 5rem;
    }
  }
}
```

- [ ] **Step 2: Verify typecheck and dev render**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0.

Reload dev server at `http://localhost:3000`. Expected: page renders on warm-paper background instead of white/near-black. Text is charcoal. Some legacy components (particles, border-beam) will look broken — that is expected and fixed in later tasks.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "Replace design tokens with warm-paper trust system"
git push origin master
```

---

### Task 2: Update Tailwind config with new color aliases and serif family

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Overwrite `tailwind.config.ts`**

Replace entire file with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Source Serif 4', 'Source Serif Pro', 'Georgia', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        surface: {
          base: 'hsl(var(--surface-base))',
          raised: 'hsl(var(--surface-raised))',
          sunken: 'hsl(var(--surface-sunken))',
          inverse: 'hsl(var(--surface-inverse))',
        },
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          muted: 'hsl(var(--text-muted))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'border-subtle': 'hsl(var(--border-subtle))',
        'border-strong': 'hsl(var(--border-strong))',

        // Preserved for shadcn components still in the tree
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-rise': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-rise': 'fade-rise 400ms ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
```

- [ ] **Step 2: Verify**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0.

```bash
pnpm build
```
Expected: build succeeds. If a specific component fails to compile because of a removed color token, note it but do not fix yet — Task 5 handles deprecated component cleanup.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "Add serif font family and surface/text/border tokens to Tailwind"
git push origin master
```

---

### Task 3: Swap fonts in `app/layout.tsx` and add skip-to-content

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace font imports and layout structure**

Overwrite `app/layout.tsx` with:

```tsx
import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500'],
  style: 'normal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quoin | AI Operating Partner for Property Management',
  description: 'Quoin is an AI operating partner for property management firms. We build, deploy, and manage AI agents that integrate with your existing systems and workflows.',
}

export const viewport: Viewport = {
  themeColor: '#F7F4EE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-surface-raised focus:text-ink-primary focus:px-4 focus:py-2 focus:border focus:border-strong"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify font loading**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0. If `Source_Serif_4` is not recognized by the installed `next/font/google` version, replace the import with `Source_Serif_Pro` and re-run.

Reload `http://localhost:3000`. Expected: headings now render in Source Serif 4 (transitional serif, 400 weight). Body renders in Inter. Press Tab on page load — the "Skip to content" link appears at top-left.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "Load Source Serif 4 + Inter, add skip-to-content link"
git push origin master
```

---

### Task 4: Simplify `BlurFade` to a single variant

**Files:**
- Modify: `components/ui/blur-fade.tsx`

- [ ] **Step 1: Read current BlurFade to understand its prop surface**

```bash
cat "components/ui/blur-fade.tsx"
```

Note: keep the component's existing prop names (`delay`, `direction`, `offset`, `inView`, `className`, `children`) so existing call sites still compile. Internally, ignore `delay`, `direction`, `offset` — render the single variant (opacity 0 → 1 with 8 px rise, 400 ms ease-out, once on mount).

- [ ] **Step 2: Replace the component implementation**

Overwrite `components/ui/blur-fade.tsx` with:

```tsx
"use client"

import { motion, useInView } from "motion/react"
import { useRef, type ReactNode } from "react"

interface BlurFadeProps {
  children: ReactNode
  className?: string
  // Preserved for API compatibility with existing call sites. All ignored.
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: number
  inView?: boolean
  duration?: number
}

export function BlurFade({ children, className }: BlurFadeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 3: Verify existing call sites still compile**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0. The ignored props (`delay`, `direction`, `offset`, `inView`, `duration`) are still accepted by the type signature, so existing call sites compile unchanged.

Reload dev server. Sections fade in uniformly with an 8 px rise. No staggered cascades.

- [ ] **Step 4: Commit**

```bash
git add components/ui/blur-fade.tsx
git commit -m "Simplify BlurFade to single fade-rise variant"
git push origin master
```

---

### Task 5: Remove deprecated motion component usages across the codebase

**Files:**
- Modify all 23 consuming files listed below.

The following files currently import and use one or more deprecated motion components (Particles, BorderBeam, WordRotate, TextAnimate, ShimmerButton, NumberTicker). For each, remove the import and replace the JSX usage per the patterns below. The component files themselves are deleted in Task 6.

**Files to edit:**
```
components/hero.tsx
components/proof-strip.tsx
components/projects-section.tsx
components/perspectives-teaser.tsx
components/principles-section.tsx
components/studio-section.tsx
components/contact-section.tsx
components/approach-section.tsx
components/page-header.tsx
components/journal-section.tsx
components/why-section.tsx
components/editorial-break.tsx
app/team/content.tsx
app/perspectives/content.tsx
app/services/content.tsx
app/governance/content.tsx
app/approach/content.tsx
app/who-we-help/content.tsx
app/contact/content.tsx
app/terms/content.tsx
app/accessibility/content.tsx
app/privacy/content.tsx
```

**Replacement patterns** (apply in this order within each file):

#### 5a. Remove `Particles`

Delete the import line:
```tsx
import { Particles } from "@/components/ui/particles"
```

Delete the JSX element entirely (it is self-contained):
```tsx
<Particles
  className="..."
  quantity={...}
  color="..."
  ...
/>
```

#### 5b. Remove `BorderBeam`

Delete the import line:
```tsx
import { BorderBeam } from "@/components/ui/border-beam"
```

Delete the JSX element entirely:
```tsx
<BorderBeam ... />
```

#### 5c. Replace `WordRotate` with the last/canonical word

Delete the import line:
```tsx
import { WordRotate } from "@/components/ui/word-rotate"
```

Replace each usage:
```tsx
<WordRotate
  words={["Partner", "Advantage", "Infrastructure"]}
  ...
/>
```

with a static span containing the first word in the list:

```tsx
<span className="inline-block">Partner</span>
```

The choice of word ("Partner" here, or whichever is the first in the original `words` array at each site) is intentional: the first word was the author's primary framing, the others were decorative rotation.

#### 5d. Replace `TextAnimate` with a plain span

Delete the import line:
```tsx
import { TextAnimate } from "@/components/ui/text-animate"
```

Replace each usage:
```tsx
<TextAnimate
  as="span"
  animation="blurIn"
  by="character"
  once
  className="text-[#D4A574] font-medium"
>
  with you
</TextAnimate>
```

with:

```tsx
<span className="text-accent font-medium">with you</span>
```

(Keep the original children text verbatim. Keep any `className` that was on the outer element, but swap hardcoded hex colors like `text-[#D4A574]` for `text-accent`.)

#### 5e. Replace `ShimmerButton` with a bordered link button

Delete the import line:
```tsx
import { ShimmerButton } from "@/components/ui/shimmer-button"
```

Replace each usage:
```tsx
<ShimmerButton
  borderRadius="0px"
  shimmerColor="..."
  shimmerDuration="..."
  shimmerSize="..."
  background="..."
  className="text-[11px] tracking-[0.2em] uppercase px-6 py-3 text-white"
>
  Explore Partnership
</ShimmerButton>
```

with a bordered anchor (or button, matching the original element type):

```tsx
<a
  href="/contact"
  className="inline-block text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 border border-strong text-ink-primary hover:bg-surface-inverse hover:text-surface-base transition-colors duration-150"
>
  Talk to us
</a>
```

Note the CTA label change: `"Explore Partnership"` → `"Talk to us"` per spec §6/§8. Apply this label change only to CTA buttons that previously said "Explore Partnership". Other CTA labels stay as-is (they will be addressed in per-page cycles).

#### 5f. Replace `NumberTicker` with a static figure

Delete the import line:
```tsx
import { NumberTicker } from "@/components/ui/number-ticker"
```

Replace each usage:
```tsx
<NumberTicker value={83} delay={1.3} className="..." />
```

with the static final value in a span, preserving the `className`:

```tsx
<span className="...">83</span>
```

(The original `value` prop is the number to render. `delay` is dropped.)

- [ ] **Step 1: Grep for remaining imports to confirm scope**

Use the Grep tool in your editor with pattern `from "@/components/ui/(particles|border-beam|word-rotate|text-animate|shimmer-button|number-ticker)"` across `app/` and `components/`. Equivalent shell command if preferred: `grep -rn -E "from \"@/components/ui/(particles|border-beam|word-rotate|text-animate|shimmer-button|number-ticker)\"" app components`.

Expected at start: hits in the 23 files listed above.

- [ ] **Step 2: Apply patterns 5a–5f to each file**

Work through each of the 23 files in the list above. For each file, apply every pattern that matches. Track progress by re-running the grep after every 3–5 files. The list is DONE when the grep returns zero hits.

- [ ] **Step 3: Verify typecheck and build**

```bash
pnpm exec tsc --noEmit
pnpm build
```
Expected: both exit with code 0.

- [ ] **Step 4: Dev render sweep**

Reload dev server and visit every page in the verification list (see "Verification model" at top). Expected: no runtime errors, no particles, no shimmer buttons, no animated count-ups, no word rotations. Layout may look visually rough in places — copy and structure are addressed in per-page cycles — but nothing should crash.

- [ ] **Step 5: Commit**

```bash
git add app components
git commit -m "Remove deprecated motion components from all consuming files"
git push origin master
```

---

### Task 6: Delete deprecated component files

**Files:**
- Delete: `components/ui/particles.tsx`
- Delete: `components/ui/border-beam.tsx`
- Delete: `components/ui/word-rotate.tsx`
- Delete: `components/ui/text-animate.tsx`
- Delete: `components/ui/shimmer-button.tsx`
- Delete: `components/ui/number-ticker.tsx`

- [ ] **Step 1: Delete the files**

```bash
rm "components/ui/particles.tsx"
rm "components/ui/border-beam.tsx"
rm "components/ui/word-rotate.tsx"
rm "components/ui/text-animate.tsx"
rm "components/ui/shimmer-button.tsx"
rm "components/ui/number-ticker.tsx"
```

- [ ] **Step 2: Verify no references remain**

```bash
pnpm exec tsc --noEmit
pnpm build
```
Expected: both pass. If either fails with "cannot find module", Task 5 missed a usage — return to Task 5 and fix.

- [ ] **Step 3: Commit**

```bash
git add components/ui
git commit -m "Delete deprecated motion component files"
git push origin master
```

---

### Task 7: Rewrite `components/navigation.tsx`

**Files:**
- Modify: `components/navigation.tsx`

- [ ] **Step 1: Overwrite the file**

Replace entire contents of `components/navigation.tsx` with:

```tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-surface-base ${
        scrolled ? "border-b border-subtle" : "border-b border-transparent"
      } transition-colors duration-150`}
    >
      <nav
        aria-label="Primary"
        className="container-shell flex items-center justify-between h-[60px] md:h-[72px]"
      >
        <Link
          href="/"
          className="font-serif text-lg md:text-xl text-ink-primary"
        >
          QUOIN
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] text-ink-secondary hover:text-ink-primary hover:underline underline-offset-[6px] decoration-accent decoration-1 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block text-[13px] tracking-[0.02em] px-5 py-2.5 border border-strong text-ink-primary hover:bg-surface-inverse hover:text-surface-base transition-colors duration-150"
          >
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-ink-primary"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!isOpen}
        className="md:hidden bg-surface-base border-t border-subtle"
      >
        <div className="container-shell flex flex-col py-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-ink-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-block text-[13px] tracking-[0.02em] px-5 py-3 mt-4 border border-strong text-ink-primary text-center"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Verify**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0.

Reload dev server. Expected:
- Header is paper-colored with charcoal text.
- QUOIN wordmark on the left in serif, no cube glyph.
- Five nav links + "Contact" + "Talk to us" CTA on the right at ≥768px.
- Hamburger menu on mobile opens a paper-colored overlay.
- Pressing Tab through the nav shows a visible accent-colored focus ring on each link.
- Scrolling past 24 px adds a subtle hairline under the header.

- [ ] **Step 3: Commit**

```bash
git add components/navigation.tsx
git commit -m "Rewrite navigation for paper surface and conservative trust system"
git push origin master
```

---

### Task 8: Rewrite `components/footer.tsx` as four-column trust hub

**Files:**
- Modify: `components/footer.tsx`

- [ ] **Step 1: Overwrite the file**

Replace entire contents of `components/footer.tsx` with:

```tsx
import Link from "next/link"

const companyLinks = [
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Perspectives", href: "/perspectives" },
]

const trustLinks = [
  { label: "Governance", href: "/governance" },
  { label: "Methodology", href: "/approach#methodology" },
  { label: "Responsible AI", href: "/responsible-ai" },
  { label: "Data Security", href: "/data-security" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Report a Concern", href: "mailto:ethics@quoinbuildings.com" },
]

export function Footer() {
  return (
    <footer className="bg-surface-sunken border-t border-subtle">
      <div className="container-shell py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-ink-primary"
            >
              QUOIN
            </Link>
            <p className="text-sm text-ink-secondary leading-relaxed mt-5 max-w-xs">
              AI operating partner for property management firms.
            </p>
            <p className="text-sm text-ink-muted mt-4">
              Headquarters &middot; Washington, DC
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
              Company
            </p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
              Trust &amp; Governance
            </p>
            <div className="flex flex-col gap-3">
              {trustLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@quoinbuildings.com"
                className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
              >
                info@quoinbuildings.com
              </a>
              <a
                href="https://www.linkedin.com/"
                rel="noopener"
                target="_blank"
                className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
              >
                LinkedIn
              </a>
              <p className="text-sm text-ink-muted leading-relaxed mt-2 max-w-xs">
                For partnership inquiries, use{" "}
                <Link href="/contact" className="underline decoration-accent underline-offset-4">
                  Talk to us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-10 mt-12 border-t border-subtle gap-3">
          <p className="text-[12px] text-ink-muted">
            © 2026 Quoin Buildings, LLC. All rights reserved.
          </p>
          <p className="text-[12px] text-ink-muted">
            Headquarters &middot; Washington, DC
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0.

Reload dev server, scroll to the footer. Expected:
- Sunken paper background (`--surface-sunken`).
- Four columns on desktop: Brand · Company · Trust & Governance · Contact.
- "Trust & Governance" column contains 8 items including Methodology, Responsible AI, Data Security, and Report a Concern (the last is a `mailto:`).
- Bottom bar shows copyright + HQ line separated on desktop, stacked on mobile.
- The Responsible AI and Data Security links currently 404 — they are created in Tasks 9 and 10.

- [ ] **Step 3: Commit**

```bash
git add components/footer.tsx
git commit -m "Rewrite footer as four-column trust hub"
git push origin master
```

---

### Task 9: Create `/responsible-ai` stub page

**Files:**
- Create: `app/responsible-ai/page.tsx`

- [ ] **Step 1: Create the file**

Create `app/responsible-ai/page.tsx` with the following content:

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
        Full content coming in a subsequent update. This page will describe how Quoin
        decides what AI to build and deploy, our human-in-the-loop expectations, data
        boundaries with client systems, model-selection transparency, and ongoing
        evaluation practice.
      </p>
      <p className="text-sm text-ink-muted mt-6">
        Questions in the meantime: <a className="underline decoration-accent underline-offset-4" href="mailto:ethics@quoinbuildings.com">ethics@quoinbuildings.com</a>
      </p>
    </article>
  )
}
```

- [ ] **Step 2: Verify the link resolves**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0.

Reload dev server and navigate to `http://localhost:3000/responsible-ai`. Expected: page renders with the eyebrow + heading + placeholder paragraph. Footer link to `/responsible-ai` no longer 404s.

- [ ] **Step 3: Commit**

```bash
git add app/responsible-ai/page.tsx
git commit -m "Add Responsible AI stub page (content TBD in per-page cycle)"
git push origin master
```

---

### Task 10: Create `/data-security` stub page

**Files:**
- Create: `app/data-security/page.tsx`

- [ ] **Step 1: Create the file**

Create `app/data-security/page.tsx` with:

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
        Full content coming in a subsequent update. This page will describe our
        data-handling posture at rest and in transit, access control principle, vendor
        review practice, and incident response contact. High-level, not a SOC 2 substitute.
      </p>
      <p className="text-sm text-ink-muted mt-6">
        Security questions in the meantime: <a className="underline decoration-accent underline-offset-4" href="mailto:security@quoinbuildings.com">security@quoinbuildings.com</a>
      </p>
    </article>
  )
}
```

- [ ] **Step 2: Verify the link resolves**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0.

Reload dev server and navigate to `http://localhost:3000/data-security`. Expected: page renders. Footer link no longer 404s.

- [ ] **Step 3: Commit**

```bash
git add app/data-security/page.tsx
git commit -m "Add Data Security stub page (content TBD in per-page cycle)"
git push origin master
```

---

### Task 11: Neutralize any hardcoded dark backgrounds in the hero and page sections

**Files:**
- Modify: `components/hero.tsx`

After Task 5, `hero.tsx` still has `bg-black` on the section and `text-white` on its children. This task strips those legacy dark treatments so the hero inherits the paper surface. Full hero redesign (new headline copy, proof strip integration, correct H1 hierarchy) is deferred to the homepage per-page cycle — this task is only about color migration so nothing renders as "dark island on paper."

- [ ] **Step 1: Read current hero state**

Read `components/hero.tsx` to confirm current class list after Task 5 edits.

- [ ] **Step 2: Replace dark-treatment classes**

Apply these exact class substitutions in `components/hero.tsx`:

| Find | Replace with |
|------|--------------|
| `bg-black` | `bg-surface-base` |
| `text-white` | `text-ink-primary` |
| `text-white/70` | `text-ink-secondary` |
| `text-white/60` | `text-ink-secondary` |
| `border-white/20` | `border-subtle` |
| `text-[#D4A574]` | `text-accent` |
| `bg-white/5` | `bg-surface-raised` |
| `backdrop-blur-sm` | (remove entirely) |
| `font-extralight` | `font-normal` |

Do NOT change the overall section structure, grid layout, or content strings. Those are homepage-cycle concerns.

- [ ] **Step 3: Verify**

```bash
pnpm exec tsc --noEmit
```
Expected: exits with code 0.

Reload dev server. Expected: homepage hero renders on the paper surface with charcoal text. No dark island. Stat cards render on raised white surface with hairline borders. The page still has legacy copy and structure — that is fine, it is fixed in the homepage per-page cycle.

- [ ] **Step 4: Repeat the same substitution pattern across any other top-level section component that still carries `bg-black`, `bg-[#0F0F0F]`, or `text-white` classes**

Use the Grep tool with pattern `bg-black|bg-\[#0F0F0F\]|text-white` across `app/` and `components/`. For each match, apply the substitution table from Step 2. Any match inside `components/navigation.tsx` or `components/footer.tsx` (already rewritten in Tasks 7 and 8) should already be zero — if one shows up, it's a regression and needs investigation.

- [ ] **Step 4b: Rewrite any remaining "Explore Partnership" CTA label to "Talk to us"**

Task 5e changed ShimmerButton CTAs. This step catches any plain-anchor CTAs missed by that sweep. Use the Grep tool with pattern `Explore Partnership` across `app/` and `components/`. For each match that is a CTA label (not body prose), replace `Explore Partnership` with `Talk to us`. If the match is inside body prose or a descriptive sentence, leave it.

- [ ] **Step 5: Final verify**

```bash
pnpm exec tsc --noEmit
pnpm build
```
Expected: both pass.

Dev-render sweep every page in the verification list. Expected: no dark island sections anywhere. Pages render on paper. Some sections may look visually thin — content revisions come in per-page cycles.

- [ ] **Step 6: Commit**

```bash
git add app components
git commit -m "Neutralize legacy dark-surface classes across sections"
git push origin master
```

---

### Task 12: Verify production deploy and live site

**Files:** none (verification only)

- [ ] **Step 1: Final typecheck + build**

```bash
pnpm exec tsc --noEmit
pnpm build
```
Expected: both pass cleanly.

- [ ] **Step 2: Deploy to Vercel production**

```bash
vercel --prod --yes
```

Wait for completion. Expected output ends with `readyState: READY`.

- [ ] **Step 3: Verify live site reflects the new system**

Check three signals on the live site (`https://www.quoinbuildings.com/`):

```bash
curl -s https://www.quoinbuildings.com/ | grep -c "bg-surface-base\|hsl(var(--surface-base))"
curl -s https://www.quoinbuildings.com/ | grep -c "Talk to us"
curl -s https://www.quoinbuildings.com/responsible-ai -o /dev/null -w "%{http_code}\n"
```

Expected:
- First command: returns a positive count (new tokens in the built CSS).
- Second command: returns ≥ 2 (CTA in nav + CTA in footer partnership line).
- Third command: returns `200`.

- [ ] **Step 4: Manual visual check**

Open the live site in a browser:
- Homepage: paper background, serif headings, muted gold accent, no particles, no shimmer, no word rotation, no counting numbers.
- Nav: "Talk to us" visible in the top right.
- Footer: 4 columns, "Trust & Governance" column lists Governance, Methodology, Responsible AI, Data Security, Accessibility, Privacy Policy, Terms of Service, Report a Concern.
- `/responsible-ai` and `/data-security`: render with stub content.

- [ ] **Step 5: No commit needed — this is verification only**

The global shell is complete when all four signals pass. Per-page content revisions follow in subsequent cycles (homepage first).

---

## Not in this plan (explicitly deferred)

These are called out so nothing is silently missed:

- **Per-page content rewrites** (homepage copy, services descriptions, approach methodology, team page photo swaps, perspectives article restyling). Each gets its own brainstorm → spec → plan cycle.
- **Full `/responsible-ai` and `/data-security` copy.** Only stubs are created here so footer links resolve; final content is drafted in per-page cycles.
- **Accessibility statement content rewrite** (spec §10). Page already exists; content revision is a per-page cycle.
- **Hero redesign** (new headline formula, proof strip integration, correct H1 hierarchy). Color migration happens here (Task 11); full redesign happens in the homepage per-page cycle.
- **Legacy CSS animation keyframes cleanup** (`shimmer-slide`, `spin-around`, `marquee`, `marquee-vertical` in `globals.css`). Already removed in Task 1 as part of the overwrite.
- **Hero background image file** (`public/hero-bg.jpg`). The image element was already removed in a prior commit; the file can be deleted in cleanup but is not required for this plan's success.
