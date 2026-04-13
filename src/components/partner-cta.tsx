import { LinkButton } from "@/components/link-button";
import type { CtaLink } from "@/content/site";

type PartnerCtaProps = {
  title: string;
  body: string;
  primary: CtaLink;
  secondary?: CtaLink;
};

export function PartnerCTA({
  title,
  body,
  primary,
  secondary,
}: PartnerCtaProps) {
  return (
    <section className="section-dark quoin-corner relative overflow-hidden border border-[color:var(--line-on-dark)] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
      {/* Decorative inner border */}
      <div className="absolute inset-y-5 left-5 right-5 rounded-[1.5rem] border border-white/[0.05]" />

      {/* Accent glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[color:var(--accent)] opacity-[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[color:var(--accent-warm)] opacity-[0.04] blur-3xl" />

      <div className="relative max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-gold)]">
          Partner
        </p>
        <h2 className="mt-5 text-balance font-serif text-3xl tracking-[-0.02em] text-[color:var(--text-on-dark)] md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-[1.8] text-[color:var(--muted-on-dark)]">
          {body}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <LinkButton href={primary.href} label={primary.label} />
          {secondary ? (
            <LinkButton
              href={secondary.href}
              label={secondary.label}
              variant="secondary"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
