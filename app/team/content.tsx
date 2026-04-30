"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const team = [
  {
    name: "Kavin Sakthivel",
    role: "CEO & Chief Engineer",
    initials: "KS",
    photo: "/team-kavin.jpeg",
    short: "Georgetown \u00b7 Real Estate & Competitive Intelligence",
    bio: "Kavin founded Quoin on a single conviction: that AI will become the intelligence layer inside real estate operations, not a tool layered on top of them. His background spans civil engineering, real estate market research, agency loan origination, financial markets, AI research, and real estate operating platforms. At Georgetown, he studied how prepared real estate firms are to adopt AI, finding that the barrier is rarely the technology alone. Kavin leads the engineering team at Quoin, sets strategic direction, and leads workflow documentation for client engagements. He holds a B.E. in Civil Engineering from PSG College of Technology, a Master's in Real Estate and Competitive Intelligence from Georgetown University, and has passed CFA Level II.",
  },
  {
    hidden: true,
    name: "Jonathan Morris",
    role: "Advisor, Real Estate",
    initials: "JM",
    photo: "/team-jonathan.png",
    short: "$4.7B CRE Transactions \u00b7 Fmr. Dir. Acquisitions, Boston Properties",
    bio: "Jonathan Morris has spent more than three decades in commercial real estate and has closed over $4.7 billion in transactions across the capital stack. Recruited by Ray Ritchey to Boston Properties (BXP), he served as Director of Acquisitions and helped build one of the country's premier office REITs. He was later recruited by Brown Brothers Harriman to lead a private office REIT as CEO, taking the company through a $240 million IPO. He went on to co-found LMH Realty Group as Managing Principal, assembling a 1.5 million square foot portfolio valued at $1.5 billion at an average IRR of 44%. Today he is the Founder and CEO of REIT Academy, a Senior Research Advisor at Hoya Capital, and a member of Georgetown University's REIT faculty. At Quoin, Jonathan works one-on-one with clients on real estate strategy and market positioning, and helps shape the firm's own direction in the commercial real estate industry.",
  },
  {
    name: "Dr. Cynthia J. Mendoza",
    role: "Advisor, Governance & Security",
    initials: "CM",
    photo: "/team-cynthia.png",
    short: "Former Deputy CIO, US Department of Defense",
    bio: "Dr. Cynthia Mendoza has spent two decades leading complex technology efforts across the U.S. Department of Defense and the Intelligence Community. As Deputy CIO of the Department of Defense, she led modernization across the department's compartmented IT enterprise; as CTO of the U.S. Department of State, she set the technology direction for the nation's diplomatic platform; and as Acting Deputy CIO and IC Chief Architect at ODNI, she championed the first community-level Reference Architecture Framework. She currently serves as Chief Engineer at BAE Systems, leading engineering decisions for a $1B+ Intelligence Community portfolio, sits on the board of the Intelligence and National Security Alliance, and teaches as an adjunct instructor at Georgetown University. She holds a Ph.D. and carries DAWIA Level Three and PMP certifications. At Quoin, Dr. Mendoza advises individual clients on governance, security architecture, and enterprise modernization, and establishes the governance and security standards the firm itself operates by.",
  },
  {
    name: "Rohith Roshan",
    role: "Director, Artificial Intelligence",
    initials: "RR",
    photo: "/team-rohith.png",
    short: "Agentic AI \u00b7 Physics-Informed Neural Networks \u00b7 Applied Research",
    bio: "Rohith Roshan leads Quoin's artificial intelligence work, setting research direction and owning the design, evaluation, and deployment of the agents we build for clients. Trained as an electrical engineer, he specializes in agentic frameworks and physics-informed neural networks, building production AI systems capable of handling mission-grade workloads. Before moving full-time into AI engineering in 2024, he spent nearly a year as a Real Estate Rental Manager at Arun Realty, which gave him direct operational context for the property management workflows Quoin automates. Alongside his applied work, Rohith has conducted multi-year independent research at the foundations of AI and information theory \u2014 including investigations framing reality as a binary tree of events rather than stochastic processes, and earlier work on the effects of perception and consciousness on subjective reality. He holds a Bachelor of Engineering in Electrical Engineering. At Quoin, Rohith designs and evaluates the AI delivered on every client engagement and owns the firm's AI stack end-to-end \u2014 from model selection and evaluation to agent architecture and the physics-informed modeling that keeps our systems at the frontier.",
  },
  {
    name: "Ricky Fauntleroy",
    role: "Director, Information Technology",
    initials: "RF",
    photo: "/team-ricky.png",
    short: "Manager IT Consulting Delivery, CGI Federal",
    bio: "Ricky Fauntleroy brings enterprise IT infrastructure and cybersecurity experience from the federal sector. As Manager of IT Consulting Delivery at CGI Federal, he oversees production delivery of IT services supporting the Social Security Administration. Earlier in his career, he served as a Microsoft Subject Matter Expert and Engineer IV at Leidos, leading systems engineering and endpoint infrastructure work on mission-critical federal programs. He holds a Master of Professional Studies in Cybersecurity Risk Management from Georgetown University's School of Continuing Studies and is certified in HIPAA Security and Privacy and Cyber Awareness. At Quoin, Ricky builds and secures the information technology, cybersecurity, and endpoint infrastructure for each client deployment and for the firm itself \u2014 the foundation enterprise AI runs on.",
  },
  {
    name: "Brandon Timpane",
    role: "Independent Consultant, Data Readiness",
    initials: "BT",
    photo: "/team-brandon.png",
    short: "Enterprise Applications & Data \u00b7 German Marshall Fund \u00b7 Georgetown ITM",
    bio: "Brandon Timpane brings enterprise application management and data operations experience from the German Marshall Fund of the United States, where he serves as an Enterprise Applications Specialist leading application training, data operations, and IT management. Earlier in his career, he worked as a Data Annotator at Enabled Intelligence, Inc., developing a practical understanding of the gap between what a system is capable of and what users actually do with it. He holds a Master of Professional Studies in Information Technology Management from Georgetown University's School of Continuing Studies. At Quoin, Brandon embeds with client teams on diagnostic and deployment engagements, focusing on data readiness and application integration, and contributes to the firm's broader data practice.",
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
        backgroundImage="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <h2 className="text-3xl md:text-[2.75rem] font-normal tracking-tight text-foreground">
              Built for this problem
            </h2>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.1} direction="up">
          <p className="text-sm leading-[1.85] text-muted-foreground max-w-4xl">
            Real estate AI requires three things most teams do not have in one place: operational knowledge of how property and asset management actually run, the engineering to build and deploy production AI, and governance experience that satisfies legal, compliance, and regulatory requirements.
          </p>
        </BlurFade>
      </section>

      {/* Team Members Card Grid */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 border-t border-border">
        <BlurFade inView direction="up">
          <div className="mb-16 pb-6 border-b border-border">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
              The Team
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-normal tracking-tight text-foreground">
              Leadership
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.filter((m) => !(m as { hidden?: boolean }).hidden).map((member, index) => (
            <BlurFade key={member.name} inView delay={index * 0.1} direction="up">
              <button
                onClick={() => setSelectedMember(member)}
                className="group w-full text-left border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
              >
                <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                  {member.photo ? (
                    <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <span className="text-4xl font-normal text-muted-foreground/60 tracking-wider">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6"
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
            <h3 className="text-2xl font-normal tracking-tight text-foreground mb-6">
              {selectedMember.name}
            </h3>
            <p className="text-sm leading-[1.85] text-muted-foreground mb-8">
              {selectedMember.bio}
            </p>

          </div>
        </div>
      )}

      {/* Engineering */}
      <BlurFade inView direction="up">
        <section className="px-6 py-16 md:px-12 lg:px-20 md:py-20 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">
                Engineering
              </p>
              <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-foreground">
                The engineering bench behind every deployment
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
              <p className="text-sm leading-[1.85] text-muted-foreground">
                The people profiled above set direction and lead engagements. Standing behind them is a broader team of AI, data, infrastructure, and security engineers who design, build, deploy, and operate the systems we put into production for clients. Every engagement is staffed with a dedicated, cross-functional squad drawn from this bench and embedded with your team &mdash; the leadership you see here stays on, and the engineering depth scales with the work.
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
            <h2 className="text-3xl md:text-4xl font-normal leading-[1.15] tracking-tight mb-6">
              The people you&rsquo;ll actually work with
            </h2>
            <p className="text-sm leading-[1.85] text-background/45 max-w-lg mx-auto mb-12">
              Start with a conversation. Meet the team that would lead your engagement.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 bg-white text-black hover:bg-white/90 transition-colors duration-150"
            >
              Talk to us
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
