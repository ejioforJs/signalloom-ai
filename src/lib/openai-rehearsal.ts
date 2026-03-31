import { rehearsalSchema } from "@/lib/rehearsal-schema";
import type { Drill, Flashpoint, FormState, RehearsalDraft, TimelineEntry, Voice } from "@/lib/rehearsal-types";

type OpenAIContentItem = {
  type?: string;
  text?: string;
  refusal?: string;
};

type OpenAIOutputItem = {
  type?: string;
  content?: OpenAIContentItem[];
};

type OpenAIResponse = {
  error?: {
    message?: string;
  };
  output?: OpenAIOutputItem[];
};

const DEFAULT_MODEL = "gpt-5.2-chat-latest";
const OPENAI_ENDPOINT = "https://api.openai.com/v1/responses";

const isFlashpoint = (value: unknown): value is Flashpoint =>
  typeof value === "object" &&
  value !== null &&
  "title" in value &&
  typeof value.title === "string" &&
  "detail" in value &&
  typeof value.detail === "string" &&
  "severity" in value &&
  (value.severity === "low" || value.severity === "medium" || value.severity === "high");

const isDrill = (value: unknown): value is Drill =>
  typeof value === "object" &&
  value !== null &&
  "title" in value &&
  typeof value.title === "string" &&
  "detail" in value &&
  typeof value.detail === "string" &&
  "owner" in value &&
  typeof value.owner === "string";

const isVoice = (value: unknown): value is Voice =>
  typeof value === "object" &&
  value !== null &&
  "role" in value &&
  typeof value.role === "string" &&
  "concern" in value &&
  typeof value.concern === "string";

const isTimelineEntry = (value: unknown): value is TimelineEntry =>
  typeof value === "object" &&
  value !== null &&
  "label" in value &&
  typeof value.label === "string" &&
  "detail" in value &&
  typeof value.detail === "string";

const isStringArray = (value: unknown, minimum: number) =>
  Array.isArray(value) &&
  value.length >= minimum &&
  value.every((item) => typeof item === "string");

const isRehearsalDraft = (value: unknown): value is RehearsalDraft =>
  typeof value === "object" &&
  value !== null &&
  "scenarioTitle" in value &&
  typeof value.scenarioTitle === "string" &&
  "readinessScore" in value &&
  typeof value.readinessScore === "number" &&
  "signalHeadline" in value &&
  typeof value.signalHeadline === "string" &&
  "executiveBrief" in value &&
  typeof value.executiveBrief === "string" &&
  "narrative" in value &&
  typeof value.narrative === "string" &&
  "stance" in value &&
  typeof value.stance === "string" &&
  "flashpoints" in value &&
  Array.isArray(value.flashpoints) &&
  value.flashpoints.every(isFlashpoint) &&
  "drills" in value &&
  Array.isArray(value.drills) &&
  value.drills.every(isDrill) &&
  "voices" in value &&
  Array.isArray(value.voices) &&
  value.voices.every(isVoice) &&
  "timeline" in value &&
  Array.isArray(value.timeline) &&
  value.timeline.every(isTimelineEntry) &&
  "proofPoints" in value &&
  isStringArray(value.proofPoints, 3) &&
  "launchChecklist" in value &&
  isStringArray(value.launchChecklist, 4);

const getApiKey = () => process.env.OPENAI_API_KEY?.trim() ?? "";

export const getOpenAIModel = () => process.env.OPENAI_MODEL?.trim() || DEFAULT_MODEL;

export const hasOpenAIConfig = () => Boolean(getApiKey());

const buildUserPrompt = (input: FormState) => `
Create a SignalLoom rehearsal room for a startup team.

Initiative:
${input.initiative}

Audience under pressure:
${input.audience}

Primary tension:
${input.tension}

Forecast horizon:
${input.horizon} days

Instructions:
- Write like an expert chief of staff and launch strategist.
- Keep the output concrete, specific, and plausible for a B2B software startup.
- Make the artifacts immediately useful for a product, revenue, ops, and support team.
- The readiness score should reflect risk, clarity, and operational preparedness.
- Flashpoints should describe the most likely fractures.
- Drills should be actionable exercises with a clear owner.
- Proof points should be evidence the team can gather or publish quickly.
- Launch checklist items should be execution steps, not vague advice.
`.trim();

const extractOutputText = (payload: OpenAIResponse) => {
  for (const item of payload.output ?? []) {
    if (item.type !== "message") {
      continue;
    }

    for (const content of item.content ?? []) {
      if (content.type === "refusal" && content.refusal) {
        throw new Error(content.refusal);
      }

      if (content.type === "output_text" && content.text) {
        return content.text;
      }
    }
  }

  return null;
};

export async function generateAIRehearsal(input: FormState) {
  const apiKey = getApiKey();

  if (!apiKey) {
    return null;
  }

  const response = await fetch(OPENAI_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: getOpenAIModel(),
      reasoning: {
        effort: "medium",
      },
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: "You are SignalLoom's rehearsal strategist. Turn ambiguous startup plans into sharp, executive-ready launch-room artifacts.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: buildUserPrompt(input),
            },
          ],
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "signal_room",
          strict: true,
          schema: rehearsalSchema,
        },
      },
    }),
  });

  const payload = (await response.json()) as OpenAIResponse;

  if (!response.ok) {
    throw new Error(payload.error?.message || "SignalLoom could not reach the AI rehearsal engine.");
  }

  const outputText = extractOutputText(payload);

  if (!outputText) {
    throw new Error("SignalLoom did not receive structured output from the AI rehearsal engine.");
  }

  const parsed = JSON.parse(outputText) as unknown;

  if (!isRehearsalDraft(parsed)) {
    throw new Error("SignalLoom received an invalid rehearsal payload from the AI rehearsal engine.");
  }

  return parsed;
}
