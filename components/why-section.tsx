"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export function WhySection() {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-20 md:py-14">
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
              Property and asset management teams are investing in AI, but the investments are not
              translating into operational results. The gap is not technology. It is execution &amp; integration.
            </p>
            <p className="text-sm leading-[1.85] text-muted-foreground">
              Point-solution SaaS vendors sell tools that do not integrate with your platform.
              Strategy consultants deliver decks and leave. Internal IT teams lack the specialized
              expertise to build, govern, and operate agents at scale. None of these options close
              the gap between AI ambition and operational reality.
            </p>
            <p className="text-sm leading-[1.85] text-muted-foreground">
              Quoin is that option. We embed with your teams and build AI agents on a shared
              intelligence layer that unifies your PMS, accounting, leases, and work orders.
              Property managers gets hours of work done in minutes. Asset managers drill from portfolio to
              root cause. Both sides decide on evidence, at a fraction of the time.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
