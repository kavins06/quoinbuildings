import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { AccessibilityContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Accessibility",
  description: "Quoin's commitment to digital accessibility and WCAG 2.2 AA conformance.",
  path: "/accessibility",
})

export default function AccessibilityPage() {
  return (
    <>
      <PageStructuredData name="Accessibility" path="/accessibility" />
      <AccessibilityContent />
    </>
  )
}
