"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const principles = [
  {
    number: "01",
    title: "Operational Integrity",
    description:
      "Every recommendation is grounded in how property management actually works, not how technology vendors wish it worked. We embed with your operations team because real workflows matter more than theoretical ones.",
  },
  {
    number: "02",
    title: "Governance by Default",
    description:
      "Fair housing compliance, data privacy, and audit trails are built into every engagement from day one. Governance is not an add-on or a phase\u2014it is foundational.",
  },
  {
    number: "03",
    title: "Honest Counsel",
    description:
      "We do not claim track record we do not have. We do not use the word \u201Cproven.\u201D We lead with the quality of our thinking, the rigor of our approach, and the strength of our team.",
  },
]

const team = [
  { role: "Founder & CEO", name: "Kavin Sakthivel", credential: "Georgetown \u00B7 Real Estate & Competitive Intelligence" },
  { role: "Senior Advisor", name: "Jonathan Morris", credential: "$4.7B CRE Transactions \u00B7 Fmr. Dir. Acquisitions, Boston Properties" },
  { role: "Senior Advisor", name: "Dr. Cynthia Mendoza", credential: "Former Deputy CIO, US Department of Defense" },
  { role: "Consultant", name: "Ricky Fauntleroy", credential: "Manager IT Consulting Delivery, CGI Federal" },
]

export function AboutContent() {
  return (
    <main>
      <PageHeader
        eyebrow="About Quoin"
        title="Purpose-built to solve a specific problem."
        description="Quoin is an AI operating partner for property management firms. We exist because the industry needs a partner who understands both the technology and the operations."
      />

      {/* Why Quoin Exists */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <BlurFade inView direction="up" className="lg:col-span-7">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                Why Quoin Exists
              </p>
              <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground mb-6">
                The industry needs more than another vendor
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-sm leading-[1.85] text-muted-foreground">
                  Property management firms are investing in AI, but the investments are not
                  translating into operational results. Only 5% of commercial real estate firms
                  have achieved their AI program goals. The gap is not technology. It is approach.
                </p>
                <p className="text-sm leading-[1.85] text-muted-foreground">
                  Point-solution SaaS vendors sell tools that do not integrate with your property
                  management platform. Strategy consultants deliver decks and leave. Internal IT
                  teams lack the specialized AI expertise to build, govern, and operate agents at
                  scale. None of these options close the gap between AI ambition and operational reality.
                </p>
                <p className="text-sm leading-[1.85] text-muted-foreground">
                  Quoin was founded to be the option that does. We embed with your operations team,
                  build AI agents that integrate with your existing systems, apply governance from
                  day one, and stay to manage the infrastructure as a long-term partner.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.2} direction="up" className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-6 pt-4">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50">
                At a Glance
              </p>
              {[
                { label: "Legal Entity", value: "Quoin Buildings, LLC" },
                { label: "Principal", value: "Kavin Sakthivel, Founder & CEO" },
                { label: "Founded", value: "2026" },
                { label: "Headquarters", value: "Washington, DC" },
                { label: "Model", value: "AI Operating Partner" },
                { label: "Industry Focus", value: "Property Management" },
                { label: "Jurisdiction", value: "District of Columbia" },
              ].map((item) => (
                <div key={item.label} className="border-b border-border pb-4 last:border-b-0">
                  <p className="text-[11px] tracking-[0.15em] text-muted-foreground/40 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-light text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 bg-secondary">
        <BlurFade inView direction="up">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              What We Stand For
            </p>
            <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
              Our principles
            </TextAnimate>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {principles.map((principle, index) => (
            <BlurFade key={principle.number} inView delay={(index % 3) * 0.12} direction="up">
              <div className="bg-secondary p-8 md:p-10">
                <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-8">
                  ({principle.number})
                </span>
                <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mb-4">
                  {principle.title}
                </h3>
                <div className="w-8 h-px bg-accent/40 mb-4" />
                <p className="text-sm leading-[1.75] text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <BlurFade inView direction="up">
          <div className="mb-16 pb-6 border-b border-border">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              The Team
            </p>
            <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
              Leadership
            </TextAnimate>
          </div>
        </BlurFade>

        <div className="divide-y divide-border">
          {team.map((member, index) => (
            <BlurFade key={member.name} inView delay={index * 0.1} direction="up">
              <Link href="/leadership" className="group flex items-start md:items-center justify-between py-7 md:py-8 gap-6">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 flex-1">
                  <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 shrink-0 w-24">
                    {member.role}
                  </span>
                  <h3 className="text-base md:text-lg font-light tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {member.name}
                  </h3>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 hidden md:block">
                    {member.credential}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>

        <BlurFade inView delay={0.4} direction="up">
          <div className="mt-12">
            <Link href="/leadership" className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 group">
              <span className="border-b border-accent/30 pb-0.5 group-hover:border-accent transition-colors duration-300">Meet the Full Team</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* Governance Link */}
      <BlurFade inView direction="up">
        <section className="px-6 py-16 md:px-12 lg:px-20 md:py-20 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
                Governance
              </p>
              <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground">
                Our AI governance framework
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end gap-6">
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Every engagement includes a structured governance framework addressing fair housing,
                data privacy, bias monitoring, and audit accountability. We believe governance is
                not a service add-on\u2014it is a foundational requirement.
              </p>
              <Link href="/governance" className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                <span className="border-b border-accent/30 pb-0.5 group-hover:border-accent transition-colors duration-300">Our Governance Framework</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </BlurFade>

      {/* CTA */}
      <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <h2 className="text-3xl md:text-4xl font-extralight leading-[1.15] tracking-tight mb-6">
              {"Let\u2019s start with a conversation."}
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              We are happy to discuss your challenges, share what we are seeing in the market,
              and determine if there is a fit.
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
                Schedule a Conversation
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
