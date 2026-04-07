import Link from "next/link";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

const variantClasses: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary:
    "border border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--surface)] hover:bg-[color:var(--accent-strong)] hover:border-[color:var(--accent-strong)]",
  secondary:
    "border border-[color:var(--line-strong)] bg-transparent text-[color:var(--text)] hover:border-[color:var(--text)] hover:bg-black/[0.02]",
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
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium tracking-[-0.01em] transition-colors duration-200 ${variantClasses[variant]} ${className}`.trim()}
    >
      {label}
    </Link>
  );
}
