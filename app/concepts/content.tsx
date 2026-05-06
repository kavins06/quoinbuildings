"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const truthStates = [
  {
    name: "Authoritative",
    rule: "Approved official source, approved definition, named owner who can sign off on the value.",
    agent: "May summarize. May classify. May recommend with citation. May draft. May trigger approved actions.",
  },
  {
    name: "De facto trusted",
    rule: "Used operationally and treated as canonical by the team, but not formally governed. Most of an enterprise lives here.",
    agent: "May summarize and recommend with citation. Must qualify the source status. Should not act autonomously.",
  },
  {
    name: "Conditional",
    rule: "Usable only with limitations: time window, role scope, redaction, or specified caveats.",
    agent: "May use within named limitations. Must surface the limitation in the answer. May not act.",
  },
  {
    name: "Disputed",
    rule: "Two or more sources disagree. Owners disagree. The disagreement is known but unresolved.",
    agent: "May flag the dispute and route to escalation owner. May not present any value as authoritative. May not act.",
  },
  {
    name: "Fragile",
    rule: "Depends on a manual adjustment, macro, spreadsheet, or expert memory that cannot be reproduced from system data alone.",
    agent: "May summarize while naming the fragility. Must escalate before acting. May not present as authoritative.",
  },
  {
    name: "Unknown",
    rule: "Not yet validated. The platform has not seen evidence of where the truth lives or who owns it.",
    agent: "May refuse. May ask. May not assert. May not act.",
  },
]

const platformLayers = [
  ["01", "Source inventory", "Every system, report, and document set the workflow depends on, with owner, status, and access path."],
  ["02", "Data contracts", "Source-to-canonical mappings, freshness, exception rules, reconciliation logic."],
  ["03", "Source access profiles", "Permitted and prohibited actions per source, with credentials scoped accordingly."],
  ["04", "Canonical entity model", "Stable platform identities for property, lease, work order, vendor, KPI, and the entities your workflow uses."],
  ["05", "Standardized data layer", "Curated views and datasets aligned to the canonical model, with lineage."],
  ["06", "Semantic and truth layer", "Definitions, formulas, manual adjustments, reconciliation rules. Every metric carries a truth profile."],
  ["07", "Document and knowledge layer", "Governed leases, asset plans, board materials, SOPs, with classification, retrieval rules, citation requirements."],
  ["08", "Permission and governance layer", "Who may view, query, retrieve, draft, approve, export, trigger, or administer."],
  ["09", "Query layer", "Approved users ask questions against governed sources; answers carry citations, freshness, definitions, confidence, and escalation."],
  ["10", "Tool and action layer", "Approved APIs, workflow actions, retrieval tools, and write-back paths. Each tool has a typed contract."],
  ["11", "Observability and audit layer", "Traces, source references, tool calls, model calls, permission decisions, approvals, incidents."],
  ["12", "Agent layer", "Controlled AI capabilities operating on top of the governed platform."],
  ["13", "Managed AgentOps layer", "The operating model after deployment: eval regression, freshness, change control, incident response, expansion or retirement."],
]

const safetyLadder = [
  ["01", "Read-only query", "Retrieves and presents governed information. No drafts. No actions."],
  ["02", "Evidence-grounded summarization", "Summarizes governed sources with citations. No new claims."],
  ["03", "Classification or routing", "Categorizes intake and routes to owners. Audited."],
  ["04", "Recommendation with evidence", "Recommends with cited reasoning. Human acts."],
  ["05", "Drafting with human approval", "Drafts replies, summaries, packets. Human reviews and sends."],
  ["06", "Tool-using with scoped read tools", "Reads from approved APIs and document sets. Tool contracts enforced."],
  ["07", "Approval-gated action", "Triggers actions only after explicit human approval. Audit trail required."],
  ["08", "Bounded autonomous", "Operates within tightly scoped guardrails after operating evidence supports it."],
]

const readinessPaths = [
  ["Build", "Operating value, source quality, control maturity, workflow stability, adoption reality, and lifecycle support are sufficient. The decision packet authorizes a governed build."],
  ["Remediate first", "The opportunity is real, but source trust, access, ownership, or controls are not yet ready. Remediation has its own roadmap and readiness gate."],
  ["Buy or extend", "A vendor system already owns the workflow and can be configured or extended safely. Custom build would duplicate work."],
  ["Pause", "Economics, sponsor commitment, or operating stability are not strong enough yet. The intelligence baseline is preserved for the next review cycle."],
  ["Do not automate", "The workflow is too consequential, ambiguous, sensitive, or legally constrained for AI action. AI may still help with analysis and human-owned preparation."],
]

