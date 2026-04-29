import type { Metadata } from "next"
import { PerspectiveArticlePage } from "@/components/perspective-article-page"
import { createPageMetadata } from "@/lib/seo"
import { perspectiveArticlesBySlug } from "@/lib/seo-pages"

const article =
  perspectiveArticlesBySlug["the-governance-gap-why-property-management-firms-cant-scale-ai"]

export const metadata: Metadata = createPageMetadata({
  title: article.metaTitle,
  description: article.description,
  path: article.href,
  image: "/header-perspectives.jpg",
  keywords: [
    "AI governance property management",
    "fair housing AI compliance",
    "tenant data privacy AI",
    "property management AI compliance",
  ],
})

export default function GovernanceGapArticlePage() {
  return <PerspectiveArticlePage article={article} />
}
