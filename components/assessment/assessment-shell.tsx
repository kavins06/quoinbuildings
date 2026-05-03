"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { QUESTIONS } from "@/lib/assessment-questions"
import { useMultiStepForm } from "@/lib/use-multi-step-form"
import { scoreAssessment, scoreInterpretation, type ScoringResult } from "@/lib/assessment-scoring"
import { QuestionStep } from "./question-step"
import { ScoreReveal } from "./score-reveal"

type Answers = Record<string, string>

export function AssessmentShell() {
  const stepKeys = useMemo(() => QUESTIONS.map((q) => q.id), [])

  const form = useMultiStepForm<Answers>({
    totalSteps: QUESTIONS.length,
    stepKeys,
    historyKey: "quoin-assessment",
  })

  const [showAdvanceError, setShowAdvanceError] = useState(false)
  const [scoring, setScoring] = useState<ScoringResult | null>(null)
  const [scoringError, setScoringError] = useState<string | null>(null)

  const totalQuestions = QUESTIONS.length
  const isOnQuestion = !form.isComplete
  const currentQuestion = isOnQuestion ? QUESTIONS[form.currentStep] : null
  const currentAnswerId = currentQuestion ? form.answers[currentQuestion.id] ?? null : null

  const progressPct = form.isComplete ? 100 : (form.currentStep / totalQuestions) * 100

  function handleSelect(optionId: string) {
    if (!currentQuestion) return
    setShowAdvanceError(false)
    form.setAnswer(currentQuestion.id, optionId)
  }

  function handleContinue() {
    if (!form.canAdvance) {
      setShowAdvanceError(true)
      return
    }
    setShowAdvanceError(false)
    const isLast = form.currentStep === totalQuestions - 1
    form.goNext()

    if (isLast) {
      // Score now (synchronously) so the score shows up in the DOM as soon as
      // the next paint runs, preserving the always-show-score principle.
      try {
        const next = { ...form.answers, [currentQuestion!.id]: form.answers[currentQuestion!.id] }
        const result = scoreAssessment(next)
        setScoring(result)
      } catch (err) {
        setScoringError(String((err as Error).message ?? "Couldn't score answers"))
      }
    }
  }

  function handleBack() {
    setShowAdvanceError(false)
    form.goBack()
  }

  return (
    <div className="min-h-[100svh] bg-background text-ink-primary flex flex-col">
      {/* Hairline progress indicator */}
      <div
        className="sticky top-0 z-30 bg-background"
        role="progressbar"
        aria-label="Assessment progress"
        aria-valuenow={Math.round(progressPct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-px bg-[hsl(var(--border-subtle))]">
          <motion.div
            className="h-px bg-accent"
            initial={false}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </div>
        <div className="container-shell flex items-center justify-between py-3">
          <p className="text-[11px] tracking-[0.16em] uppercase text-ink-muted">
            AI Readiness Assessment
          </p>
          <p
            className="text-[11px] tracking-[0.16em] uppercase text-ink-muted"
            aria-live="polite"
            aria-atomic="true"
          >
            {form.isComplete
              ? `Complete`
              : `Question ${form.currentStep + 1} of ${totalQuestions}`}
          </p>
        </div>
      </div>

      <div className="container-shell flex-1 py-12 md:py-20 max-w-[820px]">
        <AnimatePresence mode="wait">
          {isOnQuestion && currentQuestion ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <QuestionStep
                question={currentQuestion}
                questionNumber={form.currentStep + 1}
                totalQuestions={totalQuestions}
                selectedOptionId={currentAnswerId}
                onSelect={handleSelect}
                errorMessage={showAdvanceError ? "Pick one to continue." : null}
              />

              <div className="mt-12 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={form.currentStep === 0}
                  className={[
                    "group inline-flex items-center gap-2 text-sm font-sans",
                    "border-b border-current pb-1",
                    form.currentStep === 0
                      ? "text-ink-muted/40 cursor-not-allowed border-transparent"
                      : "text-ink-secondary hover:text-ink-primary",
                  ].join(" ")}
                  aria-label="Back to previous question"
                >
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleContinue}
                  aria-disabled={!form.canAdvance}
                  className={[
                    "group inline-flex items-center gap-2 text-sm font-sans font-medium",
                    "border-b pb-1",
                    form.canAdvance
                      ? "text-accent border-accent hover:text-ink-primary hover:border-ink-primary"
                      : "text-ink-muted/50 border-transparent cursor-not-allowed",
                  ].join(" ")}
                >
                  <span>
                    {form.currentStep === totalQuestions - 1 ? "See your score" : "Continue"}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {scoringError ? (
                <ScoreFallback message={scoringError} />
              ) : scoring ? (
                <ScoreReveal
                  scoring={scoring}
                  interpretation={scoreInterpretation(scoring.score)}
                  answers={form.answers}
                />
              ) : (
                <div>
                  <p className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-3">
                    Calculating your score
                  </p>
                  <p className="font-serif text-3xl">A moment...</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function ScoreFallback({ message }: { message: string }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.16em] uppercase text-accent mb-3">
        We hit a snag
      </p>
      <h1 className="font-serif text-4xl mb-4 text-balance">
        We couldn't calculate your score. Email it to us instead.
      </h1>
      <p className="font-sans text-ink-secondary mb-6 max-w-[60ch]">
        Send a note to <a href="mailto:hi@quoinbuildings.com" className="text-accent border-b border-accent">hi@quoinbuildings.com</a> and we'll
        score it manually within 24 hours. Detail: <span className="text-ink-muted">{message}</span>
      </p>
    </div>
  )
}
