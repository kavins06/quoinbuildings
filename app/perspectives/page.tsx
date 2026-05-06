import type { Metadata } from "next"
import Link from "next/link"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"
import { articles } from "./articles"

export const metadata: Metadata = createPageMetadata({
  title: "Perspectives",
  description:
    "Long-form notes on operating intelligence, governance, and the gap between AI capability and enterprise readiness.",
  path: "/perspectives",
  image: "/hero-bg.jpg",
  keywords: [
    "real estate AI thinking",
    "operating intelligence",
    "AI governance perspectives",
    "REIT AI strategy",
  ],
})

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`)
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

export default function PerspectivesIndexPage() {
  return (
    <>
      <PageStructuredData name="Perspectives" path="/perspectives" />

      <main>
        <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
          <div className="container-shell pb-20 md:pb-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Perspectives
                </p>
                <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                  Long-form notes on operating intelligence and governed AI.
                </h1>
                <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                  Working notes from inside engagements, from the operating
                  reality of REITs and large real estate companies, and from
                  the discipline of building agents on top of governed
                  semantic layers. Written for senior operators who already
                  know AI is real and want to understand why it keeps
                  failing inside their companies.
                </p>
              </div>
              <aside className="border-l border-strong pl-8 lg:col-span-4 lg:col-start-9 lg:pt-20">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  About these notes
                </p>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink-secondary">
                  These are operating-grade arguments, not marketing. We
                  publish what we are willing to defend in front of a
                  client&rsquo;s CIO, governance committee, or risk team.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-surface-base py-16 md:py-24">
          <div className="container-shell">
            <ol className="grid grid-cols-1 border-y border-strong">
              {articles.map((article, i) => (
                <li
                  key={article.slug}
                  className="border-b border-strong/15 last:border-b-0"
                >
                  <Link
                    href={`/perspectives/${article.slug}`}
                    className="group grid grid-cols-1 gap-6 py-10 transition-colors md:grid-cols-[5rem_1fr_14rem] md:gap-12 md:py-14"
                  >
                    <p className="font-serif text-[44px] leading-none text-accent tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                        {article.category}
                      </p>
                      <h2 className="mt-4 text-balance font-serif text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.15] tracking-normal text-ink-primary group-hover:text-accent">
                        {article.title}
                      </h2>
                      <p className="mt-5 text-[15px] leading-[1.65] text-ink-secondary md:text-[16px]">
                        {article.dek}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-[12px] leading-[1.5] text-ink-muted md:items-end md:text-right">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span>{article.readingMinutes} min read</span>
                      <span className="mt-2 inline-flex items-center gap-2 text-[13px] font-medium text-accent">
                        Read note
                        <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-surface-inverse py-24 text-surface-base md:py-32">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-10 h-px w-12 bg-accent" />
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                Next step
              </p>
              <h2 className="text-balance font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-normal text-surface-base">
                Test the thinking against your operating model.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                If something here lines up with what you are seeing inside your
                company, the cheapest next step is a 30-minute call. We will
                map one operating area with you and you will leave with three
                candidate workflows and a no-pressure decision packet.
              </p>
              <div className="mt-10 flex justify-center">
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
      </main>
    </>
  )
}
