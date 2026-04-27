"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const weeks = [
  {
    number: "01",
    title: "Stakeholder Interviews & Workflow Mapping",
    description:
      "Property managers, leasing, maintenance, and compliance. How work actually flows.",
  },
  {
    number: "02",
    title: "Systems & Data Assessment",
    description:
      "Yardi, RealPage, AppFolio, or Entrata. Data quality, integrations, gaps.",
  },
]

const deliverables = [
  "Prioritized implementation roadmap: a build plan, not a deck",
  "Data and systems readiness assessment",
  "Governance requirements document",
  "Clear recommendation: where to build first, what to skip",
  "Decision point: move forward with us, with someone else, or pause",
]

export function StudioSection() {
  return (
    <section
      id="diagnostic"
      className="px-6 py-14 md:px-12 lg:px-20 md:py-20 bg-foreground text-background"
    >
      <BlurFade inView direction="up">
        <div className="mb-10 md:mb-12 max-w-3xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-4">
            The First Step
          </p>
          <h2 className="text-2xl md:text-[2.25rem] font-normal leading-[1.2] tracking-tight text-background">
            A 2-Week Executive Diagnostic
          </h2>
          <p className="mt-4 text-sm leading-[1.7] text-background/55">
            Two weeks inside your operations to understand what is real, what is
            possible, and what is not worth pursuing. Standalone. No multi-year
            commitment.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-10 md:mb-12">
        {weeks.map((week, i) => (
          <BlurFade key={week.number} inView delay={i * 0.1} direction="up">
            <div className="bg-foreground border border-background/10 p-5 md:p-6 h-full">
              <span className="text-[10px] tracking-[0.15em] text-background/30 uppercase">
                Week {week.number}
              </span>
              <h3 className="mt-2 text-base md:text-lg font-light tracking-tight text-background">
                {week.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-background/50">
                {week.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade inView delay={0.2} direction="up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 mb-10 md:mb-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40">
            What You Get
          </p>
          <ul className="md:col-span-2 grid grid-cols-1 gap-2">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-px bg-accent/60 mt-2.5 shrink-0" />
                <span className="text-[13px] leading-[1.6] text-background/65">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.3} direction="up">
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[13px] leading-[1.6] text-background/55 max-w-2xl">
            If AI is not the right investment for your firm right now, we will say so.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-background/60 hover:text-background transition-colors duration-300 group shrink-0"
          >
            <span className="border-b border-background/20 pb-0.5 group-hover:border-background/50 transition-colors duration-300">
              Talk to us
            </span>
            <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </Link>
        </div>
      </BlurFade>
    </section>
  )
}
