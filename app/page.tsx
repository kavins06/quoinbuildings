import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ProofStrip } from "@/components/proof-strip"
import { ProjectsSection } from "@/components/projects-section"
import { EditorialBreak } from "@/components/editorial-break"
import { WhySection } from "@/components/why-section"
import { PrinciplesSection } from "@/components/principles-section"
import { StudioSection } from "@/components/studio-section"
import { ApproachSection } from "@/components/approach-section"
import { PerspectivesTeaser } from "@/components/perspectives-teaser"
import { ContactSection } from "@/components/contact-section"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Quoin | Your AI Operating Partner",
  description:
    "Quoin helps institutional real estate operators—REITs, owner-operators, property management firms, and asset managers—make AI operational, governed, and measurable inside leasing, maintenance, accounting, and reporting workflows.",
  path: "/",
  image: "/hero-bg.jpg",
  keywords: [
    "AI operating partner",
    "AI for property management",
    "AI for asset management",
    "managed AI operations",
  ],
  absoluteTitle: true,
})

export default function Page() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <ProjectsSection />
      <WhySection />
      <StudioSection />
      <PrinciplesSection />
      <ApproachSection />
      <EditorialBreak />
      <PerspectivesTeaser />
      <ContactSection />
    </main>
  )
}
