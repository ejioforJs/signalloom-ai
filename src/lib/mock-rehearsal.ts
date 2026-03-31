import type { Flashpoint, FormState, RehearsalDraft, Voice } from "@/lib/rehearsal-types";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const contains = (input: string, patterns: string[]) =>
  patterns.some((pattern) => input.includes(pattern));

const summarizeInitiative = (initiative: string) => {
  const normalized = initiative.replace(/\s+/g, " ").trim();
  const [firstSentence] = normalized.split(/[.!?]/);
  const concise = (firstSentence || normalized).trim();

  return concise.length > 78 ? `${concise.slice(0, 75).trim()}...` : concise;
};

const buildVoices = (context: string): Voice[] => {
  const voices: Voice[] = [];
  const defaults: Voice[] = [
    {
      role: "Founder",
      concern: "The story has to feel sharp enough that the team can repeat it under pressure.",
    },
    {
      role: "Customer Success Lead",
      concern: "Support scripts need to answer the top three fears before tickets spike.",
    },
    {
      role: "Product Marketer",
      concern: "Proof points need to arrive fast enough to keep the narrative from drifting.",
    },
  ];

  if (contains(context, ["price", "pricing", "revenue", "seat", "margin"])) {
    voices.push({
      role: "Finance Lead",
      concern: "Prove that the new pricing story feels fair before it feels clever.",
    });
  }

  if (contains(context, ["regulat", "policy", "compliance", "underwriting", "risk", "lending"])) {
    voices.push({
      role: "Regulatory Partner",
      concern: "Explainability needs to be visible in the product narrative, not buried in documentation.",
    });
  }

  if (contains(context, ["creator", "community", "brand", "trust", "campaign"])) {
    voices.push({
      role: "Power User",
      concern: "People want to feel more capable with the product, not replaced by it.",
    });
  }

  if (contains(context, ["market", "launch", "competitor", "expansion", "announce"])) {
    voices.push({
      role: "Fast-Following Rival",
      concern: "If your narrative is fuzzy, a simpler competitor story can win the week.",
    });
  }

  voices.push({
    role: "Operations Lead",
    concern: "Support, escalation, and onboarding strain need a plan before the first spike arrives.",
  });

  for (const fallback of defaults) {
    if (voices.length >= 4) {
      break;
    }

    if (!voices.some((voice) => voice.role === fallback.role)) {
      voices.push(fallback);
    }
  }

  return voices.slice(0, 4);
};

const buildFlashpoints = (context: string): Flashpoint[] => {
  const flashpoints: Flashpoint[] = [
    {
      title: "Narrative Clarity",
      detail: "If the promise is hard to explain in one sentence, adoption stalls before evidence can help.",
      severity: "medium",
    },
  ];

  if (contains(context, ["trust", "data", "privacy", "policy", "regulat"])) {
    flashpoints.push({
      title: "Trust Friction",
      detail: "Teams will ask who stays in control when the model is confident and when it is wrong.",
      severity: "high",
    });
  }

  if (contains(context, ["price", "pricing", "margin", "procurement", "seat"])) {
    flashpoints.push({
      title: "Perceived Fairness",
      detail: "Buyers need proof that new packaging creates better alignment, not disguised extraction.",
      severity: "high",
    });
  }

  if (contains(context, ["launch", "rollout", "expansion", "market"])) {
    flashpoints.push({
      title: "First-Week Momentum",
      detail: "The announcement rhythm has to carry through onboarding, support, and proof of value.",
      severity: "medium",
    });
  }

  if (flashpoints.length < 3) {
    flashpoints.push({
      title: "Operational Readiness",
      detail: "Internal enablement often breaks before the customer narrative does, so handoffs must be explicit.",
      severity: "medium",
    });
  }

  return flashpoints.slice(0, 3);
};

const buildTimeline = (horizon: string, context: string) => {
  const finalWindow = horizon === "90" ? "Day 90" : horizon === "14" ? "Day 14" : "Day 30";

  return [
    {
      label: "Hour 0",
      detail: "The first reaction will be emotional, so message clarity matters more than feature depth.",
    },
    {
      label: "Hour 24",
      detail: contains(context, ["support", "ops", "operations", "launch"])
        ? "Operational strain appears quickly unless support scripts and escalation paths are rehearsed."
        : "Internal teams start improvising explanations unless the room agrees on one crisp storyline.",
    },
    {
      label: finalWindow,
      detail: contains(context, ["price", "pricing", "revenue"])
        ? "Retention depends on whether customers see measurable upside before the new commercial model becomes the headline."
        : "Momentum compounds only if the product story and the trust story stay aligned after the launch glow fades.",
    },
  ];
};

const buildHeadline = (context: string) => {
  if (contains(context, ["regulat", "policy", "compliance", "risk", "lending"])) {
    return "Policy confidence will shape the story before product speed does.";
  }

  if (contains(context, ["price", "pricing", "revenue", "seat", "procurement"])) {
    return "Customers will forgive change faster than they forgive pricing ambiguity.";
  }

  if (contains(context, ["creator", "community", "brand", "trust"])) {
    return "Your earliest advocates want proof that automation still leaves room for human judgment.";
  }

  return "Narrative clarity, not feature count, is the signal most likely to decide the rollout.";
};

