"use client"

import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const team = [
  {
    name: "Kavin Sakthivel",
    title: "Founder & CEO",
    bio: "Kavin founded Quoin to solve a specific problem: property management firms want AI to work, but the industry lacks a partner who understands both the technology and the operations. With a background in real estate and competitive business intelligence from Georgetown University, Kavin brings an engineering lens to capital markets and a capital markets lens to technology.",
    credentials: [
      "Georgetown University \u2014 Real Estate & Competitive Business Intelligence",
      "Background spanning engineering, capital markets, and competitive intelligence",
    ],
  },
  {
    name: "Jonathan Morris",
    title: "Senior Advisor, Real Estate & Capital Markets",
    bio: "Jonathan brings over three decades of commercial real estate executive experience to Quoin. He has led transactions totaling $4.7 billion across acquisitions, dispositions, and capital markets. As the former Director of Acquisitions at Boston Properties, Jonathan understands the operational realities of enterprise property management at scale\u2014and what it actually takes to get new technology adopted across a portfolio.",
    credentials: [
      "$4.7B in CRE transactions across acquisitions, dispositions, and capital markets",
      "Former Director of Acquisitions, Boston Properties",
      "30+ years of commercial real estate executive leadership",
    ],
  },
  {
    name: "Dr. Cynthia J. Mendoza",
    title: "Senior Advisor, Technology, Governance & Security",
    bio: "Dr. Mendoza brings two decades of enterprise technology leadership across the Department of Defense and the Intelligence Community. As the former Deputy CIO of the US Department of Defense, she led technology governance at a scale few have experienced. Her expertise in compliance frameworks, security architecture, and responsible AI deployment informs every governance decision at Quoin.",
    credentials: [
      "Former Deputy CIO, US Department of Defense",
      "Two decades of enterprise technology leadership across DoD and Intelligence Community",
      "Expert in compliance frameworks, security architecture, and responsible AI deployment",
    ],
  },
  {
    name: "Ricky Fauntleroy",
    title: "Consultant, IT Infrastructure & Cybersecurity",
    bio: "Ricky brings deep expertise in IT infrastructure and cybersecurity from his work delivering enterprise technology solutions at scale. As Manager of IT Consulting Delivery at CGI Federal, he has led teams implementing complex technology systems across large organizations, ensuring security, reliability, and operational continuity.",
    credentials: [
      "Manager of IT Consulting Delivery, CGI Federal",
      "Enterprise IT infrastructure and cybersecurity expertise",
    ],
  },
  {
    name: "Brandon Timpane",
    title: "Consultant, Enterprise Applications & Data",
    bio: "Brandon specializes in enterprise applications and data architecture, bringing experience in designing and implementing data systems that power operational decision-making. His expertise ensures that every AI agent Quoin builds is grounded in clean, well-structured data pipelines.",
    credentials: [
      "Enterprise applications and data architecture specialist",
      "Experience designing data systems for operational decision-making",
    ],
  },
]

function TeamMember({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <BlurFade inView direction="up" delay={0.1}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 md:py-20 border-b border-border last:border-b-0">
        <div className="lg:col-span-4">
          <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-3">
            {member.title}
          </p>
          <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground">
            {member.name}
          </TextAnimate>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-6">
          <p className="text-sm leading-[1.85] text-muted-foreground">
            {member.bio}
          </p>

          <ul className="flex flex-col gap-2 pt-4 border-t border-border">
            {member.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-3">
                <div className="w-1.5 h-px bg-accent/60 mt-2.5 shrink-0" />
                <span className="text-[12px] leading-[1.6] text-muted-foreground/70">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BlurFade>
  )
}

export function LeadershipContent() {
  return (
    <main>
      <PageHeader
        eyebrow="The Team"
        title="Real estate professionals. Enterprise technologists. AI engineers."
        description="A purpose-built team assembled to solve a specific problem."
      />

      <section className="px-6 md:px-12 lg:px-20">
        {team.map((member, index) => (
          <TeamMember key={member.name} member={member} index={index} />
        ))}
      </section>

      <BlurFade inView direction="up">
        <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 bg-secondary">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
                Engineering
              </p>
              <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground">
                Supported by a Dedicated AI Engineering Team
              </TextAnimate>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex items-end">
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Our engineering team specializes in AI agent development, large language model
                orchestration, enterprise system integration, and production infrastructure.
                Every agent is built to production standards with monitoring, logging, and
                the operational rigor that enterprise property management demands.
              </p>
            </div>
          </div>
        </section>
      </BlurFade>

      <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
        <BlurFade inView direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-10 h-px bg-accent/40 mx-auto mb-10" />
            <h2 className="text-3xl md:text-4xl font-extralight leading-[1.15] tracking-tight mb-6">
              {"Let\u2019s start with a conversation."}
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              Meet the team. Discuss your challenges. Determine if there is a fit.
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
