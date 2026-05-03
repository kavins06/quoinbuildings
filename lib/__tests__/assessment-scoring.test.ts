import { describe, it, expect } from "vitest"
import {
  scoreAssessment,
  weightToScore,
  scoreToPercentile,
  SCORING_VERSION,
  type AssessmentAnswers,
} from "@/lib/assessment-scoring"
import { QUESTIONS } from "@/lib/assessment-questions"

function buildAnswers(weight: 1 | 2 | 3 | 4): AssessmentAnswers {
  const answers: AssessmentAnswers = {}
  for (const q of QUESTIONS) {
    const opt = q.options.find((o) => o.weight === weight)
    if (!opt) throw new Error(`Question ${q.id} has no option with weight ${weight}`)
    answers[q.id] = opt.id
  }
  return answers
}

function pickByWeight(questionId: string, weight: 1 | 2 | 3 | 4): string {
  const q = QUESTIONS.find((q) => q.id === questionId)
  if (!q) throw new Error(`Unknown question ${questionId}`)
  const opt = q.options.find((o) => o.weight === weight)
  if (!opt) throw new Error(`No option with weight ${weight} for ${questionId}`)
  return opt.id
}

describe("scoring math", () => {
  it("weightToScore maps 1→1.0 and 4→5.0 linearly", () => {
    expect(weightToScore(1)).toBe(1.0)
    expect(weightToScore(4)).toBe(5.0)
    // midpoint
    expect(weightToScore(2.5)).toBe(3.0)
  })

  it("scoreToPercentile maps 1→0%, 3→50%, 5→100%", () => {
    expect(scoreToPercentile(1.0)).toBe(0)
    expect(scoreToPercentile(3.0)).toBe(50)
    expect(scoreToPercentile(5.0)).toBe(100)
  })
})

describe("scoreAssessment property tests", () => {
  // Iterate through every legal combination is too expensive; sample a
  // representative cross-product instead.
  const sampleAnswerSets: AssessmentAnswers[] = []
  for (const w1 of [1, 2, 3, 4] as const) {
    for (const w2 of [1, 2, 3, 4] as const) {
      for (const w3 of [1, 2, 3, 4] as const) {
        const answers: AssessmentAnswers = {}
        QUESTIONS.forEach((q, i) => {
          const w = i % 3 === 0 ? w1 : i % 3 === 1 ? w2 : w3
          const opt = q.options.find((o) => o.weight === w)!
          answers[q.id] = opt.id
        })
        sampleAnswerSets.push(answers)
      }
    }
  }

  it("any valid set yields a score in [1.0, 5.0]", () => {
    for (const answers of sampleAnswerSets) {
      const result = scoreAssessment(answers)
      expect(result.score).toBeGreaterThanOrEqual(1.0)
      expect(result.score).toBeLessThanOrEqual(5.0)
    }
  })

  it("any valid set returns exactly 3 recommendations", () => {
    for (const answers of sampleAnswerSets) {
      const result = scoreAssessment(answers)
      expect(result.recommendations).toHaveLength(3)
      // Recommendations are unique
      const ids = new Set(result.recommendations.map((r) => r.id))
      expect(ids.size).toBe(3)
    }
  })

  it("any valid set yields percentile in [0, 100]", () => {
    for (const answers of sampleAnswerSets) {
      const result = scoreAssessment(answers)
      expect(result.benchmarkPercentile).toBeGreaterThanOrEqual(0)
      expect(result.benchmarkPercentile).toBeLessThanOrEqual(100)
    }
  })

  it("idempotent: same input → same output across multiple calls", () => {
    const answers = buildAnswers(2)
    const a = scoreAssessment(answers)
    const b = scoreAssessment(answers)
    const c = scoreAssessment({ ...answers })
    expect(a).toEqual(b)
    expect(a).toEqual(c)
  })
})

describe("scoreAssessment specific cases", () => {
  it("all-min answers produce the minimum score and foundational recs", () => {
    const result = scoreAssessment(buildAnswers(1))
    expect(result.score).toBe(1.0)
    expect(result.benchmarkPercentile).toBe(0)
    expect(result.recommendations).toHaveLength(3)
    // The top-priority foundational recs should appear here.
    const ids = result.recommendations.map((r) => r.id)
    expect(ids).toContain("operator_data_normalization")
  })

  it("all-max answers produce the maximum score", () => {
    const result = scoreAssessment(buildAnswers(4))
    expect(result.score).toBe(5.0)
    expect(result.benchmarkPercentile).toBe(100)
    expect(result.recommendations).toHaveLength(3)
  })

  it("mid-maturity profile lands in the 3.x range", () => {
    // Realistic: started AI program, some data integration, no internal team,
    // hypotheses, exploratory board, ops focus, anecdotes only.
    const answers: AssessmentAnswers = {
      ai_initiative_state: pickByWeight("ai_initiative_state", 3),
      data_foundation: pickByWeight("data_foundation", 3),
      internal_capacity: pickByWeight("internal_capacity", 2),
      use_case_prioritization: pickByWeight("use_case_prioritization", 3),
      board_lp_signal: pickByWeight("board_lp_signal", 3),
      operating_leverage: pickByWeight("operating_leverage", 3),
      competitive_awareness: pickByWeight("competitive_awareness", 2),
    }
    const result = scoreAssessment(answers)
    expect(result.score).toBeGreaterThanOrEqual(2.5)
    expect(result.score).toBeLessThanOrEqual(4.0)
    expect(result.recommendations).toHaveLength(3)
  })

  it("scoring is stable for fixed input (snapshot at SCORING_VERSION)", () => {
    const answers = buildAnswers(2)
    const result = scoreAssessment(answers)
    expect(result).toMatchObject({
      score: 2.3,
      benchmarkPercentile: 32,
      scoringVersion: SCORING_VERSION,
    })
    expect(result.recommendations.map((r) => r.id)).toMatchSnapshot()
  })

  it("rejects empty answer object", () => {
    expect(() => scoreAssessment({})).toThrow()
  })

  it("ignores unknown question ids without throwing", () => {
    const answers: AssessmentAnswers = {
      ...buildAnswers(3),
      bogus_question: "bogus_option",
    }
    const result = scoreAssessment(answers)
    expect(result.score).toBeGreaterThanOrEqual(1.0)
    expect(result.score).toBeLessThanOrEqual(5.0)
  })
})
