"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  backgroundImage?: string
  imageGrayscale?: boolean
  className?: string
  contentClassName?: string
}

export function PageHeader({
  eyebrow,
  title,
  description,
  backgroundImage,
  imageGrayscale,
  className,
  contentClassName,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative flex h-[45vh] flex-col justify-end overflow-hidden bg-surface-base px-6 pt-32 pb-20 text-ink-primary md:h-[50vh] md:px-12 md:pt-40 md:pb-28 lg:px-20",
        className,
      )}
    >
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${imageGrayscale ? "grayscale" : ""}`}
        />
      )}
      <div className={cn("relative z-10 max-w-4xl", contentClassName)}>
        <BlurFade delay={0.2} direction="up">
          <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted mb-6">
            {eyebrow}
          </p>
        </BlurFade>

        <BlurFade delay={0.4} direction="up" offset={6}>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink-primary text-balance">
            {title}
          </h1>
        </BlurFade>

        {description && (
          <BlurFade delay={0.6} direction="up">
            <p className="mt-6 text-base font-light leading-relaxed text-ink-secondary max-w-2xl">
              {description}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  )
}
