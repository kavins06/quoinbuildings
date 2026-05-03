import Link from "next/link"
import { ASSESSMENT_RESULT_LOST } from "../content"

export const metadata = {
  title: "Assessment Result",
  robots: { index: false, follow: false },
}

/**
 * /assessment/result is a fallback URL.
 *
 * The score reveal is rendered in-place by `AssessmentShell` (see
 * `/assessment/page.tsx`), where users normally see results. This
 * route exists for users who deep-link or refresh once they get there. We
 * lose the in-memory state on refresh by design (see Engineering Review
 * Addendum, "State persistence: in-memory only"), so this page sends them
 * back to start the quiz fresh.
 */
export default function AssessmentResultPage() {
  return (
    <section className="container-shell py-20 md:py-32 max-w-[820px]">
      <p className="text-[11px] tracking-[0.16em] uppercase text-accent mb-4">
        Session expired
      </p>
      <h1 className="font-serif text-[clamp(36px,5vw,60px)] leading-[1.1] tracking-[-0.025em] mb-6 text-balance">
        {ASSESSMENT_RESULT_LOST.headline}
      </h1>
      <p className="font-sans text-lg leading-[1.6] text-ink-secondary max-w-[60ch] mb-10">
        {ASSESSMENT_RESULT_LOST.body}
      </p>
      <Link
        href="/assessment"
        className="group inline-flex items-center gap-2 font-sans text-base font-medium text-accent border-b border-accent pb-1 hover:text-ink-primary hover:border-ink-primary transition-colors"
      >
        <span>{ASSESSMENT_RESULT_LOST.cta}</span>
        <span aria-hidden>&rarr;</span>
      </Link>
    </section>
  )
}
