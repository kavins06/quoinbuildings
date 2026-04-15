import type { Metadata } from "next"
import { ApproachContent } from "./content"

export const metadata: Metadata = {
  title: "Approach — Quoin",
  description: "A structured methodology designed to deliver initial measurable results within 90 days. From discovery to ongoing AI operations.",
}

export default function ApproachPage() {
  return <ApproachContent />
}
