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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <BlurFade inView direction="up" className="lg:col-span-7">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-8">
            Experience From
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 items-center">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-16 md:h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </BlurFade>
        <BlurFade inView delay={0.2} direction="up" className="lg:col-span-4 lg:col-start-9">
          <div className="w-10 h-px bg-accent/40 mb-8" />
          <p className="text-xl md:text-2xl lg:text-[1.65rem] font-normal leading-[1.35] tracking-tight text-foreground text-balance">
            {"“The firms that will succeed in the AI revolution are not the ones that buy the best tools. They are the ones that integrate all workflows through an intelligence layer, govern the risk, and train their employees for the future.”"}
          </p>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Kavin Sakthivel, CEO &amp; Chief Engineer
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
