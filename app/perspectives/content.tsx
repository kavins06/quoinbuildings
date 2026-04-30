"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { perspectiveArticles, type PerspectiveArticle } from "@/lib/seo-pages"

function ArticleCard({ article, index }: { article: PerspectiveArticle; index: number }) {
  const inner = (
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
        <h2 className="text-xl md:text-2xl font-normal tracking-tight text-ink-primary mb-4 group-hover:text-accent transition-colors duration-200">
          {article.title}
        </h2>
        <p className="text-sm leading-[1.75] text-ink-secondary max-w-2xl">
          {article.summary}
        </p>
        <p className="text-[11px] tracking-[0.15em] text-ink-muted mt-4">
          By {article.author}
        </p>
        <p className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-accent mt-4 group-hover:gap-3 transition-all duration-200">
          Read article
          <ArrowUpRight className="h-3.5 w-3.5" />
        </p>
      </div>
    </div>
  )

  return (
    <BlurFade inView direction="up" delay={index * 0.1}>
      <Link
        href={article.href}
        className="group block py-12 md:py-16 border-b border-subtle last:border-b-0"
      >
        {inner}
      </Link>
    </BlurFade>
  )
}

export function PerspectivesContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Perspectives"
        title="What We Are Seeing in the Market"
        description="Original analysis on AI adoption, governance, and operations across property and asset management."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      <section className="px-6 md:px-12 lg:px-20">
        {perspectiveArticles.map((article, index) => (
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
