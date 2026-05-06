"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const umbrellas = [
  {
    n: "01",
    name: "Frame and hypothesize",
    steps: "Steps 0 to 2",
    body: "Engagement tier and vertical extension. Executive opportunity terrain. Candidate use-case shortlist with disqualification criteria.",
  },
  {
    n: "02",
    name: "Discover reality",
    steps: "Steps 3 to 5",
    body: "Role-aware AI-led interviews. Variation mapping where work is fragmented across regions or systems. One consolidated planning-evidence request.",
  },
  {
    n: "03",
    name: "Build and validate the intelligence layer",
    steps: "Steps 6 to 8",
    body: "Workflow intelligence object. Organizational intelligence diagnostic. Controlled validation, governance resolution, and baseline release.",
  },
  {
    n: "04",
    name: "Define AI reasoning requirements",
    steps: "Steps 9 to 10",
    body: "Knowledge and guideline requirements map. AI guidance pack with behavioral evals, output evals, and regulated-domain evals.",
  },
  {
    n: "05",
    name: "Prove measurement and value",
    steps: "Steps 11 to 12",
    body: "Measurement intelligence and AI capability metric design. Business value case and portfolio comparison across surviving opportunities.",
  },
  {
    n: "06",
    name: "Shape the future solution",
    steps: "Steps 13 to 15",
    body: "Solution shape, oversight model, and adoption design. Technical and vendor implementation blueprint. Risk and control model.",
  },
  {
    n: "07",
    name: "Decide and govern",
    steps: "Steps 16 to 18",
    body: "AI agent readiness score with hard gates. Implementation decision packet. Managed lifecycle object and method-to-build handoff.",
  },
]

const touchpoints = [
  {
    n: "01",
    name: "Strategy bundle",
    locks: "End of Step 2",
    body: "Goals, scope, decision rights, constraints, candidate terrain, participant coverage, and success criteria.",
  },
  {
    n: "02",
    name: "Workflow interview bundle",
    locks: "End of Step 4",
    body: "Role interviews, workflow variation, systems mentioned in context, edge cases, source paths, truth chains, adoption signals.",
  },
  {
    n: "03",
    name: "Evidence and data bundle",
    locks: "Requested at Step 5; resolved by Step 8",
    body: "One consolidated, owner-grouped request: redacted artifacts, walkthroughs, screenshots, reports, schemas, formulas, policies. No drip requests.",
  },
  {
    n: "04",
    name: "Governance validation bundle",
    locks: "End of Step 8",
    body: "Source, truth-production, owner, steward, access, sensitivity, retention, and permitted/prohibited AI action decisions.",
  },
  {
    n: "05",
    name: "Decision and handoff bundle",
    locks: "End of Step 18",
    body: "Value, solution shape, adoption design, technical plan, risk controls, readiness, decision packet, lifecycle, method-to-build handoff approval.",
  },
]

const packetTypes = [
  ["Build-ready brief", "Cleared for governed build with an approved agent behavior contract."],
  ["Gap-remediation plan", "Source trust, ownership, controls, or process change must come first. Build is reconsidered after remediation."],
  ["Governance and data readiness plan", "Permission model, retention, access matrix, and audit posture must be aligned before agent work."],
  ["Knowledge capture plan", "Tacit, expert, or undocumented knowledge must be captured before AI can reason about the workflow safely."],
  ["Technical feasibility plan", "Architecture, identity, environment, integration, or model decisions must be made before build can start."],
  ["Risk and control plan", "Privacy, regulatory, output-quality, or operational risk requires controls beyond the standard model."],
  ["Do-not-automate recommendation", "The workflow is not appropriate for autonomous AI. AI may still help with analysis or human-owned preparation."],
]