const killPoints = [
  ["07", "Discovery disqualification", "Once the workflow is mapped and blockers are classified, a candidate can be ruled out for fatal-for-use-case reasons: workflow does not exist as assumed, source ecosystem cannot support it, consequence is unrecoverable, decision rights cannot be made AI-safe."],
  ["12", "Economic disqualification", "After the value case is modeled with confidence, fragility, and downside, a candidate can be ruled out because value is not material, AI cost is too high, assumptions depend on adoption that will not arrive, or alternatives win."],
  ["16", "Readiness disqualification", "After the readiness score and hard gates, a candidate can be ruled out for sponsor behavior, prior-failure learning, process documentation, resistance profile, recoverable-error fit, data access, model maturity, security enablement, or lifecycle ownership. Hard gates override averages."],
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
      <span>Map one operating area with us</span>
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

export function ConceptsContent() {
  return (
    <div>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Concepts
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                The vocabulary behind operating-grade AI.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                Five named ideas Quoin uses across every engagement: the
                truth profile taxonomy, the Operating Intelligence Platform
                layers, the Minimum Viable Foundry, the Agent Safety Ladder,
                and the five readiness paths plus three named kill points.
                One page, one reference.
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
                  On this page
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    ["01", "Truth Profile"],
                    ["02", "Operating Intelligence Platform"],
                    ["03", "Minimum Viable Foundry"],
                    ["04", "Agent Safety Ladder"],
                    ["05", "Readiness Paths and Kill Points"],
                  ].map(([n, label]) => (
                    <li key={n} className="flex items-start gap-3">
                      <span className="mt-0.5 font-serif text-[16px] leading-none text-accent tabular-nums">
                        {n}
                      </span>
                      <span className="text-[14px] leading-[1.5] text-ink-secondary">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-28" id="truth-profile">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="01 Truth Profile"
              title="Every metric, source, and document carries a truth state."
              body="The truth profile is the contract between the platform and any agent that consumes it. The state determines what the agent may do: summarize, recommend, draft, act, or refuse. Six states, one rule per state."
            />
          </BlurFade>

          <div className="mt-12 overflow-x-auto border border-strong bg-surface-base">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="border-b border-strong bg-surface-sunken">
                  <th className="w-[180px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">State</th>
                  <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Definition</th>
                  <th className="w-[360px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">What an agent may do</th>
                </tr>
              </thead>
              <tbody>
                {truthStates.map((s) => (
                  <tr key={s.name} className="border-b border-border-hairline last:border-b-0">
                    <td className="px-5 py-5 align-top text-[14px] font-medium uppercase tracking-[0.14em] text-accent">
                      {s.name}
                    </td>
                    <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                      {s.rule}
                    </td>
                    <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                      {s.agent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-28" id="platform">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="02 Operating Intelligence Platform"
              title="Thirteen layers, in order, agents on top."
              body="The platform is layered by design. Sources are governed before the canonical model is built. Permissions sit between query and source. Agents come last, on top of governed structure. The order of dependency is the order of trust."
            />
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 border-y border-strong">
            {platformLayers.map(([n, name, body]) => (
              <article
                key={n}
                className="grid grid-cols-1 gap-4 border-b border-strong/15 py-6 last:border-b-0 md:grid-cols-[5rem_16rem_1fr] md:gap-10"
              >
                <p className="font-serif text-[28px] leading-none text-accent tabular-nums">
                  {n}
                </p>
                <h3 className="text-[15px] font-medium leading-[1.35] text-ink-primary md:text-[16px]">
                  {name}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink-secondary md:text-[15px]">
                  {body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-[14px] leading-[1.65] text-ink-muted">
            The architecture detail and implementation guidance lives on{" "}
            <Link href="/platform" className="border-b border-accent/40 text-ink-secondary hover:text-ink-primary">
              /platform
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-28" id="foundry">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="03 Minimum Viable Foundry"
              title="The smallest governed wedge that makes one workflow queryable."
              body="The first build is always one workflow boundary, one or two source systems, a small canonical entity model, a limited semantic layer, a governed document set, queryable views with cited answers, and one or two agent-ready use cases. Expansion is a separate decision."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-12 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-2">
              <article className="bg-surface-base p-6 md:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                  The bet
                </p>
                <p className="mt-4 font-sans text-[24px] font-medium leading-[1.25] tracking-normal text-ink-primary md:text-[26px]">
                  Generalize from a wedge that works.
                </p>
                <p className="mt-5 text-[15px] leading-[1.7] text-ink-secondary">
                  Whole-company platforms fail because every workflow is
                  different and the truth is fragile in different ways. A
                  wedge that ships proves what is real, what is governed,
                  what is agent-safe, and what is not. The next wedge
                  inherits the proven layers and adds only the new ones.
                </p>
              </article>

              <article className="bg-surface-base p-6 md:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                  What counts
                </p>
                <ul className="mt-4 space-y-3 text-[14px] leading-[1.6] text-ink-secondary md:text-[15px]">
                  {[
                    "One approved workflow boundary.",
                    "One or two primary source systems.",
                    "A small canonical entity model.",
                    "A limited semantic layer with truth profiles.",
                    "A governed document set.",
                    "Permission and governance layer scoped to the wedge.",
                    "Queryable views with citations.",
                    "One or two pilot agent capabilities.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-2 h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-inverse py-20 text-surface-base md:py-28" id="ladder">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                  04 Agent Safety Ladder
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-surface-base">
                  Eight rungs. You earn each one.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
                <p className="text-[16px] leading-[1.65] text-surface-base/72">
                  Every agent operates at a documented rung. Climbing rungs
                  requires evidence, eval thresholds, control verification,
                  and a separate approval. Rungs 7 and 8 are reserved for
                  capabilities that have proven themselves at lower rungs
                  first.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 border-y border-surface-base/25">
              {safetyLadder.map(([n, title, body]) => (
                <article
                  key={n}
                  className="grid grid-cols-1 gap-4 border-b border-surface-base/15 py-7 last:border-b-0 md:grid-cols-[4rem_18rem_1fr] md:gap-10"
                >
                  <p className="font-serif text-[28px] leading-none text-accent tabular-nums">
                    {n}
                  </p>
                  <h3 className="text-[15px] font-medium leading-[1.35] text-surface-base md:text-[16px]">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-surface-base/72 md:text-[15px]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-28" id="readiness">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="05 Readiness paths and kill points"
              title="Five outcomes. Three named places to say no."
              body="Every diagnostic ends with one of five recommendations. Three explicit disqualification events along the way (Steps 7, 12, and 16) decide which one. The willingness to recommend not building is the thing that makes the build outcomes worth trusting."
            />
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Five paths
              </p>
              <ul className="mt-6 grid grid-cols-1 border-y border-strong/15">
                {readinessPaths.map(([title, body]) => (
                  <li
                    key={title as string}
                    className="grid grid-cols-1 gap-4 border-b border-strong/15 py-5 last:border-b-0 md:grid-cols-[10rem_1fr] md:gap-8"
                  >
                    <p className="text-[15px] font-medium leading-[1.3] text-ink-primary">
                      {title}
                    </p>
                    <p className="text-[14px] leading-[1.6] text-ink-secondary md:text-[15px]">
                      {body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Three named kill points
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))]">
                {killPoints.map(([step, title, body]) => (
                  <li key={step as string} className="bg-surface-base p-5 md:p-6">
                    <div className="flex items-baseline gap-3">
                      <p className="font-serif text-[24px] leading-none text-accent tabular-nums">
                        {step}
                      </p>
                      <p className="text-[14px] font-medium leading-[1.3] text-ink-primary md:text-[15px]">
                        {title}
                      </p>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.55] text-ink-secondary md:text-[14px]">
                      {body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-inverse py-24 text-surface-base md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-10 h-px w-12 bg-accent" />
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                Next step
              </p>
              <h2 className="text-balance font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-normal text-surface-base">
                Vocabulary is cheap. Apply it to your operating model.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                If these concepts line up with the way you think about AI,
                the next step is to apply them to one workflow inside your
                company. 30 minutes. Three candidate workflows. A
                no-pressure decision packet.
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
