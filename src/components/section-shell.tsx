import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  label: string;
  title: string;
  body: string;
  support?: string;
  aside?: ReactNode;
  children?: ReactNode;
  tone?: "default" | "soft";
  reversed?: boolean;
};

export function SectionShell({
  id,
  label,
  title,
  body,
  support,
  aside,
  children,
  tone = "default",
  reversed = false,
}: SectionShellProps) {
  const intro = (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
        {label}
      </p>
      <h2 className="mt-5 text-balance font-sans text-3xl tracking-[-0.05em] text-[color:var(--text)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-lg leading-8 text-[color:var(--muted)]">
        {body}
      </p>
      {support ? (
        <p className="mt-5 text-pretty text-sm uppercase tracking-[0.08em] text-[color:var(--text)]/72">
          {support}
        </p>
      ) : null}
    </div>
  );

  return (
    <section
      id={id}
      className={`rounded-[2rem] border border-[color:var(--line)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${
        tone === "soft" ? "bg-[color:var(--surface)]" : "bg-transparent"
      }`}
    >
      <div
        className={`grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] lg:gap-14 ${
          reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        {intro}
        {aside ? <div className="min-w-0">{aside}</div> : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
