import Link from "next/link"
import { CookiePreferencesLink } from "@/components/cookie-preferences-link"

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Method", href: "/method" },
  { label: "Platform", href: "/platform" },
  { label: "Team", href: "/team" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Contact", href: "/contact" },
]

const offeringsLinks = [
  { label: "Operating Diagnostic", href: "/diagnostic" },
  { label: "Operating Implementation", href: "/implementation" },
  { label: "Managed AgentOps", href: "/agentops" },
  { label: "For Technology Leaders", href: "/technology-leaders" },
  { label: "Concepts", href: "/concepts" },
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
      <div className="container-shell py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-ink-primary"
            >
              QUOIN
            </Link>
            <p className="text-sm text-ink-secondary leading-relaxed mt-5 max-w-xs">
              The AI Operating Partner for vertically integrated real estate
              companies. Discovery, governed implementation, and managed
              operations under one method.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent mb-5">
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
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent mb-5">
              Offerings
            </p>
            <div className="flex flex-col gap-3">
              {offeringsLinks.map((link) => (
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
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent mb-5">
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

        <div className="pt-6 mt-8 border-t border-subtle">
          <p className="text-[12px] text-ink-muted">
            &copy; 2026 Quoin Buildings, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
