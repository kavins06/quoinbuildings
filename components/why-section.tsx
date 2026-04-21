"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export function WhySection() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
      <div className="max-w-3xl">
        <BlurFade inView direction="up">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
            Why Quoin Exists
          </p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-6">
            The industry needs more than another vendor
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.1} direction="up">
          <div className="flex flex-col gap-5">
            <p className="text-sm leading-[1.85] text-muted-foreground">
              Property management firms are investing in AI, but the investments are not
              translating into operational results. Only 5% of commercial real estate firms
              have achieved their AI program goals. The gap is not technology. It is approach.
              <p className="text-[11px] tracking-[0.02em] text-ink-muted mt-2 italic">
                <a href="#" className="underline decoration-accent underline-offset-2">Commercial Observer, 2025</a>
              </p>
            </p>
            <p className="text-sm leading-[1.85] text-muted-foreground">
              Point-solution SaaS vendors sell tools that do not integrate with your property
              management platform. Strategy consultants deliver decks and leave. Internal IT
              teams lack the specialized AI expertise to build, govern, and operate agents at
              scale. None of these options close the gap between AI ambition and operational reality.
            </p>
            <p className="text-sm leading-[1.85] text-muted-foreground">
              Quoin is that option. We embed with your operations team, build AI agents that integrate with your existing systems, apply governance from day one, and run the infrastructure as a long-term partner.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
