"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface-inverse text-surface-base"
    >
      <div className="container-shell py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <BlurFade inView direction="up" className="lg:col-span-7">
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-surface-base/50 mb-8">
                Final word
              </p>
              <h2
                id="contact-heading"
                className="font-serif text-balance text-surface-base text-[clamp(2.25rem,5.5vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.02em]"
              >
                The next 90 days will go by{" "}
                <em className="italic">either way.</em>
              </h2>
              <p className="mt-10 max-w-[58ch] text-[17px] md:text-[18px] leading-[1.6] text-surface-base/75">
                If you&rsquo;re a senior leader at an owner/operator firm and
                the AI conversation in your firm has stalled at &ldquo;we
                should be doing something,&rdquo; book a 30-minute readiness
                conversation. We&rsquo;ll show you the three highest-ROI AI
                deployments specific to your firm, what your data foundation
                needs to be, and what 90 days of work would actually look
                like.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-[0.01em] text-accent border-b border-accent pb-1 hover:text-surface-base hover:border-surface-base transition-colors duration-200"
                >
                  <span>Book a readiness conversation</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
                <a
                  href="mailto:kavins@quoinbuildings.com"
                  className="inline-flex items-center gap-2 text-[15px] tracking-[0.01em] text-surface-base/70 border-b border-surface-base/30 pb-1 hover:text-surface-base hover:border-surface-base transition-colors duration-200"
                >
                  <span>kavins@quoinbuildings.com</span>
                </a>
              </div>
            </div>
          </BlurFade>

          <BlurFade
            inView
            delay={0.15}
            direction="up"
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="border-l border-surface-base/20 pl-8 lg:pl-10">
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-surface-base/50 mb-6">
                Who this is for
              </p>
              <p className="text-[15px] md:text-[16px] leading-[1.65] text-surface-base/75">
                Senior leadership (CEO / COO / President) at vertically
                integrated REITs and large private owner/operators. Firms that
                both own and operate their real estate. Two thousand units and
                up, or one million square feet and up.
              </p>
              <div className="mt-10 pt-8 border-t border-surface-base/15">
                <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-surface-base/50 mb-5">
                  What to expect
                </p>
                <ol className="flex flex-col gap-4">
                  {[
                    "Tell us about your firm using the form.",
                    "Pick a time on the same page.",
                    "30-minute conversation: your data, your AI initiatives, the highest-ROI deployments specific to you.",
                    "If there’s a fit, we scope the 90-day engagement.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-serif text-[18px] leading-none text-accent tabular-nums shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14px] md:text-[15px] leading-[1.65] text-surface-base/70">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
