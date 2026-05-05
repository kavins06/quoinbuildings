"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

type TeamMember = {
  name: string
  role: string
  initials: string
  photo: string
  expertise: string
  bio: string
}

type Logo = {
  src: string
  alt: string
  label: string
  tone?: "standard" | "invert"
}

const team: TeamMember[] = [
  {
    name: "Kavin Sakthivel",
    role: "CEO & Chief Engineer",
    initials: "KS",
    photo: "/team-kavin.jpeg",
    expertise: "Real Estate AI Strategy & Engineering",
    bio: "Kavin founded Quoin on one conviction: that AI must run inside real estate operations as governed, measurable infrastructure, not as a separate tool layered on top. His background spans civil engineering, market research, agency loan origination, financial markets, AI research, and real estate operating platforms. At Georgetown, he researched how prepared real estate firms are to adopt AI, finding that the barrier is rarely the technology. Kavin leads the engineering team at Quoin, sets strategic direction. He holds a Bachelors in Engineering from PSG College of Technology, a Master's in Real Estate and a post-graduate degree in Competitive Intelligence, both from Georgetown University, and has passed CFA Level II.",
  },
  {
    name: "Dr. Cynthia J. Mendoza",
    role: "Principal Consultant, Governance & Security",
    initials: "CM",
    photo: "/team-cynthia.png",
    expertise: "Governance & Security Architecture",
    bio: "Dr. Cynthia Mendoza has spent two decades leading complex technology efforts across the U.S. Department of Defense and the Intelligence Community. As Deputy CIO of the Department of Defense, she led modernization across the department's compartmented IT enterprise; as CTO of the U.S. Department of State, she set the technology direction for the nation's diplomatic platform; and as Acting Deputy CIO and IC Chief Architect at ODNI, she championed the first community-level Reference Architecture Framework. She currently serves as Chief Engineer at BAE Systems, leading engineering decisions for a $1B+ Intelligence Community portfolio, sits on the board of the Intelligence and National Security Alliance, and teaches as an adjunct instructor at Georgetown University. She holds a Ph.D. and carries DAWIA Level Three and PMP certifications. At Quoin, Dr. Mendoza advises individual clients on governance, security architecture, and enterprise modernization, and establishes the governance and security standards the firm itself operates by.",
  },
  {
    name: "Jonathan Morris",
    role: "Principal Consultant, Real Estate Operations",
    initials: "JM",
    photo: "/team-jonathan.png",
    expertise: "REIT Operations & Investment Judgment",
    bio: "Jonathan Morris has spent more than three decades in commercial real estate and has closed over $4.7 billion in transactions across the capital stack. Recruited by Ray Ritchey to Boston Properties (BXP), he served as Director of Acquisitions and helped build one of the country's premier office REITs. He was later recruited by Brown Brothers Harriman to lead a private office REIT as CEO, taking the company through a $240 million IPO. He went on to co-found LMH Realty Group as Managing Principal, assembling a 1.5 million square foot portfolio valued at $1.5 billion at an average IRR of 44%. Today he is the Founder and CEO of REIT Academy, a Senior Research Advisor at Hoya Capital, and a member of Georgetown University's REIT faculty. At Quoin, Jonathan works one-on-one with clients on real estate strategy and market positioning, and helps shape the firm's own direction in the commercial real estate industry.",
  },
  {
    name: "Rohith Roshan",
    role: "Chief AI Officer",
    initials: "RR",
    photo: "/team-rohith.png",
    expertise: "Agent Architecture & Evaluation",
    bio: "Rohith Roshan leads Quoin's artificial intelligence work, setting research direction and owning the design, evaluation, and deployment of the agents we build for clients. He specializes in agentic frameworks and physics-informed neural networks, building production AI systems capable of handling mission-grade workloads. Alongside his applied work, Rohith has conducted multi-year independent research at the foundations of AI and information theory, including investigations framing reality as a binary tree of events rather than stochastic processes, and earlier work on the effects of perception and consciousness on subjective reality. He holds a Bachelor in Electrical Engineering. At Quoin, Rohith designs and evaluates the AI delivered on every client engagement and owns the firm's AI stack end-to-end, from model selection and eval to agent architecture and the physics-informed modeling that keeps our systems at the frontier.",
  },
  {
    name: "Ricky Fauntleroy",
    role: "Consultant, Cybersecurity & Enterprise IT",
    initials: "RF",
    photo: "/team-ricky.png",
    expertise: "Cybersecurity & Deployment Infrastructure",
    bio: "Ricky Fauntleroy brings enterprise IT infrastructure and cybersecurity experience from the federal sector. As Manager of IT Consulting Delivery at CGI Federal, he oversees production delivery of IT services supporting the Social Security Administration. Earlier in his career, he served as a Microsoft Subject Matter Expert and Engineer IV at Leidos, leading systems engineering and endpoint infrastructure work on mission-critical federal programs. He holds a Master of Professional Studies in Cybersecurity Risk Management from Georgetown University's School of Continuing Studies and is certified in HIPAA Security and Privacy and Cyber Awareness. At Quoin, Ricky builds and secures the information technology, cybersecurity, and endpoint infrastructure for each client deployment and for the firm itself, the foundation enterprise AI runs on.",
  },
  {
    name: "Brandon Timpane",
    role: "Consultant, Data Readiness & Enterprise Applications",
    initials: "BT",
    photo: "/team-brandon.png",
    expertise: "Data Readiness & Enterprise Applications",
    bio: "Brandon Timpane brings enterprise application management and data operations experience from the German Marshall Fund of the United States, where he serves as an Enterprise Applications Specialist leading application training, data operations, and IT management. Earlier in his career, he worked as a Data Annotator at Enabled Intelligence, Inc., developing a practical understanding of the gap between what a system is capable of and what users actually do with it. He holds a Master of Professional Studies in Information Technology Management from Georgetown University's School of Continuing Studies. At Quoin, Brandon embeds with client teams on organizational intelligence and deployment engagements, focusing on data readiness and application integration, and contributes to the firm's broader data practice.",
  },
]

