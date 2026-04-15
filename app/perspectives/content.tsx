"use client"

import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

const articles = [
  {
    date: "April 2026",
    title: "Why AI Pilots Are Failing in Property Management\u2014And What to Do About It",
    summary:
      "The 95% failure rate for AI pilots is well documented. In property management, the patterns are consistent and the root causes are structural. We break down the three failure modes and what firms can do differently.",
    author: "Kavin Sakthivel",
    tag: "Industry Analysis",
  },
  {
    date: "April 2026",
    title: "The Governance Gap: Why Property Management Firms Can\u2019t Scale AI",
    summary:
      "Fair housing risk in AI-driven tenant screening. Tenant data privacy exposure. The absence of governance frameworks. Why compliance is the most underestimated barrier to AI adoption in CRE.",
    author: "Kavin Sakthivel",
    tag: "Governance",
  },
  {
    date: "April 2026",
    title: "What Property Management Needs from an AI Partner\u2014and Why Vendors Aren\u2019t Enough",
    summary:
      "The argument for the AI operating partner model versus point solutions, strategy-only consultants, and internal IT teams. Why the existing options all fall short for enterprise property management.",
    author: "Kavin Sakthivel",
    tag: "Point of View",
  },
]

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={index * 0.1}>
      <a
        href="#"
        className="group block py-12 md:py-16 border-b border-border last:border-b-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.15em] text-muted-foreground/50 tabular-nums">
              {article.date}
            </p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-accent/70 mt-2">
              {article.tag}
            </p>
          </div>

          <div className="lg:col-span-9 lg:col-start-4">
            <div className="flex items-start justify-between gap-6">
              <div>
                <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-xl md:text-2xl font-extralight tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300 mb-4">
                  {article.title}
                </TextAnimate>
                <p className="text-sm leading-[1.75] text-muted-foreground max-w-2xl">
                  {article.summary}
                </p>
                <p className="text-[11px] tracking-[0.15em] text-muted-foreground/40 mt-4">
                  By {article.author}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-2" />
            </div>
          </div>
        </div>
      </a>
    </BlurFade>
  )
}

export function PerspectivesContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Thinking"
        title="Perspectives"
        description="Original analysis on AI adoption, governance, and the future of property management technology."
      />

      <section className="px-6 md:px-12 lg:px-20">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} article={article} index={index} />
        ))}
      </section>

      <div className="px-6 py-20 md:px-12 lg:px-20">
        <div className="w-10 h-px bg-accent/30" />
      </div>
    </main>
  )
}
