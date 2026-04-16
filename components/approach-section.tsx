"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

const phases = [
  {
    number: "01",
    title: "Executive Diagnostic",
    timeline: "Weeks 1\u20132",
    description:
      "Workflow mapping, data assessment, governance scoping, prioritized roadmap. Standalone engagement. No long-term commitment required.",
    gate: "You decide whether to proceed based on the roadmap.",
  },
  {
    number: "02",
    title: "First Workflow Deployment",
    timeline: "Weeks 2\u20134",
    description:
      "Build and deploy your highest-ROI use case. Agent trained on your data, tested against your edge cases, validated by your operations team. Governance framework implemented before go-live.",
    gate: "The agent ships only when your team confirms it fits.",
  },
  {
    number: "03",
    title: "Rollout & Adoption",
    timeline: "Weeks 4\u20138",
    description:
      "Staged rollout across properties. Hands-on training for staff. Performance dashboards established. Expansion only after metrics confirm it works.",
    gate: "Expansion happens only after performance thresholds are met.",
  },
  {
    number: "04",
    title: "Managed Operations & Expansion",
    timeline: "Ongoing",
    description:
      "Performance monitoring, model retraining, expansion to additional workflows, monthly reporting tied to operational KPIs. Quarterly business reviews.",
    gate: "Continuous. You own every deliverable we produce.",
  },
]

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  return (
    <BlurFade inView delay={(index % 2) * 0.12} direction="up" offset={10}>
      <div className="bg-background p-8 md:p-12 group h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40">
            ({phase.number})
          </span>
          <span className="text-[11px] tracking-[0.15em] uppercase text-accent">
            {phase.timeline}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mb-5 group-hover:translate-x-1 transition-transform duration-500">
          {phase.title}
        </h3>
        <div className="w-8 h-px bg-border mb-5 group-hover:w-12 transition-all duration-500" />
        <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm mb-6 flex-1">
          {phase.description}
        </p>
        <div className="border-t border-border/50 pt-4">
          <p className="text-[11px] tracking-[0.1em] uppercase text-accent/60 mb-1">
            Decision Gate
          </p>
          <p className="text-xs leading-[1.65] text-muted-foreground/70">
            {phase.gate}
          </p>
        </div>
      </div>
    </BlurFade>
  )
}

export function ApproachSection() {
  return (
    <section id="approach" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <BlurFade inView direction="up">
        <div className="mb-20 pb-6 border-b border-border">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Our Process
          </p>
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            once
            startOnView
            className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground"
          >
            From Diagnostic to Production: Decision Points at Every Stage
          </TextAnimate>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {phases.map((phase, index) => (
          <PhaseCard key={phase.number} phase={phase} index={index} />
        ))}
      </div>

      <BlurFade inView delay={0.3} direction="up">
        <div className="mt-12">
          <Link
            href="/approach"
            className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="border-b border-accent/30 pb-0.5 group-hover:border-accent transition-colors duration-300">
              See Full Engagement Details
            </span>
            <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </BlurFade>
    </section>
  )
}
