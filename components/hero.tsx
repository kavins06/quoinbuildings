"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-surface-base pt-12 pb-14 md:pt-20 md:pb-20 lg:pt-28 lg:pb-24"
    >
      <div className="container-shell">
        <BlurFade inView direction="up" offset={0}>
          <div className="hairline border-t w-full mb-8 md:mb-10" aria-hidden="true" />
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <BlurFade inView delay={0.05} direction="up">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent mb-6">
                AI for real estate owner/operators
              </p>
            </BlurFade>

            <BlurFade inView delay={0.1} direction="up">
              <h1
                id="hero-heading"
                className="font-serif text-balance text-ink-primary font-normal leading-[1.02] tracking-[-0.025em] text-[clamp(2.65rem,6.4vw,5.5rem)]"
              >
                You own the buildings. You run them. AI should work the{" "}
                <em className="italic">same way.</em>
              </h1>
            </BlurFade>

            <BlurFade inView delay={0.2} direction="up">
              <p className="mt-8 measure text-ink-secondary text-[16px] md:text-[18px] leading-[1.55]">
                Quoin discovers, implements, and manages AI for owner/operators of
                real estate. We figure out where AI actually moves IRR in your
                portfolio and operating margin across your operations, build the
                data foundation that&apos;s been blocking every initiative, and
                run the deployments end-to-end. From &ldquo;AI-curious&rdquo; to AI
                in production in 90 days. No internal AI team to hire. No
                consulting deck that becomes shelfware.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.3} direction="up">
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                <Link
                  href="/contact"
                  className="cta-primary text-[15px] font-medium tracking-[0.01em] inline-flex items-center gap-2 self-start"
                >
                  <span>Book a 30-minute readiness conversation</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/owner-operators"
                  className="cta-secondary text-[15px] font-medium tracking-[0.01em] inline-flex items-center gap-2 self-start"
                >
                  <span>See how we work</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </BlurFade>
          </div>

          <aside
            aria-label="Editorial note"
            className="lg:col-span-4 lg:col-start-9 lg:pt-3"
          >
            <BlurFade inView delay={0.35} direction="up">
              <div className="border-l border-strong pl-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted mb-5">
                  The pattern
                </p>
                <p className="font-serif italic text-[22px] leading-[1.35] text-ink-primary">
                  No partner today speaks both halves of an owner/operator
                  firm. The asset thesis and the operating workflow.
                </p>
                <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Quoin / Discover / Implement / Manage
                </p>
              </div>
            </BlurFade>
          </aside>
        </div>
      </div>
    </section>
  )
}
