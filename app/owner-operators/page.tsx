import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { OwnerOperatorsTimeline } from "@/components/owner-operators-timeline"
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo"
import {
  ctaBlock,
  ownerOperatorsHero,
  patternParagraphs,
  phases,
  timelineMilestones,
  whoThisIsFor,
  whoThisIsNotFor,
} from "./content"

export const metadata: Metadata = createPageMetadata({
  title: "AI for Real Estate Owner/Operators",
  description:
    "Quoin discovers, implements, and manages AI for owner/operators of real estate. From AI-curious to AI in production in 90 days. No internal AI team to hire.",
  path: "/owner-operators",
  image: "/hero-bg.jpg",
  keywords: [
    "AI for owner-operators",
    "AI for real estate",
    "AI for REITs",
    "vertically integrated REITs AI",
    "AI implementation real estate",
  ],
})

export default function OwnerOperatorsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Owner/Operators", path: "/owner-operators" },
          ]),
          serviceJsonLd({
            name: "AI for Real Estate Owner/Operators",
            description:
              "Discover, implement, and manage AI inside vertically-integrated REITs and large private owner/operators of real estate. From AI-curious to AI in production in 90 days.",
            path: "/owner-operators",
            serviceType: "AI advisory and managed AI operations for real estate owner/operators",
            audience:
              "CEO, COO, and President-level leaders at vertically-integrated REITs and large private owner/operators of real estate",
          }),
          faqJsonLd([
            {
              question: "What is AI for real estate owner/operators?",
              answer:
                "AI for real estate owner/operators connects asset-side strategy with operating-side execution. It runs inside the workflows that produce NOI and the analyses that drive IRR, with the data foundation, governance, and operating accountability the firm already needs in place.",
            },
            {
              question: "Who does Quoin work with?",
              answer:
                "Vertically-integrated REITs and large private owner/operators of real estate, typically with 2,000 or more residential units or the equivalent in commercial square footage and an executive sponsor at the CEO, COO, or President level.",
            },
            {
              question: "How long does it take to put AI into production?",
              answer:
                "The Quoin engagement runs 90 days from kickoff to three production AI workflows. Discovery is weeks 1 to 3, build and test is weeks 4 to 10, and the second and third deployments and handoff happen in weeks 11 and 12.",
            },
          ]),
        ]}
      />

      {/* 1. Hero */}
        <section
          aria-labelledby="oo-hero-heading"
          className="relative overflow-hidden bg-surface-base px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 lg:px-20"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
              {ownerOperatorsHero.eyebrow}
            </p>

            <h1
              id="oo-hero-heading"
              className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[1.02] tracking-[-0.025em] text-ink-primary text-balance max-w-[20ch]"
            >
              {ownerOperatorsHero.headlineLead}{" "}
              <span className="italic">{ownerOperatorsHero.headlineEmphasis}</span>
            </h1>

            <p className="mt-10 font-sans text-lg md:text-[1.1875rem] leading-[1.55] text-ink-secondary max-w-[68ch]">
              {ownerOperatorsHero.subhead}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <Link
                href={ownerOperatorsHero.primaryCta.href}
                className="font-sans text-base font-medium text-accent border-b border-accent pb-1 hover:text-ink-primary hover:border-ink-primary transition-colors duration-200"
              >
                {ownerOperatorsHero.primaryCta.label} <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href={ownerOperatorsHero.secondaryCta.href}
                className="font-sans text-base font-medium text-ink-primary border-b border-ink-primary pb-1 hover:text-accent hover:border-accent transition-colors duration-200"
              >
                {ownerOperatorsHero.secondaryCta.label} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. The pattern we see (long-form editorial) */}
        <section
          aria-labelledby="oo-pattern-heading"
          className="relative bg-surface-base px-6 py-20 md:px-12 lg:px-20 md:py-32 border-t border-ink-primary/15"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                  The pattern we see
                </p>
                <h2
                  id="oo-pattern-heading"
                  className="font-serif text-[clamp(1.875rem,3.6vw,2.625rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink-primary text-balance"
                >
                  Two markets, two languages, <span className="italic">one firm</span>.
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="flex flex-col gap-8 max-w-[68ch]">
                  {patternParagraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-sans text-[1.0625rem] md:text-lg leading-[1.7] text-ink-primary"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What we do (Discover / Implement / Manage) */}
        <section
          aria-labelledby="oo-phases-heading"
          className="relative bg-surface-base px-6 py-20 md:px-12 lg:px-20 md:py-32 border-t border-ink-primary"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-16 max-w-3xl">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                What we do
              </p>
              <h2
                id="oo-phases-heading"
                className="font-serif text-[clamp(2rem,4.2vw,2.625rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink-primary text-balance"
              >
                Discover. Implement. Manage. <span className="italic">In that order.</span>
              </h2>
            </div>

            <ol className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
              {phases.map((phase, index) => (
                <li
                  key={phase.number}
                  className={
                    // Asymmetric: first column wider, others slightly narrower
                    index === 0
                      ? "lg:col-span-5 lg:border-r lg:border-ink-primary/15 lg:pr-10"
                      : index === 1
                        ? "lg:col-span-4 lg:border-r lg:border-ink-primary/15 lg:px-10"
                        : "lg:col-span-3 lg:pl-10"
                  }
                >
                  <p className="font-serif text-[clamp(3rem,5vw,4.5rem)] leading-none text-ink-primary mb-6">
                    {phase.number}
                  </p>
                  <h3 className="font-serif text-[1.75rem] md:text-3xl leading-[1.15] tracking-[-0.015em] text-ink-primary mb-5 text-balance">
                    {phase.title}
                  </h3>
                  <p className="font-sans text-base leading-[1.65] text-ink-primary mb-6">
                    {phase.description}
                  </p>

                  <div className="border-t border-ink-primary/15 pt-5 flex flex-col gap-4">
                    <div>
                      <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-ink-muted mb-1">
                        Timing
                      </p>
                      <p className="font-sans text-sm leading-[1.6] text-ink-secondary">
                        {phase.timing}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-ink-muted mb-1">
                        Who is in the room
                      </p>
                      <p className="font-sans text-sm leading-[1.6] text-ink-secondary">
                        {phase.who}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-ink-muted mb-1">
                        What you get
                      </p>
                      <p className="font-sans text-sm leading-[1.6] text-ink-secondary">
                        {phase.deliverables}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4 + 5. Who this is for / Who this isn't for */}
        <section
          aria-labelledby="oo-fit-heading"
          className="relative bg-surface-base px-6 py-20 md:px-12 lg:px-20 md:py-32 border-t border-ink-primary"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-16 max-w-3xl">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                Honest about fit
              </p>
              <h2
                id="oo-fit-heading"
                className="font-serif text-[clamp(2rem,4.2vw,2.625rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink-primary text-balance"
              >
                Who this is for, and <span className="italic">who it isn't</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* For */}
              <div>
                <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-ink-primary mb-6 font-medium">
                  Who this is for
                </p>
                <ul className="flex flex-col">
                  {whoThisIsFor.map((item, idx) => (
                    <li
                      key={item}
                      className={`py-4 font-sans text-base leading-[1.65] text-ink-primary ${
                        idx === 0 ? "border-y border-ink-primary/15" : "border-b border-ink-primary/15"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for */}
              <div>
                <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-ink-muted mb-6 font-medium">
                  Who this isn&rsquo;t for
                </p>
                <ul className="flex flex-col">
                  {whoThisIsNotFor.map((item, idx) => (
                    <li
                      key={item}
                      className={`py-4 font-sans text-base leading-[1.65] text-ink-muted ${
                        idx === 0 ? "border-y border-ink-primary/15" : "border-b border-ink-primary/15"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      {/* 6. What 90 days looks like: vertical hairline timeline */}
        <section
          aria-labelledby="oo-timeline-heading"
          className="relative bg-surface-base px-6 py-20 md:px-12 lg:px-20 md:py-32 border-t border-ink-primary"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                  What 90 days looks like
                </p>
                <h2
                  id="oo-timeline-heading"
                  className="font-serif text-[clamp(2rem,4.2vw,2.625rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink-primary text-balance"
                >
                  From AI-curious to AI in production. <span className="italic">Week by week.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:flex lg:items-end">
                <p className="font-sans text-base md:text-lg leading-[1.65] text-ink-secondary max-w-[60ch]">
                  Ninety days is the minimum to do this well. It is also the maximum we ask you to commit to before you have working AI to look at. The schedule below is what an engagement actually looks like, not a marketing rollup.
                </p>
              </div>
            </div>

            <div className="lg:pl-[calc(5/12*100%)]">
              <OwnerOperatorsTimeline milestones={timelineMilestones} />
            </div>
          </div>
        </section>

        {/* 7. CTAs */}
        <section
          aria-labelledby="oo-cta-heading"
          className="relative bg-surface-base px-6 py-24 md:px-12 lg:px-20 md:py-36 border-t border-ink-primary"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                  {ctaBlock.eyebrow}
                </p>
                <h2
                  id="oo-cta-heading"
                  className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.025em] text-ink-primary text-balance"
                >
                  {ctaBlock.heading}
                </h2>
                <p className="mt-8 font-sans text-base md:text-lg leading-[1.65] text-ink-secondary max-w-[60ch]">
                  {ctaBlock.body}
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-5">
                <Link
                  href={ctaBlock.primary.href}
                  className="font-sans text-base font-medium text-accent border-b border-accent pb-1 self-start hover:text-ink-primary hover:border-ink-primary transition-colors duration-200"
                >
                  {ctaBlock.primary.label} <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href={ctaBlock.secondary.href}
                  className="font-sans text-base font-medium text-ink-primary border-b border-ink-primary pb-1 self-start hover:text-accent hover:border-accent transition-colors duration-200"
                >
                  {ctaBlock.secondary.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
