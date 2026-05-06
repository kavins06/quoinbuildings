export type Article = {
  slug: string
  title: string
  dek: string
  publishedAt: string
  readingMinutes: number
  category: string
}

export const articles: Article[] = [
  {
    slug: "operating-intelligence-problem",
    title:
      "Most enterprises don't have an AI-agent problem. They have an operating-intelligence problem.",
    dek: "AI maturity surveys are flat. Pilots run hot, production stalls. The model is rarely the issue. Fragile truth is.",
    publishedAt: "2026-05-05",
    readingMinutes: 9,
    category: "Thesis",
  },
  {
    slug: "five-readiness-paths",
    title: "Five readiness paths: how to recommend not building.",
    dek: "Build is one of five outcomes from a serious AI diagnostic. Three of the others are forms of saying no, on purpose.",
    publishedAt: "2026-05-05",
    readingMinutes: 8,
    category: "Method",
  },
  {
    slug: "minimum-viable-foundry-reit",
    title: "What a Minimum Viable Foundry looks like in a REIT.",
    dek: "Asset management as the first wedge: the entities, the sources, the truth profile, the queries, the agent ladder.",
    publishedAt: "2026-05-05",
    readingMinutes: 10,
    category: "Worked example",
  },
]
