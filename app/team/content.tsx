"use client"

import Image from "next/image"
import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const memberSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

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
    bio: "Kavin is the founder of Quoin, leading the firm's mission of deploying governed AI Agents in the real estate industry at scale. Before Quoin, Kavin built multiple proptech platforms for clients through his consulting practice. His background spans civil engineering, market research, capital markets, AI research, and real estate operating platforms. His research portfolio is wide. He pioneered research initiatives at India's National Association of Realtors, launching its first city-focused report. At Georgetown, he studied how prepared real estate firms are to adopt AI, finding that the barrier is rarely the technology. His work also extends to the spatial repositioning of public infrastructure and applied AI in real estate. Kavin is a member of multiple professional organizations including the CFA Society and the Institute of Real Estate Management. He holds a Bachelor's in Engineering, a Master's in Real Estate, and a post-graduate degree in Intelligence both from Georgetown University, and has passed the CFA Level II. At Georgetown, he served as President of the University's Graduate Student Government and Chair of the Real Estate Society.",
  },
  {
    name: "Dr. Cynthia J. Mendoza",
    role: "Principal Consultant",
    initials: "CM",
    photo: "/team-cynthia.png",
    expertise: "Governance & Security Architecture",
    bio: "Dr. Cynthia Mendoza has spent two decades leading complex technology efforts across the U.S. Department of Defense and the Intelligence Community. As Deputy CIO of the Department of Defense, she led modernization across the department's compartmented IT enterprise; as CTO of the U.S. Department of State, she set the technology direction for the nation's diplomatic platform; and as Acting Deputy CIO and IC Chief Architect at ODNI, she championed the first community-level Reference Architecture Framework. She currently serves as Chief Engineer at BAE Systems, leading engineering decisions for a $1B+ Intelligence Community portfolio, sits on the board of the Intelligence and National Security Alliance, and teaches as an adjunct instructor at Georgetown University. She holds a Ph.D. and carries DAWIA Level Three and PMP certifications. At Quoin, Dr. Mendoza advises individual clients on governance, security architecture, and enterprise modernization, and establishes the governance and security standards the firm itself operates by.",
  },
  {
    name: "Jonathan Morris",
    role: "Principal Consultant",
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
    bio: "Rohith Roshan leads Quoin's artificial intelligence work, setting research direction and owning the design, evaluation, and deployment of AI Agents for our clients. He specializes in agentic frameworks and physics-informed neural networks, building production AI systems capable of handling mission-grade workloads. Alongside his applied work, Rohith has conducted multi-year independent research at the foundations of AI and information theory, including investigations framing reality as a binary tree of events rather than stochastic processes, and earlier work on the effects of perception and consciousness on subjective reality. He holds a Bachelor in Electrical Engineering. At Quoin, Rohith owns the firm's AI stack end-to-end, from model selection and eval to agent architecture and the physics-informed modeling that keeps our systems at the frontier.",
  },
  {
    name: "Ricky Fauntleroy",
    role: "Consultant",
    initials: "RF",
    photo: "/team-ricky.png",
    expertise: "Cybersecurity & Deployment Infrastructure",
    bio: "Ricky Fauntleroy brings enterprise IT infrastructure and cybersecurity experience from the federal sector. As Manager of IT Consulting Delivery at CGI Federal, he oversees production delivery of IT services supporting the Social Security Administration. Earlier in his career, he served as a Microsoft Subject Matter Expert and Engineer IV at Leidos, leading systems engineering and endpoint infrastructure work on mission-critical federal programs. He holds a Master of Professional Studies in Cybersecurity Risk Management from Georgetown University's School of Continuing Studies and is certified in HIPAA Security and Privacy and Cyber Awareness. At Quoin, Ricky builds and secures the information technology, cybersecurity, and endpoint infrastructure for each client deployment and for the firm itself, the foundation enterprise AI runs on.",
  },
  {
    name: "Brandon Timpane",
    role: "Consultant",
    initials: "BT",
    photo: "/team-brandon.png",
    expertise: "Data Readiness & Enterprise Applications",
    bio: "Brandon Timpane brings enterprise application management and data operations experience from the German Marshall Fund of the United States, where he serves as an Enterprise Applications Specialist leading application training, data operations, and IT management. Earlier in his career, he worked as a Data Annotator at Enabled Intelligence, Inc., developing a practical understanding of the gap between what a system is capable of and what users actually do with it. He holds a Master of Professional Studies in Information Technology Management from Georgetown University's School of Continuing Studies. At Quoin, Brandon embeds with client teams on organizational intelligence and deployment engagements, focusing on data readiness and application integration, and contributes to the firm's broader data practice.",
  },
]

