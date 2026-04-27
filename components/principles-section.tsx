"use client"

import { useState } from "react"
import { BlurFade } from "@/components/ui/blur-fade"

const categories = [
  "What they do",
  "What they deliver",
  "Who owns outcomes",
  "Governance",
  "After 6 months",
]

const others = [
  {
    name: "Point Solution Vendors",
    short: "Vendors",
    values: [
      "Sell one tool for one workflow",
      "A product you configure",
      "You do, after onboarding",
      "Their compliance, not yours",
      "You have a tool. Maybe it is being used.",
    ],
  },
  {
    name: "Strategy Consultants",
    short: "Consultants",
    values: [
      "Define AI strategy, deliver a roadmap",
      "A deck you implement (or don’t)",
      "You do, after the engagement ends",
      "Mentioned in the deck, not implemented",
      "You have a roadmap. Maybe someone started.",
    ],
  },
  {
    name: "Your Internal IT Team",
    short: "Internal IT",
    values: [
      "Support existing systems and infrastructure",
      "Support tickets and integrations",
      "They do, but AI is not their core skill",
      "Ad hoc, if at all",
      "You have a pilot. Maybe it is still running.",
    ],
  },
]

const quoin = {
  name: "Quoin",
  values: [
    "Prepare operations, build AI workflows, set governance, deploy, and run ongoing",
    "Production AI systems in your operations",
    "We do, continuously",
    "Built into every deployment from day one",
    "You have an AI operating layer with workflow, monitored, retrained, and expanding.",
  ],
}

type Column = { name: string; short?: string; values: string[]; highlight?: boolean }
const columns: Column[] = [...others, { ...quoin, highlight: true }]

export function PrinciplesSection() {
  const [activeOther, setActiveOther] = useState(0)
  const other = others[activeOther]

  return (
    <section className="px-6 py-12 md:px-12 lg:px-20 md:py-16 bg-secondary">
      <BlurFade inView direction="up">
        <div className="mb-8 md:mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
            Quoin vs. the alternatives
          </p>
          <h2 className="text-2xl md:text-[2.25rem] font-normal tracking-tight text-foreground">
            Compare what each option actually delivers.
          </h2>
        </div>
      </BlurFade>

      {/* Desktop: Full table with Quoin column visually separated */}
      <BlurFade inView delay={0.15} direction="up">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-3 py-2.5 text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 w-[140px]" />
                {columns.map((col) => (
                  <th
                    key={col.name}
                    className={`text-left px-3 py-2.5 text-[13px] font-medium tracking-tight ${
                      col.highlight
                        ? "text-accent border-b-2 border-accent bg-accent/5"
                        : "text-muted-foreground border-b border-border"
                    }`}
                  >
                    {col.highlight && (
                      <span className="block text-[10px] tracking-[0.2em] uppercase text-accent/70 mb-1">
                        Quoin
                      </span>
                    )}
                    {col.highlight ? "What we do" : col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, catIndex) => (
                <tr key={cat} className="border-b border-border/50">
                  <td className="px-3 py-3 text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 align-top">
                    {cat}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.name}
                      className={`px-3 py-3 text-[13px] leading-[1.55] align-top ${
                        col.highlight
                          ? "text-foreground font-normal bg-accent/5 border-l border-accent/20"
                          : "text-muted-foreground"
                      }`}
                    >
                      {col.values[catIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </BlurFade>

      {/* Mobile: side-by-side compare (Other vs Quoin) */}
      <div className="lg:hidden">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-3">
          Compare Quoin against
        </p>
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {others.map((col, index) => (
            <button
              key={col.name}
              onClick={() => setActiveOther(index)}
              className={`shrink-0 text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                activeOther === index
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground"
              }`}
            >
              {col.short}
            </button>
          ))}
        </div>

        <div className="border border-border bg-background/30 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-2 border-b border-border">
            <div className="p-3">
              <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-0.5">
                Them
              </p>
              <p className="text-[13px] font-light tracking-tight text-muted-foreground leading-tight">
                {other.name}
              </p>
            </div>
            <div className="p-3 bg-accent/5 border-l-2 border-accent/40">
              <p className="text-[9px] tracking-[0.2em] uppercase text-accent/80 mb-0.5">
                Us
              </p>
              <p className="text-[13px] font-medium tracking-tight text-accent leading-tight">
                {quoin.name}
              </p>
            </div>
          </div>

          {/* Comparison rows: category label spans, then 2 cells aligned */}
          {categories.map((cat, catIndex) => (
            <div key={cat} className="border-b border-border/50 last:border-b-0">
              <p className="px-3 pt-3 pb-1 text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50">
                {cat}
              </p>
              <div className="grid grid-cols-2">
                <p className="px-3 pb-3 text-[12px] leading-[1.5] text-muted-foreground">
                  {other.values[catIndex]}
                </p>
                <p className="px-3 pb-3 text-[12px] leading-[1.5] text-foreground bg-accent/5 border-l-2 border-accent/40">
                  {quoin.values[catIndex]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BlurFade inView delay={0.3} direction="up">
        <div className="mt-8 md:mt-10 max-w-2xl">
          <p className="text-[13px] leading-[1.7] text-muted-foreground">
            Quoin is a different model: one that builds, deploys, and runs the AI, then stays to improve it.
          </p>
        </div>
      </BlurFade>
    </section>
  )
}
