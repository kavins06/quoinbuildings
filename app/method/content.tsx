"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const operatingPhases = [
  {
    number: "01",
    title: "Map the workflow",
    body:
      "Surface how the work actually happens. Systems, roles, exceptions, approvals, source trust, and value, across operators, regional managers, asset teams, and leadership.",
  },
  {
    number: "02",
    title: "Build the intelligence layer",
    body:
      "Turn interviews and approved evidence into structured workflow objects, source inventory, decision rights, governance rules, readiness scores, and the artifact baseline.",
  },
  {
    number: "03",
    title: "Build the agent",
    body:
      "Translate the approved baseline into agents, automations, connectors, review queues, evals, audit trails, and the operating interfaces your team will actually use.",
  },
  {
    number: "04",
    title: "Deploy with controls",
    body:
      "Production rollout under permitted and prohibited actions, human-review thresholds, access boundaries, escalation paths, and full audit logging.",
  },
  {
    number: "05",
    title: "Manage continuously",
    body:
      "Quality, drift, overrides, incidents, adoption, access reviews, workflow changes, and expansion decisions, owned and operated as workflows and policies evolve.",
  },
]

const mappingTouchpoints = [
  { number: "01", title: "Strategy and scope" },
  { number: "02", title: "Workflow interviews" },
  { number: "03", title: "Evidence and data request" },
  { number: "04", title: "Governance validation" },
  { number: "05", title: "Decision and handoff" },
]

const mappingRows = [
  {
    layer: "Workflow reality",
    question: "What work is performed, in what order, by whom, and where does variation appear?",
    output: "Workflow map with standard path, exception path, and unresolved ambiguity.",
  },
  {
    layer: "Roles and owners",
    question: "Who performs the work, who approves it, who owns the result, and who can override?",
    output: "Owner and decision-rights map across operators, managers, asset teams, IT, and leadership.",
  },
  {
    layer: "Systems and sources",
    question: "Which systems contain the record, context, communication, status, and evidence?",
    output: "Source inventory with source of truth, supporting source, stale source, and access requirement.",
  },
  {
    layer: "Truth chains",
    question: "When sources conflict, which record wins and who has authority to resolve the conflict?",
    output: "Truth-chain rules and validation steps before AI can rely on the source.",
  },
  {
    layer: "Approvals",
    question: "Which actions require human review, business approval, compliance review, or executive signoff?",
    output: "Human-review thresholds and approval routing requirements.",
  },
  {
    layer: "Exceptions",
    question: "Which unusual cases change the workflow, require escalation, or invalidate automation?",
    output: "Exception library with stop, route, draft-only, and escalate instructions.",
  },
  {
    layer: "Sensitive fields",
    question: "Which data creates privacy, fair housing, legal, financial, employment, or security risk?",
    output: "Sensitivity rules, minimization requirements, retention requirements, and access boundaries.",
  },
  {
    layer: "AI actions",
    question: "What may AI read, extract, classify, draft, recommend, trigger, or never do?",
    output: "Permitted and prohibited action model tied to the workflow owner.",
  },
  {
    layer: "Operating metrics",
    question: "How would better intelligence protect NOI, speed, staff leverage, risk, or portfolio signal?",
    output: "Value case, measurement baseline, and indicators for adoption or limitation.",
  },
  {
    layer: "Lifecycle requirements",
    question: "What must be monitored after launch as sources, policies, roles, and portfolios change?",
    output: "Managed lifecycle object for reviews, evals, access, incidents, drift, and expansion.",
  },
]

