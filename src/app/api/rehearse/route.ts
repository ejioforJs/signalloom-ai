import { NextResponse } from "next/server";

import { buildMockRehearsal } from "@/lib/mock-rehearsal";
import { generateAIRehearsal } from "@/lib/openai-rehearsal";
import type { FormState, RehearsalDraft, RehearsalResult } from "@/lib/rehearsal-types";

const toResult = (draft: RehearsalDraft, engineMode: RehearsalResult["engineMode"], model: string | null) => ({
  roomId: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  engineMode,
  model,
  ...draft,
});

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<FormState>;
  const input: FormState = {
    initiative: body.initiative?.trim() ?? "",
    audience: body.audience?.trim() ?? "",
    tension: body.tension?.trim() ?? "",
    horizon: body.horizon?.trim() ?? "30",
  };

  if (!input.initiative || !input.audience || !input.tension) {
    return NextResponse.json(
      {
        error: "Initiative, audience, and main concern are required to generate an analysis.",
      },
      { status: 400 },
    );
  }

  try {
    const aiDraft = await generateAIRehearsal(input);

    if (aiDraft) {
      return NextResponse.json(toResult(aiDraft, "ai", process.env.OPENAI_MODEL?.trim() || "gpt-5.2-chat-latest"));
    }
  } catch (error) {
    console.error("SignalLoom fell back to the local rehearsal engine.", error);
  }

  return NextResponse.json(toResult(buildMockRehearsal(input), "mock", null));
}
