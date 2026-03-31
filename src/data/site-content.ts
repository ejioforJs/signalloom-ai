export const metrics = [
  { value: "Live AI", label: "with automatic local fallback" },
  { value: "Structured output", label: "brief, flashpoints, drills, proof points, and checklist" },
  { value: "Recent rooms", label: "saved locally so teams can reopen prior runs fast" },
];

export const capabilities = [
  {
    title: "Synthetic Stakeholder Rooms",
    description:
      "Pull a founder memo into a room with a skeptical customer, a finance lead, a regulator, and a copycat rival.",
  },
  {
    title: "Decision Tension Mapping",
    description:
      "SignalLoom surfaces where trust, pricing, adoption, or policy pressure are most likely to crack first.",
  },
  {
    title: "Aftercare Forecasts",
    description:
      "The platform models the first 72 hours after launch so teams can plan support, communications, and escalation paths.",
  },
  {
    title: "Executive Memory",
    description:
      "Every rehearsal leaves behind reusable drills, risk language, and response patterns your next team can inherit.",
  },
];

export const pathways = [
  {
    title: "Launch Rooms",
    description:
      "Pressure-test new products before your first headline, onboarding flow, or pricing page goes live.",
  },
  {
    title: "Pricing Shifts",
    description:
      "Simulate how revenue teams, power users, and competitors react when packaging changes hit the market.",
  },
  {
    title: "Incident Recovery",
    description:
      "Practice the first public response to outages, trust failures, and compliance friction before a real escalation arrives.",
  },
];

export const pilotLoop = [
  {
    step: "Drop in a memo",
    detail: "Paste a launch idea, policy update, roadmap bet, or postmortem outline.",
  },
  {
    step: "Spin up the room",
    detail: "SignalLoom maps stakeholder voices and predicts where the story bends under pressure.",
  },
  {
    step: "Run the drills",
    detail: "Teams rehearse objections, rewrite weak moments, and decide what to change before launch day.",
  },
  {
    step: "Keep the memory",
    detail: "The room becomes a reusable operating playbook for future launches and hires.",
  },
];

export const founderNote = {
  quote:
    "I am building SignalLoom so founders and operators can pressure-test decisions before customers, regulators, or internal teams feel the blast radius. The product should help teams move with more clarity, sharper judgment, and fewer avoidable surprises.",
  name: "James Solomon",
  role: "Founder & CTO, SignalLoom",
};

export const scenarioTemplates = [
  {
    name: "Creator Economy Launch",
    initiative:
      "Launch an AI co-pilot that predicts sponsorship churn for creator agencies before renewal windows close.",
    audience: "Creator agencies and brand partnerships teams",
    tension:
      "Operators worry the model might over-automate relationship work and create trust questions around campaign data.",
    horizon: "30",
  },
  {
    name: "Pricing Reset",
    initiative:
      "Shift a fast-growing B2B SaaS product from seat-based pricing to outcome-based pricing for enterprise customers.",
    audience: "Procurement leaders, finance teams, and existing power users",
    tension:
      "Customers may read the change as a hidden price increase unless the value story feels measurable and fair.",
    horizon: "14",
  },
  {
    name: "Regulated Expansion",
    initiative:
      "Introduce AI underwriting recommendations into a digital lending workflow across two new African markets.",
    audience: "Risk leaders, compliance teams, and regional operations managers",
    tension:
      "Approval speed is attractive, but explainability and policy scrutiny will shape whether the rollout is trusted.",
    horizon: "90",
  },
];

export const artifacts = [
  {
    title: "Signal Headline",
    description: "The one sentence most likely to define how this decision is remembered if nothing changes.",
  },
  {
    title: "Flashpoints",
    description: "The sharpest trust, pricing, adoption, or policy pressures hiding inside your plan.",
  },
  {
    title: "Drill Set",
    description: "Concrete rehearsal prompts your team can run before launch day or before an executive review.",
  },
  {
    title: "72-Hour Map",
    description: "A time-based forecast of what happens right after the announcement lands in the real world.",
  },
];
