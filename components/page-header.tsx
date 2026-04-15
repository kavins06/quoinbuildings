"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-foreground text-background px-6 pt-32 pb-20 md:px-12 lg:px-20 md:pt-40 md:pb-28">
      <div className="max-w-4xl">
        <BlurFade delay={0.2} direction="up">
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-6">
            {eyebrow}
          </p>
        </BlurFade>

        <BlurFade delay={0.4} direction="up" offset={6}>
          <TextAnimate
            as="h1"
            animation="blurIn"
            by="word"
            once
            duration={0.5}
            className="text-[clamp(2rem,5vw,3.5rem)] font-extralight leading-[1.1] tracking-[-0.02em] text-background text-balance"
          >
            {title}
          </TextAnimate>
        </BlurFade>

        {description && (
          <BlurFade delay={0.6} direction="up">
            <p className="mt-6 text-base font-light leading-relaxed text-background/50 max-w-2xl">
              {description}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  )
}
