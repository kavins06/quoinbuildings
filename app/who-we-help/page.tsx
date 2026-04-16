import type { Metadata } from "next"
import { WhoWeHelpContent } from "./content"

export const metadata: Metadata = {
  title: "Who We Help | Quoin",
  description: "AI adoption and operations for mid-market property management firms managing 2,000 to 50,000 units.",
}

export default function WhoWeHelpPage() {
  return <WhoWeHelpContent />
}
