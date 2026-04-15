import type { Metadata } from "next"
import { ServicesContent } from "./content"

export const metadata: Metadata = {
  title: "Services — Quoin",
  description: "AI strategy, custom agent development, governance architecture, and managed operations for property management firms.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