const buildProofPoints = (context: string) => {
  const proofPoints = [
    "A customer-facing sentence that explains the change without internal jargon.",
    "One measurable outcome the team can point to in the first public week.",
    "An internal escalation map for support, finance, and product leads.",
  ];

  if (contains(context, ["price", "pricing", "revenue", "procurement"])) {
    proofPoints.unshift("A pricing example that shows how the new model creates fairness for a real account.");
  }

  if (contains(context, ["trust", "data", "privacy", "policy", "regulat"])) {
    proofPoints.unshift("A short explainability artifact that names where human review stays in the loop.");
  }

  return proofPoints.slice(0, 4);
};

const buildChecklist = (context: string) => {
  const checklist = [
    "Lock the one-sentence narrative the whole team should repeat.",
    "Rehearse the hardest objection with finance, support, and product in the same room.",
    "Prepare a first-week proof point and decide who owns publishing it.",
    "Define the escalation path if trust, billing, or onboarding friction spikes.",
  ];

  if (contains(context, ["launch", "market", "expansion"])) {
    checklist.push("Sequence launch-day comms so support and onboarding are ready before the announcement lands.");
  }

  return checklist;
};

const buildDrills = (context: string) => [
  {
    title: "Skeptical Buyer Playback",
    detail: "Write the one-sentence explanation a skeptical buyer would repeat to a teammate after the call.",
    owner: "Product marketing",
  },
  {
    title: "Cross-Functional Pressure Test",
    detail: "Run a leadership review where finance, support, and product each challenge the plan from a different angle.",
    owner: "Chief of staff",
  },
  {
    title: contains(context, ["trust", "data", "privacy", "policy", "regulat"])
      ? "Trust Objection Drill"
      : "Proof-Point Drill",
    detail: contains(context, ["trust", "data", "privacy", "policy", "regulat"])
      ? "Practice the moment a customer asks who stays accountable when the system is confident and wrong."
      : "Prepare the first proof point that reduces fear faster than a feature list can.",
    owner: contains(context, ["trust", "data", "privacy", "policy", "regulat"])
      ? "Risk lead"
      : "Launch lead",
  },
];

export function buildMockRehearsal(input: FormState): RehearsalDraft {
  const initiative = input.initiative.trim();
  const audience = input.audience.trim();
  const tension = input.tension.trim();
  const horizon = input.horizon.trim() || "30";
  const context = `${initiative} ${audience} ${tension}`.toLowerCase();

  let readinessScore = 68;
  readinessScore += initiative.length > 120 ? 4 : 1;
  readinessScore += audience.length > 28 ? 3 : 1;
  readinessScore -= contains(context, ["regulat", "policy", "compliance", "risk"]) ? 6 : 0;
  readinessScore -= contains(context, ["trust", "privacy", "data"]) ? 5 : 0;
  readinessScore -= contains(context, ["price", "pricing", "procurement", "margin"]) ? 4 : 0;
  readinessScore += horizon === "90" ? 5 : horizon === "14" ? -3 : 0;
  readinessScore = clamp(readinessScore, 52, 91);

  return {
    scenarioTitle: summarizeInitiative(initiative),
    readinessScore,
    signalHeadline: buildHeadline(context),
    executiveBrief: `SignalLoom sees the decision landing with ${audience.toLowerCase()} as a ${contains(
      context,
      ["trust", "privacy", "data", "regulat", "policy"],
    )
      ? "trust and explainability exercise"
      : contains(context, ["price", "pricing", "margin", "seat"])
        ? "fairness and commercial proof exercise"
        : "clarity and execution exercise"}. The plan is viable, but the team should lock the narrative, rehearse the sharpest objection, and decide what proof arrives first.`,
    narrative: `SignalLoom predicts that ${audience.toLowerCase()} will evaluate this move through the lens of ${contains(
      context,
      ["trust", "privacy", "data", "regulat", "policy"],
    )
      ? "trust and explainability"
      : contains(context, ["price", "pricing", "margin", "seat"])
        ? "fairness and measurable value"
        : "clarity and operational confidence"}. Before launch, tighten the narrative, rehearse the hardest objection, and decide which proof point has to land in the first public week.`,
    stance:
      readinessScore >= 80
        ? "Strong enough to move, but only if the first objection drill happens before launch."
        : readinessScore >= 68
          ? "Promising, though the team should run one more rehearsal loop before a public rollout."
          : "Hold the launch narrative and resolve the trust or pricing fracture before you scale the decision.",
    flashpoints: buildFlashpoints(context),
    drills: buildDrills(context),
    voices: buildVoices(context),
    timeline: buildTimeline(horizon, context),
    proofPoints: buildProofPoints(context),
    launchChecklist: buildChecklist(context),
  };
}
