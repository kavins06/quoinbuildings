import type { Metadata } from "next"
import { PerspectiveArticlePage } from "@/components/perspective-article-page"
import { createPageMetadata } from "@/lib/seo"
import { perspectiveArticlesBySlug } from "@/lib/seo-pages"

const article = perspectiveArticlesBySlug["what-property-management-needs-from-an-ai-partner"]

export const metadata: Metadata = createPageMetadata({
  title: article.metaTitle,
  description: article.description,
  path: article.href,
  image: "/header-perspectives.jpg",
  keywords: [
    "AI operating partner",
    "property management AI partner",
    "AI vendors property management",
    "managed AI operations real estate",
  ],
})

export default function AIPartnerArticlePage() {
  return <PerspectiveArticlePage article={article} />
}
