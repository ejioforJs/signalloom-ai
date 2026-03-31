"use client";

import { startTransition, useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import { scenarioTemplates } from "@/data/site-content";
import type { FormState, RehearsalResult, SavedRehearsal } from "@/lib/rehearsal-types";

import styles from "./rehearsal-lab.module.css";

type LabVariant = "compact" | "full";

const storageKey = "signalloom.rooms.v1";

const defaultState: FormState = {
  initiative: scenarioTemplates[0].initiative,
  audience: scenarioTemplates[0].audience,
  tension: scenarioTemplates[0].tension,
  horizon: scenarioTemplates[0].horizon,
};

const formatTimestamp = (value: string) =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));

const buildShareCopy = (result: RehearsalResult) =>
  [
    result.scenarioTitle,
    `Readiness Score: ${result.readinessScore}`,
    `Signal Headline: ${result.signalHeadline}`,
    "",
    result.executiveBrief,
    "",
    "Launch Checklist:",
    ...result.launchChecklist.map((item) => `- ${item}`),
  ].join("\n");

const isSavedRehearsal = (value: unknown): value is SavedRehearsal =>
  typeof value === "object" &&
  value !== null &&
  "id" in value &&
  typeof value.id === "string" &&
  "input" in value &&
  typeof value.input === "object" &&
  value.input !== null &&
  "initiative" in value.input &&
  typeof value.input.initiative === "string" &&
  "audience" in value.input &&
  typeof value.input.audience === "string" &&
  "tension" in value.input &&
  typeof value.input.tension === "string" &&
  "horizon" in value.input &&
  typeof value.input.horizon === "string" &&
  "result" in value &&
  typeof value.result === "object" &&
  value.result !== null &&
  "roomId" in value.result &&
  typeof value.result.roomId === "string" &&
  "scenarioTitle" in value.result &&
  typeof value.result.scenarioTitle === "string";

