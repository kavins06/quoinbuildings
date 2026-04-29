import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { ApproachContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "AI Adoption Approach",
  description:
    "A structured methodology for AI adoption in property management, from discovery and workflow design to deployment and ongoing AI operations.",
  path: "/approach",
  image: "/header-approach.jpg",
  keywords: ["AI adoption approach", "property management AI roadmap", "real estate AI implementation"],
})

export default function ApproachPage() {
  return (
    <>
      <PageStructuredData name="Approach" path="/approach" />
      <ApproachContent />
    </>
  )
}
