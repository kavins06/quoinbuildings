import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { TechnologyLeadersContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "For Technology Leaders",
  description:
    "Six questions every CIO asks before authorizing AI work, answered. Production credentials, environment posture, complementary stack, model lock-in, training-data posture, and security review path for the Operating Intelligence Platform.",
  path: "/technology-leaders",
  image: "/hero-bg.jpg",
  keywords: [
    "AI governance for CIOs",
    "real estate AI security",
    "CISO AI approval",
    "enterprise AI architecture",
    "AI vendor due diligence",
    "AI complementary stack",
  ],
})

export default function TechnologyLeadersPage() {
  return (
    <>
      <PageStructuredData name="For Technology Leaders" path="/technology-leaders" />
      <TechnologyLeadersContent />
    </>
  )
}
