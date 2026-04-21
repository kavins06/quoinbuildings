"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const steps = [
  { number: "01", text: "You submit the form or email us." },
  { number: "02", text: "Kavin responds personally within one business day." },
  { number: "03", text: "30-minute conversation: your operations, your challenges, mutual fit." },
  { number: "04", text: "If there is a fit, we scope an Executive Diagnostic." },
]

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <PageHeader
        eyebrow="Next Step"
        title="Let&rsquo;s talk."
        description="Tell us about your firm. We respond within one business day. If there is a fit, the next step is a scoping call for a 2-week Executive Diagnostic."
        backgroundImage="/header-contact.jpg"
      />

      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <BlurFade inView direction="up" className="lg:col-span-7">
            {submitted ? (
              <div className="py-16">
                <div className="w-10 h-px bg-accent/40 mb-8" />
                <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-4">
                  Thank you.
                </h2>
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  We will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                      placeholder="First name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Portfolio Size
                      <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                    </label>
                    <select
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      <option value="1000-5000">1,000&ndash;5,000 units</option>
                      <option value="5000-15000">5,000&ndash;15,000 units</option>
                      <option value="15000-50000">15,000&ndash;50,000 units</option>
                      <option value="50000+">50,000+ units</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Property Type
                      <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                    </label>
                    <select
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="mixed-use">Mixed-Use</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                    Your Role
                    <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                  </label>
                  <select
                    className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select your role</option>
                    <option value="ceo-owner">CEO/Owner</option>
                    <option value="coo-vp-operations">COO/VP Operations</option>
                    <option value="cto-vp-technology">CTO/VP Technology</option>
                    <option value="cfo-vp-finance">CFO/VP Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none placeholder:text-muted-foreground/30"
                    placeholder="What prompted you to reach out?"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start mt-4 px-10 py-4 bg-foreground text-background text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-foreground/90 transition-colors duration-300"
                >
                  Submit
                </button>
                <p className="text-[11px] leading-relaxed text-muted-foreground/50 mt-2">
                  Your information is handled in accordance with our{" "}
                  <Link href="/privacy" className="text-muted-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors duration-300">
                    Privacy Policy
                  </Link>.
                </p>
              </form>
            )}
          </BlurFade>

          <BlurFade inView delay={0.2} direction="up" className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-12">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
                  Direct
                </p>
                <a
                  href="mailto:info@quoinbuildings.com"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 border-b border-border pb-0.5"
                >
                  info@quoinbuildings.com
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Washington, DC
                </p>
              </div>

              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
                  What to Expect
                </p>
                <div className="flex flex-col gap-4">
                  {steps.map((step) => (
                    <div key={step.number} className="flex items-start gap-4">
                      <span className="text-[11px] tracking-[0.15em] text-muted-foreground/30 mt-0.5 shrink-0">
                        ({step.number})
                      </span>
                      <p className="text-sm leading-[1.6] text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
                  Suggested Participants
                </p>
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  The first call works best with the executive sponsor — COO, CEO, or VP Operations. If your CTO or IT lead is part of the AI decision, they are welcome. One to three people; no presentation deck needed.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
