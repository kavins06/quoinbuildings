export type CtaLink = {
  href: string;
  label: string;
};

export type Principle = {
  title: string;
  body: string;
};

export type ApplicationPreviewCard = {
  href: string;
  title: string;
  summary: string;
};

export type ApplicationGroup = {
  id: string;
  title: string;
  positioning: string;
  areas: string[];
  questions: string[];
  translation: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type InsightsPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
};

export const siteMeta = {
  name: "QUOIN",
  title: "QUOIN \u2014 AI Implementation & Governance for Property Management",
  description:
    "QUOIN helps property management companies implement AI and govern it responsibly \u2014 with the domain expertise that generic consultants lack.",
  footerLine:
    "AI adoption done right. Implementation and governance, together.",
};

export const navItems: CtaLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/why-property-management", label: "Why Property Management" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


export const homeContent = {
  hero: {
    eyebrow: "QUOIN",
    title:
      "Your competitors are deploying AI. Fair housing lawsuits are accelerating. You need to move \u2014 but you need to move right.",
    description:
      "QUOIN helps property management companies implement AI and govern it responsibly. We combine deep PM domain expertise with structured AI advisory \u2014 so you can adopt with confidence, not just urgency.",
    primaryCta: { href: "/services", label: "See how we help" },
    secondaryCta: { href: "/contact", label: "Start a conversation" },
  },
  problem: {
    label: "The Gap",
    title: "72% of real estate firms are increasing AI investment. Only 5% have achieved their objectives.",
    body:
      "The problem isn\u2019t awareness \u2014 every PM executive knows AI matters. The problem is execution. Pilots stall. Tools don\u2019t integrate. Governance doesn\u2019t exist. Teams aren\u2019t ready. The gap between AI ambition and AI results is where most firms are stuck.",
    support:
      "Source: PwC Emerging Trends in Real Estate, NAIOP Research 2025",
  },
  whyNow: {
    label: "Why Now",
    title: "The window for careful, strategic adoption is narrowing.",
    body:
      "Competitors are deploying AI leasing assistants. Greystar settled for $7M over AI-driven rent pricing. Harbor Group faced litigation over discriminatory AI screening. The regulatory landscape is shifting. Moving slowly is no longer the safe option \u2014 but moving recklessly is worse.",
    support:
      "Implementation without governance is liability. Governance without implementation is stagnation.",
  },
  layer: {
    label: "How QUOIN Helps",
    title: "Two tracks. One engagement. No gaps.",
    body:
      "Most firms separate AI implementation from AI governance \u2014 or ignore governance entirely. QUOIN combines both, specifically for property management, so you can adopt AI that works AND holds up to scrutiny.",
    blocks: [
      {
        title: "Assess",
        body: "Evaluate your current AI maturity, operational readiness, and risk exposure across your portfolio.",
      },
      {
        title: "Implement",
        body: "Select the right tools, design workflows, and deploy AI that integrates with your PM operations \u2014 not against them.",
      },
      {
        title: "Govern",
        body: "Build the policies, compliance frameworks, and oversight systems that protect you from bias, data, and regulatory risk.",
      },
    ],
  },
  applications: {
    label: "Outcomes",
    title: "One advisory engagement. Multiple results.",
    body:
      "QUOIN\u2019s work isn\u2019t organized around isolated tools. It\u2019s organized around the outcomes property management executives actually need.",
    cards: [
      {
        href: "/services#implementation",
        title: "Operational Efficiency",
        summary: "Reduce costs. Deploy AI that your team actually uses.",
      },
      {
        href: "/services#governance",
        title: "Compliance Confidence",
        summary: "Govern AI before it governs your risk exposure.",
      },
      {
        href: "/services#strategy",
        title: "Portfolio AI Strategy",
        summary: "Know where to invest, what to skip, and how to sequence.",
      },
    ],
  },
  conviction: {
    label: "Point of View",
    title: "AI in property management should be adopted deliberately \u2014 not reactively.",
    body:
      "Governance shouldn\u2019t be bolted on after an incident. Implementation shouldn\u2019t chase vendor hype. And no PM firm should have to choose between moving fast and moving safely. QUOIN exists because both are possible \u2014 if you have the right partner.",
    support:
      "QUOIN exists to make deliberate AI adoption the standard, not the exception.",
  },
  partnerCta: {
    title: "Start with a conversation.",
    body:
      "Tell us where you are with AI, what\u2019s driving the urgency, and what\u2019s holding you back. We\u2019ll tell you whether we can help \u2014 and what the first step looks like.",
    primary: { href: "/contact", label: "Get in touch" },
    secondary: { href: "/services", label: "See our services" },
  },
};

