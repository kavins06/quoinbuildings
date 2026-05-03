"use client"

import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { DraggableMarquee } from "@/components/ui/draggable-marquee"

const logos = [
  { src: "/logos/georgetown.svg", alt: "Georgetown University" },
  { src: "/logos/dept-of-war.svg", alt: "U.S. Department of War", label: "Department of War" },
  { src: "/logos/dept-of-state.svg", alt: "U.S. Department of State", label: "Department of State" },
  { src: "/logos/odni.svg", alt: "Office of the Director of National Intelligence", label: "Office of Director of\nNational Intelligence" },
  { src: "/logos/nga.svg", alt: "National Geospatial-Intelligence Agency", label: "National Geospatial-\nIntelligence Agency" },
  { src: "/logos/leidos.svg", alt: "Leidos" },
  { src: "/logos/cgi.svg", alt: "CGI Federal", label: "CGI Federal" },
  { src: "/logos/nar.svg", alt: "National Association of Realtors" },
  { src: "/logos/newpoint.svg", alt: "NewPoint Real Estate Capital" },
  { src: "/logos/gmf.svg", alt: "German Marshall Fund", label: "German Marshall Fund" },
  { src: "/logos/enabled-intelligence.png", alt: "Enabled Intelligence", label: "Enabled Intelligence" },
]

function LogoItem({ logo, compact = false }: { logo: typeof logos[number]; compact?: boolean }) {
  return (
    <div
      className={[
        "flex flex-col items-center justify-start shrink-0",
        compact ? "mx-5 h-16" : "mx-8 h-28",
      ].join(" ")}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={compact ? 80 : 160}
        height={compact ? 28 : 64}
        draggable={false}
        className={[
          "w-auto object-contain grayscale opacity-85 hover:opacity-100",
          "transition-opacity duration-300 select-none pointer-events-none",
          compact ? "h-7" : "h-16",
        ].join(" ")}
      />
      {logo.label ? (
        <p
          className={[
            "mt-2 text-center uppercase text-ink-muted/70 whitespace-pre-line select-none",
            compact
              ? "text-[9px] tracking-[0.15em] leading-tight"
              : "text-[10px] tracking-[0.15em] leading-tight",
          ].join(" ")}
        >
          {logo.label}
        </p>
      ) : null}
    </div>
  )
}

export function EditorialBreak() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="bg-surface-base py-20 md:py-28 border-t border-strong"
    >
      <div className="container-shell">
        <BlurFade inView direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent mb-6">
                Proof of execution
              </p>
              <h2
                id="proof-heading"
                className="font-serif text-[clamp(2rem,4.5vw,2.625rem)] leading-[1.1] tracking-[-0.02em] text-ink-primary font-normal text-balance"
              >
                Experience from public institutions, real estate, and
                mission-critical operations.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 measure text-[17px] leading-[1.55] text-ink-secondary">
              Quoin brings together real estate operating context, AI delivery,
              and the governance habits learned in environments where sloppy
              systems do not survive contact with the work.
            </p>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.1} direction="up">
          <div className="relative border-y border-strong py-8 md:py-10">
            <div className="hidden md:flex flex-col gap-6">
              <DraggableMarquee duration={55}>
                {logos.slice(0, 6).map((logo) => (
                  <LogoItem key={logo.alt} logo={logo} />
                ))}
              </DraggableMarquee>
              <DraggableMarquee duration={55} reverse>
                {logos.slice(6).map((logo) => (
                  <LogoItem key={logo.alt} logo={logo} />
                ))}
              </DraggableMarquee>
            </div>

            <div className="md:hidden flex flex-col gap-4">
              <DraggableMarquee duration={40}>
                {logos.slice(0, 6).map((logo) => (
                  <LogoItem key={logo.alt} logo={logo} compact />
                ))}
              </DraggableMarquee>
              <DraggableMarquee duration={40} reverse>
                {logos.slice(6).map((logo) => (
                  <LogoItem key={logo.alt} logo={logo} compact />
                ))}
              </DraggableMarquee>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-surface-base to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-surface-base to-transparent" />
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} direction="up">
          <figure className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="hidden lg:block lg:col-span-3 border-t border-strong" aria-hidden="true" />
            <div className="lg:col-span-8 lg:col-start-5">
              <blockquote className="font-serif text-[clamp(1.75rem,3.5vw,2.625rem)] leading-[1.15] tracking-[-0.02em] text-ink-primary text-balance">
                The firms that succeed with AI will not be the ones that buy the
                most tools. They will be the ones that turn AI into governed
                workflows, connect it to how work actually runs, and train their
                teams to operate it.
              </blockquote>
              <figcaption className="mt-8 text-[11px] font-medium tracking-[0.16em] uppercase text-ink-muted">
                Kavin Sakthivel, CEO &amp; Chief Engineer
              </figcaption>
            </div>
          </figure>
        </BlurFade>
      </div>
    </section>
  )
}