export function RehearsalLab({ variant = "compact" }: { variant?: LabVariant }) {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [result, setResult] = useState<RehearsalResult | null>(null);
  const [history, setHistory] = useState<SavedRehearsal[]>([]);
  const [error, setError] = useState<string>("");
  const [copyState, setCopyState] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedRooms = window.localStorage.getItem(storageKey);

      if (!savedRooms) {
        return;
      }

      const parsed = JSON.parse(savedRooms) as unknown;

      if (Array.isArray(parsed)) {
        setHistory(parsed.filter(isSavedRehearsal).slice(0, 6));
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    } finally {
      setIsHistoryLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isHistoryLoaded) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(history.slice(0, 6)));
  }, [history, isHistoryLoaded]);

  useEffect(() => {
    if (!copyState) {
      return;
    }

    const timeout = window.setTimeout(() => setCopyState(""), 2200);

    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const applyTemplate = (index: number) => {
    const template = scenarioTemplates[index];

    startTransition(() => {
      setFormState({
        initiative: template.initiative,
        audience: template.audience,
        tension: template.tension,
        horizon: template.horizon,
      });
      setResult(null);
      setError("");
    });
  };

  const restoreRoom = (savedRoom: SavedRehearsal) => {
    startTransition(() => {
      setFormState({ ...savedRoom.input });
      setResult(savedRoom.result);
      setError("");
    });
  };

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value;

      setFormState((current) => ({
        ...current,
        [field]: value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    const submittedInput = { ...formState };

    try {
      const response = await fetch("/api/rehearse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as RehearsalResult | { error?: string };

      if (!response.ok) {
        throw new Error(
          "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "The rehearsal engine could not generate a room.",
        );
      }

      const rehearsal = payload as RehearsalResult;

      setResult(rehearsal);
      setHistory((current) =>
        [
          {
            id: rehearsal.roomId,
            createdAt: rehearsal.createdAt,
            input: submittedInput,
            result: rehearsal,
          },
          ...current.filter((room) => room.id !== rehearsal.roomId),
        ].slice(0, 6),
      );
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while preparing the rehearsal room.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyBrief = async () => {
    if (!result) {
      return;
    }

    try {
      await navigator.clipboard.writeText(buildShareCopy(result));
      setCopyState("Executive brief copied.");
    } catch {
      setCopyState("Clipboard access is unavailable in this browser.");
    }
  };

  return (
    <section className={`${styles.shell} ${variant === "full" ? styles.full : styles.compact}`}>
      <div className={styles.panelHeader}>
        <div>
          <p className="eyebrow">Signal Engine</p>
          <h2 className={styles.title}>Run an AI rehearsal room</h2>
        </div>
        <p className={styles.helper}>
          Paste an initiative, name the audience, and describe the pressure in the room.
          SignalLoom returns a readiness score, signal headline, and execution-ready rehearsal
          packet.
        </p>
      </div>

      {variant === "full" ? (
        <div className={styles.templates}>
          {scenarioTemplates.map((template, index) => (
            <button
              key={template.name}
              type="button"
              className={styles.templateButton}
              onClick={() => applyTemplate(index)}
            >
              <span>{template.name}</span>
              <small>{template.audience}</small>
            </button>
          ))}
        </div>
      ) : null}

      <div className={styles.workspace}>
        <div className={styles.formStack}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Initiative</span>
              <textarea
                rows={4}
                value={formState.initiative}
                onChange={handleChange("initiative")}
                placeholder="What are you launching, changing, or recovering from?"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Audience Under Pressure</span>
              <input
                type="text"
                value={formState.audience}
                onChange={handleChange("audience")}
                placeholder="Who needs to trust this first?"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Tension in the Room</span>
              <textarea
                rows={4}
                value={formState.tension}
                onChange={handleChange("tension")}
                placeholder="What might make this plan wobble when it meets the real world?"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Forecast Horizon</span>
              <select value={formState.horizon} onChange={handleChange("horizon")}>
                <option value="14">14 days</option>
                <option value="30">30 days</option>
                <option value="90">90 days</option>
              </select>
            </label>

            <div className={styles.formActions}>
              <button className="pillButton" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Weaving Signals..." : "Generate Rehearsal"}
              </button>
              <p className={styles.formHint}>
                SignalLoom uses a live OpenAI run when `OPENAI_API_KEY` is set, and automatically
                falls back to the local simulation when it is not.
              </p>
            </div>

            {error ? <p className={styles.error}>{error}</p> : null}
          </form>

          {variant === "full" ? (
            <aside className={styles.historyPanel}>
              <div className={styles.historyHeader}>
                <div>
                  <p className="eyebrow">Recent Rooms</p>
                  <h3>Reopen the rehearsals your team wants to keep using.</h3>
                </div>
                <p>
                  Every generated room is saved in this browser so you can revisit the brief, drill
                  set, and execution checklist.
                </p>
                {copyState ? <p className={styles.copyStatus}>{copyState}</p> : null}
              </div>

              {history.length > 0 ? (
                <ul className={styles.historyList}>
                  {history.map((room) => (
                    <li key={room.id}>
                      <button
                        type="button"
                        className={styles.historyButton}
                        onClick={() => restoreRoom(room)}
                      >
                        <div className={styles.historyMeta}>
                          <span>{formatTimestamp(room.createdAt)}</span>
                          <span
                            className={`${styles.engineBadge} ${
                              room.result.engineMode === "ai" ? styles.engineLive : styles.engineMock
                            }`}
                          >
                            {room.result.engineMode === "ai" ? "Live AI" : "Local"}
                          </span>
                        </div>
                        <strong>{room.result.scenarioTitle}</strong>
                        <p>{room.result.signalHeadline}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.historyEmpty}>
                  Your recent rehearsal rooms will appear here after the first run.
                </p>
              )}
            </aside>
          ) : null}
        </div>

        <div className={styles.output} aria-live="polite">
          {result ? (
            <>
              <div className={styles.scoreCard}>
                <div className={styles.scoreMeta}>
                  <span className={styles.scoreLabel}>Readiness Score</span>
                  <span
                    className={`${styles.engineBadge} ${
                      result.engineMode === "ai" ? styles.engineLive : styles.engineMock
                    }`}
                  >
                    {result.engineMode === "ai"
                      ? result.model
                        ? `Live AI · ${result.model}`
                        : "Live AI"
                      : "Local simulation"}
                  </span>
                </div>
                <strong>{result.readinessScore}</strong>
                <h3 className={styles.resultTitle}>{result.scenarioTitle}</h3>
                <p>{result.stance}</p>
                <small className={styles.generatedAt}>Generated {formatTimestamp(result.createdAt)}</small>
                <div className={styles.resultActions}>
                  <button type="button" className={styles.secondaryButton} onClick={copyBrief}>
                    Copy Brief
                  </button>
                </div>
              </div>

              <div className={styles.storyCard}>
                <span className={styles.cardEyebrow}>Signal Headline</span>
                <h3>{result.signalHeadline}</h3>
                <p>{result.narrative}</p>
              </div>

              <article className={styles.detailCard}>
                <span className={styles.cardEyebrow}>Executive Brief</span>
                <p>{result.executiveBrief}</p>
              </article>

              <div className={styles.twoUp}>
                <article className={styles.detailCard}>
                  <span className={styles.cardEyebrow}>Flashpoints</span>
                  <ul>
                    {result.flashpoints.map((item) => (
                      <li key={item.title}>
                        <div className={styles.listHeader}>
                          <strong>{item.title}</strong>
                          <span
                            className={`${styles.severityBadge} ${
                              item.severity === "high"
                                ? styles.severityHigh
                                : item.severity === "medium"
                                  ? styles.severityMedium
                                  : styles.severityLow
                            }`}
                          >
                            {item.severity}
                          </span>
                        </div>
                        <p>{item.detail}</p>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className={styles.detailCard}>
                  <span className={styles.cardEyebrow}>Synthetic Voices</span>
                  <ul>
                    {result.voices.map((voice) => (
                      <li key={voice.role}>
                        <strong>{voice.role}</strong>
                        <p>{voice.concern}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className={styles.twoUp}>
                <article className={styles.detailCard}>
                  <span className={styles.cardEyebrow}>Drill Set</span>
                  <ul>
                    {result.drills.map((drill) => (
                      <li key={drill.title}>
                        <strong>{drill.title}</strong>
                        <p>{drill.detail}</p>
                        <small className={styles.metaText}>Owner: {drill.owner}</small>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className={styles.detailCard}>
                  <span className={styles.cardEyebrow}>Timeline Forecast</span>
                  <ul>
                    {result.timeline.map((entry) => (
                      <li key={entry.label}>
                        <strong>{entry.label}</strong>
                        <p>{entry.detail}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className={styles.twoUp}>
                <article className={styles.detailCard}>
                  <span className={styles.cardEyebrow}>Proof Points</span>
                  <ul>
                    {result.proofPoints.map((item) => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className={styles.detailCard}>
                  <span className={styles.cardEyebrow}>Launch Checklist</span>
                  <ul>
                    {result.launchChecklist.map((item) => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <span className={styles.cardEyebrow}>Room Preview</span>
              <h3>Your rehearsal output appears here.</h3>
              <p>
                The first pass focuses on clarity, trust friction, operational handoffs, and the
                first 72 hours after the decision meets real customers and internal stakeholders.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
