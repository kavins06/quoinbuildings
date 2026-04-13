import type { TeamMember } from "@/content/site";

type TeamSectionProps = {
  label: string;
  title: string;
  members: TeamMember[];
};

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-strong)] text-sm font-semibold tracking-[0.1em] text-[color:var(--muted)]">
      {initials}
    </div>
  );
}

export function TeamSection({ label, title, members }: TeamSectionProps) {
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
        {members.map((member) => (
          <article
            key={member.name}
            className="card-hover quoin-corner border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.46)] p-6"
          >
            <div className="flex items-start gap-4">
              {member.image ? (
                <img
                  src={member.image}
                  alt=""
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
              ) : (
                <Initials name={member.name} />
              )}
              <div>
                <h3 className="text-lg tracking-[-0.02em] text-[color:var(--text)]">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  {member.role}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
              {member.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
