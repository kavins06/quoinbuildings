"use client"

import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const phases = [
  {
    number: "01",
    name: "Executive Diagnostic",
    timeline: "Weeks 1\u20132",
    description:
      "We embed with your leadership and operations team to map workflows, assess data readiness, scope governance requirements, and build a prioritized roadmap. This is a standalone engagement. No long-term commitment required.",
    activities: [
      "Workflow mapping across leasing, maintenance, and resident operations",
      "Data quality and readiness assessment",
      "Governance and compliance scoping",
      "Prioritized AI roadmap with ROI projections",
    ],
    image: "/approach-discover.jpg",
    deliverable: "A prioritized implementation roadmap you own outright.",
    decisionGate: "You decide whether to proceed based on the roadmap.",
  },
  {
    number: "02",
    name: "First Workflow Deployment",
    timeline: "Weeks 2\u20134",
    description:
      "We build and deploy the highest-ROI use case identified in the diagnostic. The agent is trained on your data, tested against edge cases, and validated by your operations team. Governance framework is established before go-live.",
    activities: [
      "Agent architecture and integration with your property management platform",
      "Training on your operational data, policies, and workflows",
      "Edge case testing and iterative validation with your operations team",
      "Governance framework established before go-live",
    ],
    image: "/approach-design.jpg",
    deliverable: "A production-ready agent, tested and validated by your team.",
    decisionGate: "The agent ships only when your team confirms it fits.",
  },
  {
    number: "03",
    name: "Rollout & Adoption",
    timeline: "Weeks 4\u20138",
    description:
      "Staged rollout across properties with hands-on training for staff. Performance dashboards are established and monitored. Expansion to additional properties happens only after metrics confirm the deployment is working.",
    activities: [
      "Staged deployment starting with pilot properties",
      "Hands-on training sessions for property managers and staff",
      "Performance dashboard setup and ongoing monitoring",
      "Expansion only after metrics confirm success",
    ],
    image: "/approach-deploy.jpg",
    deliverable: "Live agent in production with trained staff and documented metrics.",
    decisionGate: "Expansion happens only after performance thresholds are met.",
  },
  {
    number: "04",
    name: "Managed Operations & Expansion",
    timeline: "Ongoing",
    description:
      "Continuous performance monitoring, model retraining, and expansion to additional workflows. Monthly reporting tied to KPIs and quarterly business reviews ensure alignment with your business objectives.",
    activities: [
      "Continuous performance monitoring and optimization",
      "Model retraining on updated operational data",
      "Expansion to additional workflows and properties",
      "Monthly reporting tied to KPIs and quarterly business reviews",
    ],
    image: "/approach-operate.jpg",
    deliverable: "An AI infrastructure that scales with your business.",
    decisionGate: "Continuous. You own every deliverable we produce.",
  },
]

const faqs = [
  {
    question: "How much does the diagnostic cost?",
    answer:
      "Contact us for pricing. We believe in transparency \, the diagnostic is a standalone paid engagement with clearly defined deliverables.",
  },
  {
    question: "What systems access do you need?",
    answer:
      "Read-only access to your property management platform (Yardi, RealPage, AppFolio, or Entrata) for data assessment. API documentation. We specify exact requirements during scoping.",
  },
  {
    question: "How much of our team\u2019s time does this require?",
    answer:
      "The diagnostic requires approximately 15\u201320 hours from 4\u20135 stakeholders across 2 weeks. The build phase requires a designated point of contact with 3\u20135 hours per week.",
  },
  {
    question: "Do you work with our existing systems or replace them?",
    answer:
      "We integrate with your existing platform. We do not ask you to replace Yardi or RealPage. AI agents are built on top of your current infrastructure.",
  },
  {
    question: "How do you handle tenant data privacy?",
    answer:
      "Every engagement includes a governance framework addressing GDPR, CCPA, state-level privacy regulations, and fair housing compliance. Data isolation between properties is standard. Audit trails are built into every system.",
  },
  {
    question: "What if the diagnostic shows AI is not worth pursuing?",
    answer:
      "We tell you. You own the deliverables regardless. If the answer is \u2018not now,\u2019 that is a valid and valuable outcome.",
  },
  {
    question: "Can we take the diagnostic roadmap to another provider?",
    answer: "Yes. You own it.",
  },
]

function PhaseBlock({ phase, index }: { phase: typeof phases[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={0.1}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-16 md:py-24 border-b border-border last:border-b-0">
        <div className="lg:col-span-5">
          <div className="group relative overflow-hidden h-64 md:h-80 lg:h-full lg:min-h-[320px]">
            {phase.image && (
              <img
                src={phase.image}
                alt={phase.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
              <span className="text-[11px] tracking-[0.15em] text-white/40 mb-3">
                ({phase.number})
              </span>
              <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-white">
                {phase.name}
              </h2>
              <p className="text-[11px] tracking-[0.15em] uppercase text-accent mt-2">
                {phase.timeline}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
          <p className="text-sm leading-[1.85] text-muted-foreground">
            {phase.description}
          </p>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
              Key Activities
            </p>
            <ul className="flex flex-col gap-3">
              {phase.activities.map((activity) => (
                <li key={activity} className="flex items-start gap-3">
                  <div className="w-1.5 h-px bg-accent/60 mt-2.5 shrink-0" />
                  <span className="text-sm leading-[1.75] text-muted-foreground">
                    {activity}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              Deliverable
            </p>
            <p className="text-sm leading-[1.75] text-foreground font-light">
              {phase.deliverable}
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              Decision Gate
            </p>
            <p className="text-sm leading-[1.75] text-accent font-light italic">
              {phase.decisionGate}
            </p>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

export function ApproachContent() {
  return (
    <main>
      <PageHeader
        eyebrow="How Engagements Work"
        title="From Diagnostic to Production: Decision Points at Every Stage"
        description="Every engagement starts with a 2-week diagnostic. What happens after that depends on what we find. You decide at each stage whether to continue."
        backgroundImage="/header-approach.jpg"
        imageGrayscale
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      <section className="px-6 md:px-12 lg:px-20">
        {phases.map((phase, index) => (
          <PhaseBlock key={phase.number} phase={phase} index={index} />
        ))}
      </section>

      {/* Trust Signal */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <p className="text-lg md:text-xl font-extralight leading-[1.6] tracking-tight text-background/80">
              Every engagement includes defined exit criteria at each phase. If the data says stop, we stop. You own every deliverable we produce.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:px-12 lg:px-20 md:py-32">
        <BlurFade inView direction="up">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4 text-center">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight leading-[1.15] tracking-tight mb-16 text-center">
              What to expect
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base font-light tracking-tight py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-[1.85] text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </BlurFade>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <h2 className="text-3xl md:text-4xl font-extralight leading-[1.15] tracking-tight mb-6">
              Ready to see what the diagnostic would reveal for your firm?
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              The first step is a conversation. We will learn about your operations
              and help you understand what the diagnostic would uncover.
            </p>
            <a
              href="/contact"
              className="inline-block text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 border border-strong text-ink-primary hover:bg-surface-inverse hover:text-surface-base transition-colors duration-150"
            >
              Talk to us
            </a>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
