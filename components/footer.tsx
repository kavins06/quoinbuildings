import Link from "next/link"

const navLinks = [
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Contact", href: "/contact" },
]

const trustLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
]

export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
        <div className="md:col-span-4">
          <Link
            href="/"
            className="text-xs font-medium tracking-[0.3em] uppercase text-foreground"
          >
            QUOIN
          </Link>
          <p className="text-sm leading-[1.75] text-muted-foreground mt-5 max-w-xs">
            AI operating partner for property management firms. Building, deploying,
            and managing AI agents with governance built into every engagement.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-4">
            Headquarters &middot; Washington, DC
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors duration-300 mt-5 group"
          >
            <span>Talk to us</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>

        <div className="md:col-span-3 md:col-start-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Navigation
          </p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-9">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Trust & Governance
          </p>
          <div className="flex flex-col gap-3">
            {trustLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 md:col-start-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Connect
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:info@quoinbuildings.com"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          {"© 2026 Quoin Buildings, LLC. All rights reserved."}
        </p>
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          Headquarters &middot; Washington, DC
        </p>
      </div>
    </footer>
  )
}
