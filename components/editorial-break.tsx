"use client"

import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"
import { DraggableMarquee } from "@/components/ui/draggable-marquee"
import { AuroraText } from "@/components/ui/aurora-text"

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

export function EditorialBreak() {
  return (
    <section className="px-6 md:px-12 lg:px-20 pt-4 pb-12 md:pt-6 md:pb-16 -mt-4 md:mt-0">
      <BlurFade inView direction="up">
        <h2 className="font-serif text-[11px] md:text-sm font-normal uppercase tracking-[0.2em] mb-8 md:mb-12 md:-mt-6 text-center">
          <AuroraText>Bringing Expertise From</AuroraText>
        </h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: two rows, second reversed */}
          <div className="hidden md:flex flex-col gap-6">
            <DraggableMarquee duration={55}>
              {logos.slice(0, 6).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-start mx-8 h-28 shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    draggable={false}
                    className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 select-none pointer-events-none"
                  />
                  {logo.label && (
                    <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-pre-line text-center leading-tight select-none">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </DraggableMarquee>
            <DraggableMarquee duration={55} reverse>
              {logos.slice(6).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-start mx-8 h-28 shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    draggable={false}
                    className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 select-none pointer-events-none"
                  />
                  {logo.label && (
                    <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-pre-line text-center leading-tight select-none">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </DraggableMarquee>
          </div>

          {/* Mobile: two rows, second reversed */}
          <div className="md:hidden flex flex-col gap-4">
            <DraggableMarquee duration={40}>
              {logos.slice(0, 6).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-start mx-5 h-16 shrink-0">
                  <Image src={logo.src} alt={logo.alt} width={80} height={28} draggable={false} className="h-7 w-auto object-contain opacity-90 select-none pointer-events-none" />
                  {logo.label && (
                    <p className="mt-1.5 text-[9px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-pre-line text-center leading-tight select-none">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </DraggableMarquee>
            <DraggableMarquee duration={40} reverse>
              {logos.slice(6).map((logo) => (
                <div key={logo.alt} className="flex flex-col items-center justify-start mx-5 h-16 shrink-0">
                  <Image src={logo.src} alt={logo.alt} width={80} height={28} draggable={false} className="h-7 w-auto object-contain opacity-90 select-none pointer-events-none" />
                  {logo.label && (
                    <p className="mt-1.5 text-[9px] tracking-[0.15em] uppercase text-muted-foreground/70 whitespace-pre-line text-center leading-tight select-none">
                      {logo.label}
                    </p>
                  )}
                </div>
              ))}
            </DraggableMarquee>
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
