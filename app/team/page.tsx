import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { TeamContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Team",
  description:
    "Meet the Quoin leadership team bridging AI engineering, governance, cybersecurity, data readiness, and property management operations.",
  path: "/team",
  image: "/header-team.jpg",
  keywords: ["Quoin team", "property management AI team", "real estate AI operators"],
})

export default function TeamPage() {
  return (
    <>
      <PageStructuredData name="Team" path="/team" />
      <TeamContent />
    </>
  )
}
