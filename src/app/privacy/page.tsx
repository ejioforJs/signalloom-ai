import type { Metadata } from "next";

import { contactDetails } from "@/data/site-content";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy | SignalLoom",
  description:
    "Privacy overview for SignalLoom, the AI decision-rehearsal platform built by James Solomon.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className="eyebrow">Privacy</p>
          <h1>SignalLoom is designed to be clear about what the product uses and stores.</h1>
          <p>
            This page describes the current behavior of the SignalLoom product experience as it
            exists today. It is intended to help early users, reviewers, and infrastructure partners
            understand how scenario data is handled in the current version.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.copy}>
          <p className="eyebrow">Inputs</p>
          <h2>What information the app uses.</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Scenario content</h3>
            <p>
              Users provide an initiative, an audience under pressure, the tension in the room, and
              a forecast horizon so SignalLoom can generate a rehearsal output.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Generated rehearsal output</h3>
            <p>
              The product returns a structured packet that can include readiness scoring,
              flashpoints, drills, stakeholder views, proof points, and a launch checklist.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Local browser history</h3>
            <p>
              Recent rehearsal rooms are stored in the user&apos;s browser so previously generated runs
              can be reopened without re-entering the full scenario.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Live model processing when enabled</h3>
            <p>
              On deployments where live AI generation is active, scenario inputs may be transmitted
              to the configured model provider in order to generate the requested rehearsal output.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.copy}>
          <p className="eyebrow">Current Limits</p>
          <h2>Important context for the present product stage.</h2>
        </div>

        <ul className={styles.list}>
          <li>The current product does not yet provide full user accounts or shared team workspaces.</li>
          <li>Recent room history is local to the browser rather than a synced multi-device account.</li>
          <li>The product is best used with thoughtful discretion for sensitive internal strategy content while enterprise controls are still being built.</li>
          <li>Additional privacy controls, persistent data settings, and formal support contacts are planned as the company matures.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.copy}>
          <p className="eyebrow">Contact</p>
          <h2>Privacy-related contact details.</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Email</h3>
            <p>{contactDetails.email}</p>
          </article>

          <article className={styles.card}>
            <h3>Phone and location</h3>
            <p>{contactDetails.phoneDisplay}</p>
            <p>{contactDetails.location}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
