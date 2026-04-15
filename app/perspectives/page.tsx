import type { Metadata } from "next"
import { PerspectivesContent } from "./content"

export const metadata: Metadata = {
  title: "Perspectives — Quoin",
  description: "Original perspectives on AI adoption, governance, and the future of property management technology.",
}

export default function PerspectivesPage() {
  return <PerspectivesContent />
}
