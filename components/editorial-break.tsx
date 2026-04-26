"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"

const logos = [
  { src: "/logos/georgetown.svg", alt: "Georgetown University" },
  { src: "/logos/dept-of-war.svg", alt: "U.S. Department of War", label: "Dept. of War" },
  { src: "/logos/dept-of-state.svg", alt: "U.S. Department of State", label: "Dept. of State" },
  { src: "/logos/odni.svg", alt: "Office of the Director of National Intelligence", label: "ODNI" },
  { src: "/logos/leidos.svg", alt: "Leidos", label: "Leidos" },
  { src: "/logos/cgi.svg", alt: "CGI Federal", label: "CGI Federal" },
  { src: "/logos/nar.svg", alt: "National Association of Realtors" },
  { src: "/logos/newpoint.svg", alt: "NewPoint Real Estate Capital" },
  { src: "/logos/gmf.svg", alt: "German Marshall Fund", label: "German Marshall Fund" },
  { src: "/logos/enabled-intelligence.png", alt: "Enabled Intelligence", label: "Enabled Intelligence" },
]

export function EditorialBreak() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <BlurFade inView direction="up">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-10 text-center">
          Expertise from
        </p>
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: two rows, second reversed */}
          <div className="hidden md:flex flex-col gap-6">
            <Marquee pauseOnHover className="[--duration:55s] [--gap:4rem]">
              {logos.slice(0, 5).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-end mx-8 h-20">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  {logo.label && (
                    <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-nowrap">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:55s] [--gap:4rem]">
              {logos.slice(5).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-end mx-8 h-20">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  {logo.label && (
                    <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-nowrap">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </Marquee>
          </div>

          {/* Mobile: two rows, second reversed */}
          <div className="md:hidden flex flex-col gap-4">
            <Marquee pauseOnHover className="[--duration:40s] [--gap:2.5rem]">
              {logos.slice(0, 5).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-end mx-6 h-16">
                  <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain opacity-90" />
                  {logo.label && (
                    <p className="mt-1.5 text-[9px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-nowrap">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:2.5rem]">
              {logos.slice(5).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-end mx-6 h-16">
                  <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain opacity-90" />
                  {logo.label && (
                    <p className="mt-1.5 text-[9px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-nowrap">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent" />
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
