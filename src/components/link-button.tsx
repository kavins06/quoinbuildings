import Link from "next/link";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

const variantClasses: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary:
    "btn-shimmer border border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--surface)] hover:bg-[color:var(--accent-strong)] hover:border-[color:var(--accent-strong)] hover:shadow-[0_4px_16px_rgba(42,94,76,0.2)]",
  secondary:
    "border border-[color:var(--line-strong)] bg-transparent text-[color:var(--text)] hover:border-[color:var(--text)] hover:bg-black/[0.02] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
  quiet:
    "border border-transparent bg-transparent text-[color:var(--text)] hover:border-[color:var(--line-strong)] hover:bg-black/[0.02]",
};

export function LinkButton({
  href,
  label,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium tracking-[-0.01em] transition-all duration-200 ${variantClasses[variant]} ${className}`.trim()}
    >
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="opacity-60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
      >
        <path
          d="M5.25 3.5L8.75 7L5.25 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
