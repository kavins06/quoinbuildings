"use client"

import { BlurFade } from "@/components/ui/blur-fade"

interface Phase {
  numeral: string
  heading: string
  timeframe: string
  body: string
}

const phases: Phase[] = [
  {
    numeral: "01",
    heading: "Discover.",
    timeframe: "Weeks 1-3",
    body:
      "Map your asset thesis, your operating workflow, your data, and your existing AI initiatives. Identify the three to five deployments that move IRR or operating margin in your specific firm.",
  },
  {
    numeral: "02",
    heading: "Implement.",
    timeframe: "Weeks 4-10",
    body:
      "Fix the data foundation across the asset/operations seam. Deploy the workflows. Test them with your team. End the engagement with something running, not something recommended.",
  },
  {
    numeral: "03",
    heading: "Manage.",
    timeframe: "Week 11+",
    body:
      "Run the AI for you, hand it off to your team, or stay embedded. Your choice. We are accountable to outcomes, not deliverables.",
  },
]

export function PromiseSection() {
  return (
    <section
      aria-labelledby="promise-heading"
      className="bg-surface-base py-20 md:py-32"
    >
      <div className="container-shell">
        {/* Section header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <BlurFade inView direction="up">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent mb-6">
                The full AI lifecycle
              </p>
            </BlurFade>
            <BlurFade inView delay={0.05} direction="up">
              <h2
                id="promise-heading"
                className="font-serif text-balance text-ink-primary text-[clamp(2rem,4.5vw,2.625rem)] leading-[1.1] tracking-[-0.02em] font-normal"
              >
                Run by people who understand{" "}
                <em className="italic">owner/operators.</em>
              </h2>
            </BlurFade>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <BlurFade inView delay={0.1} direction="up">
              <p className="measure text-ink-secondary text-[17px] leading-[1.55]">
                Quoin runs the full AI lifecycle so you don&rsquo;t have to
                build the team to do it. We discover where AI fits your
                specific firm across asset decisions and operations, implement
                the workflows, then manage them in production. The partner you
                wish existed: senior, vendor-neutral, accountable to outcomes,
                fluent in both halves of your business.
              </p>
            </BlurFade>
          </div>
        </header>

        {/*
          Three phases with asymmetric weights via CSS grid (5/4/3 ratio at desktop),
          stacked on mobile with hairline dividers between each phase.
          No icons in colored circles. No card backgrounds. No drop shadows.
          Numerals do the visual work icons would.
        */}
        <ol
          className="
            grid grid-cols-1
            lg:grid-cols-[5fr_4fr_3fr]
            border-t border-strong
            lg:border-t-0
          "
        >
          {phases.map((phase, index) => (
            <BlurFade
              key={phase.numeral}
              inView
              delay={0.15 + index * 0.1}
              direction="up"
            >
              <li
                className={[
                  "relative px-0 py-10 md:py-12",
                  // Mobile: hairline below each phase
                  "border-b border-strong lg:border-b-0",
                  // Desktop: hairline at top of each col, plus right hairline as inter-column divider
                  "lg:border-t lg:border-strong",
                  index < phases.length - 1
                    ? "lg:border-r lg:border-r-strong lg:pr-10 xl:pr-14"
                    : "",
                  index > 0 ? "lg:pl-10 xl:pl-14" : "lg:pr-10 xl:pr-14",
                ].join(" ")}
              >
                <div className="flex items-baseline gap-5 mb-6">
                  <span
                    aria-hidden="true"
                    className="font-serif text-[72px] md:text-[80px] leading-[0.9] text-accent tracking-[-0.02em] tabular-nums"
                  >
                    {phase.numeral}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    {phase.timeframe}
                  </span>
                </div>
                <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.15] tracking-[-0.015em] text-ink-primary font-normal mb-5">
                  {phase.heading}
                </h3>
                <p className="text-ink-secondary text-[16px] md:text-[17px] leading-[1.6] max-w-[44ch]">
                  {phase.body}
                </p>
              </li>
            </BlurFade>
          ))}
        </ol>
      </div>
    </section>
  )
}
