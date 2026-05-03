"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"
import type { ScoringResult } from "@/lib/assessment-scoring"
import { LeadCaptureForm } from "./lead-capture-form"

interface ScoreRevealProps {
  scoring: ScoringResult
  interpretation: string
  answers: Record<string, string>
}

export function ScoreReveal({ scoring, interpretation, answers }: ScoreRevealProps) {
  const reduced = useReducedMotion()
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <div>
      {/* a11y: assertive announcement of the result */}
      <p className="sr-only" aria-live="assertive">
        Your AI Readiness score is {scoring.score.toFixed(1)} out of 5. {interpretation}
      </p>

      <p className="text-[11px] tracking-[0.16em] uppercase text-accent mb-4">
        Your AI Readiness score
      </p>

      <h1
        ref={headingRef}
        tabIndex={-1}
        className="font-serif leading-none mb-2 text-balance focus:outline-none"
        style={{ fontVariantNumeric: "tabular-nums", fontSize: "clamp(80px, 14vw, 150px)" }}
      >
        <span aria-hidden>{scoring.score.toFixed(1)}</span>
        <span className="text-ink-muted text-[0.4em] align-middle ml-2">/ 5.0</span>
      </h1>

      <p className="font-serif italic text-xl md:text-2xl text-ink-primary leading-snug max-w-[60ch] mb-3">
        {interpretation}
      </p>

      <p className="font-sans text-ink-secondary mb-12">
        You're ahead of <span className="font-medium text-ink-primary tabular-nums">{scoring.benchmarkPercentile}%</span> of owner/operator firms we benchmark.
      </p>

      <div className="border-t border-[hsl(var(--border-subtle))] pt-12 mb-16">
        <p className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-4">
          Three deployments that fit your firm
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--border-subtle))] border-l border-r border-[hsl(var(--border-subtle))]">
          {scoring.recommendations.map((rec, idx) => (
            <motion.article
              key={rec.id}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 * idx }}
              className="bg-background p-6 md:p-7 border-t border-b border-[hsl(var(--border-subtle))]"
            >
              <p className="text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-3">
                {rec.effortLabel}
              </p>
              <h3 className="font-serif text-2xl leading-tight mb-3">{rec.title}</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-ink-secondary">
                {rec.rationale}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      <LeadCaptureForm answers={answers} />

      <div className="mt-16 pt-10 border-t border-[hsl(var(--border-subtle))]">
        <p className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-3">
          Already convinced?
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 font-sans text-base text-ink-primary border-b border-ink-primary pb-1 hover:text-accent hover:border-accent transition-colors duration-200"
        >
          <span>Skip ahead and book a readiness conversation</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
