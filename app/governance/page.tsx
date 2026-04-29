import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { GovernanceContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "AI Governance for Property Management",
  description:
    "Quoin's AI governance framework for property management: fair housing, data privacy, audit trails, bias monitoring, and access control.",
  path: "/governance",
  image: "/header-approach.jpg",
  keywords: ["AI governance property management", "fair housing AI compliance", "real estate AI governance"],
})

export default function GovernancePage() {
  return (
    <>
      <PageStructuredData name="Governance" path="/governance" />
      <GovernanceContent />
    </>
  )
}
