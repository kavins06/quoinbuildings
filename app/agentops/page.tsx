import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { AgentOpsContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "Managed AgentOps",
  description:
    "We do not just deliver agents. We operate them. Eval regression, source freshness, access review, prompt and tool change control, incident response, expansion or retirement. Three lifecycle variants under one operating contract.",
  path: "/agentops",
  image: "/hero-bg.jpg",
  keywords: [
    "managed agentops",
    "AI agent operations",
    "AI lifecycle management",
    "AI eval regression",
    "AI incident response",
    "real estate AI operations",
  ],
})

export default function AgentOpsPage() {
  return (
    <>
      <PageStructuredData name="Managed AgentOps" path="/agentops" />
      <AgentOpsContent />
    </>
  )
}
