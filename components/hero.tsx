"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { WordRotate } from "@/components/ui/word-rotate"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-base py-24">

      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7">

            <BlurFade delay={0.5} direction="up" offset={8}>
              <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink-primary">
                Your AI Operating
                <br />
                <WordRotate
                  words={["Partner", "Infrastructure", "Advantage"]}
                  duration={3000}
                  className="text-[clamp(2.25rem,6vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em] text-accent"
                />
              </h1>
            </BlurFade>

            <BlurFade delay={0.7} direction="up">
              <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-ink-primary max-w-2xl md:max-w-3xl">
                Quoin prepares your property management teams, data, and governance for AI. We build agents for your workflows and operate them alongside you after launch.
              </p>
            </BlurFade>

            <BlurFade delay={0.85} direction="up">
              <p className="mt-5 text-sm leading-[1.85] text-ink-primary max-w-2xl">
                Pilots, point solutions, and strategy decks have not moved most firms past the AI-investment stage. The gap between investment and operational adoption takes a partner who stays through implementation, governance, and ongoing operations.
              </p>
            </BlurFade>

            <BlurFade delay={1.0} direction="up">
              <div className="mt-10 md:mt-12 hidden md:flex items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-block text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 bg-white text-black hover:bg-white/90 transition-colors duration-150"
                >
                  Talk to us
                </Link>
                <a
                  href="/services"
                  className="text-[11px] tracking-[0.2em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-500"
                >
                  See our services &rarr;
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Right: Stats framed */}
          <div className="relative overflow-hidden lg:col-span-4 lg:col-start-9 lg:self-stretch mt-10 lg:mt-0 -ml-6 md:-ml-12 lg:ml-0 -mr-6 md:-mr-12 lg:-mr-20 border border-subtle p-4 lg:p-8 flex flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/30" aria-hidden="true" />
          <div className="relative z-10 grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-6">
            <BlurFade delay={1.1} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-subtle p-4 lg:p-6 bg-white/70 h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-ink-primary mb-1 lg:mb-2">
                  AI Capability
                </p>
                <p className="text-2xl lg:text-4xl font-normal text-accent tracking-tight">
                  <NumberTicker value={85.9} decimalPlaces={1} className="inline-block tracking-tight text-accent" />%
                </p>
                <p className="text-[10px] lg:text-sm text-ink-primary mt-1">
                  Of knowledge work tasks where AI output matches or beats a domain expert
                </p>
                <p className="text-[11px] tracking-[0.02em] text-ink-muted mt-1 italic">
                  <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-2">OpenAI, Apr 2026</a>
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={1.3} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-subtle p-4 lg:p-6 bg-white/70 h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-ink-primary mb-1 lg:mb-2">
                  Industry Gap
                </p>
                <p className="text-2xl lg:text-4xl font-normal text-accent tracking-tight">
                  <NumberTicker value={5} delay={0.2} className="inline-block tracking-tight text-accent" />%
                </p>
                <p className="text-[10px] lg:text-sm text-ink-primary mt-1">
                  CRE firms achieving their AI program goals
                </p>
                <p className="text-[11px] tracking-[0.02em] text-ink-muted mt-1 italic">
                  <a href="https://www.jll.com/en-us/newsroom/real-estates-ai-reality-check-companies-piloting-only-achieved-all-ai-goals" target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-2">JLL, Oct 2025</a>
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={1.5} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-subtle p-4 lg:p-6 bg-white/70 h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-ink-primary mb-1 lg:mb-2">
                  Implement In
                </p>
                <p className="text-2xl lg:text-4xl font-normal text-accent tracking-tight">
                  <NumberTicker value={4} delay={0.4} className="inline-block tracking-tight text-accent" /> Wks
                </p>
                <p className="text-[10px] lg:text-sm text-ink-primary mt-1">
                  First production workflow, typical Quoin engagement
                </p>
              </div>
            </BlurFade>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
