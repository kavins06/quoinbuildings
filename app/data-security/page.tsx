import type { Metadata } from "next"
import { PageStructuredData } from "@/components/page-structured-data"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Data Security",
  description:
    "Quoin's data-handling posture for AI operations: access control, vendor review, encryption, and incident response.",
  path: "/data-security",
  keywords: ["AI data security real estate", "property management data security", "AI vendor review"],
})

export default function DataSecurityPage() {
  return (
    <>
      <PageStructuredData name="Data Security" path="/data-security" />
      <article className="container-shell py-24 lg:py-32">
      <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
        Trust &amp; Governance
      </p>
      <h1 className="text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
        Data Security
      </h1>
      <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
        How Quoin handles client data at rest and in transit, who can access it, how we vet the systems that touch it, and what happens if something goes wrong.
      </p>

      <section className="mt-16 measure">
        <h2 className="text-2xl text-ink-primary">Data handling</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          All client data is encrypted at rest with AES-256 and in transit with TLS 1.3. Operational data (tenant records, lease documents, maintenance tickets, financial reports) lives inside client-controlled environments where possible (your Yardi, RealPage, AppFolio, or Entrata instance; your cloud; your database). Where data must move into a Quoin-managed environment for model training or orchestration, it moves through documented, audited pipelines and is retained only for the duration of the engagement plus a defined windback period.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Access control</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Quoin personnel access client systems only under named, time-bound credentials issued through your identity provider (or ours, when we host the environment). Access is role-based, follows least-privilege by default, and is revoked at engagement end or role change. All access is logged.
        </p>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          No Quoin engineer has standing production access to a live client environment without an open, scoped ticket.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Vendor review</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Every third-party service that touches client data, including model providers (OpenAI, Anthropic), observability tools, and orchestration platforms, is reviewed before it enters an engagement. We check data-processing agreements, data-retention policies, sub-processor lists, and geographic processing. The vendor list for each engagement is documented and shared with the client.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Incident response</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          If we detect or are informed of a security incident affecting client data, we notify the client&apos;s designated contact within 24 hours of confirmation, regardless of the severity of the incident or whether we believe the notification threshold has been legally triggered. A written post-incident report follows within 10 business days, detailing what happened, what was affected, what we did, and what we are changing.
        </p>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Clients can report a suspected security issue to <a className="underline decoration-accent underline-offset-4" href="mailto:security@quoinbuildings.com">security@quoinbuildings.com</a> at any time.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">What this is not</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          This page describes our posture. It is not a SOC 2 report, an ISO 27001 certification, or a penetration-test result. Quoin is a young firm and has not yet undergone those audits; we will pursue them as the firm grows. In the meantime, we are transparent about the practices we have in place and happy to walk any prospective client through them in detail.
        </p>
      </section>

      <p className="text-sm text-ink-muted mt-16">
        Security questions: <a className="underline decoration-accent underline-offset-4" href="mailto:security@quoinbuildings.com">security@quoinbuildings.com</a>
      </p>
      </article>
    </>
  )
}
