"use client"

import Image from "next/image"
import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

export function Hero() {
  return (
    <section className="relative lg:min-h-screen flex items-start lg:items-center overflow-hidden bg-surface-base pt-10 pb-16 lg:py-24">

      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.35} direction="up" offset={6}>
              <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-accent">
                FROM AI PRESSURE TO PRODUCTION
              </p>
            </BlurFade>

            <BlurFade delay={0.5} direction="up" offset={8}>
              <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink-primary text-balance">
                Make AI operational across{" "}
                <span className="text-accent">institutional real estate</span>.
              </h1>
            </BlurFade>

            <BlurFade delay={0.7} direction="up">
              <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-ink-primary max-w-2xl md:max-w-3xl">
                Quoin helps <span className="font-medium">institutional real estate operators</span>, including REITs, owner-operators, property management firms, and asset managers, turn AI pressure into governed workflows. We map how work actually runs, build or configure agents inside the systems your teams already use, and put governance in place before anything reaches production.
              </p>
            </BlurFade>

            <BlurFade delay={1.0} direction="up">
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-[11px] tracking-[0.15em] uppercase px-5 py-3 bg-ink-primary text-white hover:bg-ink-primary/90 transition-colors duration-150 min-h-[44px]"
                >
                  Book the 2-week diagnostic
                </Link>
                <a
                  href="#diagnostic"
                  className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-500 py-3 min-h-[44px]"
                >
                  See what the diagnostic includes &rarr;
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Right: Stats framed */}
          <div className="relative overflow-hidden lg:col-span-4 lg:col-start-9 lg:self-stretch mt-10 lg:mt-0 -ml-6 md:-ml-12 lg:ml-0 -mr-6 md:-mr-12 lg:-mr-20 border border-subtle p-4 lg:p-8 flex flex-col justify-center">
          <Image
            src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="pointer-events-none object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/30" aria-hidden="true" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:flex lg:flex-col lg:gap-6">
            <BlurFade delay={1.1} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-subtle p-5 md:p-4 lg:p-6 bg-white/70 h-full">
                <p className="text-[11px] md:text-[9px] lg:text-[11px] tracking-[0.3em] md:tracking-[0.2em] lg:tracking-[0.3em] uppercase text-ink-primary mb-2 md:mb-1 lg:mb-2">
                  Executive Priority
                </p>
                <p className="text-4xl md:text-2xl lg:text-4xl font-normal text-accent tracking-tight whitespace-nowrap">
                  74%
                </p>
                <p className="text-sm md:text-[10px] lg:text-sm text-ink-primary mt-1">
                  Global leaders say AI will remain a top investment priority even if a recession occurs
                </p>
                <p className="text-[11px] tracking-[0.02em] text-ink-muted mt-1 italic">
                  <a href="https://kpmg.com/xx/en/media/press-releases/2026/03/kpmg-global-ai-pulse-survey.html" target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-2">KPMG, Mar 2026</a>
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={1.3} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-subtle p-5 md:p-4 lg:p-6 bg-white/70 h-full">
                <p className="text-[11px] md:text-[9px] lg:text-[11px] tracking-[0.3em] md:tracking-[0.2em] lg:tracking-[0.3em] uppercase text-ink-primary mb-2 md:mb-1 lg:mb-2">
                  Industry Gap
                </p>
                <p className="text-4xl md:text-2xl lg:text-4xl font-normal text-accent tracking-tight">
                  5%
                </p>
                <p className="text-sm md:text-[10px] lg:text-sm text-ink-primary mt-1">
                  CRE firms achieving their AI program goals
                </p>
                <p className="text-[11px] tracking-[0.02em] text-ink-muted mt-1 italic">
                  <a href="https://www.jll.com/en-us/newsroom/real-estates-ai-reality-check-companies-piloting-only-achieved-all-ai-goals" target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-2">JLL, Oct 2025</a>
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={1.5} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-subtle p-5 md:p-4 lg:p-6 bg-white/70 h-full">
                <p className="text-[11px] md:text-[9px] lg:text-[11px] tracking-[0.3em] md:tracking-[0.2em] lg:tracking-[0.3em] uppercase text-ink-primary mb-2 md:mb-1 lg:mb-2">
                  First Workflow
                </p>
                <p className="text-4xl md:text-2xl lg:text-4xl font-normal text-accent tracking-tight">
                  4 Wks
                </p>
                <p className="text-sm md:text-[10px] lg:text-sm text-ink-primary mt-1">
                  Target window for a scoped governed workflow after diagnostic
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
