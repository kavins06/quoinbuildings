"use client"

import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const pillars = [
  {
    number: "01",
    title: "Fair Housing Compliance",
    description:
      "Every AI system that influences tenant screening, application processing, or housing decisions includes explicit fair housing guardrails. We do not deploy AI into housing decisions without them.",
    mechanisms: [
      "Pre-deployment bias testing across protected classes",
      "Decision explanation requirements for adverse actions",
      "Human-in-the-loop review for consequential decisions",
      "Regular audit of screening outcomes for disparate impact",
    ],
  },
  {
    number: "02",
    title: "Data Privacy & Protection",
    description:
      "Tenant personal data is handled with controls aligned to CCPA and GDPR standards. Privacy is not an afterthought. it is built into the data architecture from day one.",
    mechanisms: [
      "Data minimization and purpose limitation principles",
      "Encryption at rest and in transit for all tenant data",
      "Defined data retention and deletion policies",
      "Tenant rights workflows for access, correction, and deletion requests",
    ],
  },
  {
    number: "03",
    title: "Audit Trails & Accountability",
    description:
      "Every AI decision is logged with clear attribution and rationale. When a question arises about why a decision was made, the answer is retrievable.",
    mechanisms: [
      "Immutable audit logs for all AI-assisted decisions",
      "Decision rationale capture and storage",
      "Periodic review protocols and reporting",
      "Incident response procedures for identified issues",
    ],
  },
  {
    number: "04",
    title: "Algorithmic Bias Monitoring",
    description:
      "Deployed models are continuously monitored for disparate impact across protected classes. Bias is not a one-time test. it is an ongoing operational concern.",
    mechanisms: [
      "Statistical monitoring of outcomes by demographic group",
      "Periodic model revalidation against updated data",
      "Bias reporting dashboards for operational transparency",
      "Documented remediation protocols when bias is detected",
    ],
  },
  {
    number: "05",
    title: "Access Control & Data Isolation",
    description:
      "Role-based access ensures that personnel see only the data relevant to their responsibilities. Property-level data isolation prevents cross-portfolio leakage.",
    mechanisms: [
      "Role-based access controls aligned to organizational structure",
      "Property-level data segmentation and isolation",
      "Least-privilege access principles enforced by default",
      "Access audit logging and periodic review",
    ],
  },
]

function PillarBlock({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={0.1}>
      <div className="py-16 md:py-20 border-b border-border last:border-b-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-4">
              ({pillar.number})
            </span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-4">
              {pillar.title}
            </h2>
            <p className="text-sm leading-[1.75] text-muted-foreground">
              {pillar.description}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
              Key Mechanisms
            </p>
            <ul className="flex flex-col gap-3">
              {pillar.mechanisms.map((mechanism) => (
                <li key={mechanism} className="flex items-start gap-3">
                  <div className="w-1.5 h-px bg-accent/60 mt-2.5 shrink-0" />
                  <span className="text-sm leading-[1.75] text-muted-foreground">
                    {mechanism}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

export function GovernanceContent() {
  return (
    <main>
      <PageHeader
        eyebrow="AI Governance"
        title="Responsible AI is not optional in property management."
        description="Every AI system that touches tenant data, screening decisions, or financial reporting requires a governance framework. This is ours."
        backgroundImage="https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <BlurFade inView direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 pb-16 border-b border-border">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                Framework
              </p>
              <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground">
                Five governance pillars applied to every engagement
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Our governance framework is informed by two decades of enterprise technology
                leadership across the Department of Defense and Intelligence Community. Every
                pillar below is applied to every client engagement, from the first AI agent
                we build to ongoing operations.
              </p>
            </div>
          </div>
        </BlurFade>

        {pillars.map((pillar, index) => (
          <PillarBlock key={pillar.number} pillar={pillar} index={index} />
        ))}
      </section>

      <BlurFade inView direction="up">
        <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 bg-secondary">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                Our Commitment
              </p>
              <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground">
                Honest about where we are
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Every system we build is engineered to meet enterprise compliance and security standards from day one — SOC 2, ISO 27001, GDPR, CCPA, and fair housing requirements are designed into the architecture, not bolted on. The framework is informed by senior advisors with decades of enterprise compliance, governance, and security experience across the U.S. Department of War, the U.S. Department of State, ODNI, and BAE Systems.
              </p>
            </div>
          </div>
        </section>
      </BlurFade>

      <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <h2 className="text-3xl md:text-4xl font-normal leading-[1.15] tracking-tight mb-6">
              Questions about the framework?
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              We are happy to walk through our framework in detail and discuss
              how it applies to your specific operations and compliance requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 bg-white text-black hover:bg-white/90 transition-colors duration-150"
            >
              Talk to us
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
