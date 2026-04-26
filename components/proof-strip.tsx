"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

interface ProofItem {
  label: string
  value: string
  link: string
  linkLabel: string
}

const proofItems: ProofItem[] = [
  {
    label: "Built for Portfolio",
    value: "Over 1,000 Units or 1 Million Sq. ft.",
    link: "/who-we-help",
    linkLabel: "Who We Help",
  },
  {
    label: "Governance",
    value: "Governance Built Before Deployment",
    link: "/governance",
    linkLabel: "See framework",
  },
  {
    label: "First Step",
    value: "2-Week Diagnostic · No Lock-in",
    link: "/approach",
    linkLabel: "See Approach",
  },
  {
    label: "Integrations",
    value: "Built for your specific workflow",
    link: "/services",
    linkLabel: "See services",
  },
]

export function ProofStrip() {
  return (
    <section className="bg-secondary px-6 py-10 md:px-12 lg:px-20 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {proofItems.map((item, index) => (
          <div key={item.label}>
            <BlurFade inView direction="up" delay={index * 0.1}>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
                {item.label}
              </p>
            </BlurFade>
            <TextAnimate
              delay={index * 0.1}
              className="text-sm font-light text-foreground leading-[1.5] mb-3"
            >
              {item.value}
            </TextAnimate>
            <BlurFade inView direction="up" delay={index * 0.1 + 0.05}>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] text-muted-foreground/60 hover:text-foreground transition-colors duration-300 group"
              >
                <span>{item.linkLabel}</span>
                <span className="text-accent group-hover:translate-x-0.5 transition-transform duration-300">&rarr;</span>
              </Link>
            </BlurFade>
          </div>
        ))}
      </div>
    </section>
  )
}
