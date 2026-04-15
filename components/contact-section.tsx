"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <BlurFade inView direction="up">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">
              Next Step
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-balance">
              {"Let\u2019s start with"}<br />a conversation
            </h2>
            <div className="mt-10 flex flex-col gap-6">
              <Link href="/contact">
                <ShimmerButton
                  borderRadius="0px"
                  shimmerColor="#ffffff"
                  shimmerDuration="4s"
                  shimmerSize="0.03em"
                  background="hsl(26, 29%, 61%)"
                  className="px-10 py-4 text-sm tracking-[0.1em] uppercase font-medium"
                >
                  Schedule a Conversation
                </ShimmerButton>
              </Link>
              <a
                href="mailto:info@quoinbuildings.com"
                className="group inline-flex items-center gap-3 text-sm tracking-wide text-background/60 hover:text-background transition-colors duration-500"
              >
                <span className="border-b border-background/20 pb-0.5 group-hover:border-background/60 transition-colors duration-500">
                  info@quoinbuildings.com
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} direction="up">
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-background/35 mb-5">
                  Washington, DC
                </p>
                <p className="text-sm leading-[1.75] text-background/55">
                  Washington, DC<br />
                  Metropolitan Area
                </p>
                <p className="text-sm text-background/55 mt-4">
                  info@quoinbuildings.com
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-background/35 mb-5">
                  What to Expect
                </p>
                <p className="text-sm leading-[1.75] text-background/55">
                  A 30-minute discovery conversation.<br />
                  No pitch. No pressure.<br />
                  We respond within one business day.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
