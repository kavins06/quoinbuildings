import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { ServicesContent } from "./content"
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "AI Services for Property and Asset Management",
  description:
    "AI strategy, custom agent development, governance architecture, and managed operations for property and asset management firms.",
  path: "/services",
  image: "/header-services.jpg",
  keywords: [
    "AI services property management",
    "AI services asset management",
    "custom AI workflows real estate",
    "managed AI operations",
  ],
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceJsonLd({
            name: "AI Readiness & Strategy",
            description:
              "Workflow mapping, data readiness, use case prioritization, and AI roadmap development for property and asset management firms.",
            path: "/services",
            serviceType: "AI readiness and strategy",
          }),
          serviceJsonLd({
            name: "Custom AI Agent Development",
            description:
              "Purpose-built AI agents for real estate operations, including leasing, maintenance, communication, reporting, and document workflows.",
            path: "/services",
            serviceType: "Custom AI agent development",
          }),
          serviceJsonLd({
            name: "Governance & Compliance Architecture",
            description:
              "AI governance architecture for anti-discrimination compliance, data privacy, audit trails, access control, and bias monitoring.",
            path: "/services",
            serviceType: "AI governance and compliance architecture",
          }),
          serviceJsonLd({
            name: "Managed AI Operations",
            description:
              "Ongoing AI monitoring, model evaluation, workflow expansion, retraining, and performance reporting for real estate operations.",
            path: "/services",
            serviceType: "Managed AI operations",
          }),
        ]}
      />
      <ServicesContent />
    </>
  )
}
