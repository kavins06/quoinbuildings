"use client"

import Image from "next/image"
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
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`object-cover ${imageGrayscale ? "grayscale" : ""}`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
          />
        </>
      )}
      <div className={cn("relative z-10 max-w-4xl", contentClassName)}>
        <BlurFade delay={0.2} direction="up">
          <p
            className={cn(
              "text-[11px] tracking-[0.3em] uppercase mb-6",
              backgroundImage ? "text-white/75" : "text-ink-muted",
            )}
          >
            {eyebrow}
          </p>
        </BlurFade>

        <BlurFade delay={0.4} direction="up" offset={6}>
          <h1
            className={cn(
              "text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-balance",
              backgroundImage ? "text-white" : "text-ink-primary",
            )}
          >
            {title}
          </h1>
        </BlurFade>

        {description && (
          <BlurFade delay={0.6} direction="up">
            <p
              className={cn(
                "mt-6 text-base font-light leading-relaxed max-w-2xl",
                backgroundImage ? "text-white/85" : "text-ink-secondary",
              )}
            >
              {description}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  )
}
