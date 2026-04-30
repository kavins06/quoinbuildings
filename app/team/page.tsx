import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { TeamContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Team",
  description:
    "Meet the Quoin leadership team bridging AI engineering, governance, cybersecurity, data readiness, and property and asset management operations.",
  path: "/team",
  image: "/header-team.jpg",
  keywords: [
    "Quoin team",
    "real estate AI team",
    "property management AI operators",
    "asset management AI operators",
  ],
})

export default function TeamPage() {
  return (
    <>
      <PageStructuredData name="Team" path="/team" />
      <TeamContent />
    </>
  )
}
