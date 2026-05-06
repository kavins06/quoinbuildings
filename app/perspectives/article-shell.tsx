import Link from "next/link"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/json-ld"
import { absoluteUrl } from "@/lib/seo"
import { articles } from "./articles"

type ArticleShellProps = {
  slug: string
  children: ReactNode
}

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`)
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

export function ArticleShell({ slug, children }: ArticleShellProps) {
  const article = articles.find((a) => a.slug === slug)
  if (!article) return null

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Quoin Buildings, LLC",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Quoin",
      url: absoluteUrl("/"),
    },
    url: absoluteUrl(`/perspectives/${article.slug}`),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/perspectives/${article.slug}`),
    },
  }

  const others = articles.filter((a) => a.slug !== slug).slice(0, 2)

  return (
    <main>
      <JsonLd data={articleJsonLd} />

      <article className="bg-surface-base">
        <div className="container-shell pt-36 md:pt-44 lg:pt-48">
          <Link
            href="/perspectives"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span>
            <span>All perspectives</span>
          </Link>

          <header className="mt-10 grid grid-cols-1 gap-10 border-b border-strong pb-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {article.category}
              </p>
              <h1 className="text-balance font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.08] tracking-normal text-ink-primary">
                {article.title}
              </h1>
              <p className="mt-7 measure text-[18px] leading-[1.55] text-ink-secondary md:text-[19px]">
                {article.dek}
              </p>
            </div>
            <aside className="border-l border-strong pl-8 lg:col-span-4 lg:col-start-9 lg:pt-3">
              <dl className="divide-y divide-border-hairline border-y border-border-hairline">
                {[
                  ["Published", formatDate(article.publishedAt)],
                  ["Reading", `${article.readingMinutes} min`],
                  ["Author", "Quoin"],
                ].map(([term, value]) => (
                  <div
                    key={term}
                    className="grid grid-cols-[6.5rem_1fr] gap-4 py-4"
                  >
                    <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      {term}
                    </dt>
                    <dd className="text-[14px] leading-[1.5] text-ink-secondary">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </header>
        </div>

        <div className="container-shell py-14 md:py-20">
          <div className="mx-auto max-w-[64ch] space-y-6 text-[17px] leading-[1.75] text-ink-secondary md:text-[18px]">
            {children}
          </div>
        </div>

        <div className="container-shell pb-20 md:pb-24">
          <div className="border-t border-strong pt-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              More perspectives
            </p>
            <ul className="mt-8 grid grid-cols-1 border-y border-strong md:grid-cols-2">
              {others.map((a, i) => (
                <li
                  key={a.slug}
                  className={[
                    "border-b border-strong/15 md:border-b-0",
                    i === 0 ? "md:border-r md:border-strong/15" : "",
                  ].join(" ")}
                >
                  <Link
                    href={`/perspectives/${a.slug}`}
                    className="group block py-8 md:px-6 md:py-10"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                      {a.category}
                    </p>
                    <h3 className="mt-4 text-balance font-serif text-[22px] leading-[1.2] tracking-normal text-ink-primary group-hover:text-accent md:text-[26px]">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-[1.6] text-ink-secondary md:text-[15px]">
                      {a.dek}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-accent">
                      Read note
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="bg-surface-inverse py-20 text-surface-base md:py-28">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-10 h-px w-12 bg-accent" />
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                Next step
              </p>
              <h2 className="text-balance font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-normal text-surface-base">
                30 minutes. One operating area. Three candidate workflows.
              </h2>
              <div className="mt-9 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-b border-white pb-1 text-[15px] font-medium text-white transition-colors hover:border-white/70 hover:text-white/70"
                >
                  <span>Map one operating area with us</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
