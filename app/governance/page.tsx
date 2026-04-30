import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { GovernanceContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "AI Governance for Property and Asset Management",
  description:
    "Quoin's AI governance framework: anti-discrimination compliance, data privacy, audit trails, bias monitoring, and access control across property and asset management.",
  path: "/governance",
  image: "/header-approach.jpg",
  keywords: [
    "AI governance property management",
    "AI governance asset management",
    "real estate AI compliance",
    "AI audit trails real estate",
  ],
})

export default function GovernancePage() {
  return (
    <>
      <PageStructuredData name="Governance" path="/governance" />
      <GovernanceContent />
    </>
  )
}
