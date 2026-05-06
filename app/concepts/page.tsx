import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { ConceptsContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "Concepts",
  description:
    "The vocabulary behind operating-grade AI: truth profiles, the Operating Intelligence Platform layers, the Minimum Viable Foundry, the Agent Safety Ladder, the five readiness paths, and the three named kill points.",
  path: "/concepts",
  image: "/hero-bg.jpg",
  keywords: [
    "truth profile AI",
    "operating intelligence ontology",
    "agent safety ladder",
    "minimum viable foundry",
    "AI readiness paths",
    "AI governance vocabulary",
  ],
})

export default function ConceptsPage() {
  return (
    <>
      <PageStructuredData name="Concepts" path="/concepts" />
      <ConceptsContent />
    </>
  )
}