export const whyPMContent = {
  hero: {
    label: "Why Property Management",
    title: "Generic AI advice fails here. Property management has specific challenges that demand specific expertise.",
    description:
      "Tenant data sensitivity. Fair housing compliance. Fragmented vendor ecosystems. Lean operations teams. The AI playbook from other industries doesn\u2019t translate.",
  },
  sections: [
    {
      label: "Tenant Data Sensitivity",
      title: "Your data isn\u2019t just operational \u2014 it\u2019s personal.",
      body:
        "Property management firms handle SSNs, financial records, lease histories, and behavioral data. AI systems that touch this data need governance frameworks that account for tenant privacy, not just operational efficiency.",
    },
    {
      label: "Fair Housing & Algorithmic Bias",
      title: "AI screening tools can create liability your team doesn\u2019t see.",
      body:
        "Tenant screening algorithms, AI leasing assistants, and dynamic pricing tools can introduce discriminatory patterns \u2014 even unintentionally. In 2025 alone, Greystar settled for $7M and Harbor Group faced litigation over AI-driven discrimination. The RETTC governance framework exists but few firms have operationalized it.",
    },
    {
      label: "Vendor Fragmentation",
      title: "15 tools that don\u2019t talk to each other create more work, not less.",
      body:
        "The average PM tech stack is deeply fragmented \u2014 Yardi, AppFolio, MRI, plus point solutions for leasing, maintenance, screening, and communications. AI that doesn\u2019t integrate with this reality fails. QUOIN understands the PM tech landscape because we come from it.",
    },
    {
      label: "Workforce Readiness",
      title: "Only 33% of property management staff feel trained on AI.",
      body:
        "Tools don\u2019t create value \u2014 people using tools create value. QUOIN\u2019s engagements include change management and team enablement because implementation without adoption is waste.",
    },
  ],
  principles: [
    {
      title: "Start with operations, not technology.",
      body: "Understand how the building is actually managed before recommending what to automate.",
    },
    {
      title: "Governance from day one.",
      body: "Don\u2019t wait for an incident to build your AI policy framework.",
    },
    {
      title: "Integrate, don\u2019t add.",
      body: "AI should work within your existing PM tech stack, not alongside it.",
    },
    {
      title: "Measure what matters.",
      body: "ROI clarity at every stage. No black-box recommendations.",
    },
  ] satisfies Principle[],
  cta: {
    title: "If your firm is navigating AI adoption, we should talk.",
    body:
      "QUOIN works with property management companies that want to get AI right \u2014 not just get AI fast.",
    primary: { href: "/contact", label: "Start a conversation" },
  },
};

export const servicesContent = {
  hero: {
    label: "Services",
    title: "AI implementation and governance, built for property management.",
    description:
      "QUOIN offers two complementary service tracks that work together \u2014 because implementation without governance is liability, and governance without implementation is stagnation.",
  },
  groups: [
    {
      id: "implementation",
      title: "AI Implementation",
      positioning: "From strategy through deployment \u2014 we help you select, integrate, and operationalize AI across your portfolio.",
      areas: [
        "AI readiness assessment",
        "Tool and vendor evaluation",
        "Workflow design and integration",
        "Change management and team enablement",
      ],
      questions: [
        "Which AI tools actually make sense for a PM firm our size?",
        "How do we integrate AI with Yardi / AppFolio / MRI without breaking workflows?",
        "How do we get our team to actually adopt these tools?",
      ],
      translation: "Lower operating costs, better team productivity, and AI that works with your operations.",
    },
    {
      id: "governance",
      title: "AI Governance",
      positioning: "Build the policies, oversight, and compliance frameworks that protect your firm \u2014 before you need them.",
      areas: [
        "AI policy and ethical framework development",
        "Fair housing and algorithmic bias auditing",
        "Tenant data privacy and security review",
        "Vendor AI due diligence",
      ],
      questions: [
        "Are our AI screening tools exposing us to fair housing liability?",
        "Do we have a governance framework that satisfies our board and our insurers?",
        "How should we evaluate AI vendors\u2019 claims about bias and accuracy?",
      ],
      translation: "Compliance confidence, reduced legal exposure, and a governance framework that scales with your AI adoption.",
    },
    {
      id: "strategy",
      title: "Portfolio AI Strategy",
      positioning: "Know where to invest, what to sequence, and how to measure success across your entire portfolio.",
      areas: [
        "Portfolio-wide AI opportunity assessment",
        "Investment prioritization and ROI modeling",
        "Multi-year AI roadmap development",
        "Board and investor communication support",
      ],
      questions: [
        "Where in our portfolio will AI create the most value first?",
        "How should we phase our AI investment over the next 2-3 years?",
        "What should I tell my board about our AI strategy?",
      ],
      translation: "Clear investment priorities, measurable milestones, and a strategy your board can get behind.",
    },
  ] satisfies ApplicationGroup[],
  closing: {
    title: "These tracks work together.",
    body:
      "Most firms need elements of all three. QUOIN scopes engagements based on where you are, not on what we want to sell.",
  },
};

