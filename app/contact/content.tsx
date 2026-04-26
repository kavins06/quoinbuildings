"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const steps = [
  { number: "01", text: "Tell us about your firm using the form." },
  { number: "02", text: "Pick a time on Kavin's calendar — same screen, no waiting." },
  { number: "03", text: "1-hour conversation: your operations, your challenges, mutual fit." },
  { number: "04", text: "If there is a fit, we scope a 2-week Executive Diagnostic." },
]

export function ContactContent() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [portfolioUnits, setPortfolioUnits] = useState("")
  const [portfolioSqFt, setPortfolioSqFt] = useState("")
  const [message, setMessage] = useState("")
  const [hp, setHp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setErrorMessage(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          email,
          role,
          propertyType,
          portfolioUnits,
          portfolioSqFt,
          message,
          _hp: hp,
        }),
      })

      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null

      if (!res.ok || !data?.ok) {
        setErrorMessage(
          data?.error ??
            "Submission failed. Please email kavins@quoinbuildings.com.",
        )
        setSubmitting(false)
        return
      }

      setSubmitted(true)
    } catch {
      setErrorMessage(
        "Submission failed. Please email kavins@quoinbuildings.com.",
      )
      setSubmitting(false)
    }
  }

  return (
    <main>
      <PageHeader
        eyebrow="Next Step"
        title="Let&rsquo;s talk."
        description="Tell us about your firm, then book a 1-hour call directly on Kavin's calendar. If there is a fit, the next step is a 2-week Executive Diagnostic."
        backgroundImage="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <BlurFade inView direction="up" className="lg:col-span-7">
            {submitted ? (
              <div className="py-8">
                <div className="w-10 h-px bg-accent/40 mb-6" />
                <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-3">
                  Thanks — pick a time.
                </h2>
                <p className="text-sm leading-[1.75] text-muted-foreground mb-8">
                  Grab a 1-hour slot below. You&rsquo;ll get a calendar invite and a Google Meet link.
                </p>
                <div className="border border-border rounded-sm overflow-hidden bg-background">
                  <iframe
                    src={process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/aJBszTpjD5icj7bZ8"}
                    title="Book a 1-hour call"
                    className="w-full"
                    style={{ height: "780px", border: 0 }}
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-[12px] text-muted-foreground/70">
                  Calendar not loading?{" "}
                  <a
                    href={process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/aJBszTpjD5icj7bZ8"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    Open the booking page in a new tab
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                >
                  <label>
                    Do not fill this field
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
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
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
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
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/30"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Your Role
                      <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={`w-full bg-transparent border-b border-border pb-3 pr-8 text-sm focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer ${role ? "text-foreground font-medium" : "text-muted-foreground/60"}`}
                      >
                        <option value="">Select your role</option>
                        <option value="ceo-owner">CEO/Owner</option>
                        <option value="coo-vp-operations">COO/VP Operations</option>
                        <option value="cto-vp-technology">CTO/VP Technology</option>
                        <option value="cfo-vp-finance">CFO/VP Finance</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-1 bottom-3 h-4 w-4 text-muted-foreground/60" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Property Type
                      <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className={`w-full bg-transparent border-b border-border pb-3 pr-8 text-sm focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer ${propertyType ? "text-foreground font-medium" : "text-muted-foreground/60"}`}
                      >
                        <option value="">Select type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="mixed-use">Mixed-Use</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-1 bottom-3 h-4 w-4 text-muted-foreground/60" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Portfolio Size &mdash; Units
                      <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        value={portfolioUnits}
                        onChange={(e) => setPortfolioUnits(e.target.value)}
                        className={`w-full bg-transparent border-b border-border pb-3 pr-8 text-sm focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer ${portfolioUnits ? "text-foreground font-medium" : "text-muted-foreground/60"}`}
                      >
                        <option value="">Select a range</option>
                        <option value="1000-5000">1,000&ndash;5,000 units</option>
                        <option value="5000-15000">5,000&ndash;15,000 units</option>
                        <option value="15000-50000">15,000&ndash;50,000 units</option>
                        <option value="50000+">50,000+ units</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-1 bottom-3 h-4 w-4 text-muted-foreground/60" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                      Portfolio Size &mdash; Sq Ft
                      <span className="text-muted-foreground/30 ml-2 normal-case tracking-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        value={portfolioSqFt}
                        onChange={(e) => setPortfolioSqFt(e.target.value)}
                        className={`w-full bg-transparent border-b border-border pb-3 pr-8 text-sm focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer ${portfolioSqFt ? "text-foreground font-medium" : "text-muted-foreground/60"}`}
                      >
                        <option value="">Select a range</option>
                        <option value="1m-2m">1M&ndash;2M sq ft</option>
                        <option value="2m-5m">2M&ndash;5M sq ft</option>
                        <option value="5m-10m">5M&ndash;10M sq ft</option>
                        <option value="10m+">10M+ sq ft</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-1 bottom-3 h-4 w-4 text-muted-foreground/60" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                    What is your expected outcome of this call?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none placeholder:text-muted-foreground/30"
                    placeholder="e.g., understand if AI can fix our maintenance backlog"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="self-start mt-4 px-10 py-4 bg-foreground text-background text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-foreground/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Submit"}
                </button>

                {errorMessage && (
                  <p className="text-[11px] leading-relaxed text-red-600/90 mt-1" role="alert">
                    {errorMessage}
                  </p>
                )}

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
                  href="mailto:kavins@quoinbuildings.com"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 border-b border-border pb-0.5"
                >
                  kavins@quoinbuildings.com
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
