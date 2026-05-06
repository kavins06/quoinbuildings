"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const questions = [
  {
    n: "01",
    q: "Will I have to hand over production credentials at the start?",
    a: "No. Discovery and the first scaffold run on metadata, redacted samples, walkthroughs, and synthetic examples. Production credentials cross only after the Step 18 handoff and a separate implementation approval signed by your security and data owners.",
  },
  {
    n: "02",
    q: "Will this run inside our approved environment?",
    a: "Yes. The Operating Intelligence Platform is deployed inside your cloud, your tenant, your identity provider, your network boundary, and your audit/logging infrastructure. We do not stand up a shadow system outside of your enterprise architecture.",
  },
  {
    n: "03",
    q: "Does this complement our existing stack or replace it?",
    a: "Complements. We sit beside Snowflake, Databricks, Microsoft Fabric, Yardi, MRI, RealPage, Argus, Salesforce, Workday, ServiceNow, SharePoint, Box, Power BI, Tableau, and Excel. The platform is a governed semantic layer, not a new system of record. We do not replace your warehouse, ERP, PMS, BI, or document management system.",
  },
  {
    n: "04",
    q: "Will you train models on our data?",
    a: "No, unless explicitly approved in writing. Default posture: no training, no fine-tuning, no prompt logs that retain proprietary data, no cross-client data mixing. Where you do approve training or fine-tuning, scope is documented in the implementation decision packet with retention, deletion, and revocation rules.",
  },
  {
    n: "05",
    q: "Are we locked to one model provider?",
    a: "No. The platform uses model abstraction by design. The same agent capability can route across providers (Anthropic, OpenAI, open-source, on-prem) based on cost, latency, privacy, capability, or vendor preference. Model choice is a component decision, not a strategic one.",
  },
  {
    n: "06",
    q: "What is your security and governance posture?",
    a: "RBAC/ABAC. Scoped credentials for every agent and tool. Audit and trace for every retrieval, tool call, model call, draft, and approval. Lineage and freshness on every metric. Retention and deletion policies on prompts, traces, and retrieved content. Documented incident response, revocation paths, and rollback. Sensitive data redaction. Approved vendor and subprocessor list.",
  },
]

const accessProgression = [
  ["01", "Metadata scaffold", "No production credentials. No bulk data."],
  ["02", "Redacted samples", "Written approval. Data minimization. Retention rule."],
  ["03", "Client-controlled environment", "Security review. Identity. Audit. Network. Logging."],
  ["04", "Production operating layer", "RBAC/ABAC. Monitoring. Lineage. Access review. Incident path."],
  ["05", "Agent layer", "Tool contracts. Guardrails. Traces. Eval thresholds. Revocation."],
]

