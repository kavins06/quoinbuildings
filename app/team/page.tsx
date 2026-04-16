import type { Metadata } from "next"
import { TeamContent } from "./content"

export const metadata: Metadata = {
  title: "Team | Quoin",
  description: "Meet the Quoin leadership team — experienced operators bridging AI technology and property management operations.",
}

export default function TeamPage() {
  return <TeamContent />
}
