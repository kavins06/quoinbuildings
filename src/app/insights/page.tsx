import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import type { InsightsPost } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights - AI in Property Management | QUOIN",
  description:
    "Perspectives on AI implementation, governance, and strategy for property management executives.",
};

const upcomingPosts: InsightsPost[] = [
  {
    slug: "fair-housing-ai-what-pm-executives-need-to-know",
    title: "Fair Housing and AI: What PM Executives Need to Know",
    summary:
      "AI screening tools, dynamic pricing, and leasing assistants are creating new fair housing exposure. Here is what property management leaders should understand before their next board meeting.",
    date: "Coming soon",
    readTime: "8 min read",
  },
  {
    slug: "ai-governance-framework-property-management",
    title: "Building an AI Governance Framework for Property Management",
    summary:
      "A practical guide to creating AI policies that satisfy your board, your insurers, and your legal team — without slowing down adoption.",
    date: "Coming soon",
    readTime: "10 min read",
  },
  {
    slug: "pm-tech-stack-ai-integration",
    title: "Integrating AI Into a Fragmented PM Tech Stack",
    summary:
      "Yardi, AppFolio, MRI, and a dozen point solutions. How to deploy AI that works with your existing systems instead of against them.",
    date: "Coming soon",
    readTime: "7 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on AI in property management."
        description="Research, analysis, and practical guidance for property management executives navigating AI adoption and governance."
      />

      <Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingPosts.map((post) => (
            <article
              key={post.slug}
              className="card-hover flex flex-col rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition-colors"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                {post.date} &middot; {post.readTime}
              </p>
              <h2 className="mt-4 font-serif text-xl tracking-[-0.02em] text-[color:var(--text)]">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-base leading-7 text-[color:var(--muted)]">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </>
  );
}
