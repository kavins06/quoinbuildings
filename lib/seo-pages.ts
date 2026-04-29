export type SeoLandingPage = {
  key: string
  path: string
  title: string
  metaTitle: string
  description: string
  keywords: string[]
  eyebrow: string
  directAnswerTitle: string
  directAnswer: string
  whoThisIsFor: string[]
  problemsSolved: string[]
  howQuoinHelps: string[]
  serviceType: string
  backgroundImage: string
}

export const coreResourceLinks = [
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Governance", href: "/governance" },
  { label: "Approach", href: "/approach" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Contact", href: "/contact" },
]

export const seoLandingPages = {
  propertyManagement: {
    key: "propertyManagement",
    path: "/ai-for-property-management",
    title: "AI for Property Management Firms",
    metaTitle: "AI for Property Management Firms",
    description:
      "AI for property management firms that need governed automation across leasing, maintenance, resident communication, accounting, and portfolio workflows.",
    keywords: [
      "AI for property management",
      "property management AI",
      "AI adoption for property management firms",
      "property management automation",
      "AI agents for property management",
    ],
    eyebrow: "Property Management AI",
    directAnswerTitle: "What is AI for property management?",
    directAnswer:
      "AI for property management is the use of agentic systems to interpret operational requests, route work, draft communications, reconcile data, and surface exceptions across the portfolio. It creates value when it is embedded into workflows and governed by human review, data controls, and clear escalation rules.",
    whoThisIsFor: [
      "CEOs, COOs, owners, and portfolio leaders responsible for operating performance.",
      "Firms managing multi-property portfolios with leasing, maintenance, accounting, and resident communication complexity.",
      "Teams that have tried point solutions or pilots but have not turned AI into firm-wide operating capability.",
    ],
    problemsSolved: [
      "Maintenance requests arrive with incomplete context and need triage, routing, vendor coordination, and resident updates.",
      "Leasing teams lose time on follow-up, qualification, policy questions, and handoffs between systems.",
      "Operational reporting depends on manual reconciliation across property management platforms, spreadsheets, email, and portals.",
      "Point solutions create more systems to manage without changing how work moves through the organization.",
    ],
    howQuoinHelps: [
      "Map workflows before selecting or building agents.",
      "Design AI agents around leasing, maintenance, resident communication, accounting, reporting, and compliance handoffs.",
      "Build governance, audit trails, access control, and escalation rules into the operating model.",
      "Operate and improve the AI layer after launch so it evolves with the portfolio.",
    ],
    serviceType: "AI adoption and managed AI operations for property management firms",
    backgroundImage: "/header-who-we-help.jpg",
  },
  assetManagement: {
    key: "assetManagement",
    path: "/ai-for-asset-management",
    title: "AI for Asset Management Firms",
    metaTitle: "AI for Asset Management Firms",
    description:
      "AI for real estate asset management teams that need better portfolio intelligence, reporting, risk visibility, and operational follow-through.",
    keywords: [
      "AI for asset management firms",
      "AI for real estate asset management",
      "AI operations for asset managers",
      "real estate asset management AI",
      "portfolio intelligence AI",
    ],
    eyebrow: "Asset Management AI",
    directAnswerTitle: "What is AI for real estate asset management?",
    directAnswer:
      "AI for real estate asset management helps executives turn property-level operating data, financial reporting, leasing activity, maintenance exposure, and market signals into usable portfolio intelligence. It is most useful when it connects asset strategy with the operational systems where performance is created or lost.",
    whoThisIsFor: [
      "Asset management executives responsible for NOI, risk, reporting, and strategic execution.",
      "Ownership groups and operators that need clearer visibility across assets, managers, vendors, and reporting cycles.",
      "Teams that want AI to support decisions without handing consequential investment or tenant decisions to an unsupervised model.",
    ],
    problemsSolved: [
      "Portfolio reporting is delayed by fragmented operating data and manual variance explanations.",
      "Asset-level risks are buried in leasing notes, work orders, vendor issues, and recurring exceptions.",
      "Capital planning and operational follow-through depend on inconsistent updates across teams and systems.",
      "Executives receive dashboards but still need people to interpret what changed and what action should follow.",
    ],
    howQuoinHelps: [
      "Identify where AI can convert property-level activity into executive-ready intelligence.",
      "Design agent workflows for variance analysis, reporting, risk surfacing, document abstraction, and follow-up tracking.",
      "Connect asset-management questions to the operational systems and workflows that answer them.",
      "Maintain governance so AI supports strategy without creating uncontrolled decision risk.",
    ],
    serviceType: "AI adoption and managed AI operations for real estate asset management firms",
    backgroundImage: "/header-services.jpg",
  },
  managedOperations: {
    key: "managedOperations",
    path: "/managed-ai-operations",
    title: "Managed AI Operations for Real Estate Firms",
    metaTitle: "Managed AI Operations for Real Estate Firms",
    description:
      "Managed AI operations for real estate firms that need an ongoing AI operating partner instead of another software vendor or strategy deck.",
    keywords: [
      "managed AI operations",
      "AI operating partner",
      "AI operations team for real estate",
      "real estate AI operations",
      "managed AI agents",
    ],
    eyebrow: "Managed AI Operations",
    directAnswerTitle: "What are managed AI operations?",
    directAnswer:
      "Managed AI operations are the ongoing design, deployment, monitoring, governance, and improvement of AI systems inside business workflows. For real estate firms, this means AI is treated as operating infrastructure, with people accountable for accuracy, escalation, compliance, and measurable workflow performance after launch.",
    whoThisIsFor: [
      "Executives who want AI capability without building a specialized internal AI team from scratch.",
      "Property and asset management firms that need implementation, monitoring, governance, and iteration in one operating model.",
      "Teams that have outgrown experimentation and need reliable execution across systems and departments.",
    ],
    problemsSolved: [
      "AI pilots stall after the demo because nobody owns deployment, measurement, retraining, or governance.",
      "Internal IT teams are already responsible for infrastructure and support, not AI product operations.",
      "Vendor tools solve isolated tasks but leave workflow design and operating accountability to the client.",
      "Leadership needs visibility into performance, escalation, and risk after AI enters production.",
    ],
    howQuoinHelps: [
      "Act as the AI operating partner from diagnostic through long-term operations.",
      "Own agent improvement, model evaluation, workflow expansion, and performance reporting.",
      "Coordinate with operations, IT, legal, compliance, and executive sponsors.",
      "Keep AI systems aligned with changing portfolios, policies, vendors, and business priorities.",
    ],
    serviceType: "Managed AI operations for real estate firms",
    backgroundImage: "/approach-operate.jpg",
  },
  readiness: {
    key: "readiness",
    path: "/ai-readiness-property-management",
    title: "AI Readiness Assessment for Property Management",
    metaTitle: "AI Readiness Assessment for Property Management",
    description:
      "AI readiness assessment for property management firms: workflow mapping, data readiness, governance readiness, and a practical implementation roadmap.",
    keywords: [
      "AI readiness assessment property management",
      "AI implementation roadmap real estate operators",
      "property management AI readiness",
      "AI adoption roadmap property management",
      "real estate AI readiness",
    ],
    eyebrow: "AI Readiness",
    directAnswerTitle: "What is an AI readiness assessment for property management?",
    directAnswer:
      "An AI readiness assessment evaluates whether a property management firm has the workflows, data access, system integrations, governance, and executive sponsorship needed to deploy AI safely. The output should be a prioritized implementation roadmap, not a generic strategy deck.",
    whoThisIsFor: [
      "Executives who need a clear AI adoption plan before approving budget or internal change.",
      "Operators with fragmented data across property management systems, accounting tools, portals, email, and spreadsheets.",
      "Firms that want to know which AI use cases are feasible, valuable, and governable before they build.",
    ],
    problemsSolved: [
      "Leadership knows AI matters but does not know which workflow should be first.",
      "Data quality, access, and ownership vary across properties and systems.",
      "Legal, compliance, IT, and operations teams are not aligned on what AI can safely do.",
      "Previous pilots produced activity but not a repeatable implementation model.",
    ],
    howQuoinHelps: [
      "Map high-friction workflows across leasing, maintenance, reporting, accounting, and communications.",
      "Assess data readiness across property systems and supporting applications.",
      "Prioritize use cases by value, feasibility, risk, and executive urgency.",
      "Deliver a buildable roadmap with governance requirements and operating ownership defined.",
    ],
    serviceType: "AI readiness assessment for property management firms",
    backgroundImage: "/approach-discover.jpg",
  },
  governance: {
    key: "governance",
    path: "/ai-governance-property-management",
    title: "AI Governance for Property Management",
    metaTitle: "AI Governance for Property Management",
    description:
      "AI governance for property management firms covering fair housing risk, tenant data privacy, audit trails, access control, and bias monitoring.",
    keywords: [
      "AI governance property management",
      "fair housing AI compliance",
      "AI compliance real estate",
      "property management AI compliance",
      "AI audit trails property management",
    ],
    eyebrow: "AI Governance",
    directAnswerTitle: "What does AI governance mean in property management?",
    directAnswer:
      "AI governance in property management defines what AI may do, what it may not do, what data it can access, when humans must review its work, and how decisions are logged. It is especially important for workflows touching residents, tenant communications, leasing, fair housing, privacy, and financial reporting.",
    whoThisIsFor: [
      "Executives and compliance leaders evaluating AI adoption risk.",
      "Property management firms that operate tenant-facing workflows across multiple properties and systems.",
      "Organizations that need auditability before AI enters leasing, maintenance, resident communication, or reporting workflows.",
    ],
    problemsSolved: [
      "AI tools can create fair housing, privacy, and accountability risk when deployed without guardrails.",
      "Teams need clear rules for human review, escalation, data access, and exception handling.",
      "Leadership needs visibility into what an AI system did, why it acted, and who approved consequential steps.",
      "Governance often arrives after the pilot, when it should shape the design from the start.",
    ],
    howQuoinHelps: [
      "Define AI use boundaries with operations, legal, compliance, and IT stakeholders.",
      "Build human-in-the-loop rules for consequential tenant, vendor, and financial workflows.",
      "Implement audit trails, access control, bias monitoring, and model-evaluation routines.",
      "Keep governance active after deployment through monitoring, reporting, and remediation workflows.",
    ],
    serviceType: "AI governance for property management firms",
    backgroundImage: "/header-approach.jpg",
  },
} satisfies Record<string, SeoLandingPage>

export type PerspectiveArticle = {
  slug: string
  href: string
  date: string
  isoDate: string
  title: string
  metaTitle: string
  description: string
  summary: string
  author: string
  tag: string
  body?: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
  >
}

export const perspectiveArticles: PerspectiveArticle[] = [
  {
    slug: "why-ai-pilots-are-failing",
    href: "/perspectives/why-ai-pilots-are-failing",
    date: "April 2026",
    isoDate: "2026-04-28",
    title: "Why AI Pilots Are Failing in Property Management: And What to Do About It",
    metaTitle: "Why AI Pilots Are Failing in Property Management",
    description:
      "Most AI pilots in property management fail because they are designed around tools, not workflows. Here is the structural breakdown and what firms can do differently.",
    summary:
      "The 95% failure rate for AI pilots is well documented. In property management, the patterns are consistent and the root causes are structural. We break down the failure modes and what firms can do differently.",
    author: "Kavin Sakthivel",
    tag: "Industry Analysis",
  },
  {
    slug: "the-governance-gap-why-property-management-firms-cant-scale-ai",
    href: "/perspectives/the-governance-gap-why-property-management-firms-cant-scale-ai",
    date: "April 2026",
    isoDate: "2026-04-29",
    title: "The Governance Gap: Why Property Management Firms Can't Scale AI",
    metaTitle: "The Governance Gap in Property Management AI",
    description:
      "Why fair housing, tenant data privacy, audit trails, and operating accountability become the deciding factors in scaling AI across property management.",
    summary:
      "Fair housing risk, tenant data privacy exposure, and missing operating accountability are the underestimated barriers to AI adoption in property management.",
    author: "Kavin Sakthivel",
    tag: "Governance",
    body: [
      {
        type: "p",
        text: "Most property management firms do not struggle to find AI tools. They struggle to decide which AI work is safe, who owns the outcome, and how the organization will know when a system has crossed a line.",
      },
      {
        type: "p",
        text: "That is the governance gap. It appears when an AI pilot moves from a contained experiment to a workflow that touches residents, leasing, vendors, accounting, or portfolio reporting.",
      },
      { type: "h2", text: "AI governance is operational, not theoretical" },
      {
        type: "p",
        text: "In property management, governance cannot sit in a policy document that nobody uses. It has to show up inside the workflow: what data the system can access, what it can draft, what it can decide, when it must escalate, and what gets logged.",
      },
      {
        type: "p",
        text: "A maintenance triage agent, for example, needs rules for urgency, access instructions, vendor assignment, resident communication, and human review. A leasing assistant needs even tighter constraints because tenant-facing communication can carry fair housing implications.",
      },
      { type: "h2", text: "The risks are specific" },
      {
        type: "ul",
        items: [
          "Fair housing exposure when AI influences tenant-facing communication or screening-adjacent workflows.",
          "Privacy exposure when lease documents, resident messages, payment data, and maintenance history move through external systems.",
          "Accountability gaps when nobody can explain why an AI system routed a task, drafted a response, or surfaced a risk.",
          "Operational drift when models, prompts, integrations, or source data change without review.",
        ],
      },
      { type: "h2", text: "The practical answer" },
      {
        type: "p",
        text: "AI governance for property management should be designed before deployment. The work starts by naming the workflows AI may touch, classifying the risk of each workflow, defining human review thresholds, and documenting what data the system can see.",
      },
      {
        type: "p",
        text: "Governance also needs a cadence. Models degrade, policies change, and properties operate differently. If nobody reviews escalation rates, accuracy, complaints, and bias indicators after launch, the governance framework is only decorative.",
      },
      { type: "h2", text: "What executives should ask" },
      {
        type: "ul",
        items: [
          "Which workflows can AI support without making consequential tenant or financial decisions?",
          "Where is human approval required before the system acts?",
          "What data is logged, and can the firm reconstruct what happened?",
          "Who owns remediation when performance, compliance, or fairness issues appear?",
        ],
      },
      {
        type: "p",
        text: "Scaling AI is not just a technology question. It is an operating discipline. The firms that build that discipline early will move faster because they will know where speed is safe.",
      },
    ],
  },
  {
    slug: "what-property-management-needs-from-an-ai-partner",
    href: "/perspectives/what-property-management-needs-from-an-ai-partner",
    date: "April 2026",
    isoDate: "2026-04-29",
    title: "What Property Management Needs from an AI Partner, and Why Vendors Aren't Enough",
    metaTitle: "What Property Management Needs from an AI Partner",
    description:
      "Why property management firms need an AI operating partner for workflow design, governance, deployment, and ongoing operations - not only another point solution.",
    summary:
      "The argument for the AI operating partner model versus point solutions, strategy-only consultants, and internal IT teams.",
    author: "Kavin Sakthivel",
    tag: "Point of View",
    body: [
      {
        type: "p",
        text: "The property management AI market is crowded with tools. There are chatbots, leasing assistants, maintenance summarizers, document processors, reporting assistants, and workflow automations. Some are useful. Many solve a narrow task well.",
      },
      {
        type: "p",
        text: "But the problem for executives is rarely access to another tool. The problem is turning AI into operating capability across a firm that already depends on property systems, accounting systems, portals, spreadsheets, email, vendors, residents, and regional teams.",
      },
      { type: "h2", text: "Point solutions leave the hard part with the operator" },
      {
        type: "p",
        text: "A vendor can automate one step in a workflow. The property management firm still has to decide where the tool fits, how it integrates, who monitors it, how exceptions escalate, how staff use it, and how risk is controlled.",
      },
      {
        type: "p",
        text: "That burden is why pilots often look promising but fail to scale. The demo solves a task. The operation needs a system of accountability.",
      },
      { type: "h2", text: "Strategy-only help is also incomplete" },
      {
        type: "p",
        text: "A roadmap can clarify priorities, but AI adoption does not become real until workflows are redesigned, integrations are built, policies are encoded, teams are trained, and performance is monitored. A strategy deck without implementation leaves the executive team with the same execution gap.",
      },
      { type: "h2", text: "The AI operating partner model" },
      {
        type: "p",
        text: "An AI operating partner owns the bridge between strategy and production. The work includes readiness assessment, workflow mapping, agent design, integration, governance, deployment, measurement, and ongoing improvement.",
      },
      {
        type: "ul",
        items: [
          "Operations teams get systems built around the work they already do.",
          "IT teams get scoped integrations and access boundaries instead of uncontrolled tool sprawl.",
          "Legal and compliance teams get governance before deployment, not after an incident.",
          "Executives get operating visibility instead of isolated pilot activity.",
        ],
      },
      { type: "h2", text: "What to look for in a partner" },
      {
        type: "p",
        text: "The right partner should understand property operations, not just model APIs. They should be able to discuss maintenance triage, leasing handoffs, accounting variance, resident communication, fair housing risk, data access, and workflow adoption in the same conversation.",
      },
      {
        type: "p",
        text: "AI adoption becomes durable when someone owns the operating layer. For many firms, that is the missing role.",
      },
    ],
  },
  {
    slug: "property-management-ai-vs-asset-management-ai",
    href: "/perspectives/property-management-ai-vs-asset-management-ai",
    date: "April 2026",
    isoDate: "2026-04-29",
    title: "Property Management AI vs Asset Management AI: Where Adoption Should Start",
    metaTitle: "Property Management AI vs Asset Management AI",
    description:
      "How executives should think about AI adoption across property operations and asset management, and where real estate firms should start.",
    summary:
      "Property management AI and asset management AI solve different problems. The strongest adoption plans connect both layers instead of treating them as separate initiatives.",
    author: "Kavin Sakthivel",
    tag: "Executive Guide",
    body: [
      {
        type: "p",
        text: "Property management and asset management both need AI, but they need it in different layers of the business. Confusing those layers leads to vague initiatives that sound strategic but do not change operational performance.",
      },
      { type: "h2", text: "Property management AI works in the operating layer" },
      {
        type: "p",
        text: "Property management AI is closest to daily execution. It helps triage maintenance requests, draft resident communication, support leasing follow-up, reconcile operational data, and route exceptions to the right person.",
      },
      {
        type: "p",
        text: "The value comes from reducing friction in workflows that repeat across properties. The risk is that resident-facing or compliance-sensitive work can move too quickly without the right controls.",
      },
      { type: "h2", text: "Asset management AI works in the intelligence layer" },
      {
        type: "p",
        text: "Asset management AI is closer to portfolio interpretation. It helps explain NOI movement, surface property-level risks, summarize leasing and operating signals, organize capital planning inputs, and track whether actions are being completed.",
      },
      {
        type: "p",
        text: "The value comes from turning fragmented operating data into executive-ready intelligence. The risk is that the analysis becomes detached from the messy systems where the underlying data is created.",
      },
      { type: "h2", text: "Where adoption should start" },
      {
        type: "p",
        text: "Most firms should start where the operating pain is visible and measurable. That is often a property management workflow: maintenance triage, leasing follow-up, reporting reconciliation, or resident communication.",
      },
      {
        type: "p",
        text: "But the roadmap should connect that first workflow to asset-level visibility. If AI improves maintenance triage, leadership should eventually see what changed: faster routing, fewer unresolved tickets, better vendor coordination, and clearer risk signals.",
      },
      { type: "h2", text: "The executive view" },
      {
        type: "ul",
        items: [
          "Start with workflows where AI can reduce operating drag without making consequential decisions alone.",
          "Define how operational signals will roll up into asset management visibility.",
          "Build governance before AI touches tenant-facing or financial workflows.",
          "Measure adoption by workflow performance, not by tool usage alone.",
        ],
      },
      {
        type: "p",
        text: "The strongest AI adoption plans do not choose between property management and asset management. They build an operating layer that creates better intelligence for the asset layer.",
      },
    ],
  },
]

export const perspectiveArticlesBySlug = Object.fromEntries(
  perspectiveArticles.map((article) => [article.slug, article]),
) as Record<string, PerspectiveArticle>
