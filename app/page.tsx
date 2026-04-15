import { Hero } from "@/components/hero"
import { ProofStrip } from "@/components/proof-strip"
import { ProjectsSection } from "@/components/projects-section"
import { EditorialBreak } from "@/components/editorial-break"
import { StudioSection } from "@/components/studio-section"
import { ApproachSection } from "@/components/approach-section"
import { JournalSection } from "@/components/journal-section"
import { PerspectivesTeaser } from "@/components/perspectives-teaser"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <ProjectsSection />
      <EditorialBreak />
      <StudioSection />
      <ApproachSection />
      <JournalSection />
      <PerspectivesTeaser />
      <ContactSection />
    </main>
  )
}
