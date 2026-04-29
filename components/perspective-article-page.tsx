import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import type { PerspectiveArticle } from "@/lib/seo-pages"
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo"

export function PerspectiveArticlePage({ article }: { article: PerspectiveArticle }) {
  if (!article.body) {
    return null
  }

  return (
    <main className="bg-background">
      <JsonLd
        data={[
          articleJsonLd({
            title: article.title,
            description: article.description,
            path: article.href,
            datePublished: article.isoDate,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Perspectives", path: "/perspectives" },
            { name: article.title, path: article.href },
          ]),
        ]}
      />

      <header className="border-b border-subtle px-6 pb-6 pt-10 md:px-12 md:pb-8 md:pt-14 lg:px-20">
        <div>
          <Link
            href="/perspectives"
            className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Perspectives
          </Link>
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-accent">
            {article.tag} &middot; {article.date}
          </p>
          <h1 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground text-balance">
            {article.title}
          </h1>
          <p className="text-[13px] uppercase tracking-[0.1em] text-muted-foreground/70">
            By {article.author} &middot; CEO &amp; Chief Engineer, Quoin
          </p>
        </div>
      </header>

      <article className="px-6 py-8 md:px-12 md:py-12 lg:px-20">
        <div className="prose-content flex max-w-4xl flex-col gap-4 text-[15px] leading-[1.7] text-foreground/80 md:text-base">
          {article.body.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={`${block.type}-${index}`}
                  className="mt-8 text-2xl font-normal tracking-tight text-foreground md:text-3xl"
                >
                  {block.text}
                </h2>
              )
            }

            if (block.type === "h3") {
              return (
                <h3
                  key={`${block.type}-${index}`}
                  className="mt-6 text-xl font-normal tracking-tight text-foreground"
                >
                  {block.text}
                </h3>
              )
            }

            if (block.type === "ul") {
              return (
                <ul key={`${block.type}-${index}`} className="my-2 flex flex-col gap-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-3 h-px w-1.5 shrink-0 bg-accent/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            }

            return <p key={`${block.type}-${index}`}>{block.text}</p>
          })}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="mb-4 text-2xl font-normal tracking-tight text-foreground">
            Ready to discuss AI adoption for your firm?
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-[1.75] text-muted-foreground">
            Quoin works with property and asset management executives on AI
            readiness, governance, custom agents, and managed AI operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm tracking-[0.05em] text-accent transition-colors duration-200 hover:text-accent/80"
          >
            Talk to us
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>
    </main>
  )
}
