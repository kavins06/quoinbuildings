"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { perspectiveArticles } from "@/lib/seo-pages"

const articles = perspectiveArticles.slice(0, 4)

function ArticleLink({ article, index }: { article: typeof articles[0]; index: number }) {
  return (
    <BlurFade inView delay={index * 0.1} direction="up">
      <Link
        href={article.href}
        className="group grid grid-cols-1 md:grid-cols-[10rem_1fr_auto] gap-3 md:gap-8 py-7 md:py-8"
      >
        <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-accent/70">
          {article.tag}
        </span>
        <h3 className="font-serif text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.015em] text-ink-primary group-hover:text-accent transition-colors duration-200">
          {article.title}
        </h3>
        <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 md:mt-1" />
      </Link>
    </BlurFade>
  )
}

export function PerspectivesTeaser() {
  return (
    <section
      id="perspectives"
      aria-labelledby="perspectives-heading"
      className="bg-surface-sunken py-20 md:py-28 border-t border-strong"
    >
      <div className="container-shell">
        <BlurFade inView direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-accent mb-6">
                Our thinking
              </p>
              <h2
                id="perspectives-heading"
                className="font-serif text-[clamp(2rem,4.5vw,2.625rem)] leading-[1.1] tracking-[-0.02em] text-ink-primary font-normal"
              >
                Perspectives
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 measure text-[17px] leading-[1.55] text-ink-secondary">
              Field notes on why AI pilots stall, where governance breaks, and
              how real estate operators can move from experiments to workflows.
            </p>
          </div>
        </BlurFade>

        <div className="divide-y divide-strong border-y border-strong">
          {articles.map((article, index) => (
            <ArticleLink key={article.title} article={article} index={index} />
          ))}
        </div>

        <BlurFade inView delay={0.3} direction="up">
          <div className="mt-12">
            <Link
              href="/perspectives"
              className="cta-primary text-[15px] font-medium tracking-[0.01em] inline-flex items-center gap-2"
            >
              <span>See perspectives</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
