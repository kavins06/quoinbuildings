import type { Metadata } from "next";

import { ApplicationGroup } from "@/components/application-group";
import { FieldDiagram } from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { applicationsContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Applications - Efficiency, risk, and asset performance | QUOIN",
  description:
    "How one intelligence layer can shape decisions across building efficiency, risk, sustainability, and long-term asset performance.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow={applicationsContent.hero.label}
        title={applicationsContent.hero.title}
        description={applicationsContent.hero.description}
        diagram={<FieldDiagram className="mx-auto w-full max-w-[34rem]" />}
      />

      <div className="space-y-8">
        {applicationsContent.groups.map((group, index) => (
          <Reveal key={group.id}>
            <ApplicationGroup group={group} index={index} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <section className="section-dark rounded-[2rem] border border-[color:var(--line-on-dark)] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-gold)]">
            Closing note
          </p>
          <h2 className="mt-5 text-balance font-serif text-[1.75rem] tracking-[-0.02em] text-[color:var(--text-on-dark)] sm:text-3xl md:text-4xl">
            {applicationsContent.closing.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-[1.8] text-[color:var(--muted-on-dark)]">
            {applicationsContent.closing.body}
          </p>
        </section>
      </Reveal>
    </>
  );
}
