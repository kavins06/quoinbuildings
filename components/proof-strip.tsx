"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const proofItems = [
  {
    label: "Team Experience",
    value: "30+ Years CRE Leadership",
    link: "/about",
    linkLabel: "Meet the Team",
  },
  {
    label: "Governance",
    value: "Fair Housing \u00B7 Data Privacy \u00B7 Audit Trails",
    link: "/governance",
    linkLabel: "Our Framework",
  },
  {
    label: "Methodology",
    value: "Structured 4-Phase \u00B7 90-Day Results",
    link: "/approach",
    linkLabel: "How We Work",
  },
  {
    label: "Location",
    value: "Washington, DC",
    link: "/contact",
    linkLabel: "Get in Touch",
  },
]

export function ProofStrip() {
  return (
    <section className="bg-secondary px-6 py-10 md:px-12 lg:px-20 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {proofItems.map((item, index) => (
          <BlurFade key={item.label} inView direction="up" delay={index * 0.1}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
                {item.label}
              </p>
              <p className="text-sm font-light text-foreground leading-[1.5] mb-3">
                {item.value}
              </p>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] text-muted-foreground/60 hover:text-foreground transition-colors duration-300 group"
              >
                <span>{item.linkLabel}</span>
                <span className="text-accent group-hover:translate-x-0.5 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
