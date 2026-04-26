"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export function EditorialBreak() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <BlurFade inView direction="up" className="lg:col-span-7">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
              alt="Modern commercial building facade viewed from below"
              className="w-full aspect-[16/10] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </BlurFade>
        <BlurFade inView delay={0.2} direction="up" className="lg:col-span-4 lg:col-start-9">
          <div className="w-10 h-px bg-accent/40 mb-8" />
          <p className="text-xl md:text-2xl lg:text-[1.65rem] font-normal leading-[1.35] tracking-tight text-foreground text-balance">
            {"\u201CThe firms that succeed will with AI revolution are not the ones that bought the best tool. They are the ones that integrate all workflow through an Intelligence layer, governe the risk, and train the employees for future.\u201D"}
          </p>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Kavin Sakthivel, Founder &amp; CEO
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
