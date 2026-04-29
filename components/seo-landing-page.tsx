import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { JsonLd } from "@/components/json-ld"
import { coreResourceLinks, type SeoLandingPage } from "@/lib/seo-pages"
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo"

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <div className="mt-2.5 h-px w-1.5 shrink-0 bg-accent/60" />
          <span className="text-sm leading-[1.75] text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function SeoLandingPage({ page }: { page: SeoLandingPage }) {
  return (
    <main>
      <JsonLd
        data={[
          serviceJsonLd({
            name: page.title,
            description: page.description,
            path: page.path,
            serviceType: page.serviceType,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: page.title, path: page.path },
          ]),
          ...(page.faq ? [faqJsonLd(page.faq)] : []),
        ]}
      />

      <PageHeader
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        backgroundImage={page.backgroundImage}
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="max-w-5xl pb-4 md:pb-8"
      />

      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
              Direct Answer
            </p>
            <h2 className="mb-6 text-2xl font-normal tracking-tight text-foreground md:text-3xl">
              {page.directAnswerTitle}
            </h2>
            <p className="text-base font-light leading-[1.85] text-foreground/80">
              {page.directAnswer}
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
              Who This Is For
            </p>
            <BulletList items={page.whoThisIsFor} />
          </div>
        </div>
      </section>

      {page.useCases && (
        <section className="px-6 pb-20 md:px-12 md:pb-28 lg:px-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
              High-Intent Use Cases
            </p>
            <h2 className="text-3xl font-normal tracking-tight text-foreground md:text-[2.75rem]">
              Where executives usually see the first operating leverage
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {page.useCases.map((useCase) => (
              <div key={useCase.title} className="border-l-2 border-border pl-6">
                <h3 className="mb-3 text-lg font-normal tracking-tight text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-secondary px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
            Problems Solved
          </p>
          <h2 className="text-3xl font-normal tracking-tight text-foreground md:text-[2.75rem]">
            The operational friction AI has to address
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {page.problemsSolved.map((problem) => (
            <div key={problem} className="bg-secondary p-8 md:p-10">
              <p className="text-sm leading-[1.75] text-muted-foreground">{problem}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
              How Quoin Helps
            </p>
            <h2 className="text-3xl font-normal tracking-tight text-foreground md:text-[2.75rem]">
              Built as operating capability, not a disconnected tool
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <BulletList items={page.howQuoinHelps} />
          </div>
        </div>
      </section>

      <section className="border-y border-border px-6 py-16 md:px-12 lg:px-20">
        <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
          Related Resources
        </p>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {coreResourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between bg-background p-6 text-sm text-foreground transition-colors duration-200 hover:text-accent"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </section>

      {page.supportingLinks && (
        <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
              Topic Cluster
            </p>
            <h2 className="text-3xl font-normal tracking-tight text-foreground md:text-[2.75rem]">
              Go deeper on the workflows behind the search
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {page.supportingLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-background p-6 transition-colors duration-200 hover:bg-secondary"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-base font-normal tracking-tight text-foreground">
                    {link.label}
                  </h3>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {page.faq && (
        <section className="bg-secondary px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
              FAQ
            </p>
            <h2 className="text-3xl font-normal tracking-tight text-foreground md:text-[2.75rem]">
              Questions executives ask before adopting AI
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {page.faq.map((item) => (
              <div key={item.question}>
                <h3 className="mb-3 text-lg font-normal tracking-tight text-foreground">
                  {item.question}
                </h3>
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-foreground px-6 py-28 text-background md:px-12 md:py-36 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-10 h-px w-10 bg-accent/40" />
          <h2 className="mb-6 text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl">
            Book a call about your AI adoption path
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-sm leading-[1.85] text-background/45">
            Start with a conversation. We will discuss your operating model, the
            workflows where AI may help, and whether Quoin is the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] text-black transition-colors duration-150 hover:bg-white/90"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </main>
  )
}