const logos: Logo[] = [
  { src: "/logos/georgetown.svg", alt: "Georgetown University", label: "Georgetown University" },
  { src: "/logos/dept-of-war.svg", alt: "U.S. Department of Defense", label: "U.S. Department of Defense" },
  { src: "/logos/dept-of-state.svg", alt: "U.S. Department of State", label: "U.S. Department of State" },
  { src: "/logos/odni.svg", alt: "Office of the Director of National Intelligence", label: "ODNI" },
  { src: "/logos/nga.svg", alt: "National Geospatial-Intelligence Agency", label: "NGA" },
  { src: "/logos/leidos.svg", alt: "Leidos", label: "Leidos" },
  { src: "/logos/cgi.svg", alt: "CGI Federal", label: "CGI Federal" },
  { src: "/logos/boston-properties.svg", alt: "Boston Properties", label: "Boston Properties" },
  { src: "/logos/lerner.svg", alt: "Lerner Enterprises", label: "Lerner Enterprises", tone: "invert" },
  { src: "/logos/ah-realty-trust.png", alt: "AH Realty Trust", label: "AH Realty Trust" },
  { src: "/logos/nar.svg", alt: "National Association of Realtors", label: "National Association of Realtors" },
  { src: "/logos/newpoint.svg", alt: "NewPoint Real Estate Capital", label: "NewPoint Real Estate Capital" },
  { src: "/logos/gmf.svg", alt: "German Marshall Fund", label: "German Marshall Fund" },
  { src: "/logos/enabled-intelligence.png", alt: "Enabled Intelligence", label: "Enabled Intelligence" },
]

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex min-h-[112px] flex-col items-center justify-center border border-strong/15 px-5 py-5">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={160}
        height={64}
        unoptimized
        className={[
          "h-10 w-auto max-w-[150px] object-contain opacity-75",
          logo.tone === "invert"
            ? "invert grayscale contrast-125"
            : "grayscale contrast-125",
        ].join(" ")}
      />
      <p className="mt-3 text-center text-[9px] uppercase tracking-[0.16em] leading-tight text-ink-muted">
        {logo.label}
      </p>
    </div>
  )
}

function TeamCta() {
  return (
    <Link
      href="/contact"
      className="cta-primary inline-flex items-center gap-2 self-start text-[15px] font-medium"
    >
      <span>Map one operating area with us</span>
      <span aria-hidden="true">&rarr;</span>
    </Link>
  )
}

