import type { Metadata } from "next";

import { companyLinks, contactDetails } from "@/data/site-content";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Security | SignalLoom",
  description:
    "Security and product handling details for SignalLoom, the AI decision-rehearsal platform built by James Solomon.",
};

export default function SecurityPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className="eyebrow">Security</p>
          <h1>SignalLoom is being built with transparent product handling from the start.</h1>
          <p>
            SignalLoom is a founder-led, browser-based AI product. The current platform is designed
            for clarity, predictable outputs, and honest handling of scenario inputs while the
            company builds toward deeper enterprise controls.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.copy}>
          <p className="eyebrow">Current Posture</p>
          <h2>What the product does today.</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Scenario-based inputs only</h3>
            <p>
              The app currently asks for initiative, audience, tension, and forecast horizon so it
              can generate a rehearsal room around that scenario.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Browser-stored recent rooms</h3>
            <p>
              Recent room history is stored locally in the browser for convenience in the current
              product experience. The app does not yet provide full user accounts or team-level
              shared storage.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Live AI when enabled</h3>
            <p>
              On deployments where live AI generation is configured, scenario inputs may be sent to
              the configured model provider to generate the structured rehearsal output.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Local fallback engine</h3>
            <p>
              If a live AI run is unavailable, SignalLoom can fall back to a local rule-based
              engine so the product remains available for founder-led demos and product testing.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.copy}>
          <p className="eyebrow">Roadmap</p>
          <h2>Security maturity planned next.</h2>
        </div>

        <ul className={styles.list}>
          <li>Authentication and role-based access controls</li>
          <li>Server-side persistence with workspace isolation</li>
          <li>Audit history beyond local browser storage</li>
          <li>Operational monitoring, rate limiting, and abuse protection</li>
          <li>Expanded enterprise controls for sensitive strategy workflows</li>
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.copy}>
          <p className="eyebrow">Contact</p>
          <h2>Company and security contact paths.</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Signal Loom</h3>
            <p>{contactDetails.location}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.phoneDisplay}</p>
          </article>

          <article className={styles.card}>
            <h3>Public profiles</h3>
            {companyLinks.map((link) => (
              <p key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
