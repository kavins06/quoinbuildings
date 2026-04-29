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
        className="group flex items-start md:items-center justify-between py-7 md:py-8 gap-6"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 flex-1">
          <span className="text-[11px] tracking-[0.15em] uppercase text-accent/60 shrink-0 w-32">
            {article.tag}
          </span>
          <h3 className="text-base md:text-lg font-light tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300">
            {article.title}
          </h3>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
      </Link>
    </BlurFade>
  )
}

export function PerspectivesTeaser() {
  return (
    <section id="perspectives" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-secondary">
      <BlurFade inView direction="up">
        <div className="mb-20 pb-6 border-b border-border">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Our Thinking
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-normal tracking-tight text-foreground">
            Perspectives
          </h2>
        </div>
      </BlurFade>

      <div className="divide-y divide-border">
        {articles.map((article, index) => (
          <ArticleLink key={article.title} article={article} index={index} />
        ))}
      </div>

      <BlurFade inView delay={0.3} direction="up">
        <div className="mt-12">
          <Link
            href="/perspectives"
            className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="border-b border-accent/30 pb-0.5 group-hover:border-accent transition-colors duration-300">
              See perspectives
            </span>
            <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </BlurFade>
    </section>
  )
}