const logos: Logo[] = [
  { src: "/logos/georgetown.svg", alt: "Georgetown University", label: "" },
  { src: "/logos/dept-of-war.svg", alt: "U.S. Department of War", label: "U.S. Department of War" },
  { src: "/logos/dept-of-state.svg", alt: "U.S. Department of State", label: "U.S. Department of State" },
  { src: "/logos/odni.svg", alt: "Office of the Director of National Intelligence", label: "ODNI" },
  { src: "/logos/nga.svg", alt: "National Geospatial-Intelligence Agency", label: "NGA" },
  { src: "/logos/leidos.svg", alt: "Leidos", label: "" },
  { src: "/logos/bae.svg", alt: "BAE Systems", label: "" },
  { src: "/logos/cgi.svg", alt: "CGI Federal", label: "CGI Federal" },
  { src: "/logos/boston-properties.svg", alt: "Boston Properties", label: "Boston Properties" },
  { src: "/logos/lerner.svg", alt: "Lerner Enterprises", label: "", tone: "invert" },
  { src: "/logos/ah-realty-trust.png", alt: "AH Realty Trust", label: "AH Realty Trust" },
  { src: "/logos/nar.svg", alt: "National Association of Realtors", label: "" },
  { src: "/logos/newpoint.svg", alt: "NewPoint Real Estate Capital", label: "" },
  { src: "/logos/gmf.svg", alt: "German Marshall Fund", label: "German Marshall Fund" },
  { src: "/logos/enabled-intelligence.png", alt: "Enabled Intelligence", label: "Enabled Intelligence" },
]

function CompactLogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex min-h-[78px] flex-col items-center justify-center bg-surface-base px-2 py-3">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={120}
        height={48}
        unoptimized
        className={[
          "h-6 w-auto max-w-[88px] object-contain opacity-75",
          logo.tone === "invert"
            ? "invert grayscale contrast-125"
            : "grayscale contrast-125",
        ].join(" ")}
      />
      {logo.label && (
        <p className="mt-2 text-center text-[8px] uppercase tracking-[0.16em] leading-tight text-ink-muted">
          {logo.label}
        </p>
      )}
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
  return (
    <main>
      <section className="border-b border-strong bg-surface-base pt-36 md:pt-44 lg:pt-48">
        <div className="container-shell pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
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
              className="lg:col-span-4 lg:col-start-9"
            >
              <aside>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  Institutional experience
                </p>
                <div className="mt-6 grid grid-cols-3 gap-px bg-[hsl(var(--border-subtle))]">
                  {logos.map((logo) => (
                    <CompactLogoTile key={logo.alt} logo={logo} />
                  ))}
                </div>
                <p className="mt-5 text-[10px] leading-[1.55] text-ink-muted">
                  Logos indicate prior institutions, employers, and academic
                  affiliations across Quoin&apos;s team and consultants. Not
                  presented as a client roster.
                </p>
              </aside>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="bg-surface-base py-20 md:py-32">
        <div className="container-shell">
          <BlurFade inView direction="up">
            <header className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 md:mb-16 lg:mb-20">
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
                  cybersecurity, infrastructure, and data. Each member, in
                  their own words.
                </p>
              </div>
            </header>
          </BlurFade>

          <div className="border-t border-strong/15">
            {team.map((member, index) => (
              <BlurFade key={member.name} inView delay={index * 0.08} direction="up">
                <article
                  id={memberSlug(member.name)}
                  className="grid scroll-mt-32 grid-cols-1 gap-8 border-b border-strong/15 py-12 md:gap-10 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-16"
                >
                  <div className="lg:col-span-3">
                    <div className="relative aspect-square overflow-hidden bg-surface-sunken max-w-[260px] mx-auto lg:mx-0">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 80vw"
                          className="object-cover object-[center_16%] transition duration-500 hover:scale-[1.02]"
                        />
                      ) : (
                        <span className="flex h-full items-center justify-center text-4xl font-normal tracking-wider text-ink-muted">
                          {member.initials}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 max-w-[260px] mx-auto lg:mx-0">
                      <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-accent">
                        {member.expertise}
                      </p>
                      <h3 className="text-balance font-serif text-[clamp(1.125rem,1.6vw,1.375rem)] font-normal leading-[1.15] tracking-normal text-ink-primary">
                        {member.name}
                      </h3>
                      <p className="mt-1.5 text-[12px] font-medium leading-[1.4] text-ink-secondary md:text-[13px]">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <p className="text-[14px] leading-[1.75] text-ink-secondary text-justify hyphens-auto md:text-[15px]">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

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
