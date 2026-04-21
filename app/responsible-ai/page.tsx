import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsible AI | Quoin",
  description: "How Quoin decides what AI to build and deploy, with human-in-the-loop expectations and data boundaries.",
}

export default function ResponsibleAIPage() {
  return (
    <article className="container-shell py-24 lg:py-32">
      <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
        Trust &amp; Governance
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
        Responsible AI
      </h1>
      <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
        Full content coming in a subsequent update. This page will describe how Quoin
        decides what AI to build and deploy, our human-in-the-loop expectations, data
        boundaries with client systems, model-selection transparency, and ongoing
        evaluation practice.
      </p>
      <p className="text-sm text-ink-muted mt-6">
        Questions in the meantime: <a className="underline decoration-accent underline-offset-4" href="mailto:ethics@quoinbuildings.com">ethics@quoinbuildings.com</a>
      </p>
    </article>
  )
}
