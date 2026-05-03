"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

export function AssessmentOfferSection() {
  return (
    <section
      aria-labelledby="assessment-offer-heading"
      className="bg-surface-sunken border-y border-strong"
    >
      <div className="container-shell py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <BlurFade inView direction="up">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent mb-6">
                AI Readiness Assessment
              </p>
            </BlurFade>
            <BlurFade inView delay={0.05} direction="up">
              <h2
                id="assessment-offer-heading"
                className="font-serif text-balance text-ink-primary text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.02em] font-normal"
              >
                Find out where your firm <em className="italic">stands.</em>
              </h2>
            </BlurFade>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <BlurFade inView delay={0.1} direction="up">
              <p className="measure text-ink-secondary text-[17px] leading-[1.55]">
                Seven questions, five minutes. You get a score, a benchmark
                against peer owner/operator firms, and three specific
                recommendations for where AI moves the needle in your firm.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.15} direction="up">
              <div className="mt-10">
                <Link
                  href="/assessment"
                  className="cta-primary text-[15px] font-medium tracking-[0.01em] inline-flex items-center gap-2"
                >
                  <span>Take the AI Readiness Assessment</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
