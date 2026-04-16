"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const proofItems = [
  {
    label: "Portfolio Scale",
    value: "Built for 2,000\u201350,000 Unit Portfolios",
    link: "/who-we-help",
    linkLabel: "Who We Help",
  },
  {
    label: "Governance",
    value: "Governance Built Before Deployment",
    link: "/approach",
    linkLabel: "Our Approach",
  },
  {
    label: "First Step",
    value: "2-Week Diagnostic \u00B7 No Lock-in",
    link: "/approach",
    linkLabel: "How It Works",
  },
  {
    label: "Headquarters",
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
