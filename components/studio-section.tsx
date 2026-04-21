"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const weeks = [
  {
    number: "01",
    title: "Stakeholder Interviews & Workflow Mapping",
    description:
      "We meet with your property managers, maintenance coordinators, leasing staff, regional directors, and compliance team. We map how work actually flows \, not the org chart version, the real version.",
  },
  {
    number: "02",
    title: "Systems & Data Assessment",
    description:
      "We assess your property management platform \, Yardi, RealPage, AppFolio, or Entrata. Data quality, integration capabilities, API access, and gaps. What your systems can support today and what needs preparation.",
  },
]

const deliverables = [
  "A prioritized implementation roadmap \, not a strategy deck, but a build plan",
  "A data and systems readiness assessment",
  "A governance requirements document",
  "A clear recommendation: where to build first, what to prepare, and what to skip",
  "A decision point: move forward with Quoin, move forward with someone else, or pause",
]

export function StudioSection() {
  return (
    <section id="diagnostic" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <BlurFade inView direction="up">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">
            The First Step
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-balance text-background max-w-3xl">
            A 2-Week Executive Diagnostic
          </h2>
          <p className="mt-6 text-sm leading-[1.85] text-background/50 max-w-2xl">
            Every engagement begins the same way. Before we build anything, we spend
            two weeks inside your operations to understand what is real, what is possible,
            and what is not worth pursuing. The diagnostic is a standalone engagement.
            you are not committing to a multi-year contract.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-16">
        {weeks.map((week, i) => (
          <BlurFade key={week.number} inView delay={i * 0.15} direction="up">
            <div className="relative overflow-hidden bg-foreground border border-background/10 p-8 md:p-10 h-full">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-[11px] tracking-[0.15em] text-background/25 mt-1 shrink-0">
                  Week {week.number}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-light tracking-tight text-background mb-4">
                {week.title}
              </h3>
              <p className="text-sm leading-[1.75] text-background/45">
                {week.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade inView delay={0.3} direction="up">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-6">
            What You Get
          </p>
          <ul className="flex flex-col gap-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-px bg-accent/60 mt-2.5 shrink-0" />
                <span className="text-sm leading-[1.75] text-background/60">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.4} direction="up">
        <div className="border-t border-background/10 pt-10">
          <p className="text-sm leading-[1.85] text-background/50 max-w-2xl mb-8">
            If the diagnostic reveals that AI is not the right investment for your firm
            right now, we will tell you. We do not build what should not be built.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-background/50 hover:text-background transition-colors duration-300 group"
          >
            <span className="border-b border-background/20 pb-0.5 group-hover:border-background/50 transition-colors duration-300">
              Talk to us
            </span>
            <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </BlurFade>
    </section>
  )
}
