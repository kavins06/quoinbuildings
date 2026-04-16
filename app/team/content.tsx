"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const team = [
  {
    name: "Kavin Sakthivel",
    role: "Founder & CEO",
    initials: "KS",
    photo: "/team-kavin.jpg",
    short: "Georgetown \u00b7 Real Estate & Competitive Intelligence",
    bio: "Kavin founded Quoin after watching the same pattern repeat across commercial real estate firms: significant investment in AI, minimal operational adoption. Trained in civil engineering at PSG College of Technology and sharpened through competitive business intelligence and capital markets at Georgetown University, he approaches the built world from both the ground up and the balance sheet out. At Quoin, Kavin leads client engagements, manages the engineering team, and is the primary point of contact for every diagnostic and deployment.",
    credentials: [
      "Georgetown University \u2014 M.S., Real Estate, Competitive Business Intelligence",
      "PSG College of Technology \u2014 B.E., Civil Engineering",
      "President, Georgetown Graduate Student Government",
      "Chair, SABRE",
      "CFA Program Level II",
      "Real Estate Financial Modeling Certification",
    ],
  },
  {
    name: "Jonathan Morris",
    role: "Senior Advisor",
    initials: "JM",
    photo: "/team-jonathan.png",
    short: "$4.7B CRE Transactions \u00b7 Fmr. Dir. Acquisitions, Boston Properties",
    bio: "Jonathan Morris has spent more than 30 years in commercial real estate. As Director of Acquisitions at Boston Properties \u2014 recruited by Ray Ritchey \u2014 he helped build one of the premier office REITs in the country. As CEO of a private office REIT recruited by Brown Brothers Harriman, he led the company through a $240 million IPO. He co-founded LMH Realty Group, building a 1.5 million square foot portfolio valued at $1.5 billion at an average IRR of 44%. Jonathan advises Quoin on real estate strategy, client relationships, and market positioning.",
    credentials: [
      "$4.7B in commercial real estate transactions",
      "Former Director of Acquisitions, Boston Properties (BXP)",
      "Former CEO, Private Office REIT (Brown Brothers Harriman)",
      "Co-Founder & Managing Principal, LMH Realty Group",
      "Founder & CEO, REIT Academy",
      "Senior Research Advisor, Hoya Capital",
      "Georgetown University REIT Faculty",
    ],
  },
  {
    name: "Dr. Cynthia J. Mendoza",
    role: "Senior Advisor",
    initials: "CM",
    photo: "/team-cynthia.png",
    short: "Former Deputy CIO, US Department of Defense",
    bio: "Dr. Mendoza spent two decades leading complex technology efforts across the Department of Defense and the Intelligence Community. As Deputy CIO of the Department of Defense, she led modernization across the department\u2019s compartmented IT enterprise. As IC Chief Architect at ODNI, she championed the first community-level Reference Architecture Framework. She currently serves as Chief Engineer at BAE Systems, leading engineering decisions for a $1B+ portfolio.",
    credentials: [
      "Former Deputy CIO, U.S. Department of Defense",
      "Former CTO, U.S. Department of State",
      "Former Acting Deputy CIO & IC Chief Architect, ODNI",
      "Chief Engineer, BAE Systems ($1B+ IC portfolio)",
      "Board Member, Intelligence and National Security Alliance",
      "Adjunct Instructor, Georgetown University",
      "Ph.D.; DAWIA Level Three; PMP",
    ],
  },
  {
    name: "Ricky Fauntleroy",
    role: "Consultant",
    initials: "RF",
    short: "Manager IT Consulting Delivery, CGI Federal",
    bio: "Ricky brings enterprise IT infrastructure and cybersecurity from the federal sector. As Manager of IT Consulting Delivery at CGI Federal, he manages production delivery of IT services supporting the Social Security Administration. His background spans systems engineering, cybersecurity, and endpoint infrastructure \u2014 the foundation that enterprise AI runs on.",
    credentials: [
      "Manager, IT Consulting Delivery \u2014 CGI Federal",
      "Former Microsoft SME/Engineer IV \u2014 Leidos",
      "Georgetown University SCS \u2014 M.P.S., Cybersecurity Risk Management",
      "HIPAA Security and Privacy; Cyber Awareness Certified",
    ],
  },
  {
    name: "Brandon Timpane",
    role: "Consultant",
    initials: "BT",
    short: "Enterprise Applications & Data \u00b7 German Marshall Fund \u00b7 Georgetown ITM",
    bio: "Brandon brings enterprise application management and data operations experience from the German Marshall Fund of the United States. His work in application training, data operations, and IT management gives him practical understanding of the gap between what a system can do and what staff actually does with it. Brandon supports diagnostic and deployment engagements, focusing on data readiness and application integration.",
    credentials: [
      "Enterprise Applications Specialist \u2014 German Marshall Fund of the United States",
      "Data Annotator \u2014 Enabled Intelligence, Inc.",
      "Georgetown University SCS \u2014 M.P.S., Information Technology Management",
    ],
  },
]

export function TeamContent() {
  const [selectedMember, setSelectedMember] = useState<typeof team[number] | null>(null)

  return (
    <main>
      <PageHeader
        eyebrow="Team"
        title="The People Behind the Work"
        description="Quoin was built to solve a specific problem. Every person on this team was chosen for what they bring to that mission."
        backgroundImage="/header-services.jpg"
        className="h-[56vh] min-h-[520px] md:h-[66vh] md:min-h-[620px]"
        contentClassName="pb-4 md:pb-8"
      />

      {/* Why This Team Exists */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <BlurFade inView direction="up">
          <div className="mb-16 pb-6 border-b border-border">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              Why This Team Exists
            </p>
            <TextAnimate as="h2" animation="blurIn" by="word" once startOnView className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
              Built for this problem
            </TextAnimate>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.1} direction="up">
          <p className="text-sm leading-[1.85] text-muted-foreground max-w-4xl">
            Property management AI requires three things most teams do not have in one place: deep knowledge of how property management operations actually work, the ability to build and deploy production AI systems, and experience designing governance frameworks that satisfy legal, compliance, and regulatory requirements. That is why Jonathan brings 30 years of CRE operating experience, Cynthia brings two decades of enterprise technology governance from the Department of Defense, and the engineering team brings production AI development capability.
          </p>
        </BlurFade>
      </section>

      {/* Team Members — Card Grid */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 border-t border-border">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <BlurFade key={member.name} inView delay={index * 0.1} direction="up">
              <button
                onClick={() => setSelectedMember(member)}
                className="group w-full text-left border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
              >
                <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                  {member.photo ? (
                    <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <span className="text-4xl font-extralight text-muted-foreground/60 tracking-wider">
                      {member.initials}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-base font-light tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {member.name}
                  </h3>
                </div>
              </button>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-background border border-border rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
              {selectedMember.role}
            </p>
            <h3 className="text-2xl font-extralight tracking-tight text-foreground mb-6">
              {selectedMember.name}
            </h3>
            <p className="text-sm leading-[1.85] text-muted-foreground mb-8">
              {selectedMember.bio}
            </p>

            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                Credentials
              </p>
              <ul className="space-y-2">
                {selectedMember.credentials.map((cred, i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">&bull;</span>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Governance */}
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
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Every engagement includes governance architecture designed to support fair housing compliance, data privacy (GDPR, CCPA, state-level), algorithmic bias monitoring, and full audit accountability. Governance is built before deployment, not added after.
              </p>
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
              You are hiring people, not a brand.
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              Start with a conversation. See if the fit is there.
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
