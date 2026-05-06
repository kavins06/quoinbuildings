import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { DiagnosticContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "Operating Diagnostic",
  description:
    "Pre-build engagement that decides what AI belongs in the workflow. Five client touchpoints, seven umbrellas, one decision packet, one managed lifecycle object. No production credentials.",
  path: "/diagnostic",
  image: "/hero-bg.jpg",
  keywords: [
    "AI operating diagnostic",
    "AI readiness assessment",
    "AI discovery engagement",
    "real estate AI diagnostic",
    "implementation decision packet",
  ],
})

export default function DiagnosticPage() {
  return (
    <>
      <PageStructuredData name="Operating Diagnostic" path="/diagnostic" />
      <DiagnosticContent />
    </>
  )
}
