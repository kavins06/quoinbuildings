"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export interface UseMultiStepFormOptions<T extends Record<string, string>> {
  /** Total number of steps (= number of questions). */
  totalSteps: number
  /** Ordered list of answer keys (e.g. question ids) gating "canAdvance". */
  stepKeys: ReadonlyArray<keyof T>
  /** Called once per session when user lands on the synthetic "complete" step. */
  onComplete?: (answers: T) => void
  /** Whether to wire history.pushState / popstate. Default true. */
  syncHistory?: boolean
  /** Storage key prefix for history state (avoids collisions with other forms). */
  historyKey?: string
}

export interface UseMultiStepFormReturn<T extends Record<string, string>> {
  /** 0-based index of the current step. */
  currentStep: number
  /** Total step count. */
  totalSteps: number
  /** Map of answers gathered so far. */
  answers: T
  /** Set the value for a particular step key. */
  setAnswer: (key: keyof T, value: string) => void
  /** Move to the next step. No-op if already at last step or current step has no answer. */
  goNext: () => void
  /** Move to the previous step. No-op at step 0. */
  goBack: () => void
  /** Whether the current step has been answered (so "Continue" is enabled). */
  canAdvance: boolean
  /** True when currentStep === totalSteps (i.e. all steps complete + reveal). */
  isComplete: boolean
  /** Direct jump (clamped). Useful for tests and programmatic flow. */
  goTo: (step: number) => void
  /** Reset everything to step 0 with empty answers. */
  reset: () => void
}

/**
 * Multi-step form state machine. State lives in `useState` (lost on refresh,
 * per design doc).
 *
 * History integration: when `syncHistory` is true, navigating forward calls
 * `history.pushState` so the browser back button maps to "previous step".
 * `popstate` listens for back navigation and calls `goBack` rather than
 * leaving the page outright. SSR-safe (history calls are no-op'd server-side).
 */
export function useMultiStepForm<T extends Record<string, string>>(
  options: UseMultiStepFormOptions<T>,
): UseMultiStepFormReturn<T> {
  const {
    totalSteps,
    stepKeys,
    onComplete,
    syncHistory = true,
    historyKey = "quoin-assessment",
  } = options

  if (totalSteps < 1) {
    throw new Error("useMultiStepForm requires totalSteps >= 1")
  }
  if (stepKeys.length !== totalSteps) {
    // Soft warning: enables flexible misuse but still useful for catching bugs.
    // We don't throw because a later step may legitimately be a non-question step.
  }

  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<T>({} as T)
  const completeFiredRef = useRef(false)

  const isComplete = currentStep >= totalSteps

  const currentKey = stepKeys[currentStep] as keyof T | undefined
  const canAdvance = !!currentKey && !!answers[currentKey] && answers[currentKey] !== ""

  const setAnswer = useCallback((key: keyof T, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }, [])

  const goTo = useCallback(
    (step: number) => {
      const next = Math.max(0, Math.min(totalSteps, step))
      setCurrentStep((prev) => {
        if (prev === next) return prev
        if (syncHistory && typeof window !== "undefined") {
          window.history.pushState({ formKey: historyKey, step: next }, "")
        }
        return next
      })
    },
    [totalSteps, syncHistory, historyKey],
  )

  const goNext = useCallback(() => {
    setCurrentStep((prev) => {
      if (prev >= totalSteps) return prev
      const key = stepKeys[prev] as keyof T | undefined
      if (key && (!answers[key] || answers[key] === "")) {
        return prev
      }
      const next = prev + 1
      if (syncHistory && typeof window !== "undefined") {
        window.history.pushState({ formKey: historyKey, step: next }, "")
      }
      return next
    })
  }, [answers, stepKeys, totalSteps, syncHistory, historyKey])

  const goBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(0, prev - 1))
  }, [])

  const reset = useCallback(() => {
    setCurrentStep(0)
    setAnswers({} as T)
    completeFiredRef.current = false
  }, [])

  // Wire popstate to goBack so the browser back button rewinds the form
  // instead of unloading the page.
  useEffect(() => {
    if (!syncHistory || typeof window === "undefined") return
    function handlePopState(event: PopStateEvent) {
      const state = (event.state ?? {}) as { formKey?: string; step?: number }
      if (state.formKey !== historyKey) return
      const target = typeof state.step === "number" ? state.step : 0
      setCurrentStep((prev) => (target < prev ? Math.max(0, target) : prev))
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [syncHistory, historyKey])

  // Fire onComplete exactly once when crossing into the "complete" sentinel.
  useEffect(() => {
    if (isComplete && !completeFiredRef.current) {
      completeFiredRef.current = true
      onComplete?.(answers)
    }
    if (!isComplete) {
      completeFiredRef.current = false
    }
  }, [isComplete, onComplete, answers])

  return useMemo(
    () => ({
      currentStep,
      totalSteps,
      answers,
      setAnswer,
      goNext,
      goBack,
      canAdvance,
      isComplete,
      goTo,
      reset,
    }),
    [currentStep, totalSteps, answers, setAnswer, goNext, goBack, canAdvance, isComplete, goTo, reset],
  )
}
