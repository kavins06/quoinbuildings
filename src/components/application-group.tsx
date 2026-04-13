import type { ApplicationGroup } from "@/content/site";

type ApplicationGroupProps = {
  group: ApplicationGroup;
  index: number;
};

const accentMap: Record<string, { border: string; bg: string; dot: string }> = {
  efficiency: {
    border: "border-l-[color:var(--accent)]",
    bg: "bg-[color:var(--accent-light)]",
    dot: "bg-[color:var(--accent)]",
  },
  risk: {
    border: "border-l-[color:var(--accent-warm)]",
    bg: "bg-[color:var(--accent-warm-light)]",
    dot: "bg-[color:var(--accent-warm)]",
  },
  "asset-performance": {
    border: "border-l-[color:var(--accent-gold)]",
    bg: "bg-[color:rgba(176,141,87,0.08)]",
    dot: "bg-[color:var(--accent-gold)]",
  },
};

export function ApplicationGroup({ group, index }: ApplicationGroupProps) {
  const accent = accentMap[group.id] ?? accentMap.efficiency;

  return (
    <section
      id={group.id}
      className={`scroll-mt-28 rounded-[2rem] border border-[color:var(--line)] border-l-[3px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${accent.border}`}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
            0{index + 1}
          </p>
          <h2 className="mt-5 font-serif text-[1.75rem] tracking-[-0.02em] text-[color:var(--text)] sm:text-3xl md:text-4xl">
            {group.title}
          </h2>
          <p className="mt-5 text-lg leading-[1.8] text-[color:var(--muted)]">
            {group.positioning}
          </p>
          <div className={`mt-10 rounded-xl border border-[color:var(--line)] p-6 ${accent.bg}`}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Financial translation
            </p>
            <p className="mt-4 font-serif text-lg tracking-[-0.02em] text-[color:var(--text)]">
              {group.translation}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Example areas
            </p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-[color:var(--text)]">
              {group.areas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Example questions
            </p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-[color:var(--text)]">
              {group.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
