import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Hero } from "@/components/hero"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Quoin | Governed AI for Real Estate Operations",
  description:
    "AI adoption has outrun operating readiness in real estate. Quoin gives REITs and large operators the workflow map, control model, and governed agents institutional AI requires.",
  path: "/",
  image: "/hero-bg.jpg",
  keywords: [
    "AI agents for real estate companies",
    "organizational intelligence real estate",
    "AI governance for real estate companies",
    "AI for vertically integrated real estate companies",
    "managed AI operations",
    "governed AI agents REIT",
  ],
  absoluteTitle: true,
})

const operatingValueRows = [
  {
    title: "Revenue capture",
    body: "Faster leasing response, stronger renewal follow-up, better prospect qualification, and fewer missed revenue moments.",
  },
  {
    title: "Expense control",
    body: "Cleaner maintenance triage, vendor routing, invoice review, and exception handling before costs become normalized.",
  },
  {
    title: "Staff leverage",
    body: "Operators, regional managers, analysts, and asset managers spend less time assembling context and more time acting on it.",
  },
  {
    title: "Risk-adjusted performance",
    body: "Resident, vendor, compliance, lender, and investor-facing workflows get defined controls before AI is allowed to operate.",
  },
  {
    title: "Portfolio signal",
    body: "Leadership sees variance, service pressure, renewal risk, backlog, delinquency, and operational drag earlier in the reporting cycle.",
  },
]

const buildManageRows = [
  {
    title: "Maintenance triage agents",
    body: "Classify intake, route urgency, draft resident/vendor updates, require human approval before action.",
  },
  {
    title: "Leasing response and renewal agents",
    body: "Qualify inquiries, draft follow-up, prioritize renewals, surface missed revenue moments.",
  },
  {
    title: "Reporting and variance agents",
    body: "Assemble operating context, explain variance, flag missing source evidence, prepare review packets.",
  },
  {
    title: "Vendor and invoice review agents",
    body: "Compare invoices, contracts, work orders, exceptions, and approval thresholds.",
  },
  {
    title: "Asset management intelligence agents",
    body: "Surface portfolio signal, risk, backlog, delinquency, renewal pressure, and operational drag.",
  },
  {
    title: "Compliance and admin review agents",
    body: "Prepare controlled drafts, identify missing evidence, route exceptions, preserve audit trails.",
  },
]

const proofPoints = [
  {
    source: "NAREIM 2026",
    body: "Institutional real estate firms rated AI maturity 5.7/10 and governance readiness 5.1/10 while AI tools had already proliferated.",
    href: "https://www.nareim.org/2026/04/20/technology-data-ai-survey-2026/",
  },
  {
    source: "JLL 2025",
    body: "88% of investors, owners, and landlords had started AI pilots.",
    href: "https://www.jll.com/en-de/newsroom/real-estates-ai-reality-check-companies-piloting-only-achieved-all-ai-goals",
  },
  {
    source: "Stanford Digital Economy Lab",
    body: "Across 51 enterprise AI cases, the difference was the organization, not the model.",
    href: "https://digitaleconomy.stanford.edu/publication/enterprise-ai-playbook/",
  },
]

const failurePatterns = [
  "Workflow not mapped.",
  "Source of truth disputed.",
  "Control path unclear.",
]

const phaseOneTouchpoints = [
  {
    number: "01",
    title: "Strategy and scope",
    body: "Define business pressure, candidate operating areas, sponsor goals, constraints, and decision rights.",
  },
  {
    number: "02",
    title: "Workflow interviews",
    body: "Use role-aware voice interviews to capture how work actually happens, including exceptions and informal judgment.",
  },
  {
    number: "03",
    title: "Evidence and data request",
    body: "Collect approved artifacts, redacted examples, screenshots, reports, field lists, policies, and system context.",
  },
  {
    number: "04",
    title: "Governance validation",
    body: "Resolve trusted sources, owners, access paths, sensitivity, retention, permitted AI actions, and prohibited behaviors.",
  },
  {
    number: "05",
    title: "Decision and handoff",
    body: "Deliver the private intelligence workspace, readiness score, agent behavior contract, build path, and managed lifecycle plan.",
  },
]

const workspaceContents = [
  "Workflow map",
  "Source-of-truth inventory",
  "Owner and decision-rights map",
  "AI-readiness score",
  "Governance and risk requirements",
  "Agent behavior contract",
  "Deployment control requirements",
  "Managed lifecycle monitor",
]

