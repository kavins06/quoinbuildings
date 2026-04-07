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

export const siteMeta = {
  name: "QUOIN",
  title: "QUOIN - Building performance should connect directly to financial performance",
  description:
    "QUOIN is building a new intelligence layer for the built environment, connecting physical building performance to cost, risk, and asset value.",
  footerLine:
    "Building performance should connect directly to financial performance.",
};

export const navItems: CtaLink[] = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Vision" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/partner", label: "Partner" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Read the vision" },
  { href: "/applications", label: "See the applications" },
  { href: "/partner", label: "Partner with QUOIN" },
];

export const homeContent = {
  hero: {
    eyebrow: "QUOIN",
    title:
      "Building performance should connect directly to financial performance.",
    description:
      "QUOIN is building a new intelligence layer for the built environment, one that links how buildings physically operate to the costs, risks, and value they create.",
    primaryCta: { href: "/vision", label: "Read the vision" },
    secondaryCta: { href: "/partner", label: "Partner with QUOIN" },
  },
  problem: {
    label: "Problem",
    title: "Buildings generate signals. Most owners still cannot use them.",
    body:
      "Data exists across equipment, controls, meters, workflows, and physical space. But most buildings are still managed through disconnected systems, fragmented visibility, and reactive decisions.",
    support:
      "The result is a gap between what a building is doing physically and what the asset is doing financially.",
  },
  whyNow: {
    label: "Why Now",
    title: "The cost and intelligence curve is changing.",
    body:
      "For years, advanced building intelligence was too fragmented, too custom, and too expensive to scale broadly. New approaches in physical-world modeling, better data infrastructure, and more affordable intelligence systems are changing that.",
    support:
      "What used to be reserved for premium assets can begin to extend much further across the market.",
  },
  layer: {
    label: "What QUOIN Is Building",
    title: "A new layer for building intelligence.",
    body:
      "QUOIN is building a lower-cost way to connect physical building performance to financial outcomes. Not as another isolated point solution, but as a foundational layer that can make building behavior more legible, comparable, and actionable.",
    blocks: [
      {
        title: "Observe",
        body: "Turn scattered building signals into a coherent operational picture.",
      },
      {
        title: "Interpret",
        body: "Understand how systems, space, and behavior relate to one another.",
      },
      {
        title: "Translate",
        body: "Connect physical performance to cost, risk, and asset-level decisions.",
      },
    ],
  },
  applications: {
    label: "Applications",
    title: "One intelligence layer. Multiple outcomes.",
    body:
      "QUOIN is not being built around a single workflow. The same underlying intelligence can shape decisions across efficiency, risk, and asset performance.",
    cards: [
      {
        href: "/applications#efficiency",
        title: "Efficiency",
        summary: "Reduce waste. Prioritize attention.",
      },
      {
        href: "/applications#risk",
        title: "Risk",
        summary: "See issues earlier. Reduce surprises.",
      },
      {
        href: "/applications#asset-performance",
        title: "Asset performance",
        summary: "Make better long-term decisions.",
      },
    ],
  },
  conviction: {
    label: "Conviction",
    title: "Building intelligence should not be reserved for premium assets.",
    body:
      "The next operating model for buildings should not depend on bespoke systems, expensive retrofits, or isolated deployments. Intelligence should become a standard layer of the built environment.",
    support: "QUOIN exists to help make that shift legible.",
  },
  partnerCta: {
    title: "Help shape what comes next.",
    body:
      "QUOIN is looking to engage forward-looking owners, operators, technologists, and ecosystem partners who see the future of building intelligence the same way.",
    primary: { href: "/partner", label: "Partner with QUOIN" },
    secondary: { href: "/vision", label: "Read the vision" },
  },
};

export const visionContent = {
  hero: {
    label: "Vision",
    title: "The next operating model for buildings.",
    description:
      "Buildings should be understood as dynamic physical systems whose performance connects directly to economics.",
  },
  sections: [
    {
      label: "Buildings Are Not Static Assets",
      title: "A building is not just an address or a balance-sheet line.",
      body:
        "It is a living operational system. It consumes energy, degrades over time, responds to occupancy, and creates downstream financial consequences. Yet the way buildings are evaluated often remains far more static than the systems themselves.",
    },
    {
      label: "The Industry Has Data, Not Intelligence",
      title: "Signals exist. Usable intelligence does not.",
      body:
        "Meters, equipment, controls, inspections, and spatial context all generate useful information. But most of that information remains disconnected across tools, vendors, and workflows. The problem is no longer only measurement. It is coherence.",
    },
    {
      label: "Why Legacy Approaches Fell Short",
      title: "Building intelligence has been too custom, too expensive, and too narrow.",
      body:
        "Historically, meaningful visibility depended on expensive systems, bespoke integrations, and narrow deployments. That limited advanced intelligence to the top end of the market and to isolated use cases.",
    },
    {
      label: "Why This Changes Now",
      title: "A different stack is emerging.",
      body:
        "Physical-world modeling, better data infrastructure, and new intelligence methods make it more possible to represent buildings coherently, reason over real conditions, and translate building behavior into action.",
    },
  ],
  principles: [
    {
      title: "Buildings should be legible.",
      body: "Their real operating behavior should be easier to understand.",
    },
    {
      title: "Performance should be financially visible.",
      body:
        "What happens physically should not be disconnected from cost, risk, and value.",
    },
    {
      title: "Intelligence should scale.",
      body: "It should extend beyond bespoke Class A deployments.",
    },
    {
      title: "One layer should support many outcomes.",
      body:
        "Energy, maintenance, sustainability, and risk should not live in isolation.",
    },
  ] satisfies Principle[],
  cta: {
    title: "If this is the direction you see too, let's talk.",
    body:
      "QUOIN is interested in aligned partners who believe buildings should become more legible, financially visible, and easier to act on.",
    primary: { href: "/partner", label: "Partner with QUOIN" },
  },
};

