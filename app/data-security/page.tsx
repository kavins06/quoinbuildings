import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Security | Quoin",
  description: "Quoin's data-handling posture: access control, vendor review, incident response.",
}

export default function DataSecurityPage() {
  return (
    <article className="container-shell py-24 lg:py-32">
      <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
        Trust &amp; Governance
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
        Data Security
      </h1>
      <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
        Full content coming in a subsequent update. This page will describe our
        data-handling posture at rest and in transit, access control principle, vendor
        review practice, and incident response contact. High-level, not a SOC 2 substitute.
      </p>
      <p className="text-sm text-ink-muted mt-6">
        Security questions in the meantime: <a className="underline decoration-accent underline-offset-4" href="mailto:security@quoinbuildings.com">security@quoinbuildings.com</a>
      </p>
    </article>
  )
}
