"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { LinkButton } from "@/components/link-button";
import { navItems, siteMeta } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = navItems.slice(0, -1);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:rgba(240,240,236,0.88)] backdrop-blur-md">
      <div className="mx-auto flex w-full flex-wrap items-center gap-x-6 gap-y-4 px-4 py-4 lg:px-6 2xl:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-[color:var(--text)]"
          aria-label={`${siteMeta.name} home`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo-quoin-cropped.png"
            alt=""
            width={2039}
            height={2255}
            priority
            className="h-10 w-auto shrink-0 sm:h-11"
          />
          <span className="flex flex-col">
            <span className="font-sans text-sm font-semibold tracking-[0.18em] text-[color:var(--text)]">
              QUOIN
            </span>
            <span className="text-xs text-[color:var(--muted)]">
              Built environment intelligence
            </span>
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--text)] bg-[color:var(--surface-strong)] text-[color:var(--text)] lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="text-current">
            <rect
              y={isMenuOpen ? "6" : "0"}
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
              className="transition-all duration-200 origin-center"
              style={isMenuOpen ? { transform: "rotate(45deg)" } : undefined}
            />
            <rect
              y="6"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
              className="transition-opacity duration-200"
              style={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <rect
              y={isMenuOpen ? "6" : "12"}
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
              className="transition-all duration-200 origin-center"
              style={isMenuOpen ? { transform: "rotate(-45deg)" } : undefined}
            />
          </svg>
        </button>

        <nav
          aria-label="Primary"
          className="ml-auto hidden flex-wrap items-center justify-end gap-1 text-sm lg:flex"
        >
          {navigationItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition-colors duration-200 ${
                  active
                    ? "bg-[color:var(--surface)] text-[color:var(--text)] ring-1 ring-[color:var(--line-strong)]"
                    : "text-[color:var(--muted)] hover:bg-black/[0.02] hover:text-[color:var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <LinkButton
            href="/partner"
            label="Partner"
            variant="primary"
            className="ml-2"
          />
        </nav>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="w-full rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-4 lg:hidden"
          >
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm transition-colors duration-200 ${
                      active
                        ? "bg-white/70 text-[color:var(--text)] ring-1 ring-[color:var(--line)]"
                        : "text-[color:var(--muted)] hover:bg-black/[0.02] hover:text-[color:var(--text)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/partner"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)] px-5 text-sm font-medium tracking-[-0.01em] text-[color:var(--surface)] transition-colors duration-200 hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--accent-strong)]"
              >
                Partner
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
