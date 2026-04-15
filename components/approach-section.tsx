"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

const principles = [
  {
    number: "01",
    title: "Discover",
    description:
      "Weeks 1\u20134. We embed with your operations team to map workflows, assess data quality across Yardi and RealPage, and scope governance with your legal team. Deliverable: a prioritized implementation roadmap.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Weeks 5\u201312. We architect and build your first AI agent, integrating with your property management platform and training on your operational data. Your team is involved at every step.",
  },
  {
    number: "03",
    title: "Deploy & Train",
    description:
      "Weeks 13\u201316. Staged rollout across properties. Hands-on training for staff. Performance dashboards established. We don\u2019t move on until your team is confident.",
  },
  {
    number: "04",
    title: "Operate & Expand",
    description:
      "Ongoing. Continuous monitoring, model retraining, expansion to additional workflows, and monthly reporting. Your dedicated AI operations team.",
  },
]

function PrincipleCard({ principle, index }: { principle: typeof principles[0]; index: number }) {
  return (
    <BlurFade inView delay={(index % 2) * 0.12} direction="up" offset={10}>
      <div className="bg-background p-8 md:p-12 group">
        <div className="flex items-start justify-between mb-10">
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40">
            ({principle.number})
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mb-5 group-hover:translate-x-1 transition-transform duration-500">
          {principle.title}
        </h3>
        <div className="w-8 h-px bg-border mb-5 group-hover:w-12 transition-all duration-500" />
        <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">
          {principle.description}
        </p>
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
            Our Methodology
          </p>
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            once
            startOnView
            className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground"
          >
            How We Work
          </TextAnimate>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {principles.map((principle, index) => (
          <PrincipleCard key={principle.number} principle={principle} index={index} />
        ))}
      </div>

      <BlurFade inView delay={0.3} direction="up">
        <div className="mt-12">
          <Link
            href="/approach"
            className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="border-b border-accent/30 pb-0.5 group-hover:border-accent transition-colors duration-300">
              Our Full Approach
            </span>
            <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </BlurFade>
    </section>
  )
}
