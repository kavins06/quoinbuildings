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
        <h2 className="mt-5 text-balance font-sans text-3xl tracking-[-0.05em] text-[color:var(--text)] md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.46)] p-6"
          >
            <h3 className="text-xl tracking-[-0.03em] text-[color:var(--text)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
