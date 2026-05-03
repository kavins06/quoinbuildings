/**
 * Per-page copy for /assessment surfaces. Kept separate from the page.tsx
 * file so that the route component stays free of long marketing strings.
 */

export const ASSESSMENT_INTRO = {
  eyebrow: "AI Readiness Assessment",
  headline: "Where does your firm stand on AI?",
  subhead:
    "A five-minute diagnostic for owner/operators. Seven questions, one score, three deployments specific to your firm. No sign-up to take it.",
  startCta: "Begin the assessment",
  meta: "~ 5 minutes | 7 questions | in-browser, nothing saved unless you choose to send it",
} as const

export const ASSESSMENT_RESULT_LOST = {
  headline: "Your assessment session expired.",
  body:
    "Scores are computed in your browser and not stored. Take it again. It takes five minutes, and we'll surface your three recommendations and the option to email yourself the PDF.",
  cta: "Take the assessment",
} as const