const ctoApprovals = [
  "First domain or workflow",
  "Approved implementation environment",
  "Data access posture and whether data may leave source systems",
  "Whether redacted samples can be used in discovery",
  "Whether synthetic data is sufficient for the first prototype",
  "Identity provider and access model",
  "Logging and retention requirements",
  "Approved vendors and subprocessors",
  "Network and hosting constraints",
  "Security review path",
  "Source owner and data owner participation",
  "Incident and revocation owner",
  "Change-control forum",
  "Production promotion criteria",
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

export function TechnologyLeadersContent() {
  return (
    <div>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                For technology and security leaders
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                Six questions every CIO asks before authorizing AI work.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                For CTOs, CIOs, CISOs, CDOs, enterprise architects, and digital
                transformation leaders at REITs and large real estate companies
                who must co-approve AI work alongside the business operator.
                Direct answers, lifted from the same brief Quoin uses with
                client architecture and security reviews.
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
                  Posture summary
                </p>
                <dl className="mt-6 divide-y divide-border-hairline border-y border-border-hairline">
                  {[
                    ["Discovery credentials", "None"],
                    ["Deployment environment", "Your cloud / tenant"],
                    ["Stack relationship", "Complementary"],
                    ["Training on your data", "No, unless approved"],
                    ["Model provider", "Abstracted"],
                    ["Audit + lineage", "Required by default"],
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
              eyebrow="The six questions"
              title="Direct answers, in the order security review actually asks them."
              body="No marketing answer first. Each question is answered with the operating posture and the controls behind it. If your review needs additional detail, the relevant artifact (decision packet, control matrix, eval suite, trace policy) is named in the conversation."
            />
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 border-y border-strong">
            {questions.map((q, i) => (
              <BlurFade key={q.n} inView delay={0.04 + i * 0.04} direction="up">
                <article className="grid grid-cols-1 gap-6 border-b border-strong/15 py-8 last:border-b-0 md:grid-cols-[5rem_1fr_1.4fr] md:gap-12 md:py-10">
                  <p className="font-serif text-[44px] leading-none text-accent tabular-nums">
                    {q.n}
                  </p>
                  <h3 className="text-balance text-[20px] font-medium leading-[1.3] text-ink-primary md:text-[22px]">
                    {q.q}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-ink-secondary md:text-[16px]">
                    {q.a}
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
              eyebrow="Step 18 hard gate"
              title="Discovery is contractually separate from build."
              body="No production credentials, no live integrations, no agent deployment until two things are true: the Operating Diagnostic decision packet is approved, and a separate implementation approval naming scope, owners, environments, access limits, budget, and timebox is signed."
            />
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="border border-strong bg-surface-base">
                  <div className="border-b border-strong px-6 py-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                      What separates Section 1 from Section 2
                    </p>
                  </div>
                  <div className="divide-y divide-border-hairline">
                    {[
                      ["Section 1 (Diagnostic)", "Pre-build. Metadata, redacted samples, synthetic data, walkthroughs. Outputs a decision packet and managed lifecycle object. Allowed to recommend not building."],
                      ["Step 18 handoff", "Decision packet, lifecycle object, and method-to-build handoff contract are reviewed and accepted."],
                      ["Separate implementation approval", "Names scope, owners, environments, access limits, budget, timebox, and security review path. Signed by sponsor + technology + security owners."],
                      ["Section 2 (Implementation)", "Operating Intelligence Platform first wedge built in your environment. Agents on top under controlled pilot. Production access added stage by stage."],
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
                  Procurement implication
                </p>
                <p className="mt-4 font-sans text-[22px] font-medium leading-[1.25] tracking-normal text-ink-primary md:text-[24px]">
                  You can buy, deliver, and walk away after Section 1.
                </p>
                <p className="mt-7 text-[14px] leading-[1.7] text-ink-secondary">
                  The decision packet has standalone value. If the diagnostic
                  recommends not automating, or remediating first, you keep the
                  operating baseline and can act on it without committing to
                  build. The architecture of the engagement matches the
                  architecture of the approval.
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
              eyebrow="Data access progression"
              title="Five staged access points, advanced only on approval."
              body="Each stage carries its own purpose and its own controls. A platform wedge can stop at any stage if evidence does not support advancing. Access is earned by the work, not assumed at the start."
            />
          </BlurFade>

          <BlurFade inView delay={0.08} direction="up">
            <div className="mt-14 overflow-x-auto border border-strong bg-surface-base">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-strong bg-surface-sunken">
                    <th className="w-[80px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Stage</th>
                    <th className="w-[260px] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Title</th>
                    <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">Required controls</th>
                  </tr>
                </thead>
                <tbody>
                  {accessProgression.map(([stage, title, controls]) => (
                    <tr key={stage} className="border-b border-border-hairline last:border-b-0">
                      <td className="px-5 py-5 align-top font-serif text-[20px] leading-none text-accent tabular-nums">
                        {stage}
                      </td>
                      <td className="px-5 py-5 align-top text-[15px] font-medium leading-[1.4] text-ink-primary">
                        {title}
                      </td>
                      <td className="px-5 py-5 align-top text-[14px] leading-[1.6] text-ink-secondary">
                        {controls}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.16} direction="up">
            <p className="mt-8 text-[14px] leading-[1.65] text-ink-muted">
              Full architecture and stage detail lives on{" "}
              <Link href="/platform" className="border-b border-accent/40 text-ink-secondary hover:text-ink-primary">
                /platform
              </Link>
              .
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="border-y border-strong bg-surface-inverse py-20 text-surface-base md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-surface-base/50">
                  CTO/CIO approval inventory
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-surface-base">
                  What the technology owner actually approves.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
                <p className="text-[16px] leading-[1.65] text-surface-base/72">
                  The decision packet routes the right approvals to the right
                  owners. The technology side typically owns or co-owns the
                  items below; your review process determines which require
                  delegated governance and which require executive sign-off.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <ul className="mt-14 grid grid-cols-1 gap-px bg-surface-base/15 md:grid-cols-2 lg:grid-cols-3">
              {ctoApprovals.map((item, i) => (
                <li
                  key={item}
                  className="bg-[hsl(var(--surface-inverse))] p-5 md:p-6"
                >
                  <p className="font-serif text-[20px] leading-none text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.55] text-surface-base/85 md:text-[15px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
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
                Bring your security and architecture team to the call.
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.65] text-surface-base/70 md:text-[17px]">
                30 minutes. Bring your operating model, your environment
                posture, your existing stack, and the security review path
                that any new AI work has to clear. Leave with a sketch of how
                the first wedge lands inside that posture.
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
