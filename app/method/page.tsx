import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { MethodContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "Method for Governed Real Estate AI",
  description:
    "Quoin's conservative operating method maps workflows, sources, owners, approvals, exceptions, controls, and value, then defines the governed build path for AI agents.",
  path: "/method",
  image: "/hero-bg.jpg",
  keywords: [
    "real estate AI method",
    "AI governance workflow mapping",
    "AI readiness gates",
    "operating intelligence real estate",
    "governed AI agents real estate",
  ],
})

export default function MethodPage() {
  return (
    <>
      <PageStructuredData name="Method" path="/method" />
      <MethodContent />
    </>
  )
}
