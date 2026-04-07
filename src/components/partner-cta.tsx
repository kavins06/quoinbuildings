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
    <section className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div className="absolute inset-y-6 left-6 right-6 rounded-[1.75rem] border border-[color:rgba(216,210,199,0.55)]" />
      <div className="relative max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Partner
        </p>
        <h2 className="mt-5 text-balance text-3xl tracking-[-0.05em] text-[color:var(--text)] md:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
          {body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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
