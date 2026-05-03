"use client"

import { BlurFade } from "@/components/ui/blur-fade"

interface Pain {
  numeral: string
  heading: string
  body: string
}

const pains: Pain[] = [
  {
    numeral: "01",
    heading: "No partner speaks both sides.",
    body:
      "Asset-side AI vendors do not get operations. Property-management AI vendors do not get fund returns. The big consulting firms hand you a strategy deck that ignores both. Owner/operators need a partner fluent in both halves of the business, integrated.",
  },
  {
    numeral: "02",
    heading: "Data is scattered across the seam.",
    body:
      "Operations data and asset data live in different systems and report on different cadences. Yardi, RealPage, Entrata, MRI on one side. Investor reporting and fund models on the other. AI on top of a broken data foundation produces stalled pilots, not deployed workflows.",
  },
  {
    numeral: "03",
    heading: "Build-vs-buy does not pencil.",
    body:
      "Hiring a 20-person internal AI team is hard to justify under $5B AUM. The big consultancies want 12-month, multi-million-dollar engagements that end in shelfware. There is nothing in between that understands an owner/operator firm. So the AI conversation stalls at the board level.",
  },
]

export function WhySection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="bg-surface-base py-20 md:py-32"
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-5">
            <BlurFade inView direction="up">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent mb-6">
                The pattern
              </p>
            </BlurFade>
            <BlurFade inView delay={0.05} direction="up">
              <h2
                id="why-heading"
                className="font-serif text-balance text-ink-primary text-[clamp(2rem,4.5vw,2.625rem)] leading-[1.1] tracking-[-0.02em] font-normal"
              >
                Why owner/operators get AI <em className="italic">wrong.</em>
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.1} direction="up">
              <p className="mt-8 measure text-ink-secondary text-[17px] leading-[1.55]">
                The asset-management consultants do not understand your
                operations. The property-management software vendors do not
                understand your asset thesis. Meanwhile, the firms that own and
                operate are starting to deploy real AI in leasing, in
                maintenance, in asset performance, in resident comms. Your
                board is asking. Your LPs are asking. You do not have an
                answer yet because no one in the room speaks both halves of
                your business.
              </p>
            </BlurFade>
          </header>

          <ol className="lg:col-span-7 lg:col-start-6 flex flex-col">
            {pains.map((pain, index) => (
              <BlurFade
                key={pain.numeral}
                inView
                delay={0.15 + index * 0.08}
                direction="up"
              >
                <li
                  className={[
                    "grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 py-10 md:py-12",
                    index === 0 ? "border-t border-strong" : "",
                    "border-b border-strong",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-[64px] md:text-[80px] leading-[0.9] text-accent tracking-[-0.02em] tabular-nums self-start"
                  >
                    {pain.numeral}
                  </span>
                  <div className="self-center">
                    <h3 className="font-serif text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.015em] text-ink-primary font-normal">
                      {pain.heading}
                    </h3>
                    <p className="mt-4 measure text-ink-secondary text-[16px] md:text-[17px] leading-[1.6]">
                      {pain.body}
                    </p>
                  </div>
                </li>
              </BlurFade>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
