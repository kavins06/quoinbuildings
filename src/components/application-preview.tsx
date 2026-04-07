import Link from "next/link";

import type { ApplicationPreviewCard } from "@/content/site";

type ApplicationPreviewProps = {
  label: string;
  title: string;
  body: string;
  cards: ApplicationPreviewCard[];
};

export function ApplicationPreview({
  label,
  title,
  body,
  cards,
}: ApplicationPreviewProps) {
  return (
    <section className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
            {label}
          </p>
          <h2 className="mt-5 text-balance font-sans text-3xl tracking-[-0.05em] text-[color:var(--text)] md:text-4xl">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{body}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative rounded-[1.5rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.52)] p-6 transition-colors duration-200 hover:border-[color:var(--line-strong)] hover:bg-white/70"
          >
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
              0{index + 1}
            </span>
            <h3 className="mt-10 text-2xl tracking-[-0.04em] text-[color:var(--text)]">
              {card.title}
            </h3>
            <p className="mt-4 max-w-[18rem] text-base leading-7 text-[color:var(--muted)]">
              {card.summary}
            </p>
            <span className="mt-10 inline-flex items-center text-sm text-[color:var(--text)]">
              See the applications
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
