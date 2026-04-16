"use client"

import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const triggers = [
  {
    number: "01",
    title: "\u201CThe pilot did not scale.\u201D",
    description:
      "You ran a leasing chatbot or maintenance tool pilot at one property. It worked well enough in isolation. Scaling it across the portfolio revealed data inconsistencies, integration gaps, and governance questions nobody had scoped. The pilot sits in limbo.",
  },
  {
    number: "02",
    title: "\u201CThe board is asking about AI.\u201D",
    description:
      "Ownership or the board wants an AI strategy. You need something more than a slide deck and more credible than \u201Cwe are looking into it.\u201D You need a concrete plan with timelines, costs, and risk mitigation \, and ideally someone who can execute it.",
  },
  {
    number: "03",
    title: "\u201CWe have too many point solutions.\u201D",
    description:
      "You have three or four AI-adjacent tools from different vendors. None share data. Your staff manages multiple systems. The total cost is significant and the total impact is unclear. You want to consolidate and get real operational value.",
  },
  {
    number: "04",
    title: "\u201CWe cannot hire for this.\u201D",
    description:
      "You have looked at building an internal AI team. The talent market is expensive, competitive, and slow. You need AI capability without the 12\u201318 month ramp of recruiting, onboarding, and retaining a specialized team.",
  },
]

const notForList = [
  {
    text: "Firms looking for a single chatbot or leasing automation tool.",
    note: "Several vendors do this well. We can recommend them.",
  },
  {
    text: "Firms that want a strategy engagement without implementation.",
    note: "We build and operate. If you want a roadmap without execution, a traditional consulting firm is a better fit.",
  },
  {
    text: "Firms managing fewer than 1,000 units.",
    note: "The operational complexity and data volume that justify this engagement typically start around 2,000 units.",
  },
  {
    text: "Firms that need a solution deployed in under 30 days.",
    note: "Operational AI that works requires deliberate preparation. We will not rush governance or data readiness to meet an arbitrary deadline.",
  },
]

export function WhoWeHelpContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Who We Help"
        title="AI Adoption and Operations for Mid-Market Property Management Firms"
        description="We work with firms large enough to have multi-property operational complexity and too lean to build a dedicated internal AI team."
        backgroundImage="/header-who-we-help.jpg"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      {/* Ideal Client Profile */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <BlurFade inView direction="up">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                Ideal Client Profile
              </p>
              <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground mb-6">
                The firms we work with typically:
              </TextAnimate>
              <ul className="flex flex-col gap-4">
                {[
                  "Manage 2,000 to 50,000 residential, mixed-use, or commercial units",
                  "Operate across multiple properties with regional management layers",
                  "Have an executive sponsor \, COO, CEO, VP of Operations, or ownership \, who owns the AI question",
                  "Are under pressure from ownership, boards, or competitive dynamics to adopt AI but are unsure how to move beyond pilots",
                  "Have tried at least one of: a point solution vendor, a consulting engagement, or an internal AI initiative \, and are dissatisfied with the results",
                  "Need firm-wide capability, not another single-use tool",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-px bg-accent/60 mt-2.5 shrink-0" />
                    <span className="text-sm leading-[1.75] text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.15} direction="up">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                Systems Environment
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "Primary platform", value: "Yardi Voyager, RealPage, AppFolio, or Entrata" },
                  { label: "Supporting systems", value: "Accounting, CRM, maintenance portals, tenant communication platforms" },
                  { label: "Data state", value: "Typically fragmented across systems, inconsistent across properties, and underprepared for AI workloads" },
                  { label: "IT team", value: "Exists but focused on infrastructure and support, not AI development" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-border pb-4 last:border-b-0">
                    <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-light leading-[1.75] text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Trigger Moments */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 bg-secondary">
        <BlurFade inView direction="up">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              Trigger Moments
            </p>
            <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
              When Firms Come to Us
            </TextAnimate>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {triggers.map((trigger, index) => (
            <BlurFade key={trigger.number} inView delay={(index % 2) * 0.12} direction="up">
              <div className="bg-secondary p-8 md:p-10 h-full">
                <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-6">
                  ({trigger.number})
                </span>
                <h3 className="text-lg md:text-xl font-extralight tracking-tight text-foreground mb-4">
                  {trigger.title}
                </h3>
                <div className="w-8 h-px bg-accent/40 mb-4" />
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  {trigger.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Who This Is Not For */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <BlurFade inView direction="up">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              Honest About Fit
            </p>
            <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground mb-10">
              Who This Is Not For
            </TextAnimate>

            <div className="flex flex-col gap-8">
              {notForList.map((item) => (
                <div key={item.text} className="border-l-2 border-border pl-6">
                  <p className="text-sm leading-[1.75] text-foreground font-light mb-1">
                    {item.text}
                  </p>
                  <p className="text-sm leading-[1.75] text-muted-foreground/70">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-sm leading-[1.85] text-muted-foreground">
              If this sounds like your firm, the first step is a conversation.
              If it does not, we respect that, and we are happy to point you
              toward alternatives that fit better.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <h2 className="text-3xl md:text-4xl font-extralight leading-[1.15] tracking-tight mb-6">
              Ready to explore if there is a fit?
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              Start with a conversation. We will discuss your operations,
              identify the highest-impact opportunities, and determine if there is a clear path forward.
            </p>
            <Link href="/contact">
              <ShimmerButton
                borderRadius="0px"
                shimmerColor="#ffffff"
                shimmerDuration="4s"
                shimmerSize="0.03em"
                background="hsl(26, 29%, 61%)"
                className="px-10 py-4 text-sm tracking-[0.1em] uppercase font-medium mx-auto"
              >
                Explore Partnership
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