const boundaries = [
  "No production credentials are required to start.",
  "Redacted evidence, walkthroughs, screenshots, reports, and approved samples are accepted.",
  "Client teams validate sources, owners, decision rights, and control assumptions.",
  "Quoin does not request broad system credentials during discovery.",
  "The client owns the output and can challenge, export, or reuse the intelligence baseline.",
  "Build starts only after the decision packet, controls, access model, and lifecycle owner are approved AND a separate implementation approval is signed.",
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
      <span>Scope a diagnostic</span>
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

export function DiagnosticContent() {
  return (
    <div>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Section 01 &middot; Operating Diagnostic
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                Decide what AI belongs in the workflow. Before you build it.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                The Operating Diagnostic is the pre-build engagement. Five
                client touchpoints, seven umbrellas, one decision packet,
                one managed lifecycle object, and a hard contractual line at
                Step 18 before any implementation work can begin. The output
                is yours whether or not you build with us.
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
                    ["Engagement type", "Pre-build"],
                    ["Client burden", "Five batched touchpoints"],
                    ["Production access", "Not required"],
                    ["Output", "Decision packet + lifecycle object"],
                    ["Allowed outcomes", "Build / remediate / buy / pause / do not automate"],
                    ["Boundary", "Step 18 hard gate to build"],
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
              eyebrow="Seven umbrellas"
              title="The full operating sequence, grouped for legibility."
              body="The diagnostic runs Step 0 plus eighteen operating steps internally. Externally, those steps are grouped into seven umbrellas so a sponsor can scan the engagement in under a minute. Detailed step mechanics live inside the umbrellas."
            />
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 border-y border-strong">
            {umbrellas.map((u) => (
              <article
                key={u.n}
                className="grid grid-cols-1 gap-4 border-b border-strong/15 py-7 last:border-b-0 md:grid-cols-[5rem_18rem_1fr] md:gap-10"
              >
                <p className="font-serif text-[36px] leading-none text-accent tabular-nums">
                  {u.n}
                </p>
                <div>
                  <h3 className="text-[17px] font-medium leading-[1.3] text-ink-primary md:text-[19px]">
                    {u.name}
                  </h3>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                    {u.steps}
                  </p>
                </div>
                <p className="text-[14px] leading-[1.7] text-ink-secondary md:text-[15px]">
                  {u.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <SectionHeading
              eyebrow="Five client touchpoints"
              title="Five batched moments, not nineteen interruptions."
              body="The internal method runs Step 0 through Step 18. Externally, the client experiences the diagnostic as five batched bundles: strategy, workflow interviews, evidence, governance validation, decision and handoff. Reduces client burden without reducing rigor."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-2 lg:grid-cols-5">
            {touchpoints.map((t) => (
              <article key={t.n} className="flex h-full flex-col gap-5 bg-surface-base p-5 md:p-6">
                <p className="font-serif text-[40px] leading-none text-accent tabular-nums">
                  {t.n}
                </p>
                <div>
                  <h3 className="text-[16px] font-medium leading-[1.3] text-ink-primary">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                    {t.locks}
                  </p>
                </div>
                <p className="text-[13px] leading-[1.65] text-ink-secondary">
                  {t.body}
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
              eyebrow="Decision packet"
              title="Seven packet types. Right shape for the right outcome."
              body="The diagnostic ends with a structured machine-readable decision packet that names which path applies to which workflow. When one workflow needs multiple packet types, we produce a packet set with cross-packet relationships."
            />
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 border-y border-strong">
            {packetTypes.map(([title, body], i) => (
              <article
                key={title as string}
                className="grid grid-cols-1 gap-4 border-b border-strong/15 py-6 last:border-b-0 md:grid-cols-[5rem_18rem_1fr] md:gap-10"
              >
                <p className="font-serif text-[24px] leading-none text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[15px] font-medium leading-[1.3] text-ink-primary md:text-[16px]">
                  {title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink-secondary md:text-[15px]">
                  {body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-[14px] leading-[1.7] text-ink-muted">
            See{" "}
            <Link href="/concepts#readiness" className="border-b border-accent/40 text-ink-secondary hover:text-ink-primary">
              the five readiness paths and three named kill points
            </Link>{" "}
            for how the diagnostic decides which packet applies.
          </p>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-inverse py-20 text-surface-base md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                  Engagement boundaries
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-surface-base">
                  Low-risk discovery before production access.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
                <p className="text-[16px] leading-[1.65] text-surface-base/72">
                  The first stage is designed for executive and security
                  confidence and for controlled participation. Work begins
                  with approved evidence and walkthroughs, then advances
                  only as the client validates the assumptions.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <ol className="mt-14 grid grid-cols-1 gap-px bg-surface-base/15 md:grid-cols-2 lg:grid-cols-3">
              {boundaries.map((b, i) => (
                <li
                  key={b}
                  className="bg-[hsl(var(--surface-inverse))] p-5 md:p-6"
                >
                  <p className="font-serif text-[20px] leading-none text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.55] text-surface-base/85 md:text-[15px]">
                    {b}
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
                  After the diagnostic
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
                  Step 18 is a hard gate. Build is a separate engagement.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
                <p className="measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px]">
                  No production credentials cross until the decision packet,
                  lifecycle object, and method-to-build handoff are approved
                  AND a separate implementation approval naming scope, owners,
                  environments, access limits, budget, and timebox is signed.
                  At that point the engagement moves to Operating
                  Implementation. Until then, the diagnostic stands on its
                  own.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
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
                  <Link
                    href="/method"
                    className="cta-primary inline-flex items-center gap-2 text-[14px] font-medium"
                  >
                    <span>Method detail</span>
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
                Scope a diagnostic on one operating area.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                30-minute call. Bring the operating area where AI pressure is
                loudest. Leave with three candidate workflows and a
                no-pressure decision packet sketch.
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
