import { RehearsalLab } from "@/components/rehearsal-lab";
import { artifacts, scenarioTemplates } from "@/data/site-content";

import styles from "./page.module.css";

export default function RehearsePage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.copy}>
          <p className="eyebrow">Scenario Studio</p>
          <h1>Spin up a rehearsal room and see where the plan bends first.</h1>
          <p>
            This page is the operating workspace for SignalLoom: choose a scenario, tune the
            pressure in the room, and generate a decision-ready set of signals. When an OpenAI key
            is configured, the room runs live against the model and keeps a local fallback
            available for uninterrupted use.
          </p>
        </div>

        <div className={styles.templatePreview}>
          {scenarioTemplates.map((template) => (
            <article key={template.name}>
              <span>{template.name}</span>
              <p>{template.initiative}</p>
            </article>
          ))}
        </div>
      </section>

      <RehearsalLab variant="full" />

      <section className={styles.artifactSection}>
        <div className={styles.copy}>
          <p className="eyebrow">What The Room Returns</p>
          <h2>Every run produces an operating packet, not just a paragraph of text.</h2>
        </div>

        <div className={styles.artifactGrid}>
          {artifacts.map((artifact) => (
            <article key={artifact.title} className={styles.artifactCard}>
              <h3>{artifact.title}</h3>
              <p>{artifact.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
