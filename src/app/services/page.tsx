import type { Metadata } from "next";

import { ApplicationGroup } from "@/components/application-group";
import { FieldDiagram } from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { servicesContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Services - AI Implementation, Governance & Strategy | QUOIN",
  description:
    "AI implementation and governance built for property management. From readiness assessment through deployment and compliance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesContent.hero.label}
        title={servicesContent.hero.title}
        description={servicesContent.hero.description}
        diagram={<FieldDiagram className="mx-auto w-full max-w-[34rem]" />}
      />

      <div className="space-y-8">
        {servicesContent.groups.map((group, index) => (
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
            {servicesContent.closing.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-[1.8] text-[color:var(--muted-on-dark)]">
            {servicesContent.closing.body}
          </p>
        </section>
      </Reveal>
    </>
  );
}
