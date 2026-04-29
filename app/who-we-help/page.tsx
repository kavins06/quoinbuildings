import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { WhoWeHelpContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Who We Help",
  description:
    "AI adoption and operations for property and asset management firms with multi-property operational complexity.",
  path: "/who-we-help",
  image: "/header-who-we-help.jpg",
  keywords: ["AI adoption property management", "AI operations asset management", "property management AI firms"],
})

export default function WhoWeHelpPage() {
  return (
    <>
      <PageStructuredData name="Who We Help" path="/who-we-help" />
      <WhoWeHelpContent />
    </>
  )
}
