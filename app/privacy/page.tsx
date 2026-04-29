import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { PrivacyContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How Quoin Buildings collects, uses, and protects information submitted through the website.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <>
      <PageStructuredData name="Privacy Policy" path="/privacy" />
      <PrivacyContent />
    </>
  )
}
