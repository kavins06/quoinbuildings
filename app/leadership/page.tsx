import type { Metadata } from "next"
import { LeadershipContent } from "./content"

export const metadata: Metadata = {
  title: "Leadership — Quoin",
  description: "Real estate professionals. Enterprise technologists. AI engineers. The team behind Quoin.",
}

export default function LeadershipPage() {
  return <LeadershipContent />
}
