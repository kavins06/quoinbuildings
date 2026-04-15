"use client"

import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const phases = [
  {
    number: "01",
    name: "Discover",
    timeline: "Weeks 1\u20134",
    description:
      "We embed with your operations team to understand how your firm actually runs. We map workflows, assess data quality, and identify where AI delivers the highest ROI.",
    activities: [
      "On-site workshops with property managers and maintenance coordinators",
      "System-by-system data quality assessment across Yardi, RealPage, AppFolio",
      "Governance scoping with legal and compliance teams",
      "Use case prioritization by impact and feasibility",
    ],
    deliverable: "A prioritized implementation roadmap.",
  },
  {
    number: "02",
    name: "Design & Build",
    timeline: "Weeks 5\u201312",
    description:
      "We architect and build your first AI agent, integrating with your property management platform and training on your operational data. Your operations team is involved at every step\u2014co-design drives adoption.",
    activities: [
      "Agent architecture and system integration design",
      "Training on your operational data, policies, and workflows",
      "Iterative testing with your operations team",
      "Security and compliance review before deployment",
    ],
    deliverable: "A production-ready agent, tested and validated by your team.",
  },
  {
    number: "03",
    name: "Deploy & Train",
    timeline: "Weeks 13\u201316",
    description:
      "Staged rollout across properties. Hands-on training for staff. Performance dashboards established. We don\u2019t move on until your team is confident and the metrics confirm it\u2019s working.",
    activities: [
      "Staged deployment starting with pilot properties",
      "Hands-on training sessions for property managers and staff",
      "Performance dashboard setup and monitoring",
      "Feedback loops to refine agent behavior",
    ],
    deliverable: "Live agent in production with trained staff and documented metrics.",
  },
  {
    number: "04",
    name: "Operate & Expand",
    timeline: "Ongoing",
    description:
      "Continuous monitoring, model retraining, expansion to additional workflows, and monthly reporting. This is where the relationship becomes a long-term partnership.",
    activities: [
      "Continuous performance monitoring and optimization",
      "Model retraining on updated operational data",
      "Expansion to additional workflows and properties",
      "Monthly reporting on performance and ROI",
    ],
    deliverable: "An AI infrastructure that scales with your business.",
  },
]

function PhaseBlock({ phase, index }: { phase: typeof phases[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={0.1}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-16 md:py-24 border-b border-border last:border-b-0">
        <div className="lg:col-span-4">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 mt-1">
              ({phase.number})
            </span>
            <div>
              <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground">
                {phase.name}
              </TextAnimate>
              <p className="text-[11px] tracking-[0.15em] uppercase text-accent mt-2">
                {phase.timeline}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-8">
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
        </div>
      </div>
    </BlurFade>
  )
}

export function ApproachContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Methodology"
        title="From discovery to measurable impact."
        description="A structured methodology designed to deliver initial measurable results within 90 days. Every phase builds on the last."
      />

      <section className="px-6 md:px-12 lg:px-20">
        {phases.map((phase, index) => (
          <PhaseBlock key={phase.number} phase={phase} index={index} />
        ))}
      </section>

      <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <h2 className="text-3xl md:text-4xl font-extralight leading-[1.15] tracking-tight mb-6">
              Ready to start with discovery?
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              The first step is a conversation. We will learn about your operations
              and help you understand what an engagement could look like.
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
