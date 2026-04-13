import type { Metadata } from "next";

import {
  DynamicBuildingDiagram,
  DataFragmentDiagram,
  LegacyStackDiagram,
  EmergingStackDiagram,
  FieldDiagram,
} from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
import { PartnerCTA } from "@/components/partner-cta";
import { PrinciplesGrid } from "@/components/principles-grid";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { visionContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Vision - The next operating model for buildings | QUOIN",
  description:
    "Why buildings need a new intelligence layer, and why physical performance should connect directly to financial performance.",
};

const sectionDiagrams = [
  <DynamicBuildingDiagram key="dynamic" className="h-full min-h-[18rem]" />,
  <DataFragmentDiagram key="fragment" className="h-full min-h-[18rem]" />,
  <LegacyStackDiagram key="legacy" className="h-full min-h-[18rem]" />,
  <EmergingStackDiagram key="emerging" className="h-full min-h-[18rem]" />,
];

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
        <Reveal key={section.title}>
          <SectionShell
            label={section.label}
            title={section.title}
            body={section.body}
            tone={index % 2 === 1 ? "soft" : "default"}
            reversed={index % 2 === 1}
            quoin={index === 0}
            aside={sectionDiagrams[index]}
          />
        </Reveal>
      ))}

      <Reveal>
        <PrinciplesGrid
          label="What QUOIN Believes"
          title="A clear set of principles sits underneath the category."
          items={visionContent.principles}
        />
      </Reveal>

      <Reveal>
        <PartnerCTA
          title={visionContent.cta.title}
          body={visionContent.cta.body}
          primary={visionContent.cta.primary}
        />
      </Reveal>
    </>
  );
}
