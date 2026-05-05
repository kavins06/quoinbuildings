import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { PlatformContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "Private Operating Intelligence Workspace",
  description:
    "Quoin's intelligence platform turns operating evidence into the build and management layer for AI agents Quoin builds, deploys, governs, and manages.",
  path: "/platform",
  image: "/hero-bg.jpg",
  keywords: [
    "operating intelligence workspace",
    "real estate AI platform",
    "AI readiness workspace",
    "workflow intelligence platform",
    "managed AI operations platform",
  ],
})

export default function PlatformPage() {
  return (
    <>
      <PageStructuredData name="Intelligence Platform" path="/platform" />
      <PlatformContent />
    </>
  )
}
