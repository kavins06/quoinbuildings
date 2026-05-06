"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const platformLayers: Array<{
  group: string
  layers: Array<{ name: string; purpose: string }>
}> = [
  {
    group: "01 Sources & access",
    layers: [
      { name: "Source inventory", purpose: "Every system, report, and document set the workflow depends on, with owner, status, and access path." },
      { name: "Data contracts", purpose: "Source-to-canonical mappings, freshness expectations, exception rules, and reconciliation logic." },
      { name: "Source access profiles", purpose: "What the platform may read, retrieve, export, or compute from each source. Permitted and prohibited actions are explicit." },
    ],
  },
  {
    group: "02 Canonical entities & semantic truth",
    layers: [
      { name: "Canonical entity model", purpose: "Stable platform identities for property, lease, tenant, work order, vendor, KPI, and the entities your workflow depends on." },
      { name: "Standardized data", purpose: "Curated views and datasets aligned to the canonical model, with lineage to source." },
      { name: "Semantic & truth layer", purpose: "Definitions, formulas, manual adjustments, reconciliation rules. Every metric carries a truth profile." },
    ],
  },
  {
    group: "03 Documents & knowledge",
    layers: [
      { name: "Document & knowledge layer", purpose: "Governed unstructured sources (leases, asset plans, board materials, SOPs) with classification, retrieval rules, and citation requirements." },
    ],
  },
  {
    group: "04 Permissions, query, tools",
    layers: [
      { name: "Permission & governance layer", purpose: "Who may view, query, retrieve, draft, approve, export, trigger, or administer. Agents inherit scoped, auditable permissions." },
      { name: "Query layer", purpose: "Approved users ask questions against governed sources. Answers return with source references, freshness, definitions, confidence, and escalation paths." },
      { name: "Tool & action layer", purpose: "Approved APIs, workflow actions, retrieval tools, and write-back paths. Each tool has a typed contract." },
    ],
  },
  {
    group: "05 Observability, agents, AgentOps",
    layers: [
      { name: "Observability & audit layer", purpose: "Traces, source references, tool calls, model calls, permission decisions, approvals, incidents. Required for compliance, debugging, and trust." },
      { name: "Agent layer", purpose: "Controlled AI capabilities operating on top of the governed platform. Permissions and behaviors are scoped, evals are required, traces are mandatory." },
      { name: "Managed AgentOps layer", purpose: "The operating model after deployment: eval regression, source freshness, change control, incident response, expansion or retirement." },
    ],
  },
]

const dataAccessStages = [
  {
    stage: "01",
    title: "Metadata scaffold",
    data: "System names, source inventory, owners, field lists, workflow maps, KPI definitions, synthetic examples.",
    purpose: "Build the operating model without sensitive records.",
    controls: "No production credentials. No bulk data. No live integrations.",
  },
  {
    stage: "02",
    title: "Redacted samples",
    data: "Redacted exports, limited sample records, sanitized documents.",
    purpose: "Validate schemas, mappings, query behavior, evals, and platform assumptions.",
    controls: "Written approval. Data minimization. Retention rule.",
  },
  {
    stage: "03",
    title: "Client-controlled environment",
    data: "Approved source connections inside the client cloud or tenant.",
    purpose: "Build the real operating intelligence layer.",
    controls: "Security review. Identity. Audit. Network. Logging. Retention.",
  },
  {
    stage: "04",
    title: "Production operating layer",
    data: "Approved production sources and governed documents.",
    purpose: "Make the approved domain queryable.",
    controls: "RBAC/ABAC. Monitoring. Lineage. Access review. Incident path.",
  },
  {
    stage: "05",
    title: "Agent layer",
    data: "Governed sources, tools, semantic layer, retrieval layer, evals.",
    purpose: "Deploy agents safely on top of the platform.",
    controls: "Tool contracts. Guardrails. Traces. Eval thresholds. Revocation.",
  },
]

const exampleQueries = [
  {
    question: "Which properties are below budget this quarter, and why?",
    sources: "Property master, GL actuals, approved budget snapshot, manager commentary docs",
    definition: "NOI variance vs approved Q-budget; same-store basis",
    freshness: "Actuals: 2 days lag · Commentary: latest review cycle",
    confidence: "High on top-five variances; medium below threshold",
    escalation: "Asset manager on disputed variance owner",
  },
  {
    question: "Which lease expirations create the most risk in the next two quarters?",
    sources: "Lease master, rent roll snapshot, occupancy record, market submarket file",
    definition: "Material expiration = top-quartile by NER × probability of non-renewal",
    freshness: "Rent roll: month-end · Submarket: quarterly",
    confidence: "Medium — non-renewal probability uses leasing pipeline judgment",
    escalation: "Leasing director per region",
  },
  {
    question: "Which capital projects are over budget and missing owner commentary?",
    sources: "Capex project register, commitments, spend ledger, asset-plan documents",
    definition: "Variance > 5% AND no owner commentary in current cycle",
    freshness: "Spend: weekly · Commentary: cycle-bound",
    confidence: "High",
    escalation: "Construction director or asset owner",
  },
]

