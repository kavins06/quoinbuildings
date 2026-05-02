"use client"

import { BlurFade } from "@/components/ui/blur-fade"

const pains = [
  {
    lead: "Your board or ownership is asking what AI will change.",
    follow: "The honest answer right now is “not much, yet.”",
  },
  {
    lead: "Copilot and AI pilots have not changed how operations run.",
    follow: "Adoption is mixed. Work still flows the way it did.",
  },
  {
    lead: "No one inside the firm owns AI as a workflow problem.",
    follow:
      "IT, operations, and asset management each have a piece. None of them have all of it.",
  },
  {
    lead: "Operational context is fragmented.",
    follow:
      "PMS, accounting, maintenance portals, inboxes, shared drives. No tool sees the whole picture.",
  },
  {
    lead: "Governance, security, and legal concerns block scale.",
    follow:
      "The pilots that work at one property cannot ship across the portfolio.",
  },
]

export function WhySection() {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-20 md:py-14">
      <div className="max-w-5xl">
        <BlurFade inView direction="up">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
            Why Quoin Exists
          </p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-6">
            The AI conversation inside your firm has hit a wall.
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.1} direction="up">
          <p className="text-sm leading-[1.85] text-muted-foreground mb-8 max-w-3xl">
            If you run operations, IT, or asset management at an institutional real estate firm, the wall usually shows up in some version of these:
          </p>

          <ul className="flex flex-col gap-5 mb-10 max-w-3xl">
            {pains.map((pain) => (
              <li key={pain.lead} className="flex items-start gap-3">
                <div className="w-1.5 h-px bg-accent/60 mt-2.5 shrink-0" />
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  <span className="font-medium text-foreground">{pain.lead}</span>{" "}
                  {pain.follow}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-sm leading-[1.85] text-muted-foreground max-w-3xl">
            Quoin is built so an institutional operator gets one team for all five: the workflow, the build, the governance, and the operating layer that keeps it running.
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
