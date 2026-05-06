"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const modules = [
  {
    name: "Workflow map",
    purpose: "Shows the standard path, exception path, roles, handoffs, and decisions inside the operating workflow.",
  },
  {
    name: "Source inventory",
    purpose: "Identifies the source of truth, supporting sources, disputed sources, access needs, and data-quality issues.",
  },
  {
    name: "Owner and decision-rights map",
    purpose: "Clarifies who performs, approves, overrides, escalates, and owns the result.",
  },
  {
    name: "Evidence library",
    purpose: "Keeps approved screenshots, redacted examples, reports, policies, transcripts, and walkthrough notes attached to the map.",
  },
  {
    name: "Readiness score",
    purpose: "Scores value, source trust, control maturity, workflow stability, adoption, and lifecycle support.",
  },
  {
    name: "Risk and control model",
    purpose: "Carries permitted actions, prohibited actions, human review, logging, retention, and revocation requirements.",
  },
  {
    name: "Decision packet",
    purpose: "Hands the approved workflow into build, remediation, vendor extension, staffing, pause, or do-not-automate decisions.",
  },
  {
    name: "Lifecycle plan",
    purpose: "Defines quality review, evals, monitoring, access reviews, governance cadence, incidents, adoption, and expansion criteria.",
  },
]

const controls = [
  ["Permitted actions", "Read, extract, classify, draft, recommend, route, or trigger only where approved."],
  ["Prohibited actions", "No lease, legal, compliance, credit, employment, or resident-impacting determinations unless explicitly approved."],
  ["Human-review thresholds", "Review required when confidence is low, consequence is high, source conflict exists, or policy interpretation is needed."],
  ["Access boundaries", "Role, property, tenant, field, system, credential, and environment boundaries are defined before build."],
  ["Audit and logging", "Important source lookups, AI drafts, recommendations, approvals, overrides, and escalations are retained for review."],
  ["Incident and revocation paths", "Limit, suspend, roll back, notify, remediate, or retire capability when evidence or risk changes."],
]

const operationSteps = [
  {
    number: "01",
    title: "Workflow Intelligence Object",
    body:
      "The mapped workflow becomes a structured object with sources, owners, exceptions, controls, value, and lifecycle requirements.",
  },
  {
    number: "02",
    title: "Agent Behavior Contract",
    body:
      "The approved object defines what the agent may read, classify, draft, recommend, trigger, escalate, or never do.",
  },
  {
    number: "03",
    title: "Deployed Agent",
    body:
      "The contract drives connectors, review queues, evals, audit trails, and operating interfaces.",
  },
  {
    number: "04",
    title: "Lifecycle Monitor",
    body:
      "The same baseline feeds quality monitoring, drift review, access review, incident handling, adoption analysis, workflow changes, and expansion decisions.",
  },
]

