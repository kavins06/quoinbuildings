"use client";

import Image from "next/image";
import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:rgba(246,243,238,0.88)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[92rem] flex-wrap items-center gap-x-6 gap-y-4 px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-[color:var(--text)]"
          aria-label={`${siteMeta.name} home`}
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

        <nav
          aria-label="Primary"
          className="ml-auto flex flex-wrap items-center justify-end gap-1 text-sm"
        >
          {navItems.slice(0, -1).map((item) => {
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
      </div>
    </header>
  );
}
