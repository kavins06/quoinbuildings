import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { TeamContent } from "./content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Team",
  description:
    "Meet the expert team behind Quoin's operating model, spanning real estate operations, AI architecture, governance, cybersecurity, deployment infrastructure, and data readiness.",
  path: "/team",
  image: "/header-team.jpg",
  keywords: [
    "Quoin team",
    "real estate AI team",
    "AI agents real estate team",
    "managed AI operations team",
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