const governanceControls = [
  {
    title: "Access boundaries",
    body:
      "Approved systems, roles, credentials, fields, tenants, properties, and source paths are documented before build.",
  },
  {
    title: "Human-review thresholds",
    body:
      "Resident, vendor, financial, compliance, legal, and investor-facing decisions stay human where consequence requires it.",
  },
  {
    title: "Audit trails",
    body:
      "Important drafts, recommendations, source lookups, approvals, overrides, and escalations leave inspectable evidence.",
  },
  {
    title: "Prohibited actions",
    body:
      "The system records what AI may never decide, disclose, send, approve, change, or infer inside the workflow.",
  },
  {
    title: "Incident paths",
    body:
      "Escalation, containment, notification, remediation, and review paths are part of the operating design.",
  },
  {
    title: "Revocation paths",
    body:
      "The client can limit, suspend, roll back, or retire a capability as evidence, policy, or risk changes.",
  },
  {
    title: "Retention rules",
    body:
      "Interview notes, evidence, generated artifacts, logs, and sensitive fields receive explicit retention treatment.",
  },
  {
    title: "Sensitivity rules",
    body:
      "Sensitive data is categorized so AI behavior, access, output, and review can be constrained by risk.",
  },
]

const readinessGates = [
  {
    path: "Build",
    condition: "Value, owner, source quality, controls, workflow adoption, and lifecycle support are sufficient.",
    result: "Move to governed build with an approved agent behavior contract.",
  },
  {
    path: "Remediate",
    condition: "The opportunity is real, but source trust, access, process ownership, or controls are not ready.",
    result: "Fix the prerequisite before production AI is approved.",
  },
  {
    path: "Buy or extend",
    condition: "A vendor system already owns the workflow and can be safely configured or extended.",
    result: "Use the existing platform path instead of custom build.",
  },
  {
    path: "Pause",
    condition: "The economics, sponsor commitment, or operating stability are not strong enough yet.",
    result: "Preserve the intelligence baseline and revisit when conditions change.",
  },
  {
    path: "Do not automate",
    condition: "The workflow is too consequential, ambiguous, sensitive, or legally constrained for AI action.",
    result: "Use AI only for analysis, documentation, or human-owned preparation if appropriate.",
  },
]

const engagementBoundaries = [
  "No production access is required to start.",
  "Redacted evidence, screenshots, walkthroughs, reports, and approved samples are accepted.",
  "Client teams validate sources, owners, decision rights, and control assumptions.",
  "Quoin does not ask for broad system credentials during discovery.",
  "The client owns the output and can challenge, export, or reuse the intelligence baseline.",
  "Build starts only after the recommendation, controls, access model, and lifecycle owner are approved.",
]

const outputs = [
  "Operating intelligence workspace",
  "Workflow intelligence object",
  "Agent behavior contract",
  "Technical implementation blueprint",
  "Risk and control model",
  "Deployment control requirements",
  "Managed lifecycle object",
]

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

