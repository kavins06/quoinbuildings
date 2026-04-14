"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = navItems.slice(0, -1);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[color:rgba(237,238,233,0.92)] backdrop-blur-lg transition-all duration-300 ${
        scrolled
          ? "border-[color:var(--line)] shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full flex-wrap items-center gap-x-6 gap-y-4 px-4 py-3.5 lg:px-6 2xl:px-10">
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
            className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11"
          />
          <span className="flex flex-col">
            <span className="font-sans text-sm font-semibold tracking-[0.2em] text-[color:var(--text)]">
              QUOIN
            </span>
            <span className="text-[11px] tracking-wide text-[color:var(--muted)]">
              AI advisory for property management
            </span>
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--text)] transition-colors hover:bg-[color:var(--surface-strong)] md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" className="text-current">
            <rect
              y={isMenuOpen ? "6" : "0"}
              width="16"
              height="1.5"
              rx="0.75"
              fill="currentColor"
              className="transition-all duration-200 origin-center"
              style={isMenuOpen ? { transform: "rotate(45deg)" } : undefined}
            />
            <rect
              y="6"
              width="16"
              height="1.5"
              rx="0.75"
              fill="currentColor"
              className="transition-opacity duration-200"
              style={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <rect
              y={isMenuOpen ? "6" : "12"}
              width="16"
              height="1.5"
              rx="0.75"
              fill="currentColor"
              className="transition-all duration-200 origin-center"
              style={isMenuOpen ? { transform: "rotate(-45deg)" } : undefined}
            />
          </svg>
        </button>

        <nav
          aria-label="Primary"
          className="ml-auto hidden flex-wrap items-center justify-end gap-1 text-sm md:flex"
        >
          {navigationItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3.5 py-2 transition-colors duration-200 ${
                  active
                    ? "text-[color:var(--text)] font-medium"
                    : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-2 -bottom-[0.95rem] h-[2px] rounded-full bg-[color:var(--accent)]" />
                )}
              </Link>
            );
          })}

          <LinkButton
            href="/contact"
            label="Contact"
            variant="primary"
            className="ml-3"
          />
        </nav>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-3 md:hidden"
          >
            <nav aria-label="Mobile primary" className="flex flex-col gap-1">
              {navigationItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                      active
                        ? "bg-[color:var(--accent-light)] text-[color:var(--text)] font-medium border-l-2 border-[color:var(--accent)]"
                        : "text-[color:var(--muted)] hover:bg-black/[0.02] hover:text-[color:var(--text)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[color:var(--accent)] bg-[color:var(--accent)] px-5 text-sm font-medium tracking-[-0.01em] text-[color:var(--surface)] transition-colors duration-200 hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--accent-strong)]"
              >
                Contact QUOIN
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
