"use client"

import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const services = [
  {
    number: "01",
    title: "AI Strategy & Diagnostic",
    description:
      "We map your workflows across maintenance, leasing, tenant communications, accounting, and compliance. We assess data readiness across your systems and identify the highest-ROI automation opportunities.",
    activities: [
      "Workflow mapping across all operational areas",
      "Data quality assessment across Yardi, RealPage, AppFolio, Entrata",
      "Use case prioritization by ROI and feasibility",
      "Tech stack audit and integration assessment",
      "Governance scoping with legal and compliance teams",
    ],
    deliverable:
      "A prioritized implementation roadmap\u2014not a strategy deck, but a build plan.",
  },
  {
    number: "02",
    title: "Custom AI Agent Development",
    description:
      "Purpose-built AI agents for your specific operations. Each agent integrates with your existing property management platform and is trained on your workflows, policies, and data.",
    activities: [
      "Maintenance triage and work order dispatch agents",
      "Lease abstraction and document processing",
      "Tenant communication automation",
      "Financial reporting and variance analysis",
      "Vendor management and procurement workflows",
    ],
    deliverable:
      "Every agent is co-designed with your operations team\u2014so it fits real workflows, not theoretical ones.",
  },
  {
    number: "03",
    title: "Governance & Compliance Architecture",
    description:
      "Every AI deployment includes a governance framework addressing fair housing compliance, tenant data privacy, audit trails, and algorithmic bias monitoring.",
    activities: [
      "Fair housing guardrails for tenant screening",
      "GDPR and CCPA data privacy controls",
      "Role-based access and data isolation across properties",
      "Comprehensive audit trails for all AI decisions",
      "Algorithmic bias monitoring and reporting",
    ],
    deliverable:
      "Informed by two decades of enterprise technology leadership across the Department of Defense and Intelligence Community.",
  },
  {
    number: "04",
    title: "Managed AI Operations",
    description:
      "We don\u2019t disappear after deployment. We monitor performance, retrain models, expand capabilities, and ensure your AI infrastructure evolves with your business.",
    activities: [
      "Continuous performance monitoring and alerting",
      "Model retraining on updated operational data",
      "Workflow expansion to additional properties and processes",
      "System integration updates as your tech stack evolves",
      "Monthly reporting on AI performance and ROI",
    ],
    deliverable:
      "Your dedicated AI operations team\u2014without the cost of building one internally.",
  },
]

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={0.1}>
      <div className="py-16 md:py-20 border-b border-border last:border-b-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-4">
              ({service.number})
            </span>
            <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground mb-4">
              {service.title}
            </TextAnimate>
            <p className="text-sm leading-[1.75] text-muted-foreground">
              {service.description}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                Key Activities
              </p>
              <ul className="flex flex-col gap-3">
                {service.activities.map((activity) => (
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
                {service.deliverable}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

export function ServicesContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Services"
        title="From diagnosis through ongoing operations, we handle every stage of AI adoption."
        description="Each service is designed for property management firms that are serious about making AI work\u2014not just piloting it."
      />

      <section className="px-6 md:px-12 lg:px-20">
        {services.map((service, index) => (
          <ServiceBlock key={service.number} service={service} index={index} />
        ))}
      </section>

      <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <h2 className="text-3xl md:text-4xl font-extralight leading-[1.15] tracking-tight mb-6">
              Ready to see what AI can do for your portfolio?
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              Every engagement starts with a conversation. We will discuss your operations,
              identify the highest-impact opportunities, and determine if there is a fit.
            </p>
            <Link href="/contact">
              <ShimmerButton
                borderRadius="0px"
                shimmerColor="#ffffff"
                shimmerDuration="4s"
                shimmerSize="0.03em"
                background="hsl(26, 29%, 61%)"
                className="px-10 py-4 text-sm tracking-[0.1em] uppercase font-medium mx-auto"
              >
                Schedule a Conversation
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
