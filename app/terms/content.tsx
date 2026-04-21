"use client"

import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Quoin Buildings website (quoinbuildings.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the site.",
  },
  {
    title: "Description of Services",
    content:
      "Quoin Buildings provides AI consulting and advisory services for property management firms. This website provides information about our services, our team, and our approach, and offers a means to contact us. The content on this site is for informational purposes.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, and design elements, is the property of Quoin Buildings and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this site without our prior written permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "This website and its content are provided on an \u201Cas is\u201D basis without warranties of any kind. Quoin Buildings shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.",
  },
  {
    title: "No Professional Advice",
    content:
      "The content on this website is for general informational purposes and does not constitute legal, financial, technical, or other professional advice. You should consult appropriate professionals for advice specific to your situation before making decisions based on information found on this site.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service are governed by and construed in accordance with the laws of the District of Columbia, United States. Any disputes arising from these terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of the District of Columbia.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about these Terms of Service, contact us at info@quoinbuildings.com. Quoin Buildings, Washington, DC.",
  },
]

export function TermsContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Effective April 2026. These terms govern your use of the Quoin Buildings website."
      />

      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <BlurFade key={section.title} inView direction="up" delay={0.05}>
              <div className="py-8 border-b border-border last:border-b-0">
                <h2 className="text-lg md:text-xl font-normal tracking-tight text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-sm leading-[1.85] text-muted-foreground">
                  {section.content}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="w-10 h-px bg-accent/30" />
        </div>
      </div>
    </main>
  )
}
