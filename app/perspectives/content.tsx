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
                <h2 className="text-xl md:text-2xl font-normal tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300 mb-4">
                  {article.title}
                </h2>
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
        eyebrow="Perspectives"
        title="What We Are Seeing in the Market"
        description="Original analysis on AI adoption, governance, and operations in property management."
        backgroundImage="/header-perspectives.jpg"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      <section className="px-6 md:px-12 lg:px-20 py-12 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            Get future perspectives by email.
          </p>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent border border-border px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200 w-64"
            />
            <button className="bg-accent text-accent-foreground px-5 py-2 text-sm tracking-[0.05em] hover:bg-accent/90 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} article={article} index={index} />
        ))}
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-lg font-normal tracking-tight text-foreground">
            Want to continue this conversation?
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
              Ready to move forward?
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
