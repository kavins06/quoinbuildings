"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export interface TimelineMilestone {
  week: string
  title: string
  description: string
}

interface OwnerOperatorsTimelineProps {
  milestones: TimelineMilestone[]
}

/**
 * Vertical hairline timeline.
 *
 * Per DESIGN.md (Pass 5) — the hairline is the spine; milestones stack to
 * the right of it. New component, hairline-driven. Editorial vocabulary:
 * 1px hairlines, serif milestone titles, DM Sans body, 0px radius.
 */
export function OwnerOperatorsTimeline({ milestones }: OwnerOperatorsTimelineProps) {
  return (
    <ol className="relative ml-2 md:ml-4">
      {/* Spine */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1 bottom-1 w-px bg-ink-primary/80"
      />

      <li className="sr-only">{milestones.length} milestones across the engagement</li>

      {milestones.map((m, index) => (
        <BlurFade key={m.week} inView direction="up">
          <li
            className="relative grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 pl-6 md:pl-10 pb-12 md:pb-14 last:pb-0"
          >
            {/* Tick on the spine */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 -translate-x-1/2 h-px w-4 md:w-6 bg-ink-primary"
            />

            {/* Week marker */}
            <div className="col-start-1 row-start-1">
              <p className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent leading-none pt-1">
                {m.week}
              </p>
            </div>

            {/* Milestone body */}
            <div className="col-start-2 row-start-1 max-w-[60ch]">
              <h3 className="font-serif text-2xl md:text-[1.75rem] leading-[1.15] tracking-[-0.015em] text-ink-primary text-balance">
                {m.title}
              </h3>
              <p className="mt-3 font-sans text-base leading-[1.65] text-ink-secondary">
                {m.description}
              </p>
            </div>

            {/* Index numeral, sits subtle and far-right on desktop */}
            <span
              aria-hidden="true"
              className="hidden lg:block absolute right-0 top-2 font-serif text-sm tracking-[0.2em] text-ink-muted/60"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </li>
        </BlurFade>
      ))}
    </ol>
  )
}
