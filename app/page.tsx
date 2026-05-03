import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { WhySection } from "@/components/why-section"
import { PromiseSection } from "@/components/promise-section"
import { AssessmentOfferSection } from "@/components/assessment-offer-section"
import { EditorialBreak } from "@/components/editorial-break"
import { PerspectivesTeaser } from "@/components/perspectives-teaser"
import { ContactSection } from "@/components/contact-section"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Quoin | AI for Real Estate Owner/Operators",
  description:
    "Quoin discovers, implements, and manages AI for owner/operators of real estate. Senior, vendor-neutral, accountable to outcomes — across the seam between asset decisions and operations.",
  path: "/",
  image: "/hero-bg.jpg",
  keywords: [
    "AI for real estate owner/operators",
    "AI operating partner",
    "AI for vertically integrated REITs",
    "AI readiness real estate",
    "managed AI operations",
  ],
  absoluteTitle: true,
})

export default function Page() {
  return (
    <>
      {/* 1. Hero — recognition */}
      <Hero />

      {/* 2. Pain — validation */}
      <WhySection />

      {/* 3. Promise — relief (Discover / Implement / Manage) */}
      <PromiseSection />

      {/* 4. Assessment offer band — engagement hook to /assessment */}
      <AssessmentOfferSection />

      {/* 5. Proof — credibility (existing logo wall + perspectives) */}
      <EditorialBreak />
      <PerspectivesTeaser />

      {/* 6. Final CTA — commitment */}
      <ContactSection />
    </>
  )
}
