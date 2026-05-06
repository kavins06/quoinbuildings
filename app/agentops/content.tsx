"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const operatingRecord = [
  {
    title: "Eval regression",
    body: "Every release is gated by the eval suite the agent shipped with, plus regression tests for any model, prompt, tool, or retrieval change. No release ships if regression fails.",
  },
  {
    title: "Source freshness",
    body: "Every governed source has an expected freshness rule. Stale sources change agent behavior: refuse, qualify, or escalate. Operators see freshness on every answer.",
  },
  {
    title: "Trace review",
    body: "Continuous trace review across user requests, retrievals, tool calls, model calls, permission decisions, guardrail decisions, and approvals. Anomalies surface to the operating record.",
  },
  {
    title: "Access review",
    body: "Scheduled review of which actors and agents have access to which sources, fields, documents, and tools. Scoped credentials are rotated and revoked under documented SLAs.",
  },
  {
    title: "Change control",
    body: "Prompt, model, tool, retrieval, source, definition, and permission changes flow through a review with risk delta, eval impact, and approval status. Material changes require sponsor signoff.",
  },
  {
    title: "Business-value monitoring",
    body: "Adoption, user correction rate, override rate, override reason, latency, cost, and the value indicators agreed in the diagnostic value case. Reviewed at the operating cadence.",
  },
  {
    title: "Incident response",
    body: "Runbook for security, privacy, quality, operational, and AI incidents. Severity classification, escalation path, containment, notification, remediation, post-incident review.",
  },
  {
    title: "Revocation paths",
    body: "Documented mechanism to limit, suspend, roll back, retire, or remove an agent capability or source connection when evidence, policy, or risk changes.",
  },
]

const lifecycleVariants = [
  {
    title: "Managed Agent Lifecycle",
    body: "For agents that pass production readiness and operate at rungs 1 through 6 of the safety ladder. Eval regression, trace review, source freshness, change control, value monitoring, incident response, expansion review, retirement.",
    cadence: "Continuous + monthly + quarterly review",
  },
  {
    title: "Remediation Lifecycle",
    body: "For workflows that need source-trust remediation, ownership clarification, control hardening, or policy resolution before agent deployment. The lifecycle tracks remediation milestones, not agent operation.",
    cadence: "Until readiness gate passes",
  },
  {
    title: "No-Automation Review Cadence",
    body: "For workflows where the right answer was do-not-automate. The cadence revisits the decision as systems, regulation, source quality, sponsor commitment, or operating stability changes.",
    cadence: "Annual or trigger-based",
  },
]

const safetyLadder = [
  ["01", "Read-only query", "Retrieves and presents governed information. No drafts, no actions."],
  ["02", "Evidence-grounded summarization", "Summarizes governed sources with citations. No new claims."],
  ["03", "Classification or routing", "Categorizes intake and routes to owners. Audited."],
  ["04", "Recommendation with evidence", "Recommends with cited reasoning. Human acts."],
  ["05", "Drafting with human approval", "Drafts replies, summaries, packets. Human reviews and sends."],
  ["06", "Tool-using with scoped read tools", "Reads from approved APIs and document sets. Tool contracts enforced."],
  ["07", "Approval-gated action", "Triggers actions only after explicit human approval. Audit trail required."],
  ["08", "Bounded autonomous", "Operates within tightly scoped guardrails after operating evidence supports it."],
]

const changeControlExamples = [
  ["Prompt change", "Eval regression. Risk delta. Sponsor signoff if user-facing."],
  ["Model swap", "Full eval. Cost / latency review. Vendor and security review."],
  ["Tool added", "Tool contract. Permission scope. Eval cases. Pilot before production."],
  ["Retrieval change", "Document corpus diff. Citation accuracy. Permission re-check."],
  ["Source change", "Lineage update. Truth profile re-evaluation. Mapping diff."],
  ["Definition change", "Owner approval. Downstream metric audit. Refresh of cached views."],
  ["Permission change", "Access review. Audit trail. SLA on revocation."],
]

function CTA({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/contact"
      className={[
        "inline-flex items-center gap-2 border-b pb-1 text-[15px] font-medium tracking-[0.01em] transition-colors duration-200",
        inverse
          ? "border-accent text-accent hover:border-surface-base hover:text-surface-base"
          : "border-accent text-accent hover:border-ink-primary hover:text-ink-primary",
      ].join(" ")}
    >
      <span>Discuss the operating contract</span>
      <span aria-hidden="true">&rarr;</span>
    </Link>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <header className="grid grid-cols-1 gap-8 border-b border-strong pb-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-6">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
        <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
          {title}
        </h2>
      </div>
      {body ? (
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
          <p className="measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px]">
            {body}
          </p>
        </div>
      ) : null}
    </header>
  )
}

