"use client";

import { FormEvent, useState } from "react";

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "submitted" }
  | { state: "error"; message: string };

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  {
    id: "organization",
    label: "Organization",
    type: "text",
    autoComplete: "organization",
  },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    id: "role",
    label: "Role",
    type: "text",
    autoComplete: "organization-title",
  },
] as const;

const unitsOptions = [
  "Under 1,000",
  "1,000\u20135,000",
  "5,000\u201315,000",
  "15,000\u201350,000",
  "50,000+",
];

const aiMaturityOptions = [
  "Haven\u2019t started",
  "Exploring / evaluating",
  "Running pilots",
  "Scaling AI tools",
  "Need governance review",
];

export function PartnerForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/partner-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        throw new Error(body?.error ?? "Unable to submit the form right now.");
      }

      setStatus({ state: "submitted" });
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit the form right now.";

      setStatus({ state: "error", message });
    }
  }

  return (
    <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[color:var(--line)] pb-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">
            Let&apos;s talk
          </p>
          <h2 className="mt-4 font-serif text-2xl tracking-[-0.02em] text-[color:var(--text)]">
            Start a conversation.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-[color:var(--muted)]">
          Tell us about your firm and where you are with AI. We&apos;ll follow
          up within two business days.
        </p>
      </div>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field.id} className="group block">
              <span className="text-sm font-medium text-[color:var(--text)]">
                {field.label}
              </span>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                className="mt-2 h-12 w-full rounded-xl border border-[color:var(--line)] bg-white/60 px-4 text-sm text-[color:var(--text)] transition-all duration-200 placeholder:text-[color:var(--muted)]/60 focus:border-[color:var(--accent)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,64,175,0.08)]"
              />
            </label>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="group block">
            <span className="text-sm font-medium text-[color:var(--text)]">
              Units managed
            </span>
            <select
              id="units"
              name="units"
              required
              defaultValue=""
              className="mt-2 h-12 w-full rounded-xl border border-[color:var(--line)] bg-white/60 px-4 text-sm text-[color:var(--text)] transition-all duration-200 focus:border-[color:var(--accent)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,64,175,0.08)]"
            >
              <option value="" disabled>
                Select range
              </option>
              {unitsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="group block">
            <span className="text-sm font-medium text-[color:var(--text)]">
              AI maturity
            </span>
            <select
              id="ai_maturity"
              name="ai_maturity"
              required
              defaultValue=""
              className="mt-2 h-12 w-full rounded-xl border border-[color:var(--line)] bg-white/60 px-4 text-sm text-[color:var(--text)] transition-all duration-200 focus:border-[color:var(--accent)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,64,175,0.08)]"
            >
              <option value="" disabled>
                Select stage
              </option>
              {aiMaturityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="group block">
          <span className="text-sm font-medium text-[color:var(--text)]">
            What are you looking to solve?
          </span>
          <textarea
            id="why"
            name="why"
            required
            rows={6}
            className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-white/60 px-4 py-3 text-sm leading-6 text-[color:var(--text)] transition-all duration-200 placeholder:text-[color:var(--muted)]/60 focus:border-[color:var(--accent)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,64,175,0.08)]"
          />
        </label>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--line)] pt-6">
          <p className="max-w-md text-sm leading-6 text-[color:var(--muted)]">
            QUOIN works with property management firms navigating AI
            implementation, governance, or both.
          </p>
          <button
            type="submit"
            disabled={status.state === "submitting"}
            className="btn-shimmer group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[color:var(--accent)] bg-[color:var(--accent)] px-6 text-sm font-medium text-[color:var(--surface)] transition-all duration-200 hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--accent-strong)] hover:shadow-[0_4px_16px_rgba(30,64,175,0.2)] disabled:opacity-60"
          >
            {status.state === "submitting" ? (
              "Submitting..."
            ) : (
              <>
                Get in touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-70 transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>

      {status.state === "submitted" ? (
        <div className="mt-5 rounded-xl border border-[color:var(--accent)]/20 bg-[color:var(--accent-light)] px-5 py-4">
          <p className="text-sm leading-6 text-[color:var(--accent-strong)]">
            Thanks. Your inquiry was submitted successfully. We&apos;ll be in touch soon.
          </p>
        </div>
      ) : null}

      {status.state === "error" ? (
        <div className="mt-5 rounded-xl border border-[color:var(--accent-warm)]/20 bg-[color:var(--accent-warm-light)] px-5 py-4">
          <p className="text-sm leading-6 text-[color:var(--accent-warm)]">
            {status.message}
          </p>
        </div>
      ) : null}
    </div>
  );
}