export const applicationsContent = {
  hero: {
    label: "Applications",
    title: "Where the intelligence shows up.",
    description:
      "QUOIN is being built as a foundational layer for building intelligence, with practical implications across efficiency, risk, and asset performance.",
  },
  groups: [
    {
      id: "efficiency",
      title: "Efficiency",
      positioning: "Reduce waste. Focus operational attention where it matters.",
      areas: [
        "Energy optimization",
        "Maintenance prioritization",
        "Day-to-day operations",
        "Operational drift visibility",
      ],
      questions: [
        "Where is energy use diverging from expected behavior?",
        "Which systems deserve attention first?",
        "Which buildings are drifting operationally?",
      ],
      translation: "Lower operating cost and better use of team capacity.",
    },
    {
      id: "risk",
      title: "Risk",
      positioning: "See emerging issues earlier and reduce avoidable surprises.",
      areas: [
        "Anomaly detection",
        "Equipment failure risk",
        "Resilience and downtime exposure",
        "Insurer-relevant visibility",
      ],
      questions: [
        "Which conditions suggest rising operational risk?",
        "Where are hidden failures beginning to form?",
        "Which assets require intervention before disruption occurs?",
      ],
      translation:
        "Lower exposure, fewer surprises, and better operational resilience.",
    },
    {
      id: "asset-performance",
      title: "Asset performance",
      positioning: "Connect building behavior to long-term value creation.",
      areas: [
        "Sustainability performance",
        "Capital planning",
        "Retrofit prioritization",
        "Portfolio strategy",
      ],
      questions: [
        "Which buildings need action first?",
        "Where can capital produce the clearest performance lift?",
        "How should physical performance shape portfolio decisions?",
      ],
      translation:
        "Stronger planning, clearer prioritization, and better long-term asset decisions.",
    },
  ] satisfies ApplicationGroup[],
  closing: {
    title: "These are not separate products.",
    body:
      "They are different expressions of the same underlying need: a better way to understand how buildings are actually performing.",
  },
};

export const aboutContent = {
  hero: {
    label: "About",
    title: "Why QUOIN exists.",
    description:
      "QUOIN exists because building intelligence has been too fragmented, too technical, and too expensive to matter broadly enough.",
  },
  sections: [
    {
      label: "The Gap We See",
      title:
        "We see a gap between physical reality and financial decision-making.",
      body:
        "Buildings are managed through partial views. Finance sees one picture. Operations sees another. Technical systems see fragments. QUOIN is being built around the belief that these views should connect.",
    },
    {
      label: "The Company We Are Building",
      title:
        "We are building a category-defining infrastructure company for building intelligence.",
      body:
        "Not another dashboard. Not another isolated optimization tool. A foundational layer that can make building performance more legible and more useful.",
    },
  ],
  principles: [
    {
      title: "Start with the physical building",
      body: "Reality first, abstractions second.",
    },
    {
      title: "Translate into economics",
      body: "Performance matters when it informs decisions.",
    },
    {
      title: "Prefer coherence over fragmentation",
      body: "One layer should support many outcomes.",
    },
    {
      title: "Design for broad accessibility",
      body: "Intelligence should extend beyond premium assets.",
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
      "QUOIN is looking for partners who see a foundational opportunity in making building performance more legible and financially useful.",
    primary: { href: "/partner", label: "Partner with QUOIN" },
  },
};

export const partnerContent = {
  hero: {
    label: "Partner",
    title: "Partner with QUOIN.",
    description:
      "We want to work with people and organizations helping shape the next operating model for buildings.",
  },
  audiences: [
    {
      title: "Owners and operators",
      body:
        "Forward-looking teams who want to help define what better building intelligence should look like.",
    },
    {
      title: "Predictive maintenance and service partners",
      body:
        "Organizations that can benefit from stronger building context and a more coherent intelligence layer.",
    },
    {
      title: "Technology and data partners",
      body:
        "Teams working across building systems, sensing, controls, or spatial data.",
    },
    {
      title: "Capital, insurance, and ecosystem partners",
      body:
        "Organizations interested in how building performance connects to financial outcomes.",
    },
  ],
  note:
    "We are especially interested in partners who think beyond isolated tools and toward foundational building intelligence.",
};
