/**
 * Quoin AI Readiness Assessment: pure scoring algorithm.
 *
 * Deterministic. No side effects. Property-tested in
 * `lib/__tests__/assessment-scoring.test.ts`.
 *
 * Algorithm:
 *  1. Each answered question maps to a weight in 1..4.
 *  2. Average the weights across answered questions.
 *  3. Linearly map the 1..4 average to the 1.0..5.0 score range and round to
 *     one decimal.
 *  4. Benchmark percentile is a deterministic function of the score
 *     (1.0 -> 0%, 3.0 -> 50%, 5.0 -> 100%).
 *  5. Pick the three most relevant recommendations from the static pool. Recs
 *     fire when one of their topics scored at-or-below the rec's threshold;
 *     ties broken by priority. If fewer than three rec candidates fire, fill
 *     from the remaining pool ordered by priority.
 */

import { QUESTIONS, RECOMMENDATIONS, type EffortLabel, type Question, type RecommendationDef } from "./assessment-questions"

export const SCORING_VERSION = "1.0.0"

export interface AssessmentAnswers {
  [questionId: string]: string
}

export interface Recommendation {
  id: string
  title: string
  rationale: string
  effortLabel: EffortLabel
}

export interface ScoringResult {
  score: number
  benchmarkPercentile: number
  recommendations: Recommendation[]
  scoringVersion: string
}

const QUESTION_BY_ID = new Map<string, Question>(QUESTIONS.map((q) => [q.id, q]))

const RECOMMENDATIONS_BY_PRIORITY: RecommendationDef[] = [...RECOMMENDATIONS].sort(
  (a, b) => a.priority - b.priority,
)

/** Round a number to N decimal places using half-up rounding. */
function roundTo(value: number, decimals: number): number {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}

/** Look up the weight for a given question's selected option. Returns null if unknown. */
function weightFor(questionId: string, optionId: string): number | null {
  const q = QUESTION_BY_ID.get(questionId)
  if (!q) return null
  const opt = q.options.find((o) => o.id === optionId)
  if (!opt) return null
  return opt.weight
}

/** Build a topic -> weight map from the answers. Missing answers omitted. */
function topicWeights(answers: AssessmentAnswers): Map<Question["topic"], number> {
  const out = new Map<Question["topic"], number>()
  for (const [qId, optId] of Object.entries(answers)) {
    const q = QUESTION_BY_ID.get(qId)
    if (!q) continue
    const w = weightFor(qId, optId)
    if (w == null) continue
    out.set(q.topic, w)
  }
  return out
}

/** Compute the raw average weight (1..4) across answered, recognized questions. */
function averageWeight(answers: AssessmentAnswers): number {
  const weights: number[] = []
  for (const [qId, optId] of Object.entries(answers)) {
    const w = weightFor(qId, optId)
    if (w == null) continue
    weights.push(w)
  }
  if (weights.length === 0) {
    throw new Error("ASSESSMENT_NO_VALID_ANSWERS")
  }
  const sum = weights.reduce((a, b) => a + b, 0)
  return sum / weights.length
}

/** Map a 1..4 average weight to a 1.0..5.0 score (clamped + rounded to 1dp). */
export function weightToScore(avg: number): number {
  // Linear map: 1 -> 1.0, 4 -> 5.0
  const raw = 1 + ((avg - 1) / 3) * 4
  const clamped = Math.min(5, Math.max(1, raw))
  return roundTo(clamped, 1)
}

/**
 * Map a 1.0..5.0 score to a 0..100 benchmark percentile.
 * Score 1.0 -> 0%, 3.0 -> 50%, 5.0 -> 100%. Linear and deterministic.
 */
export function scoreToPercentile(score: number): number {
  const clamped = Math.min(5, Math.max(1, score))
  return Math.round(((clamped - 1) / 4) * 100)
}

/** Stable sort that doesn't mutate its input. */
function sortedBy<T>(arr: T[], key: (t: T) => number): T[] {
  return arr
    .map((value, index) => ({ value, index }))
    .sort((a, b) => key(a.value) - key(b.value) || a.index - b.index)
    .map((x) => x.value)
}

/**
 * Pick exactly 3 recommendations.
 *
 * Selection rules:
 *  1. A rec is a "candidate" if any of its `topics` was answered at-or-below
 *     `triggerAtOrBelow`.
 *  2. Candidates are sorted by `priority` ascending, taking the top 3.
 *  3. If fewer than 3 candidates fire, fill from the remaining recs ordered
 *     by priority (so a maxed-out firm still gets 3 strategic suggestions).
 *  4. Stable across calls; deterministic.
 */
function pickRecommendations(answers: AssessmentAnswers): RecommendationDef[] {
  const topicMap = topicWeights(answers)

  const candidates: RecommendationDef[] = []
  const remainder: RecommendationDef[] = []

  for (const rec of RECOMMENDATIONS_BY_PRIORITY) {
    const fires = rec.topics.some((t) => {
      const w = topicMap.get(t)
      if (w == null) return false
      return w <= rec.triggerAtOrBelow
    })
    if (fires) {
      candidates.push(rec)
    } else {
      remainder.push(rec)
    }
  }

  const sortedCandidates = sortedBy(candidates, (r) => r.priority)
  const sortedRemainder = sortedBy(remainder, (r) => r.priority)

  const picked: RecommendationDef[] = []
  for (const r of sortedCandidates) {
    if (picked.length >= 3) break
    if (!picked.find((p) => p.id === r.id)) picked.push(r)
  }
  for (const r of sortedRemainder) {
    if (picked.length >= 3) break
    if (!picked.find((p) => p.id === r.id)) picked.push(r)
  }

  return picked
}

function toRecommendation(def: RecommendationDef): Recommendation {
  return {
    id: def.id,
    title: def.title,
    rationale: def.rationale,
    effortLabel: def.effortLabel,
  }
}

/**
 * Score an assessment. Pure: same input always returns equal output.
 */
export function scoreAssessment(answers: AssessmentAnswers): ScoringResult {
  if (!answers || typeof answers !== "object") {
    throw new Error("ASSESSMENT_INVALID_ANSWERS")
  }

  const avg = averageWeight(answers)
  const score = weightToScore(avg)
  const benchmarkPercentile = scoreToPercentile(score)
  const recommendations = pickRecommendations(answers).map(toRecommendation)

  if (score < 1 || score > 5 || Number.isNaN(score)) {
    throw new Error("ASSESSMENT_SCORE_OUT_OF_RANGE")
  }
  if (recommendations.length !== 3) {
    throw new Error("ASSESSMENT_RECOMMENDATIONS_COUNT")
  }

  return {
    score,
    benchmarkPercentile,
    recommendations,
    scoringVersion: SCORING_VERSION,
  }
}

/** Short interpretation sentence. Used by score reveal + PDF cover. */
export function scoreInterpretation(score: number): string {
  if (score < 2) {
    return "You're at the very start of the AI conversation. The good news: there's a clear path."
  }
  if (score < 3) {
    return "You've started thinking about AI but the foundation isn't in place yet."
  }
  if (score < 4) {
    return "You're past the starting line. The work now is converting strategy into deployments that move IRR."
  }
  if (score < 4.5) {
    return "You're ahead of most owner/operators. The next step is operating leverage at the seam between asset and ops."
  }
  return "You're operating at the frontier of what owner/operators are doing with AI."
}
