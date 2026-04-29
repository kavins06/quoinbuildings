import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { ContactContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Contact Quoin",
  description:
    "Tell Quoin about your property or asset management firm, then book a call to discuss AI readiness, governance, and operations.",
  path: "/contact",
  image: "/header-contact.jpg",
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
