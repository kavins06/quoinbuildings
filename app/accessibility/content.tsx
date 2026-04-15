"use client"

import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const sections = [
  {
    title: "Our Standard",
    content:
      "We are working toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 at the AA level. These guidelines, published by the World Wide Web Consortium (W3C), define requirements for making web content accessible to people with a wide range of disabilities, including visual, auditory, motor, and cognitive impairments.",
  },
  {
    title: "Current Efforts",
    content:
      "Our website is built with semantic HTML structure and proper heading hierarchy. We support keyboard navigation throughout the site. Color contrast ratios meet WCAG AA standards. Meaningful images include descriptive alt text. The site is fully responsive and functions across screen sizes and zoom levels. Form fields include labels and clear instructions.",
  },
  {
    title: "Known Limitations",
    content:
      "As a growing site, we are continuously improving our accessibility. Some interactive elements or third-party content may not yet fully conform to WCAG 2.2 AA. We are actively working to identify and address these gaps.",
  },
  {
    title: "Feedback and Contact",
    content:
      "We welcome feedback on the accessibility of our website. If you encounter a barrier or have suggestions for improvement, please contact us at info@quoinbuildings.com. We will respond within five business days and work to address the issue promptly.",
  },
  {
    title: "Ongoing Improvement",
    content:
      "We review our site regularly, test with assistive technologies, and update our approach as accessibility standards evolve. Accessibility is not a one-time effort but a continuous commitment to ensuring our site serves all users effectively.",
  },
]

export function AccessibilityContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Accessibility"
        title="Our commitment to an accessible experience."
        description="Quoin is committed to ensuring our website is accessible to all users, including people with disabilities."
      />

      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <BlurFade key={section.title} inView direction="up" delay={0.05}>
              <div className="py-8 border-b border-border last:border-b-0">
                <h2 className="text-lg md:text-xl font-extralight tracking-tight text-foreground mb-4">
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
