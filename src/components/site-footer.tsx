import Image from "next/image";
import Link from "next/link";

import { siteMeta } from "@/content/site";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our services" },
  { href: "/why-property-management", label: "Why property management" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About QUOIN" },
  { href: "/contact", label: "Get in touch" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface-dark)]">
      {/* Decorative top rule */}
      <div className="decorative-rule h-px" />

      <div className="mx-auto grid w-full max-w-none gap-12 px-4 py-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(12rem,0.6fr)] lg:px-6 lg:py-20">
        <div className="max-w-md">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-quoin-cropped.png"
              alt=""
              width={2039}
              height={2255}
              className="h-12 w-auto shrink-0 brightness-0 invert opacity-90"
            />
            <div>
              <p className="font-sans text-sm font-semibold tracking-[0.2em] text-[color:var(--text-on-dark)]">
                QUOIN
              </p>
              <p className="mt-1 text-xs tracking-wide text-[color:var(--muted-on-dark)]">
                AI advisory for property management
              </p>
            </div>
          </div>
          <p className="mt-6 text-pretty font-serif text-xl tracking-[-0.02em] text-[color:var(--text-on-dark)] lg:text-2xl">
            {siteMeta.footerLine}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted-on-dark)]">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-[color:var(--muted-on-dark)] transition-colors hover:text-[color:var(--text-on-dark)]"
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-50"
                  >
                    <path
                      d="M5.25 3.5L8.75 7L5.25 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--line-on-dark)]">
        <div className="mx-auto flex w-full max-w-none items-center justify-between px-4 py-5 text-xs text-[color:var(--muted-on-dark)] lg:px-6">
          <p>{year} QUOIN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
