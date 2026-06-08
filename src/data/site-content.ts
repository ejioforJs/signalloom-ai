export const metrics = [
  { value: "NVIDIA Inception", label: "accepted into the startup accelerator program" },
  { value: "Browser-based app", label: "works directly in the web interface" },
  { value: "Structured output", label: "summary, risks, stakeholder input, and action steps" },
];

export const capabilities = [
  {
    title: "Stakeholder Review",
    description:
      "Review a decision from the perspective of customers, finance, operations, and other affected stakeholders.",
  },
  {
    title: "Risk Mapping",
    description:
      "Identify where trust, pricing, adoption, execution, or compliance issues are most likely to appear first.",
  },
  {
    title: "Launch Planning",
    description:
      "Prepare for the first days after launch with recommended communication, support, and escalation steps.",
  },
  {
    title: "Reusable Analysis",
    description:
      "Keep a structured record of each review so teams can revisit earlier decisions and compare scenarios.",
  },
];

export const pathways = [
  {
    title: "Product Launches",
    description:
      "Review new products before the announcement, onboarding flow, or pricing page goes live.",
  },
  {
    title: "Pricing Changes",
    description:
      "Review how revenue teams, existing users, and the market may respond to pricing updates.",
  },
  {
    title: "Incident Response",
    description:
      "Prepare the first response to outages, trust issues, and compliance concerns before they escalate.",
  },
];

export const pilotLoop = [
  {
    step: "Describe the plan",
    detail: "Enter the initiative, target audience, main concern, and review horizon.",
  },
  {
    step: "Review the analysis",
    detail: "SignalLoom highlights likely risks, stakeholder concerns, and the overall readiness score.",
  },
  {
    step: "Plan next steps",
    detail: "Use the recommended actions, evidence points, and timeline to decide what needs to change.",
  },
  {
    step: "Save the result",
    detail: "Keep the analysis available in the browser so the team can reopen it later.",
  },
];

export const founderNote = {
  quote:
    "I am building SignalLoom to help teams review important decisions before launch. The goal is to make planning clearer, coordination easier, and avoidable mistakes less likely.",
  name: "James Solomon",
  role: "Founder & CTO, SignalLoom",
};

export const founderBio =
  "James Solomon is the Founder and CTO of Signal Loom. He is building SignalLoom to help teams review launches, pricing changes, market expansion plans, and other high-impact decisions before they go live. He leads product strategy, application development, and the technical foundation of the company. Signal Loom has also been accepted into the NVIDIA Inception program.";

export const companyFacts = [
  {
    label: "Legal name",
    value: "Signal Loom",
  },
  {
    label: "Founder",
    value: "James Solomon",
  },
  {
    label: "Role",
    value: "Founder & CTO",
  },
  {
    label: "Category",
    value: "Decision-planning software",
  },
  {
    label: "Delivery",
    value: "Browser-based product experience",
  },
  {
    label: "Location",
    value: "13 Maskara Street, Onuiyi Road, Nsukka",
  },
];

export const companyLinks = [
  {
    label: "Founder LinkedIn",
    href: "https://www.linkedin.com/in/james-solomon-b40493201?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    label: "Company LinkedIn",
    href: "https://www.linkedin.com/company/signal-loom/",
  },
  {
    label: "Founder portfolio",
    href: "https://www.james-solomon.site/",
  },
];

export const contactDetails = {
  email: "james12@signalloom.site",
  phoneDisplay: "07032888613",
  phoneHref: "tel:+2347032888613",
  location: "13 Maskara Street, Onuiyi Road, Nsukka",
};

export const tractionItems = [
  {
    title: "NVIDIA Inception",
    description:
      "Signal Loom has been accepted into the NVIDIA Inception startup program.",
  },
  {
    title: "Independent product build",
    description:
      "The product, website, and application workflow are being built directly in-house by the founding team.",
  },
  {
    title: "Working web product",
    description:
      "SignalLoom already includes a working browser-based workflow with structured output for scenario review.",
  },
];

export const securityPrinciples = [
  {
    title: "Intentional Inputs",
    description:
      "SignalLoom asks for the initiative, audience, main concern, and time horizon needed to generate a scenario review.",
  },
  {
    title: "Structured Outputs",
    description:
      "The product returns a consistent result with a readiness score, summary, risk list, stakeholder input, and action steps.",
  },
  {
    title: "Local Recent History",
    description:
      "Recent analyses are stored in the browser so users can reopen previous results without a full account system.",
  },
  {
    title: "Live AI With Fallback",
    description:
      "Deployments can run live model-backed generation, and the app falls back to a local engine when the live service is unavailable.",
  },
];

export const faqItems = [
  {
    question: "What is SignalLoom?",
    answer:
      "SignalLoom is a decision-planning product for founders, product teams, strategy leads, and operators. It helps teams review launches, pricing changes, expansions, and response plans before they go live.",
  },
  {
    question: "What does the product return?",
    answer:
      "Each run generates a readiness score, a summary, key risks, stakeholder perspectives, recommended reviews, evidence points, and a checklist a team can act on immediately.",
  },
  {
    question: "Does SignalLoom require installation?",
    answer:
      "No. SignalLoom is a browser-based web product. Teams can open the app, enter a scenario, and generate a review directly in the interface.",
  },
  {
    question: "How is data handled in the current product?",
    answer:
      "In the current version, recent analyses are stored locally in the browser for convenience. When live AI generation is enabled on a deployment, scenario inputs may be sent to the configured model provider to produce the output.",
  },
  {
    question: "Who is building SignalLoom?",
    answer:
      "SignalLoom is being built by James Solomon, who serves as Founder and CTO of Signal Loom.",
  },
  {
    question: "What traction does Signal Loom have today?",
    answer:
      "Signal Loom has been accepted into the NVIDIA Inception program and already has a working browser-based product with a functioning scenario review workflow and supporting company pages.",
  },
];

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
    title: "Summary",
    description: "A short statement of how the decision is likely to be understood if nothing changes.",
  },
  {
    title: "Key Risks",
    description: "The main trust, pricing, adoption, operational, or policy issues inside the plan.",
  },
  {
    title: "Recommended Reviews",
    description: "Specific review prompts your team can use before launch day or before an executive meeting.",
  },
  {
    title: "Timeline",
    description: "A time-based view of what is likely to happen soon after the decision becomes public.",
  },
];
