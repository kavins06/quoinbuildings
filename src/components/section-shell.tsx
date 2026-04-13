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
  quoin?: boolean;
  variant?: "default" | "wide" | "centered" | "highlight";
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
  quoin = false,
  variant = "default",
}: SectionShellProps) {
  const isWide = variant === "wide";
  const isCentered = variant === "centered";
  const isHighlight = variant === "highlight";

  const intro = (
    <div className={isWide ? "max-w-4xl" : isCentered ? "max-w-2xl" : "max-w-2xl"}>
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
        {label}
      </p>
      <h2
        className={`mt-5 text-balance font-sans tracking-[-0.05em] text-[color:var(--text)] ${
          isWide
            ? "text-4xl md:text-5xl lg:text-6xl leading-[0.95]"
            : "text-3xl md:text-4xl"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-pretty text-lg leading-8 text-[color:var(--muted)] ${
          isWide ? "max-w-3xl lg:text-xl" : ""
        }`}
      >
        {body}
      </p>
      {support ? (
        <p className="mt-5 text-pretty text-sm uppercase tracking-[0.08em] text-[color:var(--muted)]">
          {support}
        </p>
      ) : null}
    </div>
  );

  const cornerClass = quoin || isHighlight ? "quoin-corner" : "rounded-[2rem]";

  const bgClass =
    isHighlight
      ? "bg-[color:var(--surface-strong)]"
      : tone === "soft"
        ? "bg-[color:var(--surface)]"
        : "bg-transparent";

  const borderExtra = isHighlight ? "quoin-border-accent" : "";

  return (
    <section
      id={id}
      className={`border border-[color:var(--line)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${cornerClass} ${bgClass} ${borderExtra}`}
    >
      {isWide || isCentered ? (
        <div className={isCentered ? "mx-auto text-center" : ""}>
          {intro}
        </div>
      ) : (
        <div
          className={`grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] lg:gap-14 ${
            reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          {intro}
          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      )}
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