const partnerPhases = [
  {
    number: "01",
    title: "Map the workflow",
    body: "Map systems, roles, exceptions, approvals, source trust, and value.",
    artifact: "Workflow map",
    lines: [
      "Systems and source paths",
      "Roles and handoffs",
      "Exceptions and approvals",
      "NOI-linked value case",
    ],
  },
  {
    number: "02",
    title: "Build the intelligence layer",
    body: "Build workflow objects, source inventory, decision rights, governance, readiness, and evidence.",
    artifact: "Intelligence layer",
    lines: [
      "Workflow Intelligence Object",
      "Source inventory",
      "Decision-rights map",
      "Evidence baseline",
    ],
  },
  {
    number: "03",
    title: "Build the agent",
    body: "Build agents, automations, connectors, review queues, evals, audit trails, and operating interfaces.",
    artifact: "Agent behavior contract",
    lines: [
      "AI may classify",
      "AI may draft",
      "Review queue required",
      "Eval set attached",
    ],
  },
  {
    number: "04",
    title: "Deploy with controls",
    body: "Deploy with permitted actions, prohibited actions, human review, access boundaries, escalation, and logging.",
    artifact: "Deployment controls",
    lines: [
      "Access boundaries",
      "Human approval thresholds",
      "Escalation paths",
      "Audit logging",
    ],
  },
  {
    number: "05",
    title: "Manage continuously",
    body: "Manage quality, drift, overrides, incidents, adoption, access reviews, workflow changes, and expansion.",
    artifact: "Lifecycle Monitor",
    lines: [
      "Quality review",
      "Access review",
      "Incident handling",
      "Expansion decisions",
    ],
  },
]

const teamMembers = [
  {
    name: "Kavin Sakthivel",
    domain: "Real Estate AI Strategy & Engineering",
    photo: "/team-kavin.jpeg",
  },
  {
    name: "Dr. Cynthia J. Mendoza",
    domain: "Governance & Security Architecture",
    photo: "/team-cynthia.png",
  },
  {
    name: "Jonathan Morris",
    domain: "REIT Operations & Investment Judgment",
    photo: "/team-jonathan.png",
  },
  {
    name: "Rohith Roshan",
    domain: "Agent Architecture & Evaluation",
    photo: "/team-rohith.png",
  },
  {
    name: "Ricky Fauntleroy",
    domain: "Cybersecurity & Deployment Infrastructure",
    photo: "/team-ricky.png",
  },
  {
    name: "Brandon Timpane",
    domain: "Data Readiness & Enterprise Applications",
    photo: "/team-brandon.png",
  },
]

const goodFit = [
  "Vertically integrated REITs.",
  "Large private owner/operators.",
  "Firms with regional operating layers and multi-system complexity.",
  "Companies where AI pressure is now a C-suite issue.",
  "Firms willing to address workflow ownership, source trust, and governance.",
]

const poorFit = [
  "Teams looking for a single chatbot.",
  "Firms without operating control.",
  "Companies seeking only an AI strategy deck.",
  "Organizations that need a finished tool in 30 days.",
  "Teams unwilling to validate sources, owners, controls, and adoption reality.",
]

export default function Page() {
  return (
    <>
      <Hero />
      <EvidenceBandSection />
      <WhyThisExistsSection />
      <OperatingValueSection />
      <HumanAccountabilitySection />
      <BuildManageSection />
      <OperatingPartnerModelSection />
      <PlatformSection />
      <QuoinMethodSection />
      <FitSection />
      <ClosingCtaSection />
    </>
  )
}