function PlatformCta({ inverse = false }: { inverse?: boolean }) {
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
      <span>Discuss AI operating value</span>
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

function WorkspaceArtifact() {
  return (
    <div className="border border-strong bg-surface-base">
      <div className="grid grid-cols-1 border-b border-strong md:grid-cols-[16rem_1fr]">
        <div className="border-b border-strong px-5 py-4 md:border-b-0 md:border-r">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            Quoin workspace
          </p>
          <p className="mt-2 text-[14px] leading-[1.45] text-ink-secondary">
            Maintenance intake and vendor routing
          </p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-border-hairline md:grid-cols-4">
          {[
            ["Readiness", "3.4 / 5"],
            ["Source trust", "Partial"],
            ["Review mode", "Human approval"],
            ["Path", "Remediate first"],
          ].map(([label, value]) => (
            <div key={label} className="px-5 py-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                {label}
              </p>
              <p className="mt-2 text-[16px] font-medium leading-[1.25] text-ink-primary">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr]">
        <div className="border-b border-strong bg-surface-sunken md:border-b-0 md:border-r">
          {[
            "Workflow intelligence",
            "Source inventory",
            "Decision rights",
            "Evidence library",
            "Control model",
            "Build handoff",
            "Lifecycle monitor",
          ].map((item, index) => (
            <div
              key={item}
              className={[
                "border-b border-border-hairline px-5 py-4 text-[13px] leading-[1.45]",
                index === 0
                  ? "bg-surface-base text-ink-primary"
                  : "text-ink-secondary",
              ].join(" ")}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="p-5 md:p-7">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Workflow object
              </p>
              <div className="divide-y divide-border-hairline border-y border-border-hairline">
                {[
                  ["Trigger", "Resident maintenance request enters portal or call-center queue."],
                  ["Decision points", "Urgency, trade, warranty status, vendor eligibility, resident update."],
                  ["Trusted source", "PMS work order plus vendor notes; warranty source unresolved."],
                  ["Exception path", "Habitability, repeat issue, legal complaint, VIP resident, budget threshold."],
                  ["AI boundary", "May classify and draft; may not assign vendor or send resident message without approval."],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 gap-2 py-4 md:grid-cols-[8rem_1fr] md:gap-6"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      {label}
                    </p>
                    <p className="text-[14px] leading-[1.55] text-ink-secondary">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="border-l border-strong pl-6">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                Control summary
              </p>
              <ul className="space-y-4">
                {[
                  "Human approval before vendor assignment.",
                  "Resident-facing drafts require manager review.",
                  "Audit log retained for source, draft, override, and escalation.",
                  "Quarterly access review by operations and IT.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                    <span className="text-[14px] leading-[1.55] text-ink-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlatformContent() {
  return (
    <div>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Operating Intelligence Platform
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                A private operating intelligence workspace for real estate AI.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                Quoin&apos;s platform turns interviews, evidence, systems,
                policies, exceptions, and source decisions into the build and
                management layer for governed AI agents.
              </p>
              <div className="mt-10">
                <PlatformCta />
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
                  What the platform produces
                </p>
                <p className="mt-4 font-sans text-[24px] font-medium leading-[1.25] tracking-normal text-ink-primary md:text-[26px]">
                  Inspectable operating memory that can become an agent
                  contract.
                </p>
                <div className="mt-10 border-y border-border-hairline">
                  {[
                    ["Primary object", "Workflow intelligence"],
                    ["Build handoff", "Agent behavior contract"],
                    ["Governance", "Attached to each opportunity"],
                    ["Ownership", "Client-owned baseline"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-border-hairline py-4 last:border-b-0"
                    >
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        {label}
                      </p>
                      <p className="text-[14px] leading-[1.5] text-ink-secondary">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="border-b border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Private workspace"
              title="One place to inspect the operating reality behind the AI decision."
              body="The workspace gives leadership, operators, technology, governance, and data owners a shared operating baseline. Each module preserves the evidence and assumptions behind the recommendation."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14">
              <WorkspaceArtifact />
            </div>
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 border-t border-strong md:grid-cols-2 lg:grid-cols-4">
            {modules.map((module, index) => (
              <BlurFade
                key={module.name}
                inView
                delay={0.04 + index * 0.03}
                direction="up"
              >
                <article
                  className={[
                    "min-h-full border-b border-strong py-7 md:px-6",
                    index % 2 === 0 ? "md:border-r" : "",
                    index % 4 !== 3 ? "lg:border-r" : "lg:border-r-0",
                  ].join(" ")}
                >
                  <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[18px] font-medium leading-[1.25] tracking-normal text-ink-primary">
                    {module.name}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.6] text-ink-secondary">
                    {module.purpose}
                  </p>
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
              eyebrow="From interviews to intelligence"
              title="Voice interviews become structured workflow intelligence."
              body="Quoin uses employee interviews to surface workflow reality, then extracts decision points, sources, exceptions, confidence, and control requirements for human review and client validation."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView delay={0.08} direction="up" className="lg:col-span-5">
              <div className="border border-strong bg-surface-sunken p-6 md:p-8">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Interview excerpt
                </p>
                <blockquote className="text-[26px] italic leading-[1.32] tracking-normal text-ink-primary">
                  We usually know which vendor to call, but the warranty status
                  is in a different place and the resident update depends on who
                  handled the last ticket.
                </blockquote>
                <p className="mt-8 text-[13px] leading-[1.55] text-ink-muted">
                  Regional operations interview, redacted and paraphrased.
                </p>
              </div>
            </BlurFade>

            <BlurFade
              inView
              delay={0.14}
              direction="up"
              className="lg:col-span-7"
            >
              <div className="border border-strong bg-surface-base">
                <div className="border-b border-strong px-6 py-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    Workflow intelligence object
                  </p>
                </div>
                <div className="divide-y divide-border-hairline">
                  {[
                    ["Detected workflow", "Maintenance intake, vendor routing, and resident update."],
                    ["Source signal", "Warranty status source conflict; prior ticket history needed for communication context."],
                    ["Exception", "Repeat issue or habitability concern requires escalation before automation."],
                    ["Confidence", "High for classification; medium for vendor routing until source conflict is remediated."],
                    ["Human review", "Required before vendor assignment and resident-facing message."],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[10rem_1fr] md:gap-8"
                    >
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        {label}
                      </p>
                      <p className="text-[15px] leading-[1.55] text-ink-secondary">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-inverse py-20 text-surface-base md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                  Decision packet
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-surface-base">
                  The decision packet hands the workflow into build.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
                <p className="text-[17px] leading-[1.6] text-surface-base/72">
                  The recommendation is not the end state. It clarifies whether
                  the next move is build, remediate, extend a vendor, staff
                  internally, pause, or do not automate, and it carries the
                  controls required before build.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.12} direction="up">
            <div className="mt-14 border border-surface-base/35">
              <div className="grid grid-cols-1 border-b border-surface-base/35 md:grid-cols-[1fr_10rem]">
                <div className="px-6 py-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    Recommendation
                  </p>
                  <p className="mt-3 text-[28px] font-medium leading-[1.15] text-surface-base">
                    Remediate first, then build a narrow triage agent.
                  </p>
                </div>
                <div className="border-t border-surface-base/25 px-6 py-5 md:border-l md:border-t-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-surface-base/50">
                    Confidence
                  </p>
                  <p className="mt-3 font-serif text-[44px] leading-none text-accent tabular-nums">
                    0.78
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 divide-y divide-surface-base/15 md:grid-cols-3 md:divide-x md:divide-y-0">
                {[
                  ["Blockers", "Warranty status source conflict; approval path differs by region."],
                  ["Required controls", "Manager review before vendor assignment or resident-facing message."],
                  ["Build handoff", "Validate source owner, remediate field quality, then approve agent behavior contract."],
                ].map(([label, value]) => (
                  <div key={label} className="px-6 py-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-surface-base/50">
                      {label}
                    </p>
                    <p className="mt-4 text-[14px] leading-[1.6] text-surface-base/74">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Governance and controls"
              title="Every AI opportunity carries its control model with it."
              body="Controls are not a separate policy appendix. They are attached to the workflow, source inventory, decision-rights map, readiness score, and build recommendation."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 overflow-x-auto border border-strong">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-strong bg-surface-sunken">
                    <th className="w-[220px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Control area
                    </th>
                    <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Workspace record
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {controls.map(([area, record]) => (
                    <tr key={area} className="border-b border-border-hairline last:border-b-0">
                      <td className="px-5 py-5 align-top text-[15px] font-medium leading-[1.45] text-ink-primary">
                        {area}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {record}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Client ownership"
              title="The intelligence baseline is useful whether or not you build with Quoin."
              body="Clients can use the workspace to challenge assumptions, align operators and technology teams, review risks, and decide what to do next. If the company does not proceed to build, the decision packet and exportable intelligence baseline still remain useful."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="border border-strong bg-surface-base">
                  <div className="border-b border-strong px-6 py-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                      Exportable baseline
                    </p>
                  </div>
                  <div className="divide-y divide-border-hairline">
                    {[
                      "Workflow maps and exception paths",
                      "Source-of-truth inventory and unresolved source conflicts",
                      "Decision-rights and approval map",
                      "Risk and control requirements",
                      "Readiness score and recommendation rationale",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-4 px-6 py-4">
                        <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                        <p className="text-[15px] leading-[1.6] text-ink-secondary">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="border-l border-strong pl-8 lg:col-span-4 lg:col-start-9">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  Allowed outcome
                </p>
                <p className="mt-4 font-sans text-[24px] font-medium leading-[1.3] tracking-normal text-ink-primary md:text-[26px]">
                  A no-build decision can still be a good operating outcome.
                </p>
                <p className="mt-8 text-[15px] leading-[1.7] text-ink-secondary">
                  The workspace makes the reasoning visible, so leaders can
                  decide whether the next move is build, remediation, vendor
                  extension, staffing, or waiting.
                </p>
              </aside>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Platform to operations"
              title="The workspace becomes the build system for governed agents."
              body="Once a workflow is approved, the intelligence baseline becomes the agent behavior contract: what the agent may read, classify, draft, recommend, trigger, escalate, or never do. That contract drives connectors, review queues, evals, audit trails, and managed operations."
            />
          </BlurFade>

          <ol className="mt-14 grid grid-cols-1 border-t border-strong lg:grid-cols-4 lg:border-t-0">
            {operationSteps.map((step, index) => (
              <BlurFade
                key={step.number}
                inView
                delay={0.06 + index * 0.06}
                direction="up"
              >
                <li
                  className={[
                    "border-b border-strong py-9 lg:border-b-0 lg:border-t",
                    index < operationSteps.length - 1 ? "lg:border-r lg:pr-10" : "",
                    index > 0 ? "lg:pl-10" : "",
                  ].join(" ")}
                >
                  <p className="font-serif text-[64px] leading-none text-accent tabular-nums">
                    {step.number}
                  </p>
                  <h3 className="mt-6 text-[22px] font-medium leading-[1.25] tracking-normal text-ink-primary">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.65] text-ink-secondary">
                    {step.body}
                  </p>
                </li>
              </BlurFade>
            ))}
          </ol>
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
                Turn operating intelligence into governed AI agents your team
                can inspect and manage.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                Start with one operating area where better intelligence could
                protect NOI, reduce risk, improve throughput, or make portfolio
                signal visible sooner. Quoin turns the approved baseline into
                build, deployment, and lifecycle management.
              </p>
              <div className="mt-10">
                <PlatformCta inverse />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
