import type { Metadata } from "next";

import { FieldDiagram, LayerDiagram } from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { PartnerCTA } from "@/components/partner-cta";
import { PrinciplesGrid } from "@/components/principles-grid";
import { SectionShell } from "@/components/section-shell";
import { visionContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Vision - The next operating model for buildings | QUOIN",
  description:
    "Why buildings need a new intelligence layer, and why physical performance should connect directly to financial performance.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow={visionContent.hero.label}
        title={visionContent.hero.title}
        description={visionContent.hero.description}
        diagram={<FieldDiagram className="mx-auto w-full max-w-[34rem]" />}
      />

      {visionContent.sections.map((section, index) => (
        <SectionShell
          key={section.title}
          label={section.label}
          title={section.title}
          body={section.body}
          tone={index % 2 === 1 ? "soft" : "default"}
          reversed={index % 2 === 1}
          aside={<LayerDiagram className="min-h-[18rem]" />}
        />
      ))}

      <PrinciplesGrid
        label="What QUOIN Believes"
        title="A clear set of principles sits underneath the category."
        items={visionContent.principles}
      />

      <PartnerCTA
        title={visionContent.cta.title}
        body={visionContent.cta.body}
        primary={visionContent.cta.primary}
      />
    </>
  );
}
