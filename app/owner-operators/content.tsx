import type { TimelineMilestone } from "@/components/owner-operators-timeline"

/**
 * /owner-operators page content.
 *
 * Voice: editorial intelligence (publication, not vendor).
 * Style rules: no em dashes, no AI vocabulary, owner/operator-specific.
 */

export const ownerOperatorsHero = {
  eyebrow: "FOR OWNER/OPERATORS",
  headlineLead: "You own the buildings. You run them.",
  headlineEmphasis: "AI should work the same way.",
  subhead:
    "Quoin discovers, implements, and manages AI inside vertically-integrated real estate firms. We work the seam between the asset side and the operating side, find the three deployments that move IRR for your portfolio, fix the data foundation that has been blocking every attempt, and put the AI into production in 90 days. No internal AI team to hire. No deck that becomes shelfware.",
  primaryCta: { label: "Book a readiness call", href: "/contact" },
  secondaryCta: { label: "Take the assessment", href: "/assessment" },
}

export const patternParagraphs: string[] = [
  "Owner/operators sit between two markets and two languages. The asset side speaks in cap rates, IRR, basis, and hold periods. The operating side speaks in turn time, work-order velocity, delinquency, and net effective rents. Most AI vendors only know one of those vocabularies. They sell a leasing tool that ignores how it shows up in the asset plan, or a portfolio dashboard that ignores how the data gets generated in the field. The buildings you own and the buildings you operate are the same buildings. Your AI has to know that.",
  "The data foundation is owned by operators. The strategic AI agenda is owned by leadership. The seam between the two is where AI initiatives die. A pilot gets approved at the executive level, lands at a single property, runs into messy data, gets blamed on the operations team, and quietly disappears. Six months later another pilot starts. The pattern repeats because nobody is accountable for the layer where strategy and operations meet. That layer is the work.",
  "Most peers are in AI-curious or pilot-purgatory mode. The board is asking. The leadership team has read the McKinsey deck. A few tools have been bought. A couple of pilots are running at one property each. None of it is moving an IRR number, an NOI line, or an underwriting assumption. Even sophisticated owner/operators with internal data teams have shipped surprisingly few AI workflows that survive contact with a portfolio. The honest reality is that the industry is still at the start of the curve, and the firms that move first will define how the rest of it gets done.",
  "Between AI-curious and AI in production is a specific path. It does not get talked about because it requires understanding both halves of the business. You have to know which operating workflows actually feed the asset thesis, which data fields are reliable enough to build on, where the governance lines are inside a regulated business, and what it takes to put a working AI system in front of a property manager and have it stick. Ninety days is enough time to do that work, if the people doing it have run real estate operations and built production AI systems. We built Quoin so it would be the same people.",
]

export const phases: Array<{
  number: string
  title: string
  who: string
  timing: string
  description: string
  deliverables: string
}> = [
  {
    number: "01",
    title: "Discover",
    who: "Quoin embeds with your COO, head of asset management, head of IT, and one operating GM.",
    timing: "Weeks 1 to 3",
    description:
      "We map your operating workflow end to end, your asset thesis, and the AI initiatives already in flight. We audit the data foundation across your property management platform, accounting stack, and asset management tooling so we know what we can build on and what has to be fixed first. The output is three ranked AI deployments tied to your firm's actual IRR drivers, with a real plan for the data foundation each one needs.",
    deliverables:
      "A ranked deployment plan, a data-foundation gap report, and a 90-day build sequence we will be accountable to.",
  },
  {
    number: "02",
    title: "Implement",
    who: "Quoin engineers, plus your operating team for testing and your IT lead for access.",
    timing: "Weeks 4 to 10",
    description:
      "We fix the data foundation first because every AI initiative downstream depends on it. We then build and stand up the first deployment, run it with your team in the actual workflow, and iterate against real use rather than a demo. The second and third deployments come online once the first is producing the result we agreed on. Everything is built to your governance lines, not a generic vendor template.",
    deliverables:
      "Three production AI workflows running inside your firm, with audit trails, access boundaries, and human-review thresholds wired into each one.",
  },
  {
    number: "03",
    title: "Manage",
    who: "A Quoin operations lead, paired with your business owner for each workflow.",
    timing: "Week 11 onward",
    description:
      "AI workflows degrade if no one operates them. Models drift, data sources change, policies update, properties get added and sold. We run the AI for you, hand it off to a team you build, or stay embedded as the operating layer. Your call. What does not change is the accountability: someone owns the result, the metrics, and the next iteration.",
    deliverables:
      "Continuous monitoring, monthly performance and ROI reporting, model and workflow updates as your portfolio changes, and quarterly reviews with the leadership sponsors.",
  },
]

export const whoThisIsFor: string[] = [
  "Vertically-integrated REITs that own and operate residential, mixed-use, or commercial portfolios.",
  "Large private owner/operators with both an asset management group and an in-house operating platform.",
  "Firms with 2,000 or more units, or the equivalent in commercial square footage.",
  "An executive sponsor at the CEO, COO, or President level who owns the AI question for the firm.",
  "Firms past the pilot phase that need AI inside the operating model, not another point tool.",
  "Leadership willing to put the data foundation on the table as part of the work, not block it.",
]

export const whoThisIsNotFor: string[] = [
  "Pure asset management firms that do not run their own operating platform.",
  "Pure property management firms operating third-party portfolios with no asset-side ownership.",
  "Firms under roughly $500M AUM, where the operational complexity does not justify a 90-day engagement.",
  "Firms that already run a 20-person internal AI team and need an additional vendor, not a partner.",
  "Teams looking for a single chatbot or one isolated automation. There are vendors who do that well.",
  "Firms that need a finished system in under 30 days. Real AI in real operations takes longer than that.",
]

export const timelineMilestones: TimelineMilestone[] = [
  {
    week: "Week 1",
    title: "Discovery starts",
    description:
      "Map your operating workflow, asset thesis, and existing AI initiatives.",
  },
  {
    week: "Week 2",
    title: "Data audit",
    description:
      "Identify the data foundation gaps that have been blocking every AI initiative.",
  },
  {
    week: "Week 3",
    title: "Deployment plan",
    description:
      "Three ranked AI deployments specific to your firm's IRR drivers.",
  },
  {
    week: "Weeks 4 to 7",
    title: "Build",
    description:
      "Fix the data foundation. Stand up the first deployment.",
  },
  {
    week: "Weeks 8 to 9",
    title: "Test",
    description:
      "Run the workflow with your team. Iterate based on real use.",
  },
  {
    week: "Week 10",
    title: "Second and third deployment",
    description:
      "Add the next two prioritized workflows.",
  },
  {
    week: "Weeks 11 to 12",
    title: "Handoff",
    description:
      "Run the AI for you, hand it off, or stay embedded. Your choice.",
  },
]

export const ctaBlock = {
  eyebrow: "Next step",
  heading: "Find out where your firm stands.",
  body:
    "A 30-minute readiness call is the shortest path. We will walk through your operating model, your asset thesis, and the AI work already in flight, and tell you what 90 days would look like.",
  primary: { label: "Book the readiness call", href: "/contact" },
  secondary: { label: "Take the AI readiness assessment", href: "/assessment" },
}
