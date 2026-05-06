import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { PlatformContent } from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "Operating Intelligence Platform",
  description:
    "A governed semantic layer that makes one workflow queryable, then another. Source inventory, canonical entities, semantic and truth layer, document and knowledge layer, permissions, observability, and the agent layer that sits on top.",
  path: "/platform",
  image: "/hero-bg.jpg",
  keywords: [
    "operating intelligence platform",
    "real estate AI platform",
    "minimum viable foundry",
    "governed semantic layer",
    "managed AI operations platform",
    "truth profile AI",
  ],
})

export default function PlatformPage() {
  return (
    <>
      <PageStructuredData name="Operating Intelligence Platform" path="/platform" />
      <PlatformContent />
    </>
  )
}
