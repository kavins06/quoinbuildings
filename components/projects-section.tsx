"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { NumberTicker } from "@/components/ui/number-ticker"

const projects = [
  {
    title: "Fragmented Solutions",
    category: "Problem",
    year: "01",
    location: "Point tools that don't integrate with your property management platform",
    answer: "We build agents that plug directly into Yardi, RealPage, and AppFolio\u2014your existing stack, not a parallel one.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  },
  {
    title: "No Governance Framework",
    category: "Problem",
    year: "02",
    location: "Legal and compliance block rollout before it reaches operations",
    answer: "Every engagement includes fair housing guardrails, data privacy controls, and audit trails from day one.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  },
  {
    title: "No Ownership After Pilot",
    category: "Problem",
    year: "03",
    location: "The consulting engagement ends, the vendor moves on, the system rots",
    answer: "We stay as your managed AI operations partner\u2014monitoring, retraining, and expanding long after deployment.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <BlurFade inView delay={(index % 3) * 0.15} direction="up" offset={12}>
      <div
        className="bg-background group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} - ${project.category}`}
            className={`w-full aspect-[4/3] object-cover transition-all duration-[800ms] ease-out ${
              hovered ? "scale-[1.04]" : "scale-100"
            }`}
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-1.5 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground mb-1.5">
                  {project.title}
                </h3>
                <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                  {project.location}
                </p>
              </div>
            </div>
            <ArrowUpRight
              className={`h-4 w-4 text-muted-foreground/40 transition-all duration-300 mt-1.5 ${
                hovered ? "translate-x-0.5 -translate-y-0.5 text-foreground" : ""
              }`}
            />
          </div>
          <div className="pl-8 border-l border-accent/30 ml-1">
            <p className="text-[11px] tracking-[0.15em] uppercase text-accent/70 mb-1.5">
              How Quoin solves this
            </p>
            <p className="text-sm leading-[1.65] text-muted-foreground">
              {project.answer}
            </p>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

function StatsClosing() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
      <div className="md:col-span-7 grid grid-cols-2 gap-12">
        <BlurFade inView delay={0} direction="up">
          <div>
            <p className="text-4xl md:text-5xl font-extralight tracking-tight text-foreground mb-2">
              <NumberTicker value={5} delay={0.3} className="inline-block tabular-nums text-foreground tracking-tight" /><span className="text-accent">%</span>
            </p>
            <p className="text-sm leading-[1.75] text-muted-foreground">
              of CRE firms have achieved their AI program goals.
            </p>
            <p className="text-[11px] tracking-[0.1em] text-muted-foreground/40 mt-1">
              Commercial Observer, 2025
            </p>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.15} direction="up">
          <div>
            <p className="text-4xl md:text-5xl font-extralight tracking-tight text-foreground mb-2">
              <NumberTicker value={60} delay={0.3} className="inline-block tabular-nums text-foreground tracking-tight" /><span className="text-accent">%+</span>
            </p>
            <p className="text-sm leading-[1.75] text-muted-foreground">
              remain unprepared to scale AI beyond pilot stage.
            </p>
            <p className="text-[11px] tracking-[0.1em] text-muted-foreground/40 mt-1">
              World Economic Forum, 2026
            </p>
          </div>
        </BlurFade>
      </div>
      <BlurFade inView delay={0.3} direction="up" className="md:col-span-4 md:col-start-9">
        <div className="w-10 h-px bg-accent/40 mb-5" />
        <p className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mb-3">
          We exist to close that gap.
        </p>
        <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">
          By embedding with your team, integrating with your systems, building governance in from day one, and staying to operate the infrastructure long-term.
        </p>
      </BlurFade>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="problem" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <BlurFade inView direction="up">
        <div className="mb-20 pb-6 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Understanding the Challenge
              </p>
              <TextAnimate
                as="h2"
                animation="blurIn"
                by="word"
                once
                startOnView
                className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground"
              >
                The Problem
              </TextAnimate>
            </div>
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-4 md:mt-0">
              (03) Failure Patterns
            </span>
          </div>
          <p className="text-sm leading-[1.75] text-muted-foreground max-w-2xl">
            Property management firms are investing in AI, but investment is not adoption.
            Across the industry, pilots launch with ambition and stall before they reach
            operations. The pattern is consistent, and the root causes are structural.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <StatsClosing />
    </section>
  )
}
