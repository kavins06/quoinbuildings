import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsible AI | Quoin",
  description: "How Quoin decides what AI to build and deploy, with human-in-the-loop expectations and data boundaries.",
}

export default function ResponsibleAIPage() {
  return (
    <article className="container-shell py-24 lg:py-32">
      <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
        Trust &amp; Governance
      </p>
      <h1 className="text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
        Responsible AI
      </h1>
      <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
        How Quoin decides what AI to build, how we involve people in the decisions AI touches, and where the lines are between client data and our systems.
      </p>

      <section className="mt-16 measure">
        <h2 className="text-2xl text-ink-primary">What we will and will not build</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          We work on operational AI: leasing triage, maintenance routing, rent-roll reconciliation, document abstraction, tenant communications. We do not build AI that makes final tenant selection decisions, final credit decisions, or any decision that materially affects a household&apos;s ability to secure housing. AI assists. A person decides.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Human-in-the-loop, by default</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Every agent we deploy has a defined scope of autonomy. Routine work (routing a maintenance request by category; drafting a response to a standard inquiry; reconciling a variance within a threshold) can be handled without a human in the path. Anything consequential to a tenant, a vendor, or a lease is routed to a human for confirmation before it acts. The thresholds are set with your operations and compliance teams during the diagnostic, and they are adjustable.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Model selection and transparency</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          We do not train foundation models. We use commercially available models (OpenAI, Anthropic, and selected open-weight models) configured with your data and policies. For every deployment we document: which model powers which workflow, what data it sees, what data it does not, and what happens to that data after the task. You receive the documentation, and it updates when the underlying model or configuration changes.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Data boundaries</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Your operational data stays within your tenant. We do not use client data to train or improve models. We do not pool data across clients. When a workflow requires an external API call, the request is scoped to the minimum data needed and logged for audit.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Fair housing and algorithmic bias</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Any agent that touches tenant-facing decisions is designed with fair housing constraints from the first line of code. Pre-deployment bias testing against protected classes is mandatory. Post-deployment monitoring runs continuously. Disparate-impact findings trigger defined remediation, not optional review.
        </p>
      </section>

      <section className="mt-12 measure">
        <h2 className="text-2xl text-ink-primary">Ongoing evaluation</h2>
        <p className="text-base text-ink-secondary leading-relaxed mt-4">
          Every deployed agent is evaluated monthly against the metrics set during the diagnostic. Accuracy, coverage, escalation rate, and bias metrics are reported in writing. Degradation triggers retraining or deprecation; we do not run stale agents in production.
        </p>
      </section>

      <p className="text-sm text-ink-muted mt-16">
        Questions: <a className="underline decoration-accent underline-offset-4" href="mailto:ethics@quoinbuildings.com">ethics@quoinbuildings.com</a>
      </p>
    </article>
  )
}
