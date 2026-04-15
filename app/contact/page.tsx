import type { Metadata } from "next"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact — Quoin",
  description: "Schedule a 30-minute conversation. No pitch. No pressure.",
}

export default function ContactPage() {
  return <ContactContent />
}
