"use client"

import { useEffect, useRef } from "react"
import type { Question } from "@/lib/assessment-questions"

interface QuestionStepProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedOptionId: string | null
  onSelect: (optionId: string) => void
  errorMessage?: string | null
  /** Forces focus to the heading on mount; honored on every step transition. */
  focusOnMount?: boolean
}

export function QuestionStep({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionId,
  onSelect,
  errorMessage,
  focusOnMount = true,
}: QuestionStepProps) {
  const headingRef = useRef<HTMLLegendElement>(null)

  useEffect(() => {
    if (focusOnMount && headingRef.current) {
      headingRef.current.focus()
    }
  }, [focusOnMount, question.id])

  const fieldsetId = `question-${question.id}`
  const errorId = `${fieldsetId}-error`

  return (
    <fieldset
      id={fieldsetId}
      className="border-0 p-0 m-0"
      aria-describedby={errorMessage ? errorId : undefined}
    >
      <p className="text-[11px] tracking-[0.16em] uppercase text-accent font-medium mb-3">
        {question.eyebrow}
      </p>
      <legend
        ref={headingRef}
        tabIndex={-1}
        className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.02em] text-ink-primary mb-4 text-balance focus:outline-none"
      >
        {question.prompt}
      </legend>
      {question.helper ? (
        <p className="font-sans text-[15px] leading-[1.6] text-ink-secondary mb-8 max-w-[68ch]">
          {question.helper}
        </p>
      ) : null}

      <div role="radiogroup" aria-labelledby={fieldsetId} className="flex flex-col">
        {question.options.map((option) => {
          const checked = selectedOptionId === option.id
          return (
            <label
              key={option.id}
              className={[
                "group flex items-start gap-4 cursor-pointer",
                "border-t border-[hsl(var(--border-subtle))] last:border-b",
                "py-5 md:py-4 min-h-[56px] md:min-h-[48px]",
                "transition-colors duration-150",
                checked ? "bg-[hsl(var(--surface-sunken))]" : "hover:bg-[hsl(var(--surface-sunken))]/50",
              ].join(" ")}
            >
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={checked}
                onChange={() => onSelect(option.id)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={[
                  "mt-1 inline-block w-3 h-3 shrink-0 border",
                  checked ? "bg-ink-primary border-ink-primary" : "border-ink-primary/40 group-hover:border-ink-primary",
                ].join(" ")}
              />
              <span className="font-sans text-[16px] md:text-[17px] leading-[1.55] text-ink-primary">
                {option.label}
              </span>
            </label>
          )
        })}
      </div>

      {errorMessage ? (
        <p id={errorId} className="mt-4 text-sm text-accent" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <p className="sr-only" aria-live="polite">
        Question {questionNumber} of {totalQuestions}
      </p>
    </fieldset>
  )
}
