import type { Metadata } from "next";

import { ApplicationPreview } from "@/components/application-preview";
import {
  GapDiagram,
  HeroDiagram,
  LayerDiagram,
  TimelineDiagram,
  ValueFlowDiagram,
} from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { PartnerCTA } from "@/components/partner-cta";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { credibilitySignals, homeContent } from "@/content/site";

export const metadata: Metadata = {
  title: "QUOIN \u2014 AI Implementation & Governance for Property Management",
  description:
    "QUOIN helps property management companies implement AI and govern it responsibly \u2014 with the domain expertise that generic consultants lack.",
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
        diagram={<HeroDiagram className="w-full min-w-[28rem] lg:min-w-[36rem]" />}
        home
      />

      {/* Credibility signals */}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-4 text-center">
        {credibilitySignals.map((signal, i) => (
          <span key={signal} className="flex items-center gap-10">
            {i > 0 && <span className="h-4 w-px bg-[color:var(--line)]" />}
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
              {signal}
            </span>
          </span>
        ))}
      </div>

      <Reveal>
        <SectionShell
          label={homeContent.problem.label}
          title={homeContent.problem.title}
          body={homeContent.problem.body}
          support={homeContent.problem.support}
          aside={<GapDiagram className="h-full min-h-[20rem]" />}
        />
      </Reveal>

      <Reveal>
        <SectionShell
          label={homeContent.whyNow.label}
          title={homeContent.whyNow.title}
          body={homeContent.whyNow.body}
          support={homeContent.whyNow.support}
          aside={<TimelineDiagram className="h-full min-h-[18rem]" />}
          tone="soft"
          reversed
        />
      </Reveal>

      <Reveal>
        <SectionShell
          label={homeContent.layer.label}
          title={homeContent.layer.title}
          body={homeContent.layer.body}
          aside={<LayerDiagram className="h-full min-h-[22rem]" />}
          variant="highlight"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {homeContent.layer.blocks.map((block, index) => (
              <article
                key={block.title}
                className="card-hover rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6"
              >
                <p className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--accent-light)] font-mono text-xs font-medium text-[color:var(--accent)]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-serif text-2xl tracking-[-0.02em] text-[color:var(--text)]">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>
      </Reveal>

      <Reveal>
        <ApplicationPreview
          label={homeContent.applications.label}
          title={homeContent.applications.title}
          body={homeContent.applications.body}
          cards={homeContent.applications.cards}
        />
      </Reveal>

      <Reveal>
        <section className="section-dark quoin-border-accent rounded-[2.25rem] border border-[color:var(--line-on-dark)] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-gold)]">
                {homeContent.conviction.label}
              </p>
              <h2 className="mt-6 text-balance font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-[color:var(--text-on-dark)] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                {homeContent.conviction.title}
              </h2>
              <p className="mt-8 text-lg leading-[1.8] text-[color:var(--muted-on-dark)]">
                {homeContent.conviction.body}
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.1em] text-[color:var(--muted-on-dark)]">
                {homeContent.conviction.support}
              </p>
            </div>
            <ValueFlowDiagram className="h-full min-h-[20rem]" />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <PartnerCTA
          title={homeContent.partnerCta.title}
          body={homeContent.partnerCta.body}
          primary={homeContent.partnerCta.primary}
          secondary={homeContent.partnerCta.secondary}
        />
      </Reveal>
    </>
  );
}
