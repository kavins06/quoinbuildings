import type { Principle } from "@/content/site";

type PrinciplesGridProps = {
  label: string;
  title: string;
  items: Principle[];
};

export function PrinciplesGrid({
  label,
  title,
  items,
}: PrinciplesGridProps) {
  return (
    <section className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
          {label}
        </p>
        <h2 className="mt-5 text-balance font-serif text-[1.75rem] tracking-[-0.02em] text-[color:var(--text)] sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="card-hover group rounded-[1.25rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.46)] p-6 transition-colors hover:border-[color:var(--accent)]/30"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--accent-light)] font-mono text-xs font-medium text-[color:var(--accent)]">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl tracking-[-0.02em] text-[color:var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                  {item.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
