import type { Metadata } from "next"
import { AccessibilityContent } from "./content"

export const metadata: Metadata = {
  title: "Accessibility — Quoin",
  description: "Our commitment to digital accessibility and WCAG 2.2 AA conformance.",
}

export default function AccessibilityPage() {
  return <AccessibilityContent />
}
