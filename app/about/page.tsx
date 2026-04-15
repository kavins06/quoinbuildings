import type { Metadata } from "next"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About �� Quoin",
  description: "Quoin is an AI operating partner for property management, purpose-built to close the gap between AI ambition and operational reality.",
}

export default function AboutPage() {
  return <AboutContent />
}