const complementaryStack = [
  { category: "Cloud & data platform", items: ["Snowflake", "Databricks", "Microsoft Fabric", "Azure", "AWS", "GCP"] },
  { category: "Real estate operating systems", items: ["Yardi", "MRI", "RealPage", "Argus", "VTS"] },
  { category: "Enterprise & operations", items: ["Salesforce", "Workday", "ServiceNow", "SAP"] },
  { category: "Documents & content", items: ["SharePoint", "Box", "OneDrive", "Google Drive"] },
  { category: "BI & analytics", items: ["Power BI", "Tableau", "Looker", "Excel"] },
]

const platformDoesNot = [
  "Replace your data warehouse, lakehouse, or BI tools.",
  "Replace your property management system, ERP, or CRM.",
  "Train models on your proprietary data unless explicitly approved in writing.",
  "Mix data across clients.",
  "Bypass your identity provider, security review, or change-control process.",
  "Treat fragile or disputed truth as authoritative.",
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
                A governed semantic layer that makes one workflow queryable. Then another.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                The platform is a client-specific operating intelligence layer
                over the workflows, systems, documents, metrics, decisions, and
                approved data paths that matter. Source inventory, canonical
                entities, semantic and truth definitions, document intelligence,
                permissions, query, tools, observability, and the agent layer
                that sits on top &mdash; in that order.
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
                  Inspectable operating memory that becomes the agent contract.
                </p>
                <div className="mt-10 border-y border-border-hairline">
                  {[
                    ["Primary object", "Governed semantic layer"],
                    ["First build", "Minimum Viable Foundry"],
                    ["Sits beside", "Your existing stack"],
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
              eyebrow="Architecture"
              title="Five layer groups, thirteen layers, one direction of dependency."
              body="Sources are governed before agents are built. Permissions sit between query and source. Every answer carries citations. The full thirteen-layer model lives inside five reading groups so an architect can scan it in under a minute."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] lg:grid-cols-5">
            {platformLayers.map((group) => (
              <BlurFade key={group.group} inView delay={0.05} direction="up">
                <article className="flex h-full flex-col gap-5 bg-surface-base p-6 md:p-7">
                  <p className="font-serif text-[34px] leading-none text-accent tabular-nums">
                    {group.group.split(" ")[0]}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                    {group.group.split(" ").slice(1).join(" ")}
                  </p>
                  <ul className="space-y-4 border-t border-strong/15 pt-4">
                    {group.layers.map((layer) => (
                      <li key={layer.name}>
                        <p className="text-[14px] font-medium leading-[1.3] text-ink-primary">
                          {layer.name}
                        </p>
                        <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-secondary">
                          {layer.purpose}
                        </p>
                      </li>
                    ))}
                  </ul>
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
              eyebrow="Minimum Viable Foundry"
              title="Start with one workflow. Not the whole company."
              body="The first platform build is always a Minimum Viable Foundry: one approved workflow, one or two source systems, a small canonical entity model, a limited semantic layer, a governed document set, queryable views with cited answers, and one or two agent-ready use cases. Expansion is a separate decision under change control."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView delay={0.05} direction="up" className="lg:col-span-7">
              <div className="border border-strong bg-surface-base">
                <div className="border-b border-strong px-6 py-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    First wedge scope
                  </p>
                </div>
                <div className="divide-y divide-border-hairline">
                  {[
                    ["Workflow boundary", "One approved domain (asset management, leasing pipeline, property operations, capital projects, finance close, investor reporting, ESG, vendor intelligence, or similar)."],
                    ["Source systems", "One to two primary sources. Source inventory metadata for the rest."],
                    ["Canonical entities", "Only the entities the first workflow depends on. Defer the rest."],
                    ["Semantic layer", "Definitions and truth profiles for the metrics this workflow uses."],
                    ["Document set", "Governed retrieval index over the policies, SOPs, plans, and memos this workflow cites."],
                    ["Permission model", "Scoped, observable, revocable. Agents do not inherit broad human access."],
                    ["Queryable views", "Specific, evidence-grounded questions an asset manager or executive would actually ask."],
                    ["Pilot agent capabilities", "One or two low-risk agent capabilities (read, summarize, classify, draft, recommend) on the governed layer."],
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

            <BlurFade inView delay={0.12} direction="up" className="lg:col-span-4 lg:col-start-9">
              <aside className="border-l border-strong pl-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  Why a foundry, not a platform
                </p>
                <p className="mt-4 font-sans text-[22px] font-medium leading-[1.25] tracking-normal text-ink-primary md:text-[24px]">
                  Generalize from one wedge that works. Not from a roadmap that does not.
                </p>
                <p className="mt-7 text-[14px] leading-[1.7] text-ink-secondary">
                  Whole-company platforms fail because every workflow is
                  different and the truth is fragile in different ways. The
                  foundry wedge proves what is real, what is governed, what is
                  agent-safe, and what is not. The next wedge inherits the
                  proven layers and adds only the new ones.
                </p>
              </aside>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Data access"
              title="Five staged access points, owned by you, advanced only on approval."
              body="Discovery and the first scaffolds run on metadata, redacted samples, and synthetic examples. Production credentials cross only after approval, only into your environment. Each stage has its own purpose and its own controls."
            />
          </BlurFade>

          <BlurFade inView delay={0.08} direction="up">
            <div className="mt-14 overflow-x-auto border border-strong bg-surface-base">
              <table className="w-full min-w-[860px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-strong">
                    <th className="w-[80px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Stage</th>
                    <th className="w-[200px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Title</th>
                    <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Data used</th>
                    <th className="w-[260px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Purpose</th>
                    <th className="w-[260px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAccessStages.map((s) => (
                    <tr key={s.stage} className="border-b border-border-hairline last:border-b-0">
                      <td className="px-5 py-5 align-top font-serif text-[20px] leading-none text-accent tabular-nums">
                        {s.stage}
                      </td>
                      <td className="px-5 py-5 align-top text-[15px] font-medium leading-[1.4] text-ink-primary">
                        {s.title}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {s.data}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {s.purpose}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {s.controls}
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
              eyebrow="Example queries"
              title="What the first wedge can actually answer."
              body="Each answer carries source references, freshness, the definition used, confidence, and an escalation path. The platform refuses, qualifies, or escalates when truth is disputed, fragile, or unknown."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-3">
            {exampleQueries.map((q) => (
              <BlurFade key={q.question} inView delay={0.05} direction="up">
                <article className="flex h-full flex-col bg-surface-base p-6 md:p-7">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    Query
                  </p>
                  <p className="mt-4 font-serif text-[22px] leading-[1.2] tracking-normal text-ink-primary md:text-[24px]">
                    &ldquo;{q.question}&rdquo;
                  </p>
                  <dl className="mt-7 space-y-4 border-t border-strong/15 pt-5">
                    {[
                      ["Sources", q.sources],
                      ["Definition", q.definition],
                      ["Freshness", q.freshness],
                      ["Confidence", q.confidence],
                      ["Escalation", q.escalation],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[6rem_1fr] gap-3">
                        <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                          {label}
                        </dt>
                        <dd className="text-[13px] leading-[1.55] text-ink-secondary">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
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
                  Complementary stack
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-surface-base">
                  We sit beside your stack. We do not replace it.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
                <p className="text-[17px] leading-[1.6] text-surface-base/72">
                  The Operating Intelligence Platform is a governed semantic
                  layer over your existing systems, not a new system of record.
                  It is designed to be deployed inside your cloud, follow your
                  identity model, comply with your security review path, and
                  complement the platforms you already operate.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 grid grid-cols-1 gap-px bg-surface-base/15 md:grid-cols-2 lg:grid-cols-5">
              {complementaryStack.map((group) => (
                <article
                  key={group.category}
                  className="bg-[hsl(var(--surface-inverse))] p-5 md:p-6"
                >
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    {group.category}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-[14px] leading-[1.5] text-surface-base/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </BlurFade>

          <BlurFade inView delay={0.18} direction="up">
            <div className="mt-14 border-t border-surface-base/25 pt-10">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                What the platform does not do
              </p>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {platformDoesNot.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-3 h-px w-6 shrink-0 bg-accent" aria-hidden="true" />
                    <span className="text-[15px] leading-[1.6] text-surface-base/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 border-y border-strong py-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Where this lives
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
                  Discovery decides what to build. Implementation builds it. Managed AgentOps operates it.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
                <p className="measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px]">
                  The Operating Intelligence Platform is the technical asset
                  delivered by Operating Implementation, after the Operating
                  Diagnostic decides which workflow belongs and which controls
                  it requires. After launch, Managed AgentOps operates the
                  platform and the agents on top of it.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <Link
                    href="/diagnostic"
                    className="cta-primary inline-flex items-center gap-2 text-[14px] font-medium"
                  >
                    <span>Operating Diagnostic</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/implementation"
                    className="cta-primary inline-flex items-center gap-2 text-[14px] font-medium"
                  >
                    <span>Operating Implementation</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/agentops"
                    className="cta-primary inline-flex items-center gap-2 text-[14px] font-medium"
                  >
                    <span>Managed AgentOps</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
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
                Map one operating area. See the first wedge.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                Start with one operating area where better intelligence could
                protect NOI, reduce risk, improve throughput, or make portfolio
                signal visible sooner. We will sketch the first wedge with you
                in 30 minutes, and you will leave with three candidate
                workflows and a no-pressure decision packet.
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
