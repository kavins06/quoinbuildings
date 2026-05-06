"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const buildOrder = [
  {
    n: "01",
    title: "Build conversion gate",
    body: "Lock the diagnostic packet. Run the agent necessity kill test. Confirm scope, owners, environments, access limits, budget, and timebox. The handoff freezes here.",
  },
  {
    n: "02",
    title: "Build the Minimum Viable Foundry",
    body: "First wedge of the Operating Intelligence Platform: source inventory, canonical entities, semantic and truth layer, document set, permissions, query layer. Built inside your environment.",
  },
  {
    n: "03",
    title: "Define agent architecture and tool contracts",
    body: "Architecture record, runtime, tools, data, identity, permissions, and revocation contracts. Each tool has a typed contract; each capability has a permission scope.",
  },
  {
    n: "04",
    title: "Set up environment and access progression",
    body: "Sandbox / pilot / production environments with separate test data, secrets, provisioning, and access review. Stages advance only on evidence.",
  },
  {
    n: "05",
    title: "Build evals, guardrails, and observability",
    body: "Eval harness with behavioral and output cases. Guardrails on retrieval, tool use, and output. Trace policy, metrics, dashboards, alerts.",
  },
  {
    n: "06",
    title: "Sandbox prototype and pilot readiness",
    body: "Run the agent against governed sources in a sandbox. Capture evidence. Pass the production readiness gate before any pilot user touches it.",
  },
  {
    n: "07",
    title: "Controlled pilot",
    body: "Bounded user set, bounded scope, full observability. Production readiness gate and readiness scoring confirm the agent operates at the intended rung.",
  },
  {
    n: "08",
    title: "Production release and handoff to AgentOps",
    body: "Release manifest with version, deployment record, compatibility, and rollback package. Handoff to Managed AgentOps for continuous operation.",
  },
]

const dataAccess = [
  ["01", "Metadata scaffold", "System names, source inventory, owners, field lists, workflow maps, KPI definitions, synthetic examples."],
  ["02", "Redacted samples", "Validate schemas, mappings, query behavior, evals, and platform assumptions on redacted exports."],
  ["03", "Client-controlled environment", "Approved source connections inside your cloud or tenant. Security review, identity, audit, network, logging, retention."],
  ["04", "Production operating layer", "Approved production sources and governed documents are queryable. RBAC/ABAC, monitoring, lineage, access review, incident path."],
  ["05", "Agent layer", "Agents deployed on top of the governed platform with tool contracts, guardrails, traces, eval thresholds, and revocation."],
]

