import type { Metadata } from "next"
import { PerspectiveArticlePage } from "@/components/perspective-article-page"
import { createPageMetadata } from "@/lib/seo"
import { perspectiveArticlesBySlug } from "@/lib/seo-pages"

const article = perspectiveArticlesBySlug["the-real-time-loop-asset-manager-ai"]

export const metadata: Metadata = createPageMetadata({
  title: article.metaTitle,
  description: article.description,
  path: article.href,
  image: "/header-perspectives.jpg",
  keywords: [
    "asset management AI",
    "AI for REITs",
    "real-time portfolio intelligence",
    "property and asset management AI integration",
    "AI architecture commercial real estate",
  ],
})

export default function RealTimeLoopArticlePage() {
  return <PerspectiveArticlePage article={article} />
}
