import type { Metadata } from "next";

import { ApplicationGroup } from "@/components/application-group";
import { FieldDiagram } from "@/components/architectural-diagrams";
import { PageHero } from "@/components/page-hero";
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

      <div className="space-y-6">
        {applicationsContent.groups.map((group, index) => (
          <ApplicationGroup key={group.id} group={group} index={index} />
        ))}
      </div>

      <section className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-12 sm:px-8 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Closing note
        </p>
        <h2 className="mt-5 text-balance text-3xl tracking-[-0.05em] text-[color:var(--text)] md:text-4xl">
          {applicationsContent.closing.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
          {applicationsContent.closing.body}
        </p>
      </section>
    </>
  );
}
