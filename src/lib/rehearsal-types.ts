export type FormState = {
  initiative: string;
  audience: string;
  tension: string;
  horizon: string;
};

export type FlashpointSeverity = "low" | "medium" | "high";

export type Flashpoint = {
  title: string;
  detail: string;
  severity: FlashpointSeverity;
};

export type Voice = {
  role: string;
  concern: string;
};

export type TimelineEntry = {
  label: string;
  detail: string;
};

export type Drill = {
  title: string;
  detail: string;
  owner: string;
};

export type RehearsalDraft = {
  scenarioTitle: string;
  readinessScore: number;
  signalHeadline: string;
  executiveBrief: string;
  narrative: string;
  stance: string;
  flashpoints: Flashpoint[];
  drills: Drill[];
  voices: Voice[];
  timeline: TimelineEntry[];
  proofPoints: string[];
  launchChecklist: string[];
};

export type RehearsalEngineMode = "ai" | "mock";

export type RehearsalResult = RehearsalDraft & {
  roomId: string;
  createdAt: string;
  engineMode: RehearsalEngineMode;
  model: string | null;
};

export type SavedRehearsal = {
  id: string;
  createdAt: string;
  input: FormState;
  result: RehearsalResult;
};
