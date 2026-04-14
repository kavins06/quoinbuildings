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
import { whyPMContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Why Property Management - AI challenges that demand domain expertise | QUOIN",
  description:
    "Generic AI advice fails in property management. Tenant data, fair housing, vendor fragmentation, and workforce readiness demand specific expertise.",
};

const sectionDiagrams = [
  <DynamicBuildingDiagram key="dynamic" className="h-full min-h-[18rem]" />,
  <DataFragmentDiagram key="fragment" className="h-full min-h-[18rem]" />,
  <LegacyStackDiagram key="legacy" className="h-full min-h-[18rem]" />,
  <EmergingStackDiagram key="emerging" className="h-full min-h-[18rem]" />,
];

const sectionTones: Array<"default" | "soft" | "dark"> = ["default", "soft", "default", "soft"];

export default function WhyPropertyManagementPage() {
  return (
    <>
      <PageHero
        eyebrow={whyPMContent.hero.label}
        title={whyPMContent.hero.title}
        description={whyPMContent.hero.description}
        diagram={<FieldDiagram className="mx-auto w-full max-w-[34rem]" />}
      />

      {whyPMContent.sections.map((section, index) => (
        <Reveal key={section.title}>
          <SectionShell
            label={section.label}
            title={section.title}
            body={section.body}
            tone={sectionTones[index]}
            reversed={index % 2 === 1}
            quoin={index === 0}
            aside={sectionDiagrams[index]}
          />
        </Reveal>
      ))}

      <Reveal>
        <PrinciplesGrid
          label="Our Approach"
          title="Principles that guide every QUOIN engagement."
          items={whyPMContent.principles}
        />
      </Reveal>

      <Reveal>
        <PartnerCTA
          title={whyPMContent.cta.title}
          body={whyPMContent.cta.body}
          primary={whyPMContent.cta.primary}
        />
      </Reveal>
    </>
  );
}
