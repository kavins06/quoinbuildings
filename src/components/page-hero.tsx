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
      className={`relative overflow-hidden border-b border-[color:var(--line)] ${
        home ? "pb-16 pt-12 lg:pb-24 lg:pt-16" : "pb-12 pt-10 lg:pb-16 lg:pt-14"
      }`}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
            {eyebrow}
          </p>
          <h1
            className={`mt-6 text-balance font-sans tracking-[-0.06em] text-[color:var(--text)] ${
              home ? "text-5xl leading-[0.92] md:text-6xl lg:text-7xl" : "text-4xl leading-[0.96] md:text-5xl lg:text-6xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-2xl text-pretty text-[color:var(--muted)] ${
              home ? "text-lg leading-8 lg:text-xl" : "text-lg leading-8"
            }`}
          >
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-3">
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
    </section>
  );
}
