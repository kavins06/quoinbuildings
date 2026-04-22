"use client"

import { useState } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

const projects = [
  {
    title: "Fragmented Point Solutions",
    category: "Pattern",
    year: "01",
    location: "Three vendors. Three dashboards. Zero integration.",
    answer: "One agent layer across your PMS, your email, and the tools your team already uses.",
    answerDetail: "Our agents live inside your team’s actual workflow — email, invoices, shared drives — and connect directly to Yardi, RealPage, AppFolio, and Entrata. When an invoice lands in an inbox, the agent reads it, updates the record in your PMS, and flags exceptions to the right person. No new dashboard. No new login. No parallel system to maintain.",
    detail: "You bought a leasing chatbot, a maintenance triage tool, and an analytics dashboard from three different vendors. None of them talk to each other. Your data stays siloed, your staff manages three vendor relationships, and you’re no closer to firm-wide AI capability than when you started. The tools work individually. The operation doesn’t compound.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  },
  {
    title: "Strategy Without Implementation",
    category: "Pattern",
    year: "02",
    location: "The roadmap was delivered. Nothing happened after.",
    answer: "Every engagement ends with a workflow running in production. The diagnostic, the roadmap, and the build are the same team.",
    answerDetail: "Our engagements are scoped to end with something running, not something recommended. A diagnostic identifies the highest-leverage workflow. The same team then builds it, integrates it with your stack, and hands over a system your operators are already using. The roadmap exists, but it’s a byproduct of the build — not the deliverable.",
    detail: "A consulting firm delivered a roadmap. It was well-researched, well-formatted, and well-received in the board meeting. Then nothing happened. Nobody on the consultant\u2019s team was responsible for building anything, deploying anything, or making anything work in production. The deck sits in a shared drive. The budget cycle resets.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
  },
  {
    title: "No Governance, No Scale",
    category: "Pattern",
    year: "03",
    location: "Pilots ship. Deployments stall. Nothing compounds.",
    answer: "We build the AI operating model underneath the workflows — standards, ownership, and review patterns that let the next ten deployments ship in weeks, not quarters.",
    answerDetail: "Every engagement ships with the operating model, not just the workflow. We define how AI systems are owned, monitored, reviewed, and retired inside your organization — with the fair housing, data privacy, and audit requirements of your industry built into the pattern, not bolted on afterward. The first workflow proves the system works. The operating model is what lets the next one ship in a fraction of the time, and the tenth one ship without needing the original team in the room. Two decades of enterprise governance experience, applied to a category that most firms are still learning to build for.",
    detail: "Your team demoed three promising AI workflows this year. None of them reached production. Each one hit the same wall: no one could say who owned the model, how it would be monitored, what the review pattern looked like, or how the organization would know it was working. So every initiative gets re-litigated from scratch. The firms pulling ahead in your category aren’t the ones with the best models — they’re the ones that built the operating system for deploying them.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  },
]

function ProjectCard({ project, index, onOpenDetail }: { project: typeof projects[0]; index: number; onOpenDetail: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <BlurFade inView delay={(index % 3) * 0.15} direction="up" offset={12}>
      <div
        className="bg-background group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onOpenDetail}
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

function DetailModal({ project, onClose }: { project: typeof projects[0] | null; onClose: () => void }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative bg-background max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-12 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground/50 hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-4">
          ({project.year})
        </span>
        <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-6">
          {project.title}
        </h3>
        <div className="w-8 h-px bg-accent/40 mb-6" />
        <p className="text-sm leading-[1.85] text-muted-foreground mb-8">
          {project.detail}
        </p>
        <div className="border-l-2 border-accent/30 pl-6">
          <p className="text-[11px] tracking-[0.15em] uppercase text-accent/70 mb-2">
            How Quoin solves this
          </p>
          <p className="text-sm leading-[1.75] text-foreground font-light">
            {project.answerDetail ?? project.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="problem" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <BlurFade inView direction="up">
        <div className="mb-20 pb-6 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Understanding the Challenge
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-normal tracking-tight text-foreground">
                Three Patterns We See in Every Stalled AI Initiative
              </h2>
            </div>
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-4 md:mt-0">
              (03) Failure Patterns
            </span>
          </div>
          <p className="text-sm leading-[1.75] text-muted-foreground max-w-2xl">
            Property management firms are spending on AI. But spending is not adoption.
            The firms that are stuck are usually in one of three patterns.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpenDetail={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <DetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
