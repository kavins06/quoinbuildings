"use client"

import { useState } from "react"
interface LeadCaptureFormProps {
  answers: Record<string, string>
}

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://calendar.google.com/calendar/appointments/AcZssZ3CdR1IBaSEYfwgY-7VLqjHEQM7Ovsl3SF8I9o=?gv=true"

interface FieldErrors {
  name?: string
  email?: string
  firm?: string
}

function validate(values: { name: string; email: string; firm: string }): FieldErrors {
  const errors: FieldErrors = {}
  if (!values.name.trim()) errors.name = "Required"
  if (!values.email.trim()) {
    errors.email = "Required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Use a valid email"
  }
  if (!values.firm.trim()) errors.firm = "Required"
  return errors
}

export function LeadCaptureForm({ answers }: LeadCaptureFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [firm, setFirm] = useState("")
  const [role, setRole] = useState("")
  const [hp, setHp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [softMessage, setSoftMessage] = useState<string | null>(null)
  const [bannerError, setBannerError] = useState<string | null>(null)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [downloading, setDownloading] = useState(false)

  const isValid = !validate({ name, email, firm }).name && !validate({ name, email, firm }).email && !validate({ name, email, firm }).firm

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    const fieldErrors = validate({ name, email, firm })
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return
    setBannerError(null)
    setSubmitting(true)
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          leadData: { name, email, firm, role },
          _hp: hp,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setBannerError(
          (json && json.error) ||
            "Couldn't save right now. Try again or email us at hi@quoinbuildings.com.",
        )
        return
      }
      setSubmitted(true)
      if (json && json.pdfDelivered === false) {
        setSoftMessage(
          "Got your details. The PDF didn't generate just now, so we'll send it within 24 hours.",
        )
      } else {
        setSoftMessage("Got it. Your report is on the way to your inbox.")
      }
    } catch {
      setBannerError("Couldn't reach the server. Try again or email us at hi@quoinbuildings.com.")
    } finally {
      setSubmitting(false)
    }
  }

  async function handlePdfDownload() {
    if (downloading) return
    setDownloading(true)
    try {
      const res = await fetch("/api/assessment/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, leadData: { firm: firm || "your-firm", name } }),
      })
      if (!res.ok) {
        setBannerError("Couldn't generate the PDF. Try again in a moment.")
        return
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      const cd = res.headers.get("content-disposition") || ""
      const match = cd.match(/filename="?([^";]+)"?/i)
      a.download = match?.[1] ?? "quoin-ai-readiness.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      setBannerError("Couldn't generate the PDF. Try again in a moment.")
    } finally {
      setDownloading(false)
    }
  }

  if (submitted) {
    return (
      <section aria-labelledby="lead-capture-success" className="border-t border-[hsl(var(--border-subtle))] pt-12">
        <p className="text-[11px] tracking-[0.16em] uppercase text-accent mb-3">
          Step two
        </p>
        <h2 id="lead-capture-success" className="font-serif text-3xl md:text-4xl mb-4 text-balance">
          {softMessage}
        </h2>
        <p className="font-sans text-ink-secondary max-w-[60ch] mb-8">
          Now book a 30-minute readiness conversation. We'll walk through your score,
          the three recommendations, and what 90 days of work would look like.
        </p>

        <div className="border border-[hsl(var(--border-strong))]">
          <iframe
            src={BOOKING_URL}
            title="Book a readiness conversation"
            className="w-full h-[680px] block"
            loading="lazy"
            allow="fullscreen"
          />
        </div>
        <p className="mt-4 font-sans text-sm text-ink-muted">
          Calendar widget not loading? Email <a href="mailto:hi@quoinbuildings.com" className="text-accent border-b border-accent">hi@quoinbuildings.com</a>.
        </p>
      </section>
    )
  }

  return (
    <section aria-labelledby="lead-capture-heading" className="border-t border-[hsl(var(--border-subtle))] pt-12">
      <p className="text-[11px] tracking-[0.16em] uppercase text-accent mb-3">
        Step two
      </p>
      <h2 id="lead-capture-heading" className="font-serif text-3xl md:text-4xl mb-4 text-balance">
        Get the detailed report and book a call.
      </h2>
      <p className="font-sans text-ink-secondary max-w-[60ch] mb-8">
        We'll send a PDF version of your readiness assessment to your inbox and surface a calendar
        to book a 30-minute conversation.
      </p>

      {bannerError ? (
        <div role="alert" className="mb-6 border border-accent text-accent px-4 py-3 text-sm font-sans">
          {bannerError}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Honeypot */}
        <label className="hidden" aria-hidden>
          Don&apos;t fill this in
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
        </label>

        <Field
          id="lc-name"
          label="Name"
          required
          value={name}
          onChange={setName}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="lc-email"
          label="Email"
          required
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="lc-firm"
          label="Firm"
          required
          value={firm}
          onChange={setFirm}
          error={errors.firm}
          autoComplete="organization"
        />
        <Field
          id="lc-role"
          label="Role"
          value={role}
          onChange={setRole}
          autoComplete="organization-title"
          helperText="Optional. Helps us tailor the conversation."
        />

        <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-2">
          <button
            type="submit"
            disabled={submitting || !isValid}
            className={[
              "inline-flex items-center justify-center px-7 py-3.5 font-sans text-sm font-medium",
              "bg-ink-primary text-background hover:bg-accent transition-colors duration-200",
              "disabled:bg-ink-muted disabled:cursor-not-allowed",
            ].join(" ")}
          >
            {submitting ? "Sending..." : "Email me the report"}
          </button>

          <button
            type="button"
            onClick={handlePdfDownload}
            disabled={downloading}
            className="group inline-flex items-center gap-2 font-sans text-sm text-ink-secondary border-b border-current pb-1 hover:text-accent hover:border-accent transition-colors disabled:text-ink-muted/50"
          >
            <span>{downloading ? "Preparing PDF..." : "Just send me the PDF"}</span>
          </button>
        </div>

        <p className="md:col-span-2 font-sans text-xs text-ink-muted">
          By sharing your details you agree to receive your assessment report and occasional Quoin updates. Unsubscribe any time.
        </p>
      </form>
    </section>
  )
}

interface FieldProps {
  id: string
  label: string
  required?: boolean
  type?: string
  value: string
  onChange: (value: string) => void
  error?: string
  helperText?: string
  autoComplete?: string
}

function Field({ id, label, required, type = "text", value, onChange, error, helperText, autoComplete }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-2 font-medium">
        {label} {required ? <span className="text-accent">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        className={[
          "border bg-transparent px-3 py-3 font-sans text-[15px]",
          "focus:outline-none focus:border-ink-primary focus:bg-[hsl(var(--surface-sunken))]",
          error ? "border-accent" : "border-[hsl(var(--border-strong))]",
        ].join(" ")}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-accent">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="mt-1 text-xs text-ink-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}
