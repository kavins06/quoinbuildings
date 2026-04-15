"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden bg-background">

<div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20 md:pb-20">
        <div className="max-w-5xl">
          <BlurFade delay={0.3} direction="up">
            <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/70 mb-6">
              AI Operating Partner &middot; Property Management
            </p>
          </BlurFade>

          <BlurFade delay={0.5} direction="up" offset={8}>
            <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.03em] text-foreground text-balance">
              Only <span className="text-accent"><NumberTicker value={5} delay={0.8} className="inline-block tabular-nums text-accent tracking-[-0.03em]" />%</span> of property
              <br className="hidden md:block" />
              management firms have
              <br className="hidden md:block" />
              achieved their AI goals
            </h1>
          </BlurFade>
        </div>

        <BlurFade delay={0.7} direction="up">
          <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-foreground/75 max-w-2xl">
            Quoin is an AI operating partner&mdash;we build, deploy, and manage
            AI agents that integrate with your property management systems, with
            governance, integrity, and accountability built into every engagement.
          </p>
        </BlurFade>

        <BlurFade delay={0.9} direction="up">
          <div className="mt-10 md:mt-12 flex items-center gap-6">
            <a href="/contact">
              <ShimmerButton
                borderRadius="0px"
                shimmerColor="rgba(0,0,0,0.2)"
                shimmerDuration="5s"
                shimmerSize="0.03em"
                background="rgba(0,0,0,0.85)"
                className="text-[11px] tracking-[0.2em] uppercase px-6 py-3"
              >
                Schedule a Conversation
              </ShimmerButton>
            </a>
            <a
              href="/approach"
              className="text-[11px] tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-500"
            >
              How We Work
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
