"use client"

import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly through our contact form: your name, email address, company name, portfolio size (if provided), and the content of your message. We also collect anonymized website usage data through standard analytics tools to understand how visitors use our site. We do not use tracking cookies beyond those essential for site functionality.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information you provide to respond to your inquiries, schedule and conduct discovery conversations, and improve our website and services. We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell or share your personal information except in the following limited circumstances: with service providers who assist us in operating our website and business (such as email and hosting providers), and as required by law or to protect our legal rights.",
  },
  {
    title: "Data Retention",
    content:
      "Contact form submissions are retained for the duration of any business relationship and for two years following its conclusion. Website analytics data is anonymized and aggregated. You may request deletion of your personal information at any time by contacting us.",
  },
  {
    title: "Your Rights",
    content:
      "You may request access to, correction of, or deletion of your personal information by contacting us at kavins@quoinbuildings.com. California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale of personal information. We do not sell personal information.",
  },
  {
    title: "Security",
    content:
      "We implement reasonable administrative, technical, and physical security measures to protect the information we collect. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about this privacy policy or our data practices, contact us at kavins@quoinbuildings.com.",
  },
]

export function PrivacyContent() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Effective April 2026. This policy describes how Quoin Buildings collects, uses, and protects information through this website."
      />

      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <BlurFade key={section.title} inView direction="up" delay={0.05}>
              <div className="py-8 border-b border-border last:border-b-0">
                <h2 className="text-lg md:text-xl font-normal tracking-normal text-foreground mb-4">
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
