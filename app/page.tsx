import { Hero } from "@/components/hero"
import { ProofStrip } from "@/components/proof-strip"
import { ProjectsSection } from "@/components/projects-section"
import { EditorialBreak } from "@/components/editorial-break"
import { WhySection } from "@/components/why-section"
import { PrinciplesSection } from "@/components/principles-section"
import { StudioSection } from "@/components/studio-section"
import { ApproachSection } from "@/components/approach-section"
import { PerspectivesTeaser } from "@/components/perspectives-teaser"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <ProjectsSection />
      <EditorialBreak />
      <WhySection />
      <PrinciplesSection />
      <StudioSection />
      <ApproachSection />
      <PerspectivesTeaser />
      <ContactSection />
    </main>
  )
}
