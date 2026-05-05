import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { ContactContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Contact Quoin",
  description:
    "Discuss where AI can create operating value for your real estate company, from NOI and staff leverage to governance, risk, and portfolio signal.",
  path: "/contact",
  image: "/contact-hero.jpg",
  keywords: ["book AI consultation", "real estate AI agents", "organizational intelligence real estate"],
})

export default function ContactPage() {
  return (
    <>
      <PageStructuredData name="Contact" path="/contact" />
      <ContactContent />
    </>
  )
}
