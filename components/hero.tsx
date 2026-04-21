"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24">

      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7">

            <BlurFade delay={0.5} direction="up" offset={8}>
              <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.03em] text-white">
                Your AI Operating
                <br />
                <span className="text-accent">
                  <span className="text-[clamp(2.25rem,6vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.03em] text-accent inline-block">Partner</span>
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.7} direction="up">
              <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-white max-w-2xl">
                Quoin prepares your team, data, and governance for AI.
                We build the AI for your workflows. We run and improve them over time{" "}
                <span className="text-accent font-medium">with you</span>
                .
              </p>
            </BlurFade>

            <BlurFade delay={0.85} direction="up">
              <p className="mt-5 text-sm leading-[1.85] text-white max-w-2xl">
                Most firms have tried a pilot, bought a point solution, or commissioned
                a strategy deck. None of it stuck. We exist because the gap between AI
                investment and operational adoption requires a different kind of
                partner. One that stays through implementation and beyond.
              </p>
            </BlurFade>

            <BlurFade delay={1.0} direction="up">
              <div className="mt-10 md:mt-12 hidden md:flex items-center gap-6">
                <a
                  href="/contact"
                  className="inline-block text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 border border-strong text-ink-primary hover:bg-surface-inverse hover:text-surface-base transition-colors duration-150"
                >
                  Talk to us
                </a>
                <a
                  href="/services"
                  className="text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-500"
                >
                  See Where AI Delivers First &rarr;
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-6 lg:col-span-4 lg:col-start-9 mt-10 lg:mt-0">
            <BlurFade delay={1.1} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-white/20 p-4 lg:p-6 bg-white/5 backdrop-blur-sm h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-white mb-1 lg:mb-2">
                  AI Capability
                </p>
                <p className="text-2xl lg:text-4xl font-extralight text-accent tracking-tight">
                  <span className="inline-block tabular-nums tracking-tight text-accent">83</span>%
                </p>
                <p className="text-[10px] lg:text-sm text-white mt-1">
                  AI better than experts in their domain
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={1.3} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-white/20 p-4 lg:p-6 bg-white/5 backdrop-blur-sm h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-white mb-1 lg:mb-2">
                  Industry Gap
                </p>
                <p className="text-2xl lg:text-4xl font-extralight text-accent tracking-tight">
                  <span className="inline-block tabular-nums tracking-tight text-accent">5</span>%
                </p>
                <p className="text-[10px] lg:text-sm text-white mt-1">
                  CRE firms achieving AI goals
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={1.5} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-white/20 p-4 lg:p-6 bg-white/5 backdrop-blur-sm h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-white mb-1 lg:mb-2">
                  Results In
                </p>
                <p className="text-2xl lg:text-4xl font-extralight text-accent tracking-tight">
                  <span className="inline-block tabular-nums tracking-tight text-accent">8</span> Wks
                </p>
                <p className="text-[10px] lg:text-sm text-white mt-1">
                  make your firm AI native
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
