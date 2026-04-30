import Link from "next/link"
import { CookiePreferencesLink } from "@/components/cookie-preferences-link"

const companyLinks = [
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Perspectives", href: "/perspectives" },
]

const solutionLinks = [
  { label: "AI for Property Management", href: "/ai-for-property-management" },
  { label: "AI for Asset Management", href: "/ai-for-asset-management" },
  { label: "Managed AI Operations", href: "/managed-ai-operations" },
  { label: "AI Operating Partner", href: "/property-management-ai-software-vs-operating-partner" },
  { label: "Maintenance Triage", href: "/ai-maintenance-triage-property-management" },
  { label: "Leasing Automation", href: "/ai-leasing-automation-property-management" },
  { label: "AI Readiness", href: "/ai-readiness-property-management" },
  { label: "AI Governance", href: "/ai-governance-property-management" },
]

const trustLinks = [
  { label: "Governance", href: "/governance" },
  { label: "Methodology", href: "/approach#methodology" },
  { label: "Responsible AI", href: "/responsible-ai" },
  { label: "Data Security", href: "/data-security" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Report a Concern", href: "mailto:ethics@quoinbuildings.com" },
]

export function Footer() {
  return (
    <footer className="bg-surface-sunken border-t border-subtle">
      <div className="container-shell py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-ink-primary"
            >
              QUOIN
            </Link>
            <p className="text-sm text-ink-secondary leading-relaxed mt-5 max-w-xs">
              Your AI Operating Partner
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
              Company
            </p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
              AI Solutions
            </p>
            <div className="flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
              Trust &amp; Governance
            </p>
            <div className="flex flex-col gap-3">
              {trustLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <CookiePreferencesLink />
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:kavins@quoinbuildings.com"
                className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
              >
                kavins@quoinbuildings.com
              </a>
              <a
                href="https://linkedin.com/company/quoinbuildings"
                rel="noopener"
                target="_blank"
                className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
              >
                LinkedIn
              </a>
              <p className="text-sm text-ink-muted leading-relaxed mt-2 md:whitespace-nowrap">
                For partnership inquiries, use{" "}
                <Link href="/contact" className="underline decoration-accent underline-offset-4">
                  Talk to us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-6 border-t border-subtle">
          <p className="text-[12px] text-ink-muted">
            © 2026 Quoin Buildings, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
