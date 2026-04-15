"use client"

import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

const services = [
  {
    number: "01",
    title: "AI Strategy & Diagnostic",
    description:
      "We map your workflows across maintenance, leasing, and tenant communications to identify the highest-ROI automation opportunities.",
  },
  {
    number: "02",
    title: "Custom AI Agent Development",
    description:
      "Purpose-built AI agents that integrate with your Yardi, RealPage, or AppFolio platform and are trained on your operational data.",
  },
  {
    number: "03",
    title: "Governance & Compliance Architecture",
    description:
      "Fair housing guardrails, tenant data privacy controls, and audit trails built into every deployment from day one.",
  },
  {
    number: "04",
    title: "Managed AI Operations",
    description:
      "Ongoing performance monitoring, model retraining, and workflow expansion so your AI infrastructure evolves with your business.",
  },
]

export function StudioSection() {
  return (
    <section id="services" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <BlurFade inView direction="up">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">
              What We Do
            </p>
            <TextAnimate
              as="h2"
              animation="blurIn"
              by="word"
              once
              startOnView
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-balance text-background"
            >
              From diagnosis through ongoing operations, we handle every stage of AI adoption
            </TextAnimate>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} direction="up">
          <div className="flex flex-col justify-end gap-10">
            <div className="flex flex-col gap-0">
              {services.map((service, i) => (
                <BlurFade key={service.number} inView delay={0.3 + i * 0.1} direction="up">
                  <div className="py-6 border-b border-background/10 last:border-b-0 first:pt-0">
                    <div className="flex items-start gap-4">
                      <span className="text-[11px] tracking-[0.15em] text-background/25 mt-1 shrink-0">
                        ({service.number})
                      </span>
                      <div>
                        <h3 className="text-base md:text-lg font-light tracking-tight text-background mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-[1.65] text-background/45">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-background/50 hover:text-background transition-colors duration-300 group"
            >
              <span className="border-b border-background/20 pb-0.5 group-hover:border-background/50 transition-colors duration-300">
                Explore Our Services
              </span>
              <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
