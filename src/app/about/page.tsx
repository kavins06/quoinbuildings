import type { Metadata } from "next";

import { FieldDiagram } from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { PartnerCTA } from "@/components/partner-cta";
import { PrinciplesGrid } from "@/components/principles-grid";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { TeamSection } from "@/components/team-section";
import { aboutContent, teamContent } from "@/content/site";

export const metadata: Metadata = {
  title: "About QUOIN - Why we exist",
  description:
    "QUOIN exists because property management firms deserve AI advisory that understands their world, not generic consulting.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.hero.label}
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
        diagram={<FieldDiagram className="mx-auto w-full max-w-[34rem]" />}
      />

      <Reveal>
        <SectionShell
          label={aboutContent.sections[0].label}
          title={aboutContent.sections[0].title}
          body={aboutContent.sections[0].body}
          aside={<FieldDiagram className="min-h-[18rem]" />}
          quoin
        />
      </Reveal>

      <Reveal>
        <SectionShell
          label={aboutContent.sections[1].label}
          title={aboutContent.sections[1].title}
          body={aboutContent.sections[1].body}
          tone="soft"
          reversed
          aside={<FieldDiagram className="min-h-[18rem]" />}
        />
      </Reveal>

      <Reveal>
        <TeamSection
          label={teamContent.label}
          title={teamContent.title}
          members={teamContent.members}
        />
      </Reveal>

      <Reveal>
        <PrinciplesGrid
          label="Principles"
          title="How QUOIN thinks about the company it is becoming."
          items={aboutContent.principles}
        />
      </Reveal>

      <Reveal>
        <section className="section-dark quoin-border-accent rounded-[2rem] border border-[color:var(--line-on-dark)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          {/* Accent glow */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--accent-gold)] opacity-[0.05] blur-3xl" />

          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-gold)]">
            Brand note
          </p>
          <h2 className="mt-5 text-balance font-serif text-[1.75rem] tracking-[-0.02em] text-[color:var(--text-on-dark)] sm:text-3xl md:text-4xl">
            {aboutContent.brandNote.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-[1.8] text-[color:var(--muted-on-dark)]">
            {aboutContent.brandNote.body}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <PartnerCTA
          title={aboutContent.cta.title}
          body={aboutContent.cta.body}
          primary={aboutContent.cta.primary}
        />
      </Reveal>
    </>
  );
}
