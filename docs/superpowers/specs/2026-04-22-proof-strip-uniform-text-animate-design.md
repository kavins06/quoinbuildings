# Proof Strip — Uniform Magic UI Text Animation

**Date:** 2026-04-22
**Scope:** `components/proof-strip.tsx`, `components/ui/` (new and deleted components)

## Goal

Apply a single Magic UI animation to the value text of all four proof-strip blocks in an identical way, so the treatment is uniform across Portfolio Scale, Governance, First Step, and Integrations.

## Current State

[components/proof-strip.tsx](../../../components/proof-strip.tsx) wraps each block in `BlurFade` and uses `NumberTicker` on blocks 1 and 3 (the blocks with numbers). Blocks 2 and 4 show plain text. The result is a mixed treatment: numeric blocks tick, non-numeric blocks don't.

## Design

### New component: `components/ui/text-animate.tsx`

A Magic UI word-by-word reveal that works on any text, numeric or not.

- Splits children by whitespace into words, wraps each in a `motion.span`.
- On scroll into view (`useInView`, `once: true`, margin `-40px`), each word animates from `{ opacity: 0, y: 8, filter: "blur(10px)" }` to `{ opacity: 1, y: 0, filter: "blur(0)" }`.
- Per-word stagger: ~0.05s. Total per-word duration: ~0.4s.
- Honors an optional `delay` prop (seconds) so parent can stagger blocks.
- Respects `prefers-reduced-motion` — reduced-motion users see the final state immediately, no animation.

Props:
```ts
interface TextAnimateProps {
  children: string
  delay?: number
  className?: string
}
```

### Edit: `components/proof-strip.tsx`

1. Remove the `NumberTicker` import and usages. Convert blocks 1 and 3 values to plain strings:
   - Block 1: `"Over 1,000 Units or 1 Million Sq. ft."`
   - Block 3: `"2-Week Diagnostic · No Lock-in"`

2. Restructure each block so `BlurFade` wraps only the label + link row; `TextAnimate` wraps the value alone and sits outside `BlurFade`:

   ```tsx
   <div key={item.label}>
     <BlurFade inView direction="up" delay={index * 0.1}>
       <p className="...eyebrow styles...">{item.label}</p>
     </BlurFade>
     <TextAnimate delay={index * 0.1} className="...value styles...">
       {item.value}
     </TextAnimate>
     <BlurFade inView direction="up" delay={index * 0.1 + 0.05}>
       <Link href={item.link} ...>{item.linkLabel} →</Link>
     </BlurFade>
   </div>
   ```

3. Update the `ProofItem.value` type from `ReactNode` to `string`, since `TextAnimate` expects a string it can split by word.

### Delete: `components/ui/number-ticker.tsx`

After the change, `NumberTicker` has no callers in application code (only referenced in two design-doc files, which is fine — docs describe a past state). Delete the file.

## Behavior

- All four blocks reveal their value word-by-word on scroll-in, using identical animation parameters.
- Blocks stagger by ~100ms (index * 0.1s) so the cascade reads left-to-right on desktop / top-to-bottom on mobile.
- Reduced-motion users see the final text immediately with no motion.

## Out of Scope

- Changing the copy of any block.
- Changing the visual layout, spacing, colors, or typography.
- Animating labels or link rows beyond the existing `BlurFade`.
- Adding any other Magic UI component elsewhere in the site.

## Files Changed

- **NEW:** `components/ui/text-animate.tsx`
- **EDIT:** `components/proof-strip.tsx`
- **DELETE:** `components/ui/number-ticker.tsx`

## Deploy

Per the standing workflow: commit → push → Vercel deploy → verify live.