function MethodCta({ inverse = false }: { inverse?: boolean }) {
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

export function MethodContent() {
  return (
    <div>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Method
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                A conservative operating method for deciding where AI belongs.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                Quoin maps workflows, sources, owners, approvals, exceptions,
                controls, and value before any agent is built. The goal is not
                to produce an AI roadmap. The goal is to decide what should be
                built, remediated, bought, paused, or governed.
              </p>
              <div className="mt-10">
                <MethodCta />
              </div>
            </BlurFade>

            <BlurFade
              inView
              delay={0.12}
              direction="up"
              className="lg:col-span-4 lg:col-start-9 lg:pt-20"
            >
              <aside
                aria-label="Method summary"
                className="border-l border-strong pl-8"
              >
                <p className="font-serif text-[28px] italic leading-[1.25] tracking-normal text-ink-primary">
                  Discovery should lower risk before it asks for access.
                </p>
                <dl className="mt-10 divide-y divide-border-hairline border-y border-border-hairline">
                  {[
                    ["Client burden", "Five batched touchpoints"],
                    ["Starting evidence", "Redacted and approved"],
                    ["Decision owner", "Human-owned recommendations"],
                    ["Build trigger", "Approved controls and lifecycle"],
                  ].map(([term, value]) => (
                    <div
                      key={term}
                      className="grid grid-cols-[7.5rem_1fr] gap-4 py-4"
                    >
                      <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                        {term}
                      </dt>
                      <dd className="text-[14px] leading-[1.5] text-ink-secondary">
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
              eyebrow="The five operating phases"
              title="Map. Build the intelligence layer. Build the agent. Deploy. Manage."
              body="One canonical model from first conversation to managed operations. Each phase produces an inspectable artifact that the next phase depends on. You can stop after any phase."
            />
          </BlurFade>

          <ol className="mt-14 grid grid-cols-1 border-t border-strong md:mt-18 lg:grid-cols-5 lg:border-t-0">
            {operatingPhases.map((phase, index) => (
              <BlurFade
                key={phase.number}
                inView
                delay={0.05 + index * 0.05}
                direction="up"
              >
                <li
                  className={[
                    "border-b border-strong py-8 lg:border-b-0 lg:border-t lg:py-10",
                    index < operatingPhases.length - 1
                      ? "lg:border-r lg:pr-8"
                      : "",
                    index > 0 ? "lg:pl-8" : "",
                  ].join(" ")}
                >
                  <p className="font-serif text-[54px] leading-none tracking-normal text-accent tabular-nums">
                    {phase.number}
                  </p>
                  <h3 className="mt-6 text-[21px] font-medium leading-[1.25] tracking-normal text-ink-primary">
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
                    {phase.body}
                  </p>
                </li>
              </BlurFade>
            ))}
          </ol>

          <BlurFade inView delay={0.15} direction="up">
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-strong/15 pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                  Inside step 01
                </p>
                <p className="mt-3 text-[16px] leading-[1.55] text-ink-secondary">
                  Map the workflow happens through five batched client
                  touchpoints, not nineteen interruptions.
                </p>
              </div>
              <ol className="grid grid-cols-1 gap-3 sm:grid-cols-5">
                {mappingTouchpoints.map((touchpoint) => (
                  <li key={touchpoint.number} className="border-l border-strong/30 pl-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                      {touchpoint.number}
                    </p>
                    <p className="mt-1 text-[13px] font-medium leading-[1.3] text-ink-primary">
                      {touchpoint.title}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-10 border-l border-accent pl-6 text-[15px] leading-[1.65] text-ink-secondary">
              No production access required to start. Redacted evidence
              accepted. Client owns the output. Recommendations remain
              human-owned.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="What Quoin maps"
              title="The work is mapped at the level where AI risk actually appears."
              body="A useful AI decision depends on workflow reality, not only system diagrams. Quoin turns interviews and approved evidence into an operating map that can be inspected, challenged, and used for a build decision."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 overflow-x-auto border border-strong bg-surface-base">
              <table className="w-full min-w-[860px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-strong">
                    <th className="w-[190px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Mapping layer
                    </th>
                    <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Quoin resolves
                    </th>
                    <th className="w-[310px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Output
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mappingRows.map((row) => (
                    <tr key={row.layer} className="border-b border-border-hairline last:border-b-0">
                      <td className="px-5 py-5 align-top text-[15px] font-medium leading-[1.45] text-ink-primary">
                        {row.layer}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {row.question}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {row.output}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="governance" className="bg-surface-base py-20 scroll-mt-24 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Governance built in"
              title="Governance is not reviewed at the end. It is designed into the workflow."
              body="The control model travels with the opportunity from the first mapping pass. By the time a build is considered, the boundaries for access, review, logging, revocation, retention, and prohibited behavior are already explicit."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 border-t border-strong md:grid-cols-2 lg:grid-cols-4">
            {governanceControls.map((control, index) => (
              <BlurFade
                key={control.title}
                inView
                delay={0.04 + index * 0.03}
                direction="up"
              >
                <article
                  className={[
                    "min-h-full border-b border-strong px-0 py-8 md:px-6",
                    index % 2 === 0 ? "md:border-r" : "",
                    index < 4 ? "lg:border-b" : "",
                    index % 4 !== 3 ? "lg:border-r" : "lg:border-r-0",
                  ].join(" ")}
                >
                  <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[19px] font-medium leading-[1.25] tracking-normal text-ink-primary">
                    {control.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.6] text-ink-secondary">
                    {control.body}
                  </p>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-inverse py-20 text-surface-base md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                  Readiness gates
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-surface-base">
                  Some workflows should not be automated yet.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
                <p className="text-[17px] leading-[1.6] text-surface-base/72">
                  Quoin is allowed to recommend a no-build path. The readiness
                  decision is based on operating value, source trust, access,
                  control design, adoption reality, and whether the client can
                  manage the capability after launch.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 border-y border-surface-base/25">
              {readinessGates.map((gate) => (
                <div
                  key={gate.path}
                  className="grid grid-cols-1 gap-5 border-b border-surface-base/15 py-6 last:border-b-0 md:grid-cols-[10rem_1fr_1fr] md:gap-8"
                >
                  <p className="text-[18px] font-medium leading-[1.25] text-surface-base">
                    {gate.path}
                  </p>
                  <p className="text-[14px] leading-[1.6] text-surface-base/70">
                    {gate.condition}
                  </p>
                  <p className="text-[14px] leading-[1.6] text-surface-base/86">
                    {gate.result}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Engagement boundaries"
              title="Low-risk discovery before production access."
              body="The first stage is designed for executive confidence and controlled participation. The work can begin with approved evidence and walkthroughs, then advance only as the client validates the assumptions."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="border border-strong bg-surface-sunken p-6 md:p-8 lg:col-span-7">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Discovery protocol
                </p>
                <ol className="divide-y divide-border-hairline border-y border-border-hairline">
                  {engagementBoundaries.map((boundary, index) => (
                    <li
                      key={boundary}
                      className="grid grid-cols-[3rem_1fr] gap-5 py-4"
                    >
                      <span className="font-serif text-[24px] leading-none text-accent tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] leading-[1.6] text-ink-secondary">
                        {boundary}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <aside className="border-l border-strong pl-8 lg:col-span-4 lg:col-start-9">
                <p className="font-serif text-[28px] italic leading-[1.3] tracking-normal text-ink-primary">
                  Access is earned by the work, not assumed at the start.
                </p>
                <p className="mt-8 text-[15px] leading-[1.7] text-ink-secondary">
                  This lets a client test Quoin&apos;s judgment without opening
                  uncontrolled production pathways or committing to a build
                  before the operating case is clear.
                </p>
              </aside>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="border-t border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Final output"
              title="The handoff is the build path for a governed AI capability."
              body="The method does not end with a recommendation. Approved workflows move into the intelligence layer, agent behavior contract, governed build, controlled deployment, and managed AI operations."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView delay={0.08} direction="up" className="lg:col-span-7">
              <div className="border border-strong bg-surface-base">
                <div className="border-b border-strong px-6 py-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    Build path excerpt
                  </p>
                </div>
                <div className="divide-y divide-border-hairline">
                  {[
                    ["Workflow", "Maintenance intake and vendor routing"],
                    ["Approved path", "Remediate source trust, then build narrow triage agent"],
                    ["Required control", "Human approval before resident-facing message or vendor assignment"],
                    ["Lifecycle owner", "Regional operations with quarterly governance review"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[11rem_1fr] md:gap-8"
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

            <BlurFade
              inView
              delay={0.14}
              direction="up"
              className="lg:col-span-4 lg:col-start-9"
            >
              <ul className="border-y border-strong">
                {outputs.map((output) => (
                  <li
                    key={output}
                    className="flex items-start gap-4 border-b border-border-hairline py-4 last:border-b-0"
                  >
                    <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                    <span className="text-[15px] leading-[1.6] text-ink-secondary">
                      {output}
                    </span>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 border-y border-strong py-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  After approval
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
                  After approval, Quoin builds and operates.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
                <p className="measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px]">
                  When the build path is approved, Quoin turns the intelligence
                  baseline into agents, automations, integrations, review
                  queues, evals, audit trails, and operating interfaces. After
                  launch, Quoin manages quality, access, drift, incidents,
                  adoption, workflow changes, and expansion decisions.
                </p>
              </div>
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
                Decide where AI can create operating value without creating
                unmanaged risk.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                Start with a conversation about your operating model, source
                systems, control requirements, and the workflows where better
                intelligence would matter.
              </p>
              <div className="mt-10">
                <MethodCta inverse />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