const safetyLadder = [
  ["01", "Read-only query"],
  ["02", "Evidence-grounded summarization"],
  ["03", "Classification or routing"],
  ["04", "Recommendation with evidence"],
  ["05", "Drafting with human approval"],
  ["06", "Tool-using with scoped read tools"],
  ["07", "Approval-gated action"],
  ["08", "Bounded autonomous"],
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
      <span>Discuss an implementation engagement</span>
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

export function ImplementationContent() {
  return (
    <div>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Section 02 &middot; Operating Implementation
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                Build the platform first. Build the agents on top.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                After the Operating Diagnostic clears Step 18 and a separate
                implementation approval is signed, the work moves into
                Operating Implementation. The first wedge of the Operating
                Intelligence Platform &mdash; a Minimum Viable Foundry &mdash;
                is built inside your environment, then the first agent
                capabilities are layered on top under controlled pilot.
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
                  Engagement summary
                </p>
                <dl className="mt-6 divide-y divide-border-hairline border-y border-border-hairline">
                  {[
                    ["Engagement type", "Post-approval build"],
                    ["First build", "Minimum Viable Foundry"],
                    ["Environment", "Your cloud / tenant"],
                    ["Agents start at", "Rung 1 of the safety ladder"],
                    ["Required artifacts", "Eval harness, guardrails, traces"],
                    ["Handoff", "To Managed AgentOps at production"],
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

      <section className="bg-surface-base py-20 md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Step 18 hard gate"
              title="Implementation starts only on a clean handoff."
              body="The Operating Diagnostic ends at Step 18 with an approved decision packet, an approved managed lifecycle object, and a signed method-to-build handoff contract. Implementation starts only after a separate approval names scope, owners, environments, access limits, budget, and timebox."
            />
          </BlurFade>

          <BlurFade inView delay={0.08} direction="up">
            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="border border-strong bg-surface-base">
                  <div className="border-b border-strong px-6 py-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                      Required to cross the gate
                    </p>
                  </div>
                  <div className="divide-y divide-border-hairline">
                    {[
                      ["Approved decision packet", "From the Operating Diagnostic. Names the recommendation, controls, value case, and risk."],
                      ["Approved lifecycle object", "Names the operating owner, cadence, escalation, and revisit triggers."],
                      ["Method-to-build handoff contract", "Document that transfers the diagnostic outputs to implementation. Lists return-to-method triggers."],
                      ["Separate implementation approval", "Names scope, owners, environments, access limits, budget, timebox, and security review path."],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[12rem_1fr] md:gap-8"
                      >
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                          {label}
                        </p>
                        <p className="text-[14px] leading-[1.6] text-ink-secondary md:text-[15px]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="border-l border-strong pl-8 lg:col-span-4 lg:col-start-9">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  Why a hard gate
                </p>
                <p className="mt-4 font-sans text-[22px] font-medium leading-[1.25] tracking-normal text-ink-primary md:text-[24px]">
                  Implementation that bypasses approval is the failure mode.
                </p>
                <p className="mt-7 text-[14px] leading-[1.7] text-ink-secondary">
                  Most failed AI deployments started building before the
                  governance, controls, and operating ownership were
                  resolved. The hard gate is the architecture's answer:
                  cross it deliberately, with the right approvals, or do
                  not cross it.
                </p>
              </aside>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Build sequence"
              title="Eight phases. Platform first. Agents last."
              body="The implementation does not start with the agent. It starts with the build conversion gate, then the Minimum Viable Foundry, then the agent architecture, then evals and observability, then sandbox, then pilot, then production. Agents come on top of governed structure or they fail."
            />
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 border-y border-strong">
            {buildOrder.map((phase) => (
              <article
                key={phase.n}
                className="grid grid-cols-1 gap-4 border-b border-strong/15 py-7 last:border-b-0 md:grid-cols-[5rem_18rem_1fr] md:gap-10"
              >
                <p className="font-serif text-[36px] leading-none text-accent tabular-nums">
                  {phase.n}
                </p>
                <h3 className="text-[17px] font-medium leading-[1.3] text-ink-primary md:text-[19px]">
                  {phase.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-ink-secondary md:text-[15px]">
                  {phase.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Data access progression"
              title="Five staged access points, advanced only on approval."
              body="Each stage has its own purpose and its own controls. A wedge can stop at any stage if evidence does not support advancing."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <ol className="mt-12 grid grid-cols-1 border-y border-strong">
              {dataAccess.map(([n, title, body]) => (
                <li
                  key={n}
                  className="grid grid-cols-1 gap-4 border-b border-strong/15 py-6 last:border-b-0 md:grid-cols-[5rem_16rem_1fr] md:gap-10"
                >
                  <p className="font-serif text-[28px] leading-none text-accent tabular-nums">
                    {n}
                  </p>
                  <h3 className="text-[15px] font-medium leading-[1.3] text-ink-primary md:text-[16px]">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-ink-secondary md:text-[15px]">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </BlurFade>

          <p className="mt-8 text-[14px] leading-[1.7] text-ink-muted">
            Architecture detail lives on{" "}
            <Link href="/platform" className="border-b border-accent/40 text-ink-secondary hover:text-ink-primary">
              /platform
            </Link>
            . Definitions live on{" "}
            <Link href="/concepts" className="border-b border-accent/40 text-ink-secondary hover:text-ink-primary">
              /concepts
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-inverse py-20 text-surface-base md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                  Agent Safety Ladder
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-surface-base">
                  Every agent starts at rung one. Climbs only on evidence.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
                <p className="text-[16px] leading-[1.65] text-surface-base/72">
                  Implementation does not deliver a rung-eight bounded
                  autonomous agent on day one. The agent enters at the
                  lowest rung that delivers value, and climbs only when
                  evals, eval thresholds, control verification, and a
                  separate approval support the move.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <ol className="mt-14 grid grid-cols-2 gap-px bg-surface-base/15 md:grid-cols-4 lg:grid-cols-8">
              {safetyLadder.map(([n, title]) => (
                <li
                  key={n}
                  className="bg-[hsl(var(--surface-inverse))] p-4 md:p-5"
                >
                  <p className="font-serif text-[24px] leading-none text-accent tabular-nums">
                    {n}
                  </p>
                  <p className="mt-3 text-[12px] font-medium leading-[1.4] text-surface-base md:text-[13px]">
                    {title}
                  </p>
                </li>
              ))}
            </ol>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 border-y border-strong py-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Handoff to AgentOps
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
                  Production is the start of operations, not the end of build.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
                <p className="measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px]">
                  At production release, the implementation engagement hands
                  the agent and the platform layers it depends on to Managed
                  AgentOps. The release manifest, eval suite, guardrail
                  matrix, trace policy, and incident runbook travel with the
                  handoff. The agent is not done; it has just started its
                  operating life.
                </p>
                <div className="mt-8">
                  <Link
                    href="/agentops"
                    className="cta-primary inline-flex items-center gap-2 text-[14px] font-medium"
                  >
                    <span>See Managed AgentOps</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>
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
                Diagnostic first. Implementation second. Operations
                continuously.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                Most engagements start with the Operating Diagnostic. If you
                already have an approved decision packet and are ready to
                discuss implementation, the next step is the conversation
                that scopes it.
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
