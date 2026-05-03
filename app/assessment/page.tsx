"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { AssessmentShell } from "@/components/assessment/assessment-shell"
import { ASSESSMENT_INTRO } from "./content"

export default function AssessmentPage() {
  const [started, setStarted] = useState(false)

  if (started) {
    return <AssessmentShell />
  }

  return (
    <section className="container-shell py-20 md:py-32 max-w-[820px]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] tracking-[0.16em] uppercase text-accent mb-6">
          {ASSESSMENT_INTRO.eyebrow}
        </p>
        <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-0.025em] text-ink-primary mb-6 text-balance">
          {ASSESSMENT_INTRO.headline}
        </h1>
        <p className="font-sans text-lg md:text-xl leading-[1.6] text-ink-secondary max-w-[60ch] mb-10">
          {ASSESSMENT_INTRO.subhead}
        </p>

        <button
          type="button"
          onClick={() => setStarted(true)}
          className="group inline-flex items-center gap-3 font-sans text-base font-medium text-accent border-b border-accent pb-1 hover:text-ink-primary hover:border-ink-primary transition-colors duration-200"
        >
          <span>{ASSESSMENT_INTRO.startCta}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <p className="mt-10 font-sans text-sm text-ink-muted">
          {ASSESSMENT_INTRO.meta}
        </p>

        <hr className="mt-16 mb-10 border-t border-[hsl(var(--border-subtle))]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-3">
              What you'll get
            </p>
            <p className="font-sans text-[15px] leading-[1.6] text-ink-secondary">
              A score on the 1.0-5.0 scale plus a benchmark against the cohort of vertically-integrated REITs and large private owner/operators we track.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-3">
              How it scores
            </p>
            <p className="font-sans text-[15px] leading-[1.6] text-ink-secondary">
              Pure-function scoring on your weighted answers. Deterministic. Same inputs always return the same score.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-3">
              What we send back
            </p>
            <p className="font-sans text-[15px] leading-[1.6] text-ink-secondary">
              Three deployments specific to your firm's gaps. PDF in your inbox if you share contact details. Nothing if you don't.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