export const aboutContent = {
  hero: {
    label: "About",
    title: "Why QUOIN exists.",
    description:
      "QUOIN exists because property management firms deserve AI advisory that understands their world \u2014 not generic consulting that charges enterprise prices for horizontal advice.",
  },
  sections: [
    {
      label: "The Gap We Saw",
      title: "PM firms were being sold AI by people who had never managed a building.",
      body:
        "Generic AI consultancies don\u2019t understand fair housing risk. Technology vendors sell tools, not strategy. The Big 4 charges $500K+ for advice that doesn\u2019t account for how a 5,000-unit portfolio actually operates. We saw a gap and built a firm to fill it.",
    },
    {
      label: "What We\u2019re Building",
      title: "A category-defining advisory firm for AI in property management.",
      body:
        "Not another technology vendor. Not a generalist consultancy with a real estate slide deck. A firm built from the ground up to help property management companies implement AI and govern it responsibly.",
    },
  ],
  principles: [
    {
      title: "Domain expertise first",
      body: "We advise on AI because we understand property management \u2014 not the other way around.",
    },
    {
      title: "Governance is not optional",
      body: "Every implementation recommendation comes with governance guidance. They\u2019re inseparable.",
    },
    {
      title: "Outcomes over tools",
      body: "We don\u2019t sell software. We help you make better decisions about technology.",
    },
    {
      title: "Accessible to mid-market",
      body: "Meaningful AI advisory shouldn\u2019t require a Fortune 500 budget.",
    },
  ] satisfies Principle[],
  brandNote: {
    title: "A foundation matters most at the corner.",
    body:
      "A quoin is a structural architectural element that helps define and strengthen the corner of a building. The name reflects how we think: foundational, architectural, and built to carry weight.",
  },
  cta: {
    title: "Build the category with us.",
    body:
      "QUOIN is looking for property management leaders who want to get AI adoption right. If that\u2019s you, let\u2019s talk.",
    primary: { href: "/contact", label: "Get in touch" },
  },
};

export const contactContent = {
  hero: {
    label: "Contact",
    title: "Start a conversation with QUOIN.",
    description:
      "Tell us where you are with AI, what\u2019s driving the urgency, and what\u2019s holding you back. We\u2019ll tell you whether we can help.",
  },
  audiences: [
    {
      title: "CEOs and COOs",
      body: "You need an AI strategy your board will support and your team can execute.",
    },
    {
      title: "CTOs and VPs of Technology",
      body: "You\u2019ve run pilots that didn\u2019t scale, or you need help evaluating AI vendors for your PM tech stack.",
    },
    {
      title: "General Counsel and Risk Officers",
      body: "You\u2019re concerned about AI bias, tenant data privacy, or fair housing exposure in your current tools.",
    },
    {
      title: "Portfolio and Asset Managers",
      body: "You want to understand where AI can create value across your portfolio and how to prioritize investment.",
    },
  ],
  note:
    "We scope every engagement to your situation. No two PM firms are identical \u2014 and no two QUOIN engagements are either.",
};

export const teamContent = {
  label: "Team",
  title: "The people behind QUOIN.",
  members: [
    {
      name: "Founder Name",
      role: "Co-Founder & CEO",
      bio: "Background in property management and commercial real estate operations. Focused on making AI advisory accessible and practical for PM firms.",
    },
    {
      name: "Founder Name",
      role: "Co-Founder & CTO",
      bio: "Background in infrastructure software and data systems. Focused on helping PM companies navigate AI implementation across fragmented tech stacks.",
    },
  ] satisfies TeamMember[],
};

export const credibilitySignals = [
  "Property management focus",
  "Implementation + governance",
  "Built by PM operators",
];

// Backward-compatible aliases for renamed exports
export const visionContent = whyPMContent;
export const applicationsContent = servicesContent;
export const partnerContent = contactContent;
