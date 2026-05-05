import Link from "next/link"
import { CookiePreferencesLink } from "@/components/cookie-preferences-link"

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Method", href: "/method" },
  { label: "Intelligence Platform", href: "/platform" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
]

const trustLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Report a Concern", href: "mailto:ethics@quoinbuildings.com" },
]

export function Footer() {
  return (
    <footer className="bg-surface-sunken border-t border-subtle">
      <div className="container-shell py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-ink-primary"
            >
              QUOIN
            </Link>
            <p className="text-sm text-ink-secondary leading-relaxed mt-5 max-w-xs">
              Organizational intelligence and governed AI agents for real estate companies.
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
              Trust
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
        </div>

        <div className="pt-5 mt-6 border-t border-subtle">
          <p className="text-[12px] text-ink-muted">
            &copy; 2026 Quoin Buildings, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
