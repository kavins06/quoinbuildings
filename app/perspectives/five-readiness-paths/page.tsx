import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { ArticleShell } from "../article-shell"
import { articles } from "../articles"

const article = articles.find((a) => a.slug === "five-readiness-paths")!

export const metadata: Metadata = createPageMetadata({
  title: article.title,
  description: article.dek,
  path: `/perspectives/${article.slug}`,
  image: "/hero-bg.jpg",
  keywords: [
    "AI readiness assessment",
    "do not automate",
    "AI governance",
    "real estate AI",
    "AI build buy decision",
  ],
})

const H2 = "mt-14 mb-2 font-sans text-[clamp(1.5rem,2.6vw,1.875rem)] font-medium leading-[1.2] tracking-normal text-ink-primary"
const Lead = "font-serif text-[clamp(1.4rem,2.4vw,1.75rem)] leading-[1.3] tracking-normal text-ink-primary"
const Quote = "my-10 border-l border-accent pl-6 font-serif text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.35] tracking-normal text-ink-primary"

export default function Page() {
  return (
    <ArticleShell slug={article.slug}>
      <p className={Lead}>
        A serious AI diagnostic produces five possible recommendations. Build
        is one of them. Three of the others are forms of saying no, on
        purpose. The fifth says yes, but not yet.
      </p>

      <p>
        Most AI engagements are structured to produce a yes. The mandate
        going in is &ldquo;find AI use cases.&rdquo; The reward going out is
        &ldquo;number of approved pilots.&rdquo; The result, predictably, is
        a yes for cases where the right answer was not yet, or not here, or
        not at all.
      </p>

      <p>
        Quoin runs the diagnostic with five terminal recommendations on the
        table from the start. Three named kill points along the way decide
        which one we land on. The result is operating-grade rigor that does
        not require any one stakeholder to play the heavy.
      </p>

      <h2 className={H2}>The five paths</h2>

      <p>
        The diagnostic ends with one of these for each candidate workflow:
      </p>

      <ul className="mt-6 grid grid-cols-1 border-y border-strong/15">
        {[
          [
            "Build",
            "Operating value, source quality, control maturity, workflow stability, adoption reality, and lifecycle support are sufficient. The decision packet authorizes a governed build with an approved agent behavior contract.",
          ],
          [
            "Remediate first",
            "The opportunity is real, but source trust, access, ownership, or controls are not yet ready. The decision packet authorizes a remediation engagement with explicit milestones; build is reconsidered when remediation passes its readiness gate.",
          ],
          [
            "Buy or extend",
            "A vendor system already owns the workflow and can be configured or extended safely. Custom build would duplicate work the platform vendor will eventually do better. The decision packet routes to the platform owner.",
          ],
          [
            "Pause",
            "The economics, sponsor commitment, or operating stability are not strong enough to justify the build right now. The intelligence baseline is preserved; the decision is revisited when conditions change.",
          ],
          [
            "Do not automate",
            "The workflow is too consequential, ambiguous, sensitive, or legally constrained for AI action. AI may still help with analysis, documentation, or human-owned preparation, but autonomous behavior is not on the table.",
          ],
        ].map(([title, body]) => (
          <li
            key={title as string}
            className="grid grid-cols-1 gap-4 border-b border-strong/15 py-6 last:border-b-0 md:grid-cols-[12rem_1fr] md:gap-10"
          >
            <p className="text-[15px] font-medium leading-[1.3] text-ink-primary md:text-[16px]">
              {title}
            </p>
            <p className="text-[15px] leading-[1.65] text-ink-secondary md:text-[16px]">
              {body}
            </p>
          </li>
        ))}
      </ul>

      <h2 className={H2}>The three named kill points</h2>

      <p>
        A candidate does not coast through eighteen steps and then quietly
        get a no at the end. The diagnostic has three explicit
        disqualification events, and they fire at different moments for
        different reasons.
      </p>

      <p>
        <span className="font-medium text-ink-primary">Discovery
          disqualification</span> fires at Step 7. Once the workflow is mapped
        and the diagnostic has classified the blockers, a candidate can be
        ruled out for fatal-for-use-case reasons: the workflow does not exist
        the way the sponsor assumed, the source ecosystem cannot support it,
        the consequences of being wrong are unrecoverable, or the decision
        rights cannot be made AI-safe at any reasonable cost.
      </p>

      <p>
        <span className="font-medium text-ink-primary">Economic
          disqualification</span> fires at Step 12. After the value case is
        modeled with confidence, fragility, and downside scenarios, a
        candidate can be ruled out because the value is not material, the
        cost of the AI side is too high, the assumptions are too dependent
        on adoption that will not arrive, or the comparison against
        alternatives (process redesign, vendor extension, staffing) makes
        the AI build the wrong move.
      </p>

      <p>
        <span className="font-medium text-ink-primary">Readiness
          disqualification</span> fires at Step 16. After the readiness score
        is produced and hard gates are checked, a candidate can be ruled out
        because sponsor behavior, prior-failure learning, process
        documentation, resistance profile, recoverable-error fit, data
        access, model maturity, security enablement, or lifecycle ownership
        is not where it needs to be. Hard gates override average scores.
      </p>

      <p className={Quote}>
        Three named kill points read like rigor. One generic &ldquo;we may
        say no&rdquo; reads like marketing.
      </p>

      <h2 className={H2}>Why a no-build is a deliverable</h2>

      <p>
        The decision packet that comes out of an Operating Diagnostic is the
        same artifact regardless of recommendation. It is a structured
        document containing the mapped workflow, the source inventory, the
        owner and decision-rights map, the risk and control model, the
        readiness score, the recommendation, and the rationale. Plus a
        managed lifecycle object that names the owner, the cadence, and the
        triggers that would move the workflow back into consideration.
      </p>

      <p>
        On a build outcome, the packet is the input to the implementation
        engagement. On a remediate-first outcome, the packet is the
        remediation roadmap. On a buy-or-extend outcome, the packet is the
        evaluation brief for the platform owner. On a pause, the packet is
        the operating baseline preserved for the next review cycle. On a
        do-not-automate outcome, the packet is the documented record of why
        autonomous behavior is off the table for that workflow, with an
        explicit revisit cadence.
      </p>

      <p>
        Each of these has standalone value. The client owns the output. The
        decision packet does not require Quoin to remain involved.
      </p>

      <h2 className={H2}>What this means for buyers</h2>

      <p>
        If your existing AI advisor cannot tell you which workflow they
        recommended <em>not</em> building, ask why. The honest answer is
        usually one of two things: the engagement was not structured to
        produce a no, or the no never made it past the deck.
      </p>

      <p>
        The willingness to recommend not building is not a hedge. It is the
        thing that makes the yeses worth trusting.
      </p>
    </ArticleShell>
  )
}
