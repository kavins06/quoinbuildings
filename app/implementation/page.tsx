import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { ImplementationContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "Operating Implementation",
  description:
    "Post-approval build of the Operating Intelligence Platform's first wedge — a Minimum Viable Foundry — and the agents on top of it. Built in your environment with eval harnesses, guardrails, observability, and a documented release process.",
  path: "/implementation",
  image: "/hero-bg.jpg",
  keywords: [
    "AI implementation real estate",
    "operating intelligence platform build",
    "minimum viable foundry build",
    "AI agent build pilot",
    "AI eval guardrail observability",
  ],
})

export default function ImplementationPage() {
  return (
    <>
      <PageStructuredData name="Operating Implementation" path="/implementation" />
      <ImplementationContent />
    </>
  )
}