export function AgentOpsContent() {
  return (
    <div>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Managed AgentOps
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                We do not just deliver agents. We operate them.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                After the Operating Implementation deploys an agent into your
                environment, Managed AgentOps keeps it safe, useful, and
                aligned as workflows, systems, policies, portfolios, and risk
                posture change. Continuous evals, source freshness, change
                control, incident response, expansion review, and retirement
                are part of the contract.
              </p>
              <div className="mt-10">
                <CTA />
              </div>
            </BlurFade>

            <BlurFade
              inView
              delay={0.12}
              direction="up"
              className="lg:col-span-4 lg:col-start-9 lg:pt-20"
            >
              <aside className="border-l border-strong pl-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  Contract shape
                </p>
                <dl className="mt-6 divide-y divide-border-hairline border-y border-border-hairline">
                  {[
                    ["Engagement", "Recurring"],
                    ["Cadence", "Continuous + monthly + quarterly"],
                    ["Lifecycle variants", "Three"],
                    ["Operating record", "Continuously maintained"],
                    ["Change control", "Material changes require approval"],
                    ["Exit", "Retirement or redesign documented"],
                  ].map(([term, value]) => (
                    <div
                      key={term}
                      className="grid grid-cols-[8.5rem_1fr] gap-4 py-4"
                    >
                      <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        {term}
                      </dt>
                      <dd className="text-[14px] leading-[1.5] text-ink-primary">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Operating record"
              title="Eight things we track from the day the agent goes live."
              body="An agent is not production-ready because a demo works. It is production-ready when the release can be reproduced, monitored, audited, paused, rolled back, and improved. The operating record is the evidence."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-2 lg:grid-cols-4">
            {operatingRecord.map((item, i) => (
              <BlurFade key={item.title} inView delay={0.04 + i * 0.03} direction="up">
                <article className="bg-surface-base p-6 md:p-7">
                  <p className="font-serif text-[28px] leading-none text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-[17px] font-medium leading-[1.3] tracking-normal text-ink-primary md:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.65] text-ink-secondary">
                    {item.body}
                  </p>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Lifecycle variants"
              title="Three contracts, one operating model."
              body="Not every workflow gets a deployed agent. Some need remediation first; some should not be automated. Each path has its own lifecycle contract under the same operating discipline."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] lg:grid-cols-3">
            {lifecycleVariants.map((v, i) => (
              <BlurFade key={v.title} inView delay={0.05 + i * 0.05} direction="up">
                <article className="flex h-full flex-col gap-5 bg-surface-base p-6 md:p-8">
                  <p className="font-serif text-[36px] leading-none text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-[26px] leading-[1.15] tracking-normal text-ink-primary md:text-[30px]">
                    {v.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-ink-secondary md:text-[15px]">
                    {v.body}
                  </p>
                  <div className="mt-auto border-t border-strong/15 pt-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Cadence
                    </p>
                    <p className="mt-2 text-[14px] font-medium leading-[1.4] text-ink-primary">
                      {v.cadence}
                    </p>
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Agent Safety Ladder"
              title="Eight rungs from read-only to bounded autonomous."
              body="Every agent under Managed AgentOps operates at a documented rung. Climbing rungs requires evidence, eval thresholds, control verification, and a separate approval. Rungs 7 and 8 are reserved for capabilities that have proven themselves at lower rungs first."
            />
          </BlurFade>

          <div className="mt-14 border-y border-strong">
            {safetyLadder.map(([n, title, body]) => (
              <BlurFade key={n} inView delay={0.03} direction="up">
                <article className="grid grid-cols-1 gap-4 border-b border-strong/15 py-7 last:border-b-0 md:grid-cols-[5rem_18rem_1fr] md:gap-12 md:py-8">
                  <p className="font-serif text-[36px] leading-none text-accent tabular-nums">
                    {n}
                  </p>
                  <h3 className="text-[18px] font-medium leading-[1.3] text-ink-primary md:text-[19px]">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-ink-secondary md:text-[15px]">
                    {body}
                  </p>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Change control"
              title="Material changes require review. Every change has a risk delta."
              body="Agents are software. Software ships through release management. Every prompt, model, tool, retrieval, source, definition, or permission change has an impact on behavior; change control documents that impact and requires the right approval."
            />
          </BlurFade>

          <BlurFade inView delay={0.08} direction="up">
            <div className="mt-14 overflow-x-auto border border-strong bg-surface-base">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-strong">
                    <th className="w-[260px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Change type</th>
                    <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Required review</th>
                  </tr>
                </thead>
                <tbody>
                  {changeControlExamples.map(([type, review]) => (
                    <tr key={type} className="border-b border-border-hairline last:border-b-0">
                      <td className="px-5 py-5 align-top text-[15px] font-medium leading-[1.4] text-ink-primary">
                        {type}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {review}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Expansion or retirement"
              title="Agents end. Some expand. Both are decisions, not defaults."
              body="A working agent is not entitled to keep running. A non-working agent is not entitled to be replaced. Each cycle ends with an explicit decision to expand, redesign, retire, or hold the agent in place."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Expand", "Add scope, add a workflow, add a rung. Requires evidence and approval."],
                ["Redesign", "Rebuild the agent under different constraints, model, or topology."],
                ["Hold", "Keep operating as-is. Defer expansion. Maintain the operating record."],
                ["Retire", "Remove the agent. Document why. Archive the operating record. Plan the human-only fallback."],
              ].map(([title, body]) => (
                <article key={title} className="bg-surface-base p-6 md:p-7">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    Decision
                  </p>
                  <h3 className="mt-4 font-serif text-[28px] leading-[1.1] tracking-normal text-ink-primary">
                    {title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.65] text-ink-secondary">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-inverse py-24 text-surface-base md:py-36">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-10 h-px w-12 bg-accent" />
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                Next step
              </p>
              <h2 className="text-balance font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-normal text-surface-base">
                The agent is the easy part. Operating it is the engagement.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                We build the way we plan to operate. Talk to us about the
                operating contract before the agent ships, not after. The
                lifecycle object is part of the diagnostic decision packet,
                not an afterthought.
              </p>
              <div className="mt-10">
                <CTA inverse />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
