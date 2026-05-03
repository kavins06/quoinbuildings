/**
 * Quoin AI Readiness Assessment: questions and recommendation pool.
 *
 * Each question has 4 weighted options (1 = least mature, 4 = most mature).
 * The scoring algorithm in `lib/assessment-scoring.ts` averages the weights
 * across all answered questions, scales to a 1.0-5.0 score, then selects the
 * three most-relevant recommendations from the pool below.
 */

export type EffortLabel = "Quick win" | "Strategic" | "Foundational"

export interface AnswerOption {
  id: string
  label: string
  /** 1 = least mature, 4 = most mature. */
  weight: 1 | 2 | 3 | 4
}

export interface Question {
  id: string
  /** Topic key used by the recommendation rules to flag low-maturity areas. */
  topic:
    | "ai_initiative_state"
    | "data_foundation"
    | "internal_capacity"
    | "use_case_prioritization"
    | "board_lp_signal"
    | "operating_leverage"
    | "competitive_awareness"
  eyebrow: string
  prompt: string
  /** Helper text displayed below the prompt. Optional. */
  helper?: string
  options: AnswerOption[]
}

export interface RecommendationDef {
  id: string
  title: string
  rationale: string
  effortLabel: EffortLabel
  /**
   * Topics this recommendation addresses. The rec is a candidate when ANY of
   * these topics scored at-or-below the topic's `triggerAtOrBelow` weight.
   */
  topics: Question["topic"][]
  /**
   * Maturity weight at-or-below which this recommendation should fire.
   * For example, a "data foundation" rec with triggerAtOrBelow=2 fires when
   * the data foundation answer was 1 or 2.
   */
  triggerAtOrBelow: 1 | 2 | 3 | 4
  /**
   * Tie-breaker priority within candidates. Lower number = higher priority.
   * Foundational recs typically rank higher when low-maturity firms qualify
   * for many recommendations at once.
   */
  priority: number
}

export const QUESTIONS: Question[] = [
  {
    id: "ai_initiative_state",
    topic: "ai_initiative_state",
    eyebrow: "AI initiative state",
    prompt: "Where is your firm's AI program today?",
    helper: "Pick the option that best describes the state of work right now, not where you'd like to be in 12 months.",
    options: [
      { id: "not_started", label: "We haven't started. AI is something we talk about but no one owns it.", weight: 1 },
      { id: "strategy", label: "We're in the strategy phase, no deployments yet.", weight: 2 },
      { id: "piloted", label: "We've piloted one or two things, mixed results.", weight: 3 },
      { id: "shipped", label: "We've shipped multiple deployments and they're in production.", weight: 4 },
    ],
  },
  {
    id: "data_foundation",
    topic: "data_foundation",
    eyebrow: "Data foundation",
    prompt: "How would you describe your operator-level data infrastructure?",
    helper: "Across PMS systems (Yardi, RealPage, Entrata, MRI) and asset-side data.",
    options: [
      { id: "scattered", label: "Nothing centralized. Operator data lives in their systems and we pull what we need.", weight: 1 },
      { id: "manual", label: "Mostly manual reconciliation. An analyst or two spends real time on this.", weight: 2 },
      { id: "some_integration", label: "Some integration in place, but gaps remain across systems.", weight: 3 },
      { id: "single_truth", label: "Single source of truth. Operator and asset data flow into one warehouse.", weight: 4 },
    ],
  },
  {
    id: "internal_capacity",
    topic: "internal_capacity",
    eyebrow: "Internal AI capacity",
    prompt: "What does your internal AI team look like?",
    options: [
      { id: "no_team", label: "No one. AI is everyone's part-time job and no one's full-time job.", weight: 1 },
      { id: "outsourced", label: "Outsourced to vendors or consultants when needed.", weight: 2 },
      { id: "small_dedicated", label: "Small dedicated team or one technical hire focused on it.", weight: 3 },
      { id: "in_production", label: "Dedicated team running deployments in production.", weight: 4 },
    ],
  },
  {
    id: "use_case_prioritization",
    topic: "use_case_prioritization",
    eyebrow: "Use case prioritization",
    prompt: "Have you identified which AI use cases would move IRR most for your firm?",
    options: [
      { id: "no_ranking", label: "No. We haven't ranked use cases against IRR or operating margin.", weight: 1 },
      { id: "generic", label: "We have generic ideas from industry conferences and vendor decks.", weight: 2 },
      { id: "hypotheses", label: "We have hypotheses tied to our specific portfolio.", weight: 3 },
      { id: "ranked_roadmap", label: "Ranked roadmap with expected ROI per deployment.", weight: 4 },
    ],
  },
  {
    id: "board_lp_signal",
    topic: "board_lp_signal",
    eyebrow: "Board / LP signal",
    prompt: "Are your investors and board asking for an AI strategy?",
    options: [
      { id: "no_pressure", label: "No pressure yet. AI hasn't come up in board materials.", weight: 1 },
      { id: "mentions", label: "Occasional mentions in updates, no specific asks.", weight: 2 },
      { id: "exploratory", label: "Yes, exploratory questions about what we're doing.", weight: 3 },
      { id: "deliverables", label: "Yes, expecting concrete deliverables this fiscal year.", weight: 4 },
    ],
  },
  {
    id: "operating_leverage",
    topic: "operating_leverage",
    eyebrow: "Operating leverage thesis",
    prompt: "Where do you most want AI to operate inside your business?",
    helper: "Pick the area where AI would most directly affect your firm's economics.",
    options: [
      { id: "unknown", label: "Not sure yet. We need help thinking through where it fits.", weight: 1 },
      { id: "back_office", label: "Back-office work: reporting, IR, finance ops.", weight: 2 },
      { id: "operations", label: "Operations: leasing, maintenance, resident workflows.", weight: 3 },
      { id: "asset_decisions", label: "Asset-side decisions: acquisition, valuation, performance.", weight: 4 },
    ],
  },
  {
    id: "competitive_awareness",
    topic: "competitive_awareness",
    eyebrow: "Competitive awareness",
    prompt: "How aware are you of what peer firms are doing with AI?",
    options: [
      { id: "no_awareness", label: "Not really. We don't track this.", weight: 1 },
      { id: "anecdotes", label: "Mostly anecdotes from conferences or LP letters.", weight: 2 },
      { id: "informal", label: "We've heard things and have rough impressions.", weight: 3 },
      { id: "tracking", label: "Tracking peer deployments quarterly with notes.", weight: 4 },
    ],
  },
]

