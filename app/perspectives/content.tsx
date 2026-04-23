"use client"

import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const articles = [
  {
    date: "April 2026",
    title: "Why AI Pilots Are Failing in Property Management: And What to Do About It",
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
    title: "What Property Management Needs from an AI Partner, and Why Vendors Aren\u2019t Enough",
    summary:
      "The argument for the AI operating partner model versus point solutions, strategy-only consultants, and internal IT teams. Why the existing options all fall short for enterprise property management.",
    author: "Kavin Sakthivel",
    tag: "Point of View",
  },
]

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={index * 0.1}>
      <div className="block py-12 md:py-16 border-b border-subtle last:border-b-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.15em] text-ink-muted tabular-nums">
              {article.date}
            </p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-accent mt-2">
              {article.tag}
            </p>
          </div>

          <div className="lg:col-span-9 lg:col-start-4">
            <div>
              <h2 className="text-xl md:text-2xl font-normal tracking-tight text-ink-primary mb-4">
                {article.title}
              </h2>
              <p className="text-sm leading-[1.75] text-ink-secondary max-w-2xl">
                {article.summary}
              </p>
              <p className="text-[11px] tracking-[0.15em] text-ink-muted mt-4">
                By {article.author}
              </p>
              <p className="text-[12px] text-ink-muted mt-2 italic">
                Full piece coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

export function PerspectivesContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Perspectives"
        title="What We Are Seeing in the Market"
        description="Original analysis on AI adoption, governance, and operations in property management."
        backgroundImage="https://images.unsplash.com/photo-1598646506899-ac6be1000c2f?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      <section className="px-6 md:px-12 lg:px-20">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} article={article} index={index} />
        ))}
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-lg font-normal tracking-tight text-foreground">
            Want to keep talking?
          </p>
          <a
            href="/contact"
            className="text-sm text-accent hover:text-accent/80 tracking-[0.05em] transition-colors duration-200"
          >
            Talk to us &rarr;
          </a>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-foreground">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-background/40 mb-4">
              Next Step
            </p>
            <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-background">
              Ready to talk?
            </h3>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm tracking-[0.05em] hover:bg-accent/90 transition-colors duration-200"
          >
            Talk to us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
