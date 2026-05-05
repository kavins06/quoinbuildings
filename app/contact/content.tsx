"use client"

import { useState } from "react"
import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const callExpectations = [
  { number: "01", text: "We discuss your operating model and the AI pressure you are seeing." },
  { number: "02", text: "We identify candidate workflows where better intelligence would matter." },
  { number: "03", text: "If there is a fit, we scope a bounded mapping engagement." },
  { number: "04", text: "No production access required to start. Redacted evidence is enough." },
]

export function ContactContent() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [hp, setHp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

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
          role: "",
          propertyType: "",
          currentAiActivity: "",
          portfolioUnits: "",
          portfolioSqFt: "",
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
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-16 md:pb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Contact
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                Map one operating area. Decide where AI belongs.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                30-minute call. Bring your operating model and the workflows
                where AI pressure is loudest. Leave with three candidate
                workflows and a no-pressure decision packet.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-28">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <BlurFade inView direction="up" className="lg:col-span-7">
              {bookingConfirmed ? (
                <div className="py-12">
                  <div className="mb-6 h-px w-10 bg-accent" />
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                    You&rsquo;re booked
                  </p>
                  <h2 className="mb-5 text-balance text-[clamp(2rem,4vw,2.5rem)] font-medium leading-[1.15] text-ink-primary">
                    Thank you. Talk soon.
                  </h2>
                  <p className="max-w-md text-[15px] leading-[1.7] text-ink-secondary">
                    Your call is on the calendar. A confirmation with the
                    Google Meet link should be in your inbox in the next few
                    minutes.
                  </p>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-ink-secondary">
                    Need to reschedule? Use the link in the calendar invite, or
                    email{" "}
                    <a
                      href="mailto:kavins@quoinbuildings.com"
                      className="border-b border-accent text-ink-primary hover:border-ink-primary"
                    >
                      kavins@quoinbuildings.com
                    </a>
                    .
                  </p>
                </div>
              ) : submitted ? (
                <div className="py-8">
                  <div className="mb-6 h-px w-10 bg-accent" />
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                    Step 02
                  </p>
                  <h2 className="mb-3 text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-[1.2] text-ink-primary">
                    Pick a time.
                  </h2>
                  <p className="mb-8 text-[15px] leading-[1.7] text-ink-secondary">
                    Grab a slot below. You&rsquo;ll get a calendar invite and a
                    Google Meet link.
                  </p>
                  <div className="overflow-hidden border border-strong bg-surface-base">
                    <iframe
                      src={process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ00JrZ1C4N98WsTIZ5ic1XOdDAIkwe1JhRhPy15f7PTAMtoJKshGXM5qaRYIoL2jcc1OoNamnaX?gv=true"}
                      title="Book a call"
                      className="w-full"
                      style={{ height: "780px", border: 0 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => setBookingConfirmed(true)}
                      className="cta-primary inline-flex items-center gap-2 self-start text-[15px] font-medium"
                    >
                      <span>I&rsquo;ve booked my call</span>
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                    <p className="text-[12px] text-ink-muted">
                      Calendar not loading?{" "}
                      <a
                        href={process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ00JrZ1C4N98WsTIZ5ic1XOdDAIkwe1JhRhPy15f7PTAMtoJKshGXM5qaRYIoL2jcc1OoNamnaX?gv=true"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-strong/30 hover:text-ink-primary"
                      >
                        Open in a new tab
                      </a>
                      .
                    </p>
                  </div>
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

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        First name
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border-b border-strong/30 bg-transparent pb-3 text-[15px] text-ink-primary transition-colors duration-200 placeholder:text-ink-muted/40 focus:border-accent focus:outline-none"
                        placeholder="First name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border-b border-strong/30 bg-transparent pb-3 text-[15px] text-ink-primary transition-colors duration-200 placeholder:text-ink-muted/40 focus:border-accent focus:outline-none"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="border-b border-strong/30 bg-transparent pb-3 text-[15px] text-ink-primary transition-colors duration-200 placeholder:text-ink-muted/40 focus:border-accent focus:outline-none"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b border-strong/30 bg-transparent pb-3 text-[15px] text-ink-primary transition-colors duration-200 placeholder:text-ink-muted/40 focus:border-accent focus:outline-none"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      What AI operating question are you trying to answer?
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="resize-none border-b border-strong/30 bg-transparent pb-3 text-[15px] leading-[1.55] text-ink-primary transition-colors duration-200 placeholder:text-ink-muted/40 focus:border-accent focus:outline-none"
                      placeholder="Where AI could reduce maintenance expense leakage, improve leasing response, accelerate reporting, or make operating exceptions visible earlier."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="cta-primary inline-flex items-center gap-2 self-start text-[15px] font-medium disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>{submitting ? "Sending..." : "Request conversation"}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>

                  {errorMessage && (
                    <p className="text-[12px] leading-relaxed text-accent" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <p className="mt-2 text-[11px] leading-[1.6] text-ink-muted">
                    Your information is handled in accordance with our{" "}
                    <Link
                      href="/privacy"
                      className="border-b border-strong/30 hover:text-ink-primary"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </BlurFade>

            <BlurFade inView delay={0.2} direction="up" className="lg:col-span-4 lg:col-start-9">
              <div className="flex flex-col gap-12 border-l border-strong/15 pl-8">
                <div>
                  <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    Direct
                  </p>
                  <a
                    href="mailto:kavins@quoinbuildings.com"
                    className="border-b border-strong/30 pb-0.5 text-[15px] text-ink-primary transition-colors duration-200 hover:border-accent"
                  >
                    kavins@quoinbuildings.com
                  </a>
                </div>

                <div>
                  <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    What to expect on the call
                  </p>
                  <div className="flex flex-col gap-4">
                    {callExpectations.map((step) => (
                      <div key={step.number} className="flex items-start gap-4">
                        <span className="mt-0.5 shrink-0 font-serif text-[16px] leading-none text-accent tabular-nums">
                          {step.number}
                        </span>
                        <p className="text-[14px] leading-[1.6] text-ink-secondary">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    Suggested participants
                  </p>
                  <p className="text-[14px] leading-[1.65] text-ink-secondary">
                    COO, President, Head of Operations, Head of Asset
                    Management, CIO/CTO, or the executive responsible for AI
                    adoption.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </main>
  )
}
