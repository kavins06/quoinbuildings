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

const columns = [
  {
    name: "Point Solution Vendors",
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
    values: [
      "Define AI strategy, deliver a roadmap",
      "A deck you implement (or don\u2019t)",
      "You do, after the engagement ends",
      "Mentioned in the deck, not implemented",
      "You have a roadmap. Maybe someone started.",
    ],
  },
  {
    name: "Your Internal IT Team",
    values: [
      "Support existing systems and infrastructure",
      "Support tickets and integrations",
      "They do, but AI is not their core skill",
      "Ad hoc, if at all",
      "You have a pilot. Maybe it is still running.",
    ],
  },
  {
    name: "Quoin",
    highlight: true,
    values: [
      "Prepare operations, build AI workflows, set governance, deploy, and run ongoing",
      "Production AI systems in your operations",
      "We do, continuously",
      "Built into every deployment from day one",
      "You have a live AI workflow \, monitored, retrained, and expanding.",
    ],
  },
]

export function PrinciplesSection() {
  const [activeTab, setActiveTab] = useState(3) // Default to Quoin on mobile

  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 bg-secondary">
      <BlurFade inView direction="up">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
            Your Options
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
            You Have Four Options. Here Is What Each One Actually Does.
          </h2>
        </div>
      </BlurFade>

      {/* Desktop: Full Table */}
      <BlurFade inView delay={0.15} direction="up">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 w-[160px]" />
                {columns.map((col) => (
                  <th
                    key={col.name}
                    className={`text-left p-4 text-sm font-medium tracking-tight ${
                      col.highlight
                        ? "text-accent border-b-2 border-accent"
                        : "text-foreground border-b border-border"
                    }`}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, catIndex) => (
                <tr key={cat} className="border-b border-border/50">
                  <td className="p-4 text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 align-top">
                    {cat}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.name}
                      className={`p-4 text-sm leading-[1.75] align-top ${
                        col.highlight
                          ? "text-foreground font-light bg-accent/5"
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

      {/* Mobile: Card-based with tabs */}
      <div className="lg:hidden">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {columns.map((col, index) => (
            <button
              key={col.name}
              onClick={() => setActiveTab(index)}
              className={`shrink-0 text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                activeTab === index
                  ? col.highlight
                    ? "border-accent bg-accent text-white"
                    : "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground"
              }`}
            >
              {col.name}
            </button>
          ))}
        </div>

        <div className={`border p-6 ${columns[activeTab].highlight ? "border-accent/30 bg-accent/5" : "border-border"}`}>
          <h3 className={`text-lg font-light tracking-tight mb-6 ${columns[activeTab].highlight ? "text-accent" : "text-foreground"}`}>
            {columns[activeTab].name}
          </h3>
          <div className="flex flex-col gap-5">
            {categories.map((cat, catIndex) => (
              <div key={cat}>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">
                  {cat}
                </p>
                <p className={`text-sm leading-[1.75] ${columns[activeTab].highlight ? "text-foreground" : "text-muted-foreground"}`}>
                  {columns[activeTab].values[catIndex]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BlurFade inView delay={0.3} direction="up">
        <div className="mt-12 max-w-2xl">
          <p className="text-sm leading-[1.85] text-muted-foreground">
            We are not a better vendor. We are not a better consultant.
            We are a different model. One that stays through implementation and stays after it.
          </p>
        </div>
      </BlurFade>
    </section>
  )
}
