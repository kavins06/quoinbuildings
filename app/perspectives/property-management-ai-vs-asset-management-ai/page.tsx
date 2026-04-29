import type { Metadata } from "next"
import { PerspectiveArticlePage } from "@/components/perspective-article-page"
import { createPageMetadata } from "@/lib/seo"
import { perspectiveArticlesBySlug } from "@/lib/seo-pages"

const article = perspectiveArticlesBySlug["property-management-ai-vs-asset-management-ai"]

export const metadata: Metadata = createPageMetadata({
  title: article.metaTitle,
  description: article.description,
  path: article.href,
  image: "/header-perspectives.jpg",
  keywords: [
    "property management AI",
    "asset management AI",
    "AI for asset management firms",
    "real estate AI adoption",
  ],
})

export default function PropertyVsAssetAIArticlePage() {
  return <PerspectiveArticlePage article={article} />
}
