import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "Five-minute diagnostic for owner/operators of real estate. See where your firm's AI initiative stands and the three deployments that would move IRR.",
  robots: { index: true, follow: true },
}

/**
 * Assessment-specific layout. Inherits the root layout's nav, footer, fonts.
 * Adds a focused container for the multi-step form so header chrome is minimal.
 */
export default function AssessmentLayout({ children }: { children: ReactNode }) {
  return <div className="bg-background min-h-[calc(100svh-64px)]">{children}</div>
}
