import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { ArticleShell } from "../article-shell"
import { articles } from "../articles"

const article = articles.find((a) => a.slug === "operating-intelligence-problem")!

export const metadata: Metadata = createPageMetadata({
  title: article.title,
  description: article.dek,
  path: `/perspectives/${article.slug}`,
  image: "/hero-bg.jpg",
  keywords: [
    "operating intelligence",
    "AI maturity real estate",
    "enterprise AI failure",
    "fragile truth AI",
    "real estate AI governance",
  ],
})

const H2 = "mt-14 mb-2 font-sans text-[clamp(1.5rem,2.6vw,1.875rem)] font-medium leading-[1.2] tracking-normal text-ink-primary"
const Lead = "font-serif text-[clamp(1.4rem,2.4vw,1.75rem)] leading-[1.3] tracking-normal text-ink-primary"
const Quote = "my-10 border-l border-accent pl-6 font-serif text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.35] tracking-normal text-ink-primary"
const List = "mt-4 space-y-3 pl-1 list-none"

export default function Page() {
  return (
    <ArticleShell slug={article.slug}>
      <p className={Lead}>
        AI maturity at institutional real estate firms sits at 5.7 out of 10.
        Governance readiness is even lower, at 5.1. Eighty-eight percent of
        investors, owners, and landlords have started AI pilots. The number
        of those pilots that have hit all of their goals is far smaller.
      </p>

      <p>
        These three numbers, taken together, tell you something specific. AI
        is not stuck because the technology is too new, too risky, or too
        expensive. AI is stuck because the operating environment underneath
        it is not ready for it.
      </p>

      <p>
        Stanford&rsquo;s Digital Economy Lab studied fifty-one enterprise AI
        cases and reported the finding in a single sentence: the difference
        was the organization, not the model. That is the line we keep coming
        back to.
      </p>

      <h2 className={H2}>The model is not the bottleneck</h2>

      <p>
        Walk into a vertically integrated real estate company today and you
        will find Copilot, ChatGPT, vendor-embedded AI features, an internal
        pilot or two, and at least one team experimenting with a custom
        agent. The model layer is solved enough. What is not solved is
        everything underneath: where the truth lives, who owns it, how it is
        produced, what it depends on, and whether it can survive being
        consumed by an autonomous system.
      </p>

      <p>
        We meet leasing teams who can tell you, with full confidence, exactly
        which vendor to call for a particular maintenance trade in a
        particular property. We also meet the same teams who cannot tell you
        which system holds the authoritative warranty status for that
        equipment, because warranty status is in three places and the three
        places disagree.
      </p>

      <p>
        An agent built on top of that environment will not fail because the
        model is weak. It will fail because the warranty status it confidently
        cites is wrong twenty-eight percent of the time, and the residents who
        get the wrong message do not care which spreadsheet was the issue.
      </p>

      <h2 className={H2}>Where truth actually lives</h2>

      <p>
        The board deck shows occupancy. Behind the occupancy number is a rent
        roll snapshot. Behind the rent roll is a system of record. Behind the
        system of record is a property manager who applied a manual
        adjustment because the lease abstract had not been re-keyed after the
        renewal. Behind the manual adjustment is an email thread. The thread
        is the actual source of truth for that one suite, that one quarter.
      </p>

      <p>
        Every operator we have worked with has examples like this. Reconciled
        extracts. Macros that nobody can re-derive. Spreadsheets that travel
        between regions and pick up footnotes. A reporting line that was
        renamed three quarters ago and still has both names floating around.
        Manual adjustments at quarter-end. Expert memory that lives in one
        person&rsquo;s head and is treated as canonical because that person is
        usually right.
      </p>

      <p>
        None of this is unusual. Almost all of it is invisible to the kind of
        AI roadmap that starts with &ldquo;deploy a model.&rdquo; The roadmap
        assumes truth is governed when it is, in fact, fragile.
      </p>

      <h2 className={H2}>The five truth states</h2>

      <p>
        The discipline we run inside Quoin tags every metric, source, and
        document with one of five states.
      </p>

      <ul className={List}>
        <li>
          <span className="font-medium text-ink-primary">Authoritative.</span>{" "}
          Approved official source, approved definition, owner who can sign
          off on the value.
        </li>
        <li>
          <span className="font-medium text-ink-primary">De facto trusted.</span>{" "}
          Used operationally and treated as canonical, but not formally
          governed. Most of an enterprise lives here.
        </li>
        <li>
          <span className="font-medium text-ink-primary">Disputed.</span>{" "}
          Two or more sources disagree. Owners disagree. The disagreement is
          known but unresolved.
        </li>
        <li>
          <span className="font-medium text-ink-primary">Fragile.</span>{" "}
          Depends on a manual adjustment, macro, spreadsheet, or expert memory
          that cannot be reproduced from system data alone.
        </li>
        <li>
          <span className="font-medium text-ink-primary">Unknown.</span>{" "}
          Not yet validated.
        </li>
      </ul>

      <p>
        Once you tag the world this way, the obvious operating rule writes
        itself: agents may summarize, qualify, or escalate against fragile,
        disputed, or unknown truth. They may not act on it autonomously, and
        they may not present it as authoritative. The right answer for those
        states is to flag and route, not to operate.
      </p>

      <p className={Quote}>
        The model is a component. The truth profile is the contract. Most
        failed pilots failed because the second one was missing.
      </p>

      <h2 className={H2}>What changes when you map the truth first</h2>

      <p>
        We do most of an engagement before any agent is built. Not because
        rigor is virtuous, but because the alternative is more expensive. A
        ninety-day mapping engagement costs a fraction of an unsupervised
        agent that confidently mishandles a fair-housing escalation.
      </p>

      <p>
        Mapping does five things. It surfaces which sources are
        authoritative and which are not. It names the owners. It documents
        the formulas, adjustments, and reconciliation rules that produce
        every consumed number. It identifies the fragile-truth points where
        an agent must defer. And it produces a queryable model of how the
        company actually operates, which is the foundation for whatever you
        build next.
      </p>

      <p>
        The output is not a deck. It is a structured baseline an architect
        can read and a CIO can approve. It includes a workflow intelligence
        object, a source inventory, a semantic and truth layer, a control
        model, a readiness score, and an explicit recommendation: build,
        remediate, buy, pause, or do not automate.
      </p>

      <h2 className={H2}>The implication for an AI roadmap</h2>

      <p>
        If your AI roadmap currently reads &ldquo;use cases &rarr; models
        &rarr; pilots &rarr; production,&rdquo; the front of it is wrong. The
        right front is &ldquo;workflow truth &rarr; sources &rarr; truth
        profiles &rarr; permissions &rarr; query layer &rarr; agent
        capability.&rdquo;
      </p>

      <p>
        It is slower in week one. It is dramatically faster by month six,
        because the agents you build on top of a governed semantic layer
        actually ship, actually pass security review, and actually keep
        working when the underlying systems change.
      </p>

      <p>
        Most enterprises do not have an AI-agent problem first. They have an
        operating-intelligence problem first. Solve that, and the agent layer
        becomes the easy part.
      </p>
    </ArticleShell>
  )
}
