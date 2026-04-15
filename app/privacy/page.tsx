import type { Metadata } from "next"
import { PrivacyContent } from "./content"

export const metadata: Metadata = {
  title: "Privacy Policy — Quoin",
  description: "How Quoin Buildings collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
