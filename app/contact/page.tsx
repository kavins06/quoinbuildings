import type { Metadata } from "next"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact | Quoin",
  description: "Tell us about your firm, then book a 1-hour call on Kavin's calendar. No pitch. No pressure.",
}

export default function ContactPage() {
  return <ContactContent />
}
