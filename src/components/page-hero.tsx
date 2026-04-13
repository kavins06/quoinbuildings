import { ReactNode } from "react";

import { LinkButton } from "@/components/link-button";
import type { CtaLink } from "@/content/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  diagram?: ReactNode;
  home?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  diagram,
  home = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        home ? "pb-20 pt-14 lg:pb-28 lg:pt-20" : "pb-14 pt-12 lg:pb-20 lg:pt-16"
      }`}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="max-w-3xl">
          <p className="hero-stagger-1 font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">
            {eyebrow}
          </p>

          <div className="hero-stagger-2 mt-3 h-[2px] w-12 rounded-full bg-[color:var(--accent)] hero-line" />

          <h1
            className={`hero-stagger-2 mt-7 text-balance font-serif tracking-[-0.03em] text-[color:var(--text)] ${
              home
                ? "text-[2.75rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
                : "text-[2.5rem] leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            }`}
          >
            {title}
          </h1>

          <p
            className={`hero-stagger-3 mt-7 max-w-2xl text-pretty text-[color:var(--muted)] ${
              home ? "text-lg leading-[1.8] lg:text-xl lg:leading-[1.75]" : "text-lg leading-[1.8]"
            }`}
          >
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="hero-stagger-4 mt-10 flex flex-wrap gap-3">
              {primaryCta ? (
                <LinkButton href={primaryCta.href} label={primaryCta.label} />
              ) : null}
              {secondaryCta ? (
                <LinkButton
                  href={secondaryCta.href}
                  label={secondaryCta.label}
                  variant="secondary"
                />
              ) : null}
            </div>
          )}
        </div>

        {diagram ? (
          <div className="hero-diagram-enter relative lg:justify-self-center">{diagram}</div>
        ) : null}
      </div>

      {/* Bottom decorative border */}
      <div className="absolute inset-x-0 bottom-0 decorative-rule" />
    </section>
  );
}
