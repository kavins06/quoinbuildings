"use client"

import { BlurFade } from "@/components/ui/blur-fade"

const logos = [
  { src: "/logos/georgetown.svg", alt: "Georgetown University" },
  { src: "/logos/dept-of-war.svg", alt: "U.S. Department of War" },
  { src: "/logos/dept-of-state.svg", alt: "U.S. Department of State" },
  { src: "/logos/odni.svg", alt: "Office of the Director of National Intelligence" },
  { src: "/logos/leidos.svg", alt: "Leidos" },
  { src: "/logos/cgi.svg", alt: "CGI Federal" },
  { src: "/logos/nar.svg", alt: "National Association of Realtors" },
  { src: "/logos/newpoint.svg", alt: "NewPoint Real Estate Capital" },
  { src: "/logos/gmf.svg", alt: "German Marshall Fund of the United States" },
  { src: "/logos/enabled-intelligence.svg", alt: "Enabled Intelligence" },
]

export function EditorialBreak() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <BlurFade inView direction="up">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-10 text-center">
          Experience From
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center max-w-6xl mx-auto">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          ))}
        </div>
      </BlurFade>

      <BlurFade inView delay={0.2} direction="up">
        <div className="mt-20 md:mt-28 max-w-3xl mx-auto text-center">
          <div className="w-10 h-px bg-accent/40 mb-8 mx-auto" />
          <p className="text-xl md:text-2xl lg:text-[1.65rem] font-normal leading-[1.35] tracking-tight text-foreground text-balance">
            {"“The firms that will succeed in the AI revolution are not the ones that buy the best tools. They are the ones that integrate all workflows through an intelligence layer, govern the risk, and train their employees for the future.”"}
          </p>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Kavin Sakthivel, CEO &amp; Chief Engineer
          </p>
        </div>
      </BlurFade>
    </section>
  )
}
