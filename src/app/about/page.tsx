import type { Metadata } from "next";

import { FieldDiagram, GapDiagram } from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { PartnerCTA } from "@/components/partner-cta";
import { PrinciplesGrid } from "@/components/principles-grid";
import { SectionShell } from "@/components/section-shell";
import { aboutContent } from "@/content/site";

export const metadata: Metadata = {
  title: "About QUOIN - Why we exist",
  description:
    "QUOIN is building a foundational layer for building intelligence with a focus on clarity, economics, and broad accessibility.",
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

      <SectionShell
        label={aboutContent.sections[0].label}
        title={aboutContent.sections[0].title}
        body={aboutContent.sections[0].body}
        aside={<GapDiagram className="min-h-[18rem]" />}
      />

      <SectionShell
        label={aboutContent.sections[1].label}
        title={aboutContent.sections[1].title}
        body={aboutContent.sections[1].body}
        tone="soft"
        reversed
        aside={<FieldDiagram className="min-h-[18rem]" />}
      />

      <PrinciplesGrid
        label="Principles"
        title="How QUOIN thinks about the company it is becoming."
        items={aboutContent.principles}
      />

      <section className="rounded-[2rem] border border-[color:var(--line)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Brand note
        </p>
        <h2 className="mt-5 text-balance text-3xl tracking-[-0.05em] text-[color:var(--text)] md:text-4xl">
          {aboutContent.brandNote.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
          {aboutContent.brandNote.body}
        </p>
      </section>

      <PartnerCTA
        title={aboutContent.cta.title}
        body={aboutContent.cta.body}
        primary={aboutContent.cta.primary}
      />
    </>
  );
}
