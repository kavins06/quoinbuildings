"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Particles } from "@/components/ui/particles"
import { WordRotate } from "@/components/ui/word-rotate"
import { BorderBeam } from "@/components/ui/border-beam"
import { TextAnimate } from "@/components/ui/text-animate"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24">
      <img
        src="/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={60}
        color="#D4A574"
        ease={80}
        staticity={40}
        size={0.5}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7">

            <BlurFade delay={0.5} direction="up" offset={8}>
              <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.03em] text-white">
                Your AI Operating
                <br />
                <span className="text-[#D4A574]">
                  <WordRotate
                    words={["Partner", "Advantage", "Infrastructure"]}
                    duration={3000}
                    className="text-[clamp(2.25rem,6vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.03em] text-[#D4A574] inline-block"
                    motionProps={{
                      initial: { opacity: 0, y: 20, filter: "blur(4px)" },
                      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                      exit: { opacity: 0, y: -20, filter: "blur(4px)" },
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                  />
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.7} direction="up">
              <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-white max-w-2xl">
                Quoin prepares your team, data, and governance for AI.
                We build the AI for your workflows. We run and improve them over time{" "}
                <TextAnimate
                  as="span"
                  animation="blurIn"
                  by="character"
                  once
                  className="text-[#D4A574] font-medium"
                >
                  with you
                </TextAnimate>
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
                <a href="/contact">
                  <ShimmerButton
                    borderRadius="0px"
                    shimmerColor="rgba(255,255,255,0.3)"
                    shimmerDuration="5s"
                    shimmerSize="0.03em"
                    background="rgba(255,255,255,0.15)"
                    className="text-[11px] tracking-[0.2em] uppercase px-6 py-3 text-white"
                  >
                    Explore Partnership
                  </ShimmerButton>
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
                <p className="text-2xl lg:text-4xl font-extralight text-[#D4A574] tracking-tight">
                  <NumberTicker value={83} delay={1.3} className="inline-block tabular-nums tracking-tight text-[#D4A574]" />%
                </p>
                <p className="text-[10px] lg:text-sm text-white mt-1">
                  AI better than experts in their domain
                </p>
                <BorderBeam size={80} duration={8} colorFrom="#D4A574" colorTo="#D4A57400" borderWidth={1} />
              </div>
            </BlurFade>

            <BlurFade delay={1.3} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-white/20 p-4 lg:p-6 bg-white/5 backdrop-blur-sm h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-white mb-1 lg:mb-2">
                  Industry Gap
                </p>
                <p className="text-2xl lg:text-4xl font-extralight text-[#D4A574] tracking-tight">
                  <NumberTicker value={5} delay={1.5} className="inline-block tabular-nums tracking-tight text-[#D4A574]" />%
                </p>
                <p className="text-[10px] lg:text-sm text-white mt-1">
                  CRE firms achieving AI goals
                </p>
                <BorderBeam size={80} duration={8} delay={2} colorFrom="#D4A574" colorTo="#D4A57400" borderWidth={1} />
              </div>
            </BlurFade>

            <BlurFade delay={1.5} direction="up" className="h-full">
              <div className="relative overflow-hidden border border-white/20 p-4 lg:p-6 bg-white/5 backdrop-blur-sm h-full">
                <p className="text-[9px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-white mb-1 lg:mb-2">
                  Results In
                </p>
                <p className="text-2xl lg:text-4xl font-extralight text-[#D4A574] tracking-tight">
                  <NumberTicker value={8} delay={1.7} className="inline-block tabular-nums tracking-tight text-[#D4A574]" /> Wks
                </p>
                <p className="text-[10px] lg:text-sm text-white mt-1">
                  make your firm AI native
                </p>
                <BorderBeam size={80} duration={8} delay={4} colorFrom="#D4A574" colorTo="#D4A57400" borderWidth={1} />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
