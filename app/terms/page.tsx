import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { TermsContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the Quoin Buildings website.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <>
      <PageStructuredData name="Terms of Service" path="/terms" />
      <TermsContent />
    </>
  )
}