function EvidenceBandSection() {
  return (
    <section
      aria-label="Industry evidence"
      className="border-y border-strong bg-surface-base"
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 divide-y divide-strong/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          <a
            href="https://www.nareim.org/2026/04/20/technology-data-ai-survey-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 px-6 py-8 transition-colors hover:bg-surface-sunken md:px-8 md:py-10"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              NAREIM 2026
            </p>
            <p className="font-serif text-[40px] leading-[0.95] tracking-normal text-ink-primary tabular-nums md:text-[52px]">
              5.7<span className="text-ink-muted">/10</span>
            </p>
            <p className="text-[14px] leading-[1.5] text-ink-secondary md:text-[15px]">
              Institutional real estate AI maturity. Governance readiness sat
              at 5.1/10 while AI tools had already proliferated.
            </p>
          </a>

          <a
            href="https://www.jll.com/en-de/newsroom/real-estates-ai-reality-check-companies-piloting-only-achieved-all-ai-goals"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 px-6 py-8 transition-colors hover:bg-surface-sunken md:px-8 md:py-10"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              JLL 2025
            </p>
            <p className="font-serif text-[40px] leading-[0.95] tracking-normal text-ink-primary tabular-nums md:text-[52px]">
              88<span className="text-ink-muted">%</span>
            </p>
            <p className="text-[14px] leading-[1.5] text-ink-secondary md:text-[15px]">
              of investors, owners, and landlords had started AI pilots. Goal
              completion lagged.
            </p>
          </a>

          <a
            href="https://digitaleconomy.stanford.edu/publication/enterprise-ai-playbook/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 px-6 py-8 transition-colors hover:bg-surface-sunken md:px-8 md:py-10"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              Stanford Digital Economy Lab
            </p>
            <p className="font-serif text-[24px] leading-[1.1] tracking-normal text-ink-primary md:text-[28px]">
              The difference was the organization, not the model.
            </p>
            <p className="text-[14px] leading-[1.5] text-ink-secondary md:text-[15px]">
              Across 51 enterprise AI cases studied.
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

function OperatingValueSection() {
  return (
    <section aria-labelledby="operating-value-heading" className="bg-surface-base py-20 md:py-32">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Operating Value
            </p>
            <h2
              id="operating-value-heading"
              className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary"
            >
              AI value shows up when operating intelligence changes NOI.
            </h2>
            <p className="mt-8 measure text-[17px] leading-[1.6] text-ink-secondary">
              Quoin looks for the workflows where better intelligence can protect margin,
              improve throughput, reduce avoidable leakage, or surface portfolio risk earlier.
              The model is not the value by itself. The value comes from changing how operating
              decisions get made.
            </p>

            <div className="mt-12 border border-strong bg-surface-sunken p-6 md:p-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                Illustrative engagement
              </p>
              <p className="mt-4 text-[18px] font-medium leading-[1.3] text-ink-primary md:text-[20px]">
                $400M owner-operator, 12,000 units, regional ops layer.
              </p>
              <ul className="mt-5 space-y-3 text-[14px] leading-[1.55] text-ink-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>Three-week mapping engagement, no production access required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>
                    Four candidate workflows surfaced; one approved for build,
                    one sent to remediation, two flagged not-yet-ready.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>
                    Maintenance triage agent deployed under human approval,
                    audit logging, and quarterly governance review.
                  </span>
                </li>
              </ul>
              <p className="mt-6 border-t border-strong/20 pt-4 text-[11px] leading-[1.5] text-ink-muted">
                Composite illustration. Specifics differ per engagement.
              </p>
            </div>
          </header>

          <div className="lg:col-span-7">
            <div className="border-t border-strong">
              {operatingValueRows.map((row) => (
                <div
                  key={row.title}
                  className="grid grid-cols-1 gap-4 border-b border-strong/15 py-6 md:grid-cols-[12rem_1fr] md:gap-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-px w-7 shrink-0 bg-accent" aria-hidden="true" />
                    <h3 className="text-[18px] font-medium leading-[1.25] text-ink-primary">
                      {row.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-[1.65] text-ink-secondary md:text-[16px]">
                    {row.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BuildManageSection() {
  return (
    <section
      aria-labelledby="build-manage-heading"
      className="border-y border-strong bg-surface-sunken py-20 md:py-32"
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              What Quoin Builds And Manages
            </p>
            <h2
              id="build-manage-heading"
              className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary"
            >
              Quoin builds agents for the workflows where better intelligence
              changes operating performance.
            </h2>
            <p className="mt-8 measure text-[17px] leading-[1.6] text-ink-secondary">
              The first intelligence layer tells us what should be built, what
              should be controlled, and what should wait. Approved workflows move
              into agents, automations, connectors, review queues, evals, audit
              trails, and managed operations.
            </p>
          </header>

          <div className="lg:col-span-7">
            <div className="border-t border-strong">
              {buildManageRows.map((row, index) => (
                <article
                  key={row.title}
                  className="grid grid-cols-1 gap-4 border-b border-strong/15 py-6 md:grid-cols-[4.5rem_1fr] md:gap-8"
                >
                  <p className="font-serif text-[36px] leading-none text-accent tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-[19px] font-medium leading-[1.25] text-ink-primary">
                      {row.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-ink-secondary md:text-[16px]">
                      {row.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyThisExistsSection() {
  return (
    <section
      aria-labelledby="why-this-exists-heading"
      className="bg-[hsl(var(--surface-inverse))] py-20 text-white md:py-32"
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
              Why This Exists
            </p>
            <h2
              id="why-this-exists-heading"
              className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-white"
            >
              AI adoption has outrun operating readiness.
            </h2>
            <p className="mt-8 measure text-[17px] leading-[1.6] text-white/65">
              Real estate companies are already testing AI through vendor features, Copilot,
              ChatGPT, and internal pilots. The harder question is whether the company knows
              which workflow AI can touch, which source is trusted, who approves action, and
              what happens when the agent is wrong.
            </p>
          </header>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px bg-white/15 md:grid-cols-3">
              {proofPoints.map((point) => (
                <a
                  key={point.source}
                  href={point.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[hsl(var(--surface-inverse))] p-6 transition-colors hover:bg-white/[0.03]"
                >
                  <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    {point.source}
                  </p>
                  <p className="text-[15px] leading-[1.6] text-white/68">
                    {point.body}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-12 border-t border-white/20 pt-8">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-white/42">
                Failure patterns
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {failurePatterns.map((pattern, index) => (
                  <div key={pattern} className="border-l border-white/20 pl-5">
                    <p className="mb-4 font-serif text-[44px] leading-none text-white/25 tabular-nums">
                      0{index + 1}
                    </p>
                    <p className="text-[18px] font-medium leading-[1.3] text-white">
                      {pattern}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoinMethodSection() {
  return (
    <section aria-labelledby="quoin-method-heading" className="bg-surface-base py-20 md:py-32">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Inside Phase 01: Map
            </p>
            <h2
              id="quoin-method-heading"
              className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary"
            >
              Five client touchpoints, not nineteen interruptions.
            </h2>
          </header>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="measure text-[17px] leading-[1.6] text-ink-secondary">
              Phase 01 is where most engagements start. Leadership, operators,
              technology, governance, and data owners each get pulled in once,
              when their judgment changes the recommendation. The output is an
              inspectable workflow map and a no-build-or-build decision packet.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid grid-cols-1 border-t border-strong lg:grid-cols-5">
          {phaseOneTouchpoints.map((step, index) => (
            <li
              key={step.number}
              className={[
                "border-b border-strong/15 py-8 lg:border-b-0 lg:border-t-0 lg:px-6",
                index < phaseOneTouchpoints.length - 1 ? "lg:border-r lg:border-strong/15" : "",
                index === 0 ? "lg:pl-0" : "",
                index === phaseOneTouchpoints.length - 1 ? "lg:pr-0" : "",
              ].join(" ")}
            >
              <p className="mb-8 font-serif text-[56px] leading-none text-accent tabular-nums">
                {step.number}
              </p>
              <h3 className="text-[20px] font-medium leading-[1.25] text-ink-primary">
                {step.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-6 border-t border-strong pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-[15px] leading-[1.6] text-ink-secondary">
            No production access required to start. Redacted evidence accepted. Client owns
            the output. Human-owned recommendations.
          </p>
          <Link href="/method" className="cta-primary inline-flex self-start items-center gap-2 text-[15px] font-medium">
            <span>See the full method</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function PlatformSection() {
  return (
    <section
      aria-labelledby="platform-heading"
      className="border-y border-strong bg-surface-sunken py-20 md:py-32"
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Quoin Intelligence Platform
            </p>
            <h2
              id="platform-heading"
              className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary"
            >
              The workspace becomes the build and management layer for governed
              agents.
            </h2>
            <p className="mt-8 measure text-[17px] leading-[1.6] text-ink-secondary">
              Quoin turns interviews, evidence, systems, policies, exceptions, and source
              decisions into a client-specific workspace that defines what an agent may
              read, classify, draft, recommend, trigger, escalate, or never do.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3">
              {workspaceContents.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-3 h-px w-6 shrink-0 bg-accent" aria-hidden="true" />
                  <span className="text-[15px] leading-[1.5] text-ink-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className="lg:col-span-7">
            <PlatformMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function PlatformMockup() {
  const dimensionScores: Array<{ label: string; value: number; max: number }> = [
    { label: "Operating value", value: 4.1, max: 5 },
    { label: "Source trust", value: 2.6, max: 5 },
    { label: "Control maturity", value: 3.8, max: 5 },
    { label: "Workflow stability", value: 3.5, max: 5 },
    { label: "Adoption reality", value: 3.0, max: 5 },
  ]

  return (
    <div className="border border-strong bg-surface-base shadow-[0_24px_60px_-32px_rgba(26,26,26,0.18)]">
      <div className="flex items-center justify-between gap-4 border-b border-strong/30 bg-surface-sunken px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-strong/30" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-strong/30" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-strong/30" aria-hidden="true" />
        </div>
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          quoin.workspace / acme-reit / maintenance-intake
        </p>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
          v1.4
        </span>
      </div>

      <div className="grid grid-cols-1 border-b border-strong md:grid-cols-[1fr_14rem]">
        <div className="p-5 md:p-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Operating intelligence workspace
          </p>
          <h3 className="mt-3 text-[24px] font-medium leading-[1.15] text-ink-primary md:text-[28px]">
            Maintenance intake &middot; readiness review
          </h3>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px]">
            <span className="border border-accent/40 bg-accent/5 px-2 py-1 font-medium uppercase tracking-[0.14em] text-accent">
              In review
            </span>
            <span className="border border-strong/20 px-2 py-1 font-medium uppercase tracking-[0.14em] text-ink-secondary">
              12,400 work orders / yr
            </span>
            <span className="border border-strong/20 px-2 py-1 font-medium uppercase tracking-[0.14em] text-ink-secondary">
              4 regions
            </span>
          </div>
        </div>
        <div className="border-t border-strong p-5 md:border-l md:border-t-0 md:p-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Composite readiness
          </p>
          <p className="mt-3 font-serif text-[56px] leading-none text-accent tabular-nums">
            3.4<span className="text-[24px] text-ink-muted">/5</span>
          </p>
          <p className="mt-3 text-[12px] leading-[1.45] text-ink-secondary">
            Source trust drags the composite. Remediate before build.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-strong p-5 md:border-b-0 md:border-r md:p-7">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Readiness by dimension
          </p>
          <ul className="space-y-4">
            {dimensionScores.map((dim) => {
              const pct = (dim.value / dim.max) * 100
              const lagging = dim.value < 3
              return (
                <li key={dim.label} className="grid grid-cols-[10rem_1fr_3rem] items-center gap-4">
                  <p className="text-[12px] font-medium leading-[1.3] text-ink-primary">
                    {dim.label}
                  </p>
                  <div className="relative h-1.5 w-full bg-strong/10">
                    <div
                      className={[
                        "absolute inset-y-0 left-0",
                        lagging ? "bg-accent/40" : "bg-accent",
                      ].join(" ")}
                      style={{ width: `${pct}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-right font-serif text-[16px] leading-none text-ink-primary tabular-nums">
                    {dim.value.toFixed(1)}
                  </p>
                </li>
              )
            })}
          </ul>

          <div className="mt-7 grid grid-cols-1 gap-4 border-t border-strong/15 pt-5 md:grid-cols-[10rem_1fr]">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              Control model
            </p>
            <p className="text-[14px] leading-[1.55] text-ink-secondary">
              AI may classify and draft. Human approval required before
              vendor assignment or resident-facing action.
            </p>
          </div>
        </div>

        <div className="p-5 md:p-7">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Build handoff
          </p>
          <div className="border-y border-strong py-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
              Recommended path
            </p>
            <p className="mt-3 text-[20px] font-medium leading-[1.25] text-ink-primary md:text-[22px]">
              Remediate source trust, then approve agent behavior contract.
            </p>
            <p className="mt-3 text-[12px] leading-[1.5] text-ink-muted">
              Confidence 0.78 &middot; Reviewed by 3 owners
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-px bg-border-strong/15">
            {[
              ["Workflow", "Mapped"],
              ["Source", "Disputed"],
              ["Owner", "Mapped"],
              ["Controls", "Drafted"],
            ].map(([item, status]) => (
              <div key={item} className="bg-surface-base p-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-muted">{item}</p>
                <p
                  className={[
                    "mt-3 text-[14px] font-medium",
                    status === "Disputed" ? "text-accent" : "text-ink-primary",
                  ].join(" ")}
                >
                  {status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function OperatingPartnerModelSection() {
  return (
    <section aria-labelledby="partner-model-heading" className="bg-surface-base py-20 md:py-32">
      <div className="container-shell">
        <header className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Operating Partner Model
            </p>
            <h2
              id="partner-model-heading"
              className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary"
            >
              Map the workflow. Build the intelligence layer. Build the agent.
              Deploy with controls. Manage continuously.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="measure text-[17px] leading-[1.6] text-ink-secondary">
              Quoin is not a strategy-only advisor or a point-solution vendor.
              The intelligence layer is the beginning of a longer operating
              relationship: build the approved capability, govern it in
              production, and manage it as workflows, systems, policies, and
              portfolios change.
            </p>
          </div>
        </header>

        <ol className="grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-2 xl:grid-cols-5">
          {partnerPhases.map((phase) => (
            <li key={phase.number} className="bg-surface-base p-6">
              <p className="font-serif text-[56px] leading-none text-accent tabular-nums">
                {phase.number}
              </p>
              <h3 className="mt-6 text-[21px] font-medium leading-[1.2] text-ink-primary">
                {phase.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.65] text-ink-secondary">
                {phase.body}
              </p>
              <div className="mt-8 border-t border-strong pt-5">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                  Artifact: {phase.artifact}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {phase.lines.map((line) => (
                    <p key={line} className="border-b border-strong/15 pb-3 text-[13px] leading-[1.45] text-ink-secondary last:border-b-0 last:pb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function HumanAccountabilitySection() {
  return (
    <section
      aria-labelledby="human-accountability-heading"
      className="border-y border-strong bg-surface-sunken py-20 md:py-32"
    >
      <div className="container-shell">
        <header className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Human Accountability
            </p>
            <h2
              id="human-accountability-heading"
              className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary"
            >
              AI-assisted work. Expert-owned decisions.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="measure text-[17px] leading-[1.6] text-ink-secondary">
              Quoin&apos;s platform accelerates interviews, extraction, mapping, scoring, and
              draft deliverables. Recommendations, build paths, and managed operations
              plans are reviewed across real estate operations, AI architecture,
              governance, infrastructure, and data readiness before they reach the client.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              href="/team"
              className="group bg-surface-base"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-sunken">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[center_16%] grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-[20px] font-medium leading-[1.25] text-ink-primary">
                  {member.name}
                </h3>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {member.domain}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FitSection() {
  return (
    <section id="fit" aria-labelledby="fit-heading" className="bg-surface-base py-20 md:py-32">
      <div className="container-shell">
        <header className="mb-14 max-w-4xl">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
            Fit
          </p>
          <h2
            id="fit-heading"
            className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary"
          >
            For firms where ownership and operations are close enough for AI to affect NOI.
          </h2>
          <p className="mt-8 measure text-[17px] leading-[1.6] text-ink-secondary">
            Quoin is built for vertically integrated real estate companies where asset
            ownership, asset management, property operations, reporting, compliance, and
            operating systems are connected enough for AI to change the business, not just
            one task.
          </p>
        </header>

        <div className="grid grid-cols-1 border-y border-strong lg:grid-cols-2">
          <FitList title="Good fit" items={goodFit} />
          <FitList title="Not a fit" items={poorFit} className="border-t border-strong lg:border-l lg:border-t-0" />
        </div>
      </div>
    </section>
  )
}

function FitList({
  title,
  items,
  className = "",
}: {
  title: string
  items: string[]
  className?: string
}) {
  return (
    <div className={["p-6 md:p-8", className].join(" ")}>
      <h3 className="mb-8 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
        {title}
      </h3>
      <ul className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <span className="mt-3 h-px w-6 shrink-0 bg-border-strong" aria-hidden="true" />
            <span className="text-[16px] leading-[1.55] text-ink-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ClosingCtaSection() {
  return (
    <section
      aria-labelledby="closing-cta-heading"
      className="bg-[hsl(var(--surface-inverse))] py-20 text-white md:py-28"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-10 h-px w-12 bg-accent" />
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-white/42">
            Next step
          </p>
          <h2
            id="closing-cta-heading"
            className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-white"
          >
            One 30-minute call. Three candidate workflows. A no-pressure decision packet.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-[1.65] text-white/64">
            Bring your operating model and the workflows where AI pressure is
            loudest. Leave with three candidate workflows, the controls each
            would require, and a clear sense of which to map first. No
            production access. No commitment to build.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-white pb-1 text-[15px] font-medium text-white transition-colors hover:border-white/70 hover:text-white/70"
            >
              <span>Map one operating area with us</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/method"
              className="inline-flex items-center gap-2 border-b border-white/55 pb-1 text-[15px] font-medium text-white/75 transition-colors hover:border-white hover:text-white"
            >
              <span>See the method</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