export function TeamContent() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <main>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Team
              </p>
              <h1 className="text-balance font-serif text-[clamp(3rem,7vw,5.875rem)] font-normal leading-[1.02] tracking-normal text-ink-primary">
                The expert team behind Quoin&apos;s operating model.
              </h1>
              <p className="mt-8 measure text-[18px] leading-[1.6] text-ink-secondary md:text-[19px]">
                Quoin combines real estate operating judgment, AI architecture,
                governance, cybersecurity, deployment infrastructure, and data
                readiness. Real estate AI requires more than AI engineers.
              </p>
              <div className="mt-10">
                <TeamCta />
              </div>
            </BlurFade>

            <BlurFade
              inView
              delay={0.12}
              direction="up"
              className="lg:col-span-4 lg:col-start-9 lg:pt-20"
            >
              <aside className="border-l border-strong pl-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  Disciplines
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-4">
                  {[
                    "Real estate operating judgment",
                    "Agent architecture and evaluation",
                    "Governance and security architecture",
                    "Cybersecurity and deployment",
                    "Data readiness and applications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-3 h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                      <span className="text-[15px] leading-[1.5] text-ink-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <header className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Team
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
                  One judgment stack, shown equally.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-7">
                <p className="measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px]">
                  Six practitioners across real estate, AI, governance,
                  cybersecurity, infrastructure, and data. Click any name for
                  the full bio.
                </p>
              </div>
            </header>
          </BlurFade>

          <div className="grid grid-cols-1 gap-px bg-[hsl(var(--border-subtle))] md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <BlurFade key={member.name} inView delay={index * 0.06} direction="up">
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="group grid h-full w-full grid-rows-[auto_1fr] bg-surface-base text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-sunken">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-[center_16%] grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center text-4xl font-normal tracking-wider text-ink-muted">
                        {member.initials}
                      </span>
                    )}
                  </div>
                  <div className="flex min-h-[168px] flex-col justify-between p-5 md:p-6">
                    <div>
                      <h3 className="text-[20px] font-medium leading-[1.25] text-ink-primary">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.4] text-ink-secondary">
                        {member.role}
                      </p>
                    </div>
                    <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                      {member.expertise}
                    </p>
                  </div>
                </button>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-inverse/85 p-6"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-strong bg-surface-base p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close biography"
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 text-ink-muted transition-colors hover:text-ink-primary"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              {selectedMember.role}
            </p>
            <h3 className="mb-3 text-[28px] font-medium leading-[1.2] tracking-normal text-ink-primary">
              {selectedMember.name}
            </h3>
            <p className="mb-7 text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
              {selectedMember.expertise}
            </p>
            <p className="text-[15px] leading-[1.7] text-ink-secondary">
              {selectedMember.bio}
            </p>
          </div>
        </div>
      )}

      <section className="border-y border-strong bg-surface-sunken py-20 md:py-32">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <BlurFade inView direction="up" className="lg:col-span-5">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                AI-native operating model
              </p>
              <h2 className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
                The team is amplified by Quoin&apos;s own intelligence platform.
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.1} direction="up" className="lg:col-span-6 lg:col-start-7 lg:pt-7">
              <p className="measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px]">
                Quoin uses governed internal agents to accelerate interview
                synthesis, workflow mapping, source inventory, evidence review,
                scoring, completeness checks, and draft deliverables. Human
                experts remain accountable for interpretation and
                recommendations.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <header className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Institutional experience
                </p>
                <h2 className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-ink-primary">
                  Experience from real estate, AI, security, governance, and
                  enterprise technology.
                </h2>
              </div>
              <p className="lg:col-span-6 lg:col-start-7 measure text-[16px] leading-[1.65] text-ink-secondary md:text-[17px] lg:pt-7">
                The team brings operating and technical judgment from settings
                where source trust, auditability, security, and decision rights
                matter.
              </p>
            </header>
          </BlurFade>

          <BlurFade inView delay={0.1} direction="up">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
              {logos.map((logo) => (
                <LogoTile key={logo.alt} logo={logo} />
              ))}
            </div>
            <p className="mt-5 text-[11px] leading-[1.6] text-ink-muted">
              Logos indicate prior institutions, employers, and academic
              affiliations across Quoin&apos;s team and consultants. They are not
              presented as a client roster.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="bg-[hsl(var(--surface-inverse))] py-20 text-white md:py-28">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-10 h-px w-12 bg-accent" />
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                Next step
              </p>
              <h2 className="text-balance font-sans text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-normal text-white">
                Map one operating area. Decide where AI belongs.
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-[1.65] text-white/64">
                30-minute call. Bring your operating model and the workflows
                where AI pressure is loudest. Leave with three candidate
                workflows and a no-pressure decision packet.
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-b border-white pb-1 text-[15px] font-medium text-white transition-colors hover:border-white/70 hover:text-white/70"
                >
                  <span>Map one operating area with us</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
