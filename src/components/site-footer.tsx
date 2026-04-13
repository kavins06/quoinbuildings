import Image from "next/image";
import Link from "next/link";

import { siteMeta } from "@/content/site";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Read the vision" },
  { href: "/applications", label: "See the applications" },
  { href: "/partner", label: "Partner with QUOIN" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line)]">
      <div className="mx-auto grid w-full max-w-none gap-12 px-4 py-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(12rem,0.6fr)] lg:px-6">
        <div className="max-w-md">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-quoin-cropped.png"
              alt=""
              width={2039}
              height={2255}
              className="h-12 w-auto shrink-0"
            />
            <div>
              <p className="font-sans text-sm font-semibold tracking-[0.2em] text-[color:var(--text)]">
                QUOIN
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">
                Built environment intelligence
              </p>
            </div>
          </div>
          <p className="mt-4 text-pretty text-xl tracking-[-0.03em] text-[color:var(--text)]">
            {siteMeta.footerLine}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Navigate
          </p>
          <ul className="mt-4 space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto flex w-full max-w-none items-center justify-between px-4 py-5 text-xs text-[color:var(--muted)] lg:px-6">
          <p>{year} QUOIN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
