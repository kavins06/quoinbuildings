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
  useCases?: Array<{ title: string; description: string }>
  faq?: Array<{ question: string; answer: string }>
  supportingLinks?: Array<{ label: string; href: string; description: string }>
  serviceType: string
  backgroundImage: string
}

export const coreResourceLinks = [
  { label: "AI for Property Management", href: "/ai-for-property-management" },
  { label: "AI for Asset Management", href: "/ai-for-asset-management" },
  { label: "Managed AI Operations", href: "/managed-ai-operations" },
  { label: "AI Operating Partner", href: "/property-management-ai-software-vs-operating-partner" },
  { label: "Maintenance Triage", href: "/ai-maintenance-triage-property-management" },
  { label: "Leasing Automation", href: "/ai-leasing-automation-property-management" },
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
      "Quoin works with property and asset management firms. This page covers AI on the property management side: governed automation across leasing, maintenance, resident communication, accounting, and portfolio workflows.",
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
      "Quoin partners with property and asset management firms. On the property management side, AI means governed AI agents that support property operations such as maintenance triage, leasing follow-up, resident communication, accounting reconciliation, reporting, and portfolio exception management. It works best when AI is embedded into existing workflows, connected to property systems, and monitored with human review, audit trails, data controls, and clear escalation rules.",
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
    useCases: [
      {
        title: "Maintenance triage and work order routing",
        description:
          "AI interprets resident requests, identifies urgency, asks follow-up questions, drafts updates, and routes work to the right internal team or vendor with human escalation for ambiguous cases.",
      },
      {
        title: "Leasing follow-up and prospect communication",
        description:
          "AI helps leasing teams respond faster, summarize prospect intent, draft compliant follow-up, and keep handoffs visible across CRM, email, and property management systems.",
      },
      {
        title: "Resident communication and policy support",
        description:
          "AI drafts consistent resident-facing responses while keeping sensitive, consequential, or policy-bound communication inside human review.",
      },
      {
        title: "Reporting, reconciliation, and exception surfacing",
        description:
          "AI reviews fragmented operational data, flags inconsistencies, drafts variance explanations, and helps executives see where property-level issues need attention.",
      },
    ],
    faq: [
      {
        question: "What is AI for property management?",
        answer:
          "AI for property management uses governed AI agents to support leasing, maintenance, resident communication, reporting, accounting, and portfolio workflows. The goal is not a standalone chatbot; it is an operating layer that helps work move through the firm more reliably.",
      },
      {
        question: "How can AI help property management companies?",
        answer:
          "AI can help property management companies triage maintenance requests, draft resident responses, summarize leasing conversations, reconcile operational data, surface exceptions, and reduce manual coordination across systems.",
      },
      {
        question: "Should property management firms buy AI software or build custom AI workflows?",
        answer:
          "Point software can solve narrow tasks, but firms with multi-property complexity often need custom workflows, integrations, governance, and ongoing operations. Quoin focuses on the operating layer that connects AI to how work actually happens.",
      },
      {
        question: "What property management systems can AI work with?",
        answer:
          "AI workflows can be designed around property management systems such as Yardi, RealPage, AppFolio, Entrata, MRI, Rent Manager, Buildium, supporting CRMs, accounting systems, portals, documents, email, and spreadsheets, depending on access and data readiness.",
      },
    ],
    supportingLinks: [
      {
        label: "AI maintenance triage for property management",
        href: "/ai-maintenance-triage-property-management",
        description: "A deeper look at using AI to interpret, route, and govern maintenance requests.",
      },
      {
        label: "AI leasing automation for property management",
        href: "/ai-leasing-automation-property-management",
        description: "How AI can help leasing teams respond faster without creating compliance risk.",
      },
      {
        label: "Property management AI software vs AI operating partner",
        href: "/property-management-ai-software-vs-operating-partner",
        description: "Why broad adoption often needs an operating model, not another disconnected tool.",
      },
    ],
    serviceType: "AI adoption and managed AI operations for property management firms",
    backgroundImage: "/header-who-we-help.jpg",
  },
  maintenanceTriage: {
    key: "maintenanceTriage",
    path: "/ai-maintenance-triage-property-management",
    title: "AI Maintenance Triage for Property Management",
    metaTitle: "AI Maintenance Triage for Property Management",
    description:
      "Quoin partners with property and asset management firms. This page covers AI maintenance triage for property managers: faster work order routing, resident updates, vendor coordination, and human escalation.",
    keywords: [
      "AI maintenance triage property management",
      "property management maintenance AI",
      "AI work order routing",
      "maintenance request automation",
      "AI for property maintenance",
    ],
    eyebrow: "Maintenance AI",
    directAnswerTitle: "What is AI maintenance triage in property management?",
    directAnswer:
      "AI maintenance triage in property management uses AI agents to interpret resident requests, identify urgency, ask follow-up questions, classify the issue, draft resident updates, and route work to the right team or vendor. It should include human escalation for urgent, ambiguous, safety-sensitive, or policy-bound requests.",
    whoThisIsFor: [
      "Executives and operations leaders managing high maintenance volume across multiple properties.",
      "Firms where requests arrive through portals, phone calls, text messages, email, and onsite staff.",
      "Teams that need faster routing without losing control over resident experience, safety, or vendor accountability.",
    ],
    problemsSolved: [
      "Residents submit vague or incomplete maintenance requests that need interpretation before dispatch.",
      "Maintenance coordinators lose time categorizing issues, checking access notes, and repeating follow-up questions.",
      "Vendor assignment depends on local knowledge that is not consistently captured in the system.",
      "Urgent, ambiguous, or repeated issues can be mishandled if AI is deployed without escalation rules.",
    ],
    howQuoinHelps: [
      "Map the complete maintenance intake and dispatch workflow before automation.",
      "Design triage agents with categories, urgency rules, follow-up prompts, vendor logic, and escalation paths.",
      "Connect the workflow to property systems and communication channels where access is available.",
      "Monitor accuracy, escalation rate, resident communication quality, and operational exceptions after launch.",
    ],
    useCases: [
      {
        title: "Resident request interpretation",
        description:
          "AI converts vague resident language into structured maintenance categories, urgency levels, access needs, and follow-up questions.",
      },
      {
        title: "Work order routing",
        description:
          "AI helps route requests to onsite teams, maintenance coordinators, or vendors based on issue type, property rules, and escalation thresholds.",
      },
      {
        title: "Resident status updates",
        description:
          "AI drafts clear updates while human review remains available for sensitive, repeated, urgent, or disputed requests.",
      },
      {
        title: "Exception monitoring",
        description:
          "AI surfaces unresolved requests, repeated issues, missing vendor updates, and patterns that should reach regional or executive attention.",
      },
    ],
    faq: [
      {
        question: "Can AI triage maintenance requests for property managers?",
        answer:
          "Yes. AI can help classify maintenance requests, identify urgency, ask follow-up questions, draft updates, and route work orders. It should be designed with human escalation for urgent, ambiguous, safety-sensitive, or tenant-impacting issues.",
      },
      {
        question: "Does AI replace maintenance coordinators?",
        answer:
          "No. The best use of AI is to reduce repetitive intake, routing, and communication work so coordinators can focus on exceptions, vendor performance, resident experience, and operational judgment.",
      },
      {
        question: "What makes maintenance AI risky?",
        answer:
          "Maintenance AI becomes risky when it force-routes ambiguous requests, misses urgency, ignores access instructions, or communicates with residents without review in sensitive situations. Governance and escalation rules are essential.",
      },
    ],
    supportingLinks: [
      {
        label: "AI for property management",
        href: "/ai-for-property-management",
        description: "The broader operating model for AI across leasing, maintenance, reporting, and communication.",
      },
      {
        label: "AI governance for property and asset management",
        href: "/ai-governance-property-management",
        description: "The guardrails needed before AI touches tenant-facing workflows.",
      },
    ],
    serviceType: "AI maintenance triage for property management firms",
    backgroundImage: "/service-ai-dev.jpg",
  },
  leasingAutomation: {
    key: "leasingAutomation",
    path: "/ai-leasing-automation-property-management",
    title: "AI Leasing Automation for Property Management",
    metaTitle: "AI Leasing Automation for Property Management",
    description:
      "Quoin partners with property and asset management firms. This page covers AI leasing automation for property managers: faster prospect follow-up, cleaner handoffs, and compliant resident-facing workflows.",
    keywords: [
      "AI leasing automation property management",
      "property management leasing AI",
      "AI leasing assistant",
      "AI prospect follow up property management",
      "AI for leasing teams",
    ],
    eyebrow: "Leasing AI",
    directAnswerTitle: "What is AI leasing automation for property management?",
    directAnswer:
      "AI leasing automation helps property management teams respond to prospects, summarize intent, draft follow-up, answer policy-bound questions, and keep leasing handoffs visible. It should support leasing teams without making final tenant decisions or creating fair housing risk.",
    whoThisIsFor: [
      "Executives and leasing leaders responsible for speed-to-lead, occupancy, and consistent follow-up.",
      "Property management firms where leasing activity spans email, phone, CRM, property systems, and onsite teams.",
      "Teams that need AI support without letting unsupervised models make tenant-facing or screening-adjacent decisions.",
    ],
    problemsSolved: [
      "Prospects go cold because leasing teams cannot respond quickly and consistently across channels.",
      "Important details from calls, emails, and tours do not always reach the next person in the workflow.",
      "Leasing teams need help drafting responses while staying within fair housing and company policy boundaries.",
      "Point tools can create fragmented communication if they are not integrated into the operating workflow.",
    ],
    howQuoinHelps: [
      "Map leasing intake, response, follow-up, tour, application, and handoff workflows.",
      "Design AI assistants that draft, summarize, and route work while preserving human control.",
      "Build compliance-aware review rules for sensitive, policy-bound, and tenant-facing communication.",
      "Measure adoption through response time, follow-up consistency, handoff quality, and exception handling.",
    ],
    useCases: [
      {
        title: "Prospect follow-up",
        description:
          "AI drafts timely responses and follow-up messages using approved property, pricing, availability, and policy context.",
      },
      {
        title: "Conversation summaries",
        description:
          "AI summarizes prospect needs, objections, urgency, and next steps so leasing teams do not lose context between channels.",
      },
      {
        title: "Policy-bound Q&A",
        description:
          "AI can help answer approved questions while escalating sensitive, uncertain, or fair-housing-adjacent topics to people.",
      },
      {
        title: "CRM and workflow handoffs",
        description:
          "AI keeps next actions visible across leasing staff, regional managers, and supporting systems.",
      },
    ],
    faq: [
      {
        question: "Can AI automate leasing follow-up?",
        answer:
          "AI can draft and prioritize leasing follow-up, summarize prospect intent, and help teams respond faster. Final judgment and sensitive tenant-facing decisions should stay with trained staff.",
      },
      {
        question: "Is AI leasing automation safe for fair housing?",
        answer:
          "It can be safer when designed with approved language, escalation rules, audit trails, and human review. It is risky when a generic chatbot answers sensitive questions without governance.",
      },
      {
        question: "What should leasing AI connect to?",
        answer:
          "Leasing AI may need context from CRM, availability, pricing, property policies, email, call notes, tour scheduling, and the property management system, depending on data access and governance.",
      },
    ],
    supportingLinks: [
      {
        label: "AI for property management",
        href: "/ai-for-property-management",
        description: "How leasing automation fits into a broader AI operating model.",
      },
      {
        label: "AI governance for property and asset management",
        href: "/ai-governance-property-management",
        description: "Governance for anti-discrimination compliance, privacy, audit trails, and human review.",
      },
    ],
    serviceType: "AI leasing automation for property management firms",
    backgroundImage: "/service-strategy.jpg",
  },
  softwareVsPartner: {
    key: "softwareVsPartner",
    path: "/property-management-ai-software-vs-operating-partner",
    title: "Property Management AI Software vs AI Operating Partner",
    metaTitle: "Property Management AI Software vs AI Operating Partner",
    description:
      "A comparison for property and asset management executives evaluating AI software, point solutions, consultants, and AI operating partners.",
    keywords: [
      "property management AI software",
      "AI operating partner property management",
      "property management AI vendor",
      "AI software vs AI partner",
      "managed AI operations property management",
    ],
    eyebrow: "AI Buying Guide",
    directAnswerTitle: "Should property management firms buy AI software or use an AI operating partner?",
    directAnswer:
      "AI software can be useful for narrow tasks, but property and asset management firms with multi-property or multi-portfolio complexity often need workflow design, integration, governance, deployment, monitoring, and ongoing improvement. An AI operating partner owns that operating layer so AI becomes capability, not another tool to manage.",
    whoThisIsFor: [
      "Property and asset management executives comparing AI vendors, point solutions, consultants, and custom implementation partners.",
      "Firms that have already tested AI tools but struggled to scale them across properties, portfolios, and teams.",
      "Organizations that need accountability for adoption, governance, and performance after launch.",
    ],
    problemsSolved: [
      "Point solutions automate isolated tasks but leave workflow design and integration to the operator.",
      "Strategy-only consultants can clarify priorities without building or operating the systems.",
      "Internal IT teams may not have bandwidth for AI product operations, model evaluation, and workflow ownership.",
      "Executives need one accountable path from diagnosis to production and ongoing improvement.",
    ],
    howQuoinHelps: [
      "Evaluate when a point solution is enough and when custom operating workflows are needed.",
      "Design the AI layer around business workflows instead of vendor feature lists.",
      "Coordinate operations, IT, legal, compliance, and executive sponsors through implementation.",
      "Operate the AI systems after launch with monitoring, reporting, governance, and iteration.",
    ],
    useCases: [
      {
        title: "Vendor evaluation",
        description:
          "Quoin helps determine whether existing software can solve the problem or whether the workflow needs custom integration and operations.",
      },
      {
        title: "Workflow ownership",
        description:
          "The operating partner model assigns accountability for design, deployment, adoption, governance, and measurement.",
      },
      {
        title: "Governed deployment",
        description:
          "AI moves into production with escalation rules, audit trails, access controls, and measurement routines.",
      },
      {
        title: "Ongoing improvement",
        description:
          "AI systems are reviewed and improved as property systems, policies, portfolios, and team needs change.",
      },
    ],
    faq: [
      {
        question: "What is a property management AI operating partner?",
        answer:
          "A property management AI operating partner helps design, build, govern, deploy, monitor, and improve AI workflows across the firm, instead of selling only a standalone software tool.",
      },
      {
        question: "When is AI software enough?",
        answer:
          "AI software may be enough when the need is narrow, low-risk, and contained. Firms with cross-system workflows, compliance risk, fragmented data, or multi-property complexity usually need a broader operating model.",
      },
      {
        question: "How is Quoin different from an AI chatbot vendor?",
        answer:
          "Quoin focuses on workflow design, custom agents, governance, integration, and ongoing AI operations for property and asset management firms rather than only providing a chatbot interface.",
      },
    ],
    supportingLinks: [
      {
        label: "Managed AI operations",
        href: "/managed-ai-operations",
        description: "The ongoing operating model behind production AI adoption.",
      },
      {
        label: "AI readiness assessment",
        href: "/ai-readiness-property-management",
        description: "How to identify the right AI workflow before committing to a build or vendor.",
      },
    ],
    serviceType: "AI operating partner advisory for property management firms",
    backgroundImage: "/approach-design.jpg",
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
    faq: [
      {
        question: "How is AI for asset management different from AI for property management?",
        answer:
          "Property management AI usually supports operating workflows such as leasing, maintenance, and resident communication. Asset management AI focuses on portfolio intelligence, risk visibility, reporting, NOI movement, and follow-through across assets.",
      },
      {
        question: "Can AI help real estate asset managers with reporting?",
        answer:
          "Yes. AI can help summarize operating signals, draft variance explanations, surface risks, organize document inputs, and track follow-up, provided the underlying data sources and governance are clear.",
      },
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
    faq: [
      {
        question: "What is managed AI operations?",
        answer:
          "Managed AI operations is the ongoing monitoring, governance, evaluation, workflow expansion, and improvement of AI systems after deployment.",
      },
      {
        question: "Why do real estate firms need managed AI operations?",
        answer:
          "Real estate workflows change as portfolios, teams, policies, and systems change. Managed AI operations keeps agents accurate, governed, measurable, and aligned with the business after launch.",
      },
    ],
    serviceType: "Managed AI operations for real estate firms",
    backgroundImage: "/approach-operate.jpg",
  },
  readiness: {
    key: "readiness",
    path: "/ai-readiness-property-management",
    title: "AI Readiness Assessment for Property and Asset Management",
    metaTitle: "AI Readiness Assessment for Property and Asset Management",
    description:
      "AI readiness assessment for property and asset management firms: workflow mapping, data readiness, governance readiness, and a practical implementation roadmap.",
    keywords: [
      "AI readiness assessment property management",
      "AI readiness assessment asset management",
      "AI implementation roadmap real estate operators",
      "AI adoption roadmap real estate",
      "real estate AI readiness",
    ],
    eyebrow: "AI Readiness",
    directAnswerTitle: "What is an AI readiness assessment for real estate?",
    directAnswer:
      "An AI readiness assessment evaluates whether a property or asset management firm has the workflows, data access, system integrations, governance, and executive sponsorship needed to deploy AI safely. The output should be a prioritized implementation roadmap, not a generic strategy deck.",
    whoThisIsFor: [
      "Property management executives who need a clear AI adoption plan before approving budget or internal change.",
      "Asset management executives gauging AI fit before investment, across portfolio reporting, valuation support, and risk surfacing.",
      "Operators with fragmented data across property management systems, asset management stacks, accounting tools, portals, email, and spreadsheets.",
      "Firms that want to know which AI use cases are feasible, valuable, and governable before they build.",
    ],
    problemsSolved: [
      "Leadership knows AI matters but does not know which workflow should be first.",
      "Data quality, access, and ownership vary across properties, portfolios, and systems.",
      "Legal, compliance, IT, and operations teams are not aligned on what AI can safely do.",
      "Previous pilots produced activity but not a repeatable implementation model.",
    ],
    howQuoinHelps: [
      "Map high-friction workflows across operating workflows (leasing, maintenance, communications) and portfolio workflows (reporting, variance analysis, investor communications).",
      "Assess data readiness across property management and asset management systems and supporting applications.",
      "Prioritize use cases by value, feasibility, risk, and executive urgency.",
      "Deliver a buildable roadmap with governance requirements and operating ownership defined.",
    ],
    faq: [
      {
        question: "What does AI readiness mean for property and asset management?",
        answer:
          "AI readiness means the firm has identified the right workflows, data access, system constraints, governance rules, executive sponsorship, and operating owner for AI deployment, on either the property management or asset management side.",
      },
      {
        question: "What should an AI implementation roadmap include?",
        answer:
          "A practical roadmap should identify priority workflows, required data and integrations, governance requirements, launch sequence, success metrics, and ownership after deployment.",
      },
    ],
    serviceType: "AI readiness assessment for property and asset management firms",
    backgroundImage: "/approach-discover.jpg",
  },
  governance: {
    key: "governance",
    path: "/ai-governance-property-management",
    title: "AI Governance for Property and Asset Management",
    metaTitle: "AI Governance for Property and Asset Management",
    description:
      "AI governance for property and asset management firms covering anti-discrimination compliance, data privacy, audit trails, access control, and bias monitoring.",
    keywords: [
      "AI governance property management",
      "AI governance asset management",
      "AI compliance real estate",
      "AI audit trails real estate",
      "real estate AI bias monitoring",
    ],
    eyebrow: "AI Governance",
    directAnswerTitle: "What does AI governance mean in property and asset management?",
    directAnswer:
      "AI governance in property and asset management defines what AI may do, what it may not do, what data it can access, when humans must review its work, and how decisions are logged. It applies to workflows touching residents, tenant communications, leasing, financial reporting, investor communications, and consequential portfolio decisions.",
    whoThisIsFor: [
      "Executives and compliance leaders at property and asset management firms evaluating AI adoption risk.",
      "Operators running tenant-facing workflows across multiple properties and systems.",
      "Asset management teams running portfolio reporting, valuation support, and investor-facing workflows.",
      "Organizations that need auditability before AI enters leasing, maintenance, resident communication, reporting, or investor-facing workflows.",
    ],
    problemsSolved: [
      "AI tools can create anti-discrimination, privacy, and accountability risk when deployed without guardrails.",
      "Teams need clear rules for human review, escalation, data access, and exception handling.",
      "Leadership needs visibility into what an AI system did, why it acted, and who approved consequential steps.",
      "Governance often arrives after the pilot, when it should shape the design from the start.",
    ],
    howQuoinHelps: [
      "Define AI use boundaries with operations, legal, compliance, and IT stakeholders.",
      "Build human-in-the-loop rules for consequential resident, vendor, financial, and investor-facing workflows.",
      "Implement audit trails, access control, bias monitoring, and model-evaluation routines.",
      "Keep governance active after deployment through monitoring, reporting, and remediation workflows.",
    ],
    faq: [
      {
        question: "Why is AI governance important in property and asset management?",
        answer:
          "Property and asset management involves tenant-facing, financial, privacy, and decision-sensitive workflows. Governance defines where AI can act, when humans must review, and how decisions are logged.",
      },
      {
        question: "What should real estate AI governance include?",
        answer:
          "It should include data access limits, audit trails, human review thresholds, bias monitoring, escalation rules, model evaluation, and documentation for each workflow.",
      },
    ],
    serviceType: "AI governance for property and asset management firms",
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