export const RECOMMENDATIONS: RecommendationDef[] = [
  {
    id: "operator_data_normalization",
    title: "Operator data normalization layer",
    rationale:
      "Build a single source of truth across your PMS systems before any AI deployment. Every stalled AI initiative we see traces back to broken data foundation.",
    effortLabel: "Foundational",
    topics: ["data_foundation"],
    triggerAtOrBelow: 2,
    priority: 1,
  },
  {
    id: "data_warehouse_lite",
    title: "Lightweight asset/operations data warehouse",
    rationale:
      "Stand up a minimum-viable warehouse that joins operator data to asset data. Doesn't need to be Snowflake; needs to be queryable in one place.",
    effortLabel: "Foundational",
    topics: ["data_foundation"],
    triggerAtOrBelow: 3,
    priority: 5,
  },
  {
    id: "ai_roadmap_irr",
    title: "AI roadmap aligned to your top 3 IRR drivers",
    rationale:
      "Most firms run AI off generic vendor decks. A roadmap ranked against your specific portfolio's IRR levers is the difference between pilots and production.",
    effortLabel: "Strategic",
    topics: ["use_case_prioritization", "ai_initiative_state"],
    triggerAtOrBelow: 2,
    priority: 2,
  },
  {
    id: "lease_abstraction",
    title: "Lease abstraction automation",
    rationale:
      "A high-ROI quick win for owner/operators with sizable lease portfolios. Pays back the engagement cost within months and proves the AI thesis to your team.",
    effortLabel: "Quick win",
    topics: ["ai_initiative_state", "operating_leverage", "use_case_prioritization"],
    triggerAtOrBelow: 3,
    priority: 6,
  },
  {
    id: "asset_anomaly_detection",
    title: "Asset performance anomaly detection",
    rationale:
      "Surface underperforming assets weeks before they show up in monthly reporting. Tightens the loop between operations data and asset decisions.",
    effortLabel: "Strategic",
    topics: ["operating_leverage", "data_foundation"],
    triggerAtOrBelow: 3,
    priority: 7,
  },
  {
    id: "maintenance_triage",
    title: "Maintenance triage AI",
    rationale:
      "Cut maintenance dispatch latency and reduce technician truck-rolls. Concrete operating-margin lift for vertically-integrated firms.",
    effortLabel: "Quick win",
    topics: ["operating_leverage", "ai_initiative_state"],
    triggerAtOrBelow: 3,
    priority: 8,
  },
  {
    id: "ai_team_charter",
    title: "Internal AI team charter and hiring plan",
    rationale:
      "Define what an internal AI team owns vs. what stays with partners. Without a charter, headcount gets blocked or the wrong people get hired.",
    effortLabel: "Strategic",
    topics: ["internal_capacity"],
    triggerAtOrBelow: 2,
    priority: 3,
  },
  {
    id: "fractional_ai_lead",
    title: "Fractional AI lead embedded with the firm",
    rationale:
      "Senior AI leadership without the 20-person internal team. Sits between your asset and operations teams, accountable to outcomes.",
    effortLabel: "Strategic",
    topics: ["internal_capacity", "ai_initiative_state"],
    triggerAtOrBelow: 3,
    priority: 9,
  },
  {
    id: "board_briefing",
    title: "Board-ready AI briefing and 90-day plan",
    rationale:
      "When LPs and board members ask, you have a written answer that doesn't sound like vendor marketing. Reframes the AI conversation around your firm's specifics.",
    effortLabel: "Quick win",
    topics: ["board_lp_signal", "ai_initiative_state"],
    triggerAtOrBelow: 3,
    priority: 10,
  },
  {
    id: "peer_benchmarking",
    title: "Peer AI deployment benchmarking",
    rationale:
      "Get a written read on what comparable owner/operators have actually shipped. Replaces conference rumors with documented references.",
    effortLabel: "Quick win",
    topics: ["competitive_awareness"],
    triggerAtOrBelow: 2,
    priority: 11,
  },
  {
    id: "ai_governance",
    title: "AI governance and risk framework",
    rationale:
      "Define decision rights, escalation paths, and what 'production-ready' means for AI inside the firm. Required before scaling beyond pilots.",
    effortLabel: "Foundational",
    topics: ["ai_initiative_state", "internal_capacity"],
    triggerAtOrBelow: 4,
    priority: 12,
  },
  {
    id: "discovery_engagement",
    title: "Two-week discovery engagement with Quoin",
    rationale:
      "Map your asset thesis, operations workflow, data, and existing initiatives in two weeks. The deliverable is the 90-day plan and the three deployments that move the needle.",
    effortLabel: "Strategic",
    topics: ["ai_initiative_state", "use_case_prioritization", "operating_leverage"],
    triggerAtOrBelow: 4,
    priority: 4,
  },
]
