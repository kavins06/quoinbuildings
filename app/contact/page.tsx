import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { ContactContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Contact Quoin",
  description:
    "Tell Quoin about your firm, the AI pressure you are seeing, and the workflows where the work is hardest. We will decide together whether a 2-week Executive Diagnostic is the right next step.",
  path: "/contact",
  image: "/header-who-we-help.jpg",
  keywords: ["book AI consultation", "property management AI consultation", "real estate AI partner"],
})

export default function ContactPage() {
  return (
    <>
      <PageStructuredData name="Contact" path="/contact" />
      <ContactContent />
    </>
  )
}
