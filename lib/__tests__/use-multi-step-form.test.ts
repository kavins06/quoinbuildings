import { describe, it, expect } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useMultiStepForm } from "@/lib/use-multi-step-form"

interface Answers {
  [k: string]: string
  q1: string
  q2: string
  q3: string
}

const STEP_KEYS: ReadonlyArray<keyof Answers> = ["q1", "q2", "q3"]

function setup() {
  return renderHook(() =>
    useMultiStepForm<Answers>({
      totalSteps: 3,
      stepKeys: STEP_KEYS,
      syncHistory: false,
    }),
  )
}

describe("useMultiStepForm", () => {
  it("starts at step 0 with empty answers and cannot advance", () => {
    const { result } = setup()
    expect(result.current.currentStep).toBe(0)
    expect(result.current.canAdvance).toBe(false)
    expect(result.current.isComplete).toBe(false)
  })

  it("setAnswer enables canAdvance for the current step", () => {
    const { result } = setup()
    act(() => result.current.setAnswer("q1", "a"))
    expect(result.current.canAdvance).toBe(true)
    expect(result.current.answers.q1).toBe("a")
  })

  it("forward navigation increments the step", () => {
    const { result } = setup()
    act(() => result.current.setAnswer("q1", "a"))
    act(() => result.current.goNext())
    expect(result.current.currentStep).toBe(1)
    // canAdvance should reset until next answer is provided.
    expect(result.current.canAdvance).toBe(false)
  })

  it("cannot advance past totalSteps", () => {
    const { result } = setup()
    act(() => result.current.setAnswer("q1", "a"))
    act(() => result.current.goNext())
    act(() => result.current.setAnswer("q2", "b"))
    act(() => result.current.goNext())
    act(() => result.current.setAnswer("q3", "c"))
    act(() => result.current.goNext())
    expect(result.current.currentStep).toBe(3)
    expect(result.current.isComplete).toBe(true)
    // Going beyond is a no-op
    act(() => result.current.goNext())
    expect(result.current.currentStep).toBe(3)
  })

  it("blocks goNext when current step is unanswered", () => {
    const { result } = setup()
    act(() => result.current.goNext())
    expect(result.current.currentStep).toBe(0)
  })

  it("back navigation preserves prior answers", () => {
    const { result } = setup()
    act(() => result.current.setAnswer("q1", "a"))
    act(() => result.current.goNext())
    act(() => result.current.setAnswer("q2", "b"))
    act(() => result.current.goBack())
    expect(result.current.currentStep).toBe(0)
    expect(result.current.answers.q1).toBe("a")
    expect(result.current.answers.q2).toBe("b")
  })

  it("cannot go back from step 0", () => {
    const { result } = setup()
    act(() => result.current.goBack())
    expect(result.current.currentStep).toBe(0)
  })

  it("reset clears state back to step 0", () => {
    const { result } = setup()
    act(() => result.current.setAnswer("q1", "a"))
    act(() => result.current.goNext())
    act(() => result.current.reset())
    expect(result.current.currentStep).toBe(0)
    expect(result.current.answers).toEqual({})
  })

  it("goTo clamps to [0, totalSteps]", () => {
    const { result } = setup()
    act(() => result.current.goTo(99))
    expect(result.current.currentStep).toBe(3)
    act(() => result.current.goTo(-5))
    expect(result.current.currentStep).toBe(0)
  })
})
