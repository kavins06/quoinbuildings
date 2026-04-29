import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { PerspectivesContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Perspectives on Property Management AI",
  description:
    "Original perspectives on AI adoption, governance, managed AI operations, and the future of property and asset management technology.",
  path: "/perspectives",
  image: "/header-perspectives.jpg",
  keywords: ["property management AI insights", "AI governance real estate", "AI adoption property management"],
})

export default function PerspectivesPage() {
  return (
    <>
      <PageStructuredData name="Perspectives" path="/perspectives" />
      <PerspectivesContent />
    </>
  )
}
