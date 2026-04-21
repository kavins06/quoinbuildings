"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const services = [
  {
    number: "01",
    title: "AI Readiness & Strategy",
    image: "/service-strategy.jpg",
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
      "A prioritized implementation roadmap, not a strategy deck, but a build plan.",
  },
  {
    number: "02",
    title: "Custom AI Agent Development",
    image: "/service-ai-dev.jpg",
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
      "Every agent is co-designed with your operations team, so it fits real workflows, not theoretical ones.",
  },
  {
    number: "03",
    title: "Governance & Compliance Architecture",
    image: "/service-governance.jpg",
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
    image: "/service-operations.jpg",
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
      "Your dedicated AI operations team, without the cost of building one internally.",
  },
]

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const imgRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <BlurFade inView direction="up" delay={0.1}>
      <div className="py-16 md:py-20 border-b border-border last:border-b-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-4">
              ({service.number})
            </span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-4">
              {service.title}
            </h2>
            <p className="text-sm leading-[1.75] text-muted-foreground">
              {service.description}
            </p>
            {service.image && (
              <div ref={imgRef} className="mt-8 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    filter: inView ? "grayscale(0%)" : "grayscale(100%)",
                    transform: inView ? "scale(1.03)" : "scale(1)",
                    opacity: inView ? 1 : 0.7,
                    transition: "filter 2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s ease-out",
                  }}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
            )}
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
        description="Each service is designed for property management firms that are serious about making AI work, not just piloting it."
        backgroundImage="/header-team.jpg"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
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
            <h2 className="text-3xl md:text-4xl font-normal leading-[1.15] tracking-tight mb-6">
              See what AI can do for your portfolio
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              Every engagement starts with a conversation. We will discuss your operations,
              identify the highest-impact opportunities, and determine if there is a fit.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 border border-strong text-ink-primary hover:bg-surface-inverse hover:text-surface-base transition-colors duration-150"
            >
              Talk to us
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
