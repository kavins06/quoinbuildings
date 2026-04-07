import type { ApplicationGroup } from "@/content/site";

type ApplicationGroupProps = {
  group: ApplicationGroup;
  index: number;
};

export function ApplicationGroup({ group, index }: ApplicationGroupProps) {
  return (
    <section
      id={group.id}
      className="scroll-mt-28 rounded-[2rem] border border-[color:var(--line)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
            0{index + 1}
          </p>
          <h2 className="mt-5 text-3xl tracking-[-0.05em] text-[color:var(--text)] md:text-4xl">
            {group.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            {group.positioning}
          </p>
          <div className="mt-10 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Financial translation
            </p>
            <p className="mt-4 text-lg tracking-[-0.03em] text-[color:var(--text)]">
              {group.translation}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Example areas
            </p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-[color:var(--text)]">
              {group.areas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
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
