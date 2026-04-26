"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <BlurFade inView direction="up">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">
              Next Step
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.15] tracking-tight text-balance">
              {"\u201CLet\u2019s start with"}<br />{"a conversation.\u201D"}
            </h2>
            <p className="mt-6 text-sm leading-[1.85] text-background/50 max-w-md">
              A 1-hour conversation about your operations. No pitch. No pressure.
              Submit the form and book directly on Kavin&rsquo;s calendar. If there is a fit,
              the next step is a 2-week Executive Diagnostic — a standalone engagement
              with clear deliverables and no long-term commitment.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase px-6 py-3 bg-accent text-background hover:bg-accent/90 transition-colors duration-200 rounded-sm"
              >
                <span>Talk to us</span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              <a
                href="mailto:kavins@quoinbuildings.com"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-background/60 hover:text-background transition-colors duration-500"
              >
                <span className="border-b border-background/20 pb-0.5 group-hover:border-background/60 transition-colors duration-500">
                  kavins@quoinbuildings.com
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
                  Headquarters
                </p>
                <p className="text-sm leading-[1.75] text-background/55">
                  Washington, DC
                </p>
                <p className="text-sm text-background/55 mt-4">
                  kavins@quoinbuildings.com
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-background/35 mb-5">
                  What to Expect
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Tell us about your firm using the form.",
                    "Pick a time on Kavin's calendar — same screen, no waiting.",
                    "1-hour conversation: your operations, your challenges, mutual fit.",
                    "If there is a fit, we scope a 2-week Executive Diagnostic.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[11px] text-accent/60 mt-0.5 shrink-0">{i + 1}.</span>
                      <p className="text-sm leading-[1.75] text-background/55">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
