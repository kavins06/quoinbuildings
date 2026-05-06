import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { ArticleShell } from "../article-shell"
import { articles } from "../articles"

const article = articles.find((a) => a.slug === "minimum-viable-foundry-reit")!

export const metadata: Metadata = createPageMetadata({
  title: article.title,
  description: article.dek,
  path: `/perspectives/${article.slug}`,
  image: "/hero-bg.jpg",
  keywords: [
    "minimum viable foundry",
    "REIT AI",
    "asset management AI",
    "operating intelligence platform",
    "real estate AI implementation",
  ],
})

const H2 = "mt-14 mb-2 font-sans text-[clamp(1.5rem,2.6vw,1.875rem)] font-medium leading-[1.2] tracking-normal text-ink-primary"
const Lead = "font-serif text-[clamp(1.4rem,2.4vw,1.75rem)] leading-[1.3] tracking-normal text-ink-primary"
const Quote = "my-10 border-l border-accent pl-6 font-serif text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.35] tracking-normal text-ink-primary"

export default function Page() {
  return (
    <ArticleShell slug={article.slug}>
      <p className={Lead}>
        A Minimum Viable Foundry is the smallest governed platform wedge that
        makes one operating domain queryable and agent-ready. Not a roadmap.
        Not a phased program. The first wedge that works.
      </p>

      <p>
        Whole-company platforms fail. They fail because every workflow is
        different, every source has its own truth profile, and the people who
        have to approve the work cannot approve a platform that promises to
        eat the entire enterprise. Wedges work because they are small enough
        to ship and small enough to refuse.
      </p>

      <p>
        This note walks through what a first wedge looks like for a typical
        vertically integrated REIT, using asset management performance as
        the worked example. Other wedges &mdash; leasing pipeline, property
        operations, capital projects, finance close, investor reporting,
        ESG, vendor intelligence &mdash; follow the same shape.
      </p>

      <h2 className={H2}>Pick the domain</h2>

      <p>
        Asset management performance is a strong first wedge for most REITs.
        The questions are specific, the entities are well-known to the
        operating team, the metrics are reviewed monthly, and the failure
        mode of an answer is visible (a wrong number in front of asset
        leadership is a wrong number that gets noticed).
      </p>

      <p>
        The wedge boundary is one cycle of asset performance review across
        the portfolio. It is not the entire asset management function and
        not the underlying budgeting process. The wedge ends where the
        cycle ends.
      </p>

      <h2 className={H2}>Canonical entities to model first</h2>

      <p>
        For asset management performance, the entity model only needs the
        objects that the cycle actually touches. Defer everything else.
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 border-y border-strong/15 py-6 md:grid-cols-3">
        {[
          "property",
          "portfolio",
          "tenant",
          "lease",
          "rent_roll",
          "occupancy_record",
          "budget",
          "actual",
          "forecast",
          "variance",
          "metric",
          "definition",
          "source_system",
          "source_object",
          "truth_profile",
          "document",
          "permission_policy",
          "query",
          "answer",
          "agent_capability",
          "trace",
        ].map((entity) => (
          <li
            key={entity}
            className="font-mono text-[13px] text-ink-secondary"
          >
            {entity}
          </li>
        ))}
      </ul>

      <p>
        Twenty-one entity types. Not the seventy-plus a full REIT ontology
        contains. We will add debt instruments, capex projects, vendor
        contracts, and ESG obligations the moment a workflow needs them.
        Not before.
      </p>

      <h2 className={H2}>Sources and their truth profiles</h2>

      <p>
        The first wedge connects to one or two source systems and treats the
        rest as metadata for now. For asset management at most REITs, that
        means the property management system as the operating record and the
        finance system as the financial record, with a small set of governed
        documents.
      </p>

      <ul className="mt-6 grid grid-cols-1 border-y border-strong/15">
        {[
          [
            "Property management system (rent roll, occupancy)",
            "Authoritative",
          ],
          [
            "Finance system (GL actuals, approved budget snapshot)",
            "Authoritative",
          ],
          [
            "Asset plan documents (current cycle)",
            "De facto trusted",
          ],
          [
            "Property-level operating review templates",
            "De facto trusted",
          ],
          [
            "Manager commentary documents",
            "De facto trusted",
          ],
          [
            "Forecast spreadsheet (regional)",
            "Fragile",
          ],
          [
            "Same-store basis adjustments",
            "Fragile",
          ],
          [
            "Disputed occupancy adjustments at quarter-end",
            "Disputed",
          ],
        ].map(([source, profile]) => (
          <li
            key={source as string}
            className="grid grid-cols-1 gap-2 border-b border-strong/15 py-5 last:border-b-0 md:grid-cols-[1fr_12rem] md:gap-8"
          >
            <p className="text-[15px] leading-[1.55] text-ink-primary">
              {source}
            </p>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
              {profile}
            </p>
          </li>
        ))}
      </ul>

      <p>
        The forecast spreadsheet and same-store adjustments are flagged
        fragile because they depend on regional judgment and manual edits.
        The disputed occupancy adjustments are real: most REITs have
        property-level adjustments that finance and operations argue about
        every quarter. The platform does not pretend that disagreement does
        not exist; it tags it.
      </p>

      <p className={Quote}>
        An agent that answers asset performance questions on this wedge may
        cite the rent roll and the GL. It may not cite the forecast
        spreadsheet without flagging it as fragile. It may not act on the
        disputed adjustments without escalating.
      </p>

      <h2 className={H2}>The queries the wedge can answer</h2>

      <p>
        Before any agent is built, the wedge supports specific, evidence-
        grounded questions. Each answer carries source references, freshness,
        the definition used, confidence, and an escalation path.
      </p>

      <ul className="mt-6 space-y-5">
        {[
          "Which properties are below budget this quarter, and why?",
          "Which assets have conflicting occupancy figures across reports?",
          "Which leasing assumptions changed since the prior operating review?",
          "Which capital projects are over budget and missing owner commentary?",
          "Which lease expirations are material in the next two quarters?",
          "Which operating metrics are disputed, stale, or manually adjusted?",
          "What documentation is required for the next investor reporting package, and what is missing?",
        ].map((q) => (
          <li
            key={q}
            className="border-l border-accent pl-5 font-serif text-[20px] leading-[1.35] text-ink-primary md:text-[22px]"
          >
            &ldquo;{q}&rdquo;
          </li>
        ))}
      </ul>

      <p>
        These are not free-form prompts to a chatbot. They are typed queries
        against the governed semantic layer, returning structured answers an
        asset manager can take into a review.
      </p>

      <h2 className={H2}>The first agent capability</h2>

      <p>
        Once the queries above are reliable, one agent capability rides on
        top: a variance-explanation drafting agent. It pulls the property,
        the budget, the actual, the variance, the relevant metric
        definitions, the manager commentary if it exists, and drafts a
        variance explanation for human review.
      </p>

      <p>
        The agent operates at rung 5 of the safety ladder &mdash; drafts
        with human approval. It cites every source. It refuses on disputed
        adjustments and routes to the asset manager. It escalates when the
        variance crosses a materiality threshold and the manager commentary
        is missing. It does not send anything externally and does not modify
        any system of record.
      </p>

      <h2 className={H2}>What is deliberately out of scope</h2>

      <p>
        The first wedge does not cover debt, capital projects beyond budget
        variance, ESG, investor relations, leasing pipeline, vendor
        intelligence, finance close, or compliance. It does not cover
        write-back to any operating system. It does not cover external
        communication with tenants, lenders, or investors. It does not
        attempt to reconcile the disputed adjustments; it surfaces them.
      </p>

      <p>
        Every one of those is a candidate for the second or third wedge. The
        decision to add a wedge is a separate decision under change control,
        on the strength of evidence from the first one.
      </p>

      <h2 className={H2}>Why this works</h2>

      <p>
        Generalize from a wedge that works. Not from a roadmap that does
        not. The team building wedge two inherits the source inventory,
        canonical model, semantic layer, permission model, query layer,
        observability, and operating record from wedge one. Each wedge
        compounds. The platform grows by accretion of governed reality, not
        by ambitious blueprint.
      </p>

      <p>
        That is the entire bet. The first wedge has to ship, has to pass
        security review, has to answer specific questions with citations,
        and has to do all of that without bypassing your existing systems.
        Once it does, the next wedge is no longer a leap.
      </p>
    </ArticleShell>
  )
}
