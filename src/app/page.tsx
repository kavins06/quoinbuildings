import type { Metadata } from "next";

import { ApplicationPreview } from "@/components/application-preview";
import {
  GapDiagram,
  HeroDiagram,
  LayerDiagram,
  TimelineDiagram,
} from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { PartnerCTA } from "@/components/partner-cta";
import { SectionShell } from "@/components/section-shell";
import { homeContent } from "@/content/site";

export const metadata: Metadata = {
  title: "QUOIN - Building performance should connect directly to financial performance",
  description:
    "QUOIN is building a new intelligence layer for the built environment, connecting physical building performance to cost, risk, and asset value.",
};

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        description={homeContent.hero.description}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
        diagram={<HeroDiagram className="mx-auto w-full max-w-[38rem]" />}
        home
      />

      <SectionShell
        label={homeContent.problem.label}
        title={homeContent.problem.title}
        body={homeContent.problem.body}
        support={homeContent.problem.support}
        aside={<GapDiagram className="h-full min-h-[20rem]" />}
      />

      <SectionShell
        label={homeContent.whyNow.label}
        title={homeContent.whyNow.title}
        body={homeContent.whyNow.body}
        support={homeContent.whyNow.support}
        aside={<TimelineDiagram className="h-full min-h-[18rem]" />}
        tone="soft"
        reversed
      />

      <SectionShell
        label={homeContent.layer.label}
        title={homeContent.layer.title}
        body={homeContent.layer.body}
        aside={<LayerDiagram className="h-full min-h-[22rem]" />}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {homeContent.layer.blocks.map((block, index) => (
            <article
              key={block.title}
              className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-2xl tracking-[-0.04em] text-[color:var(--text)]">
                {block.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                {block.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <ApplicationPreview
        label={homeContent.applications.label}
        title={homeContent.applications.title}
        body={homeContent.applications.body}
        cards={homeContent.applications.cards}
      />

      <section className="rounded-[2.25rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
            {homeContent.conviction.label}
          </p>
          <h2 className="mt-6 text-balance text-4xl leading-[0.95] tracking-[-0.06em] text-[color:var(--text)] md:text-5xl lg:text-6xl">
            {homeContent.conviction.title}
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--muted)] lg:text-xl">
            {homeContent.conviction.body}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.1em] text-[color:var(--text)]/72">
            {homeContent.conviction.support}
          </p>
        </div>
      </section>

      <PartnerCTA
        title={homeContent.partnerCta.title}
        body={homeContent.partnerCta.body}
        primary={homeContent.partnerCta.primary}
        secondary={homeContent.partnerCta.secondary}
      />
    </>
  );
}
