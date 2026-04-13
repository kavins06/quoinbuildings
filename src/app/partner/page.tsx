import type { Metadata } from "next";

import { FieldDiagram } from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { PartnerForm } from "@/components/partner-form";
import { Reveal } from "@/components/reveal";
import { partnerContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Partner with QUOIN",
  description:
    "Connect with QUOIN if you are helping shape the future of building intelligence across ownership, operations, technology, or finance.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow={partnerContent.hero.label}
        title={partnerContent.hero.title}
        description={partnerContent.hero.description}
        diagram={<FieldDiagram className="mx-auto w-full max-w-[34rem]" />}
      />

      <Reveal>
        <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[2rem] border border-[color:var(--line)] px-6 py-10 sm:px-8 sm:py-12">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Who should reach out
            </p>
            <div className="mt-6 grid gap-4">
              {partnerContent.audiences.map((audience, index) => (
                <article
                  key={audience.title}
                  className="card-hover rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition-colors hover:border-[color:var(--accent)]/30"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--accent-light)] font-mono text-xs font-medium text-[color:var(--accent)]">
                      0{index + 1}
                    </span>
                    <div>
                      <h2 className="font-serif text-xl tracking-[-0.02em] text-[color:var(--text)]">
                        {audience.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                        {audience.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              {partnerContent.note}
            </p>
          </div>

          <PartnerForm />
        </section>
      </Reveal>
    </>
  );
}
