import { RehearsalLab } from "@/components/rehearsal-lab";
import { artifacts, scenarioTemplates } from "@/data/site-content";

import styles from "./page.module.css";

export default function RehearsePage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.copy}>
          <p className="eyebrow">Scenario Review</p>
          <h1>Review a launch or product decision before it goes live.</h1>
          <p>
            This is the main SignalLoom workspace. Choose a scenario, describe the main concern,
            and generate a structured review with risks, stakeholder input, and recommended next
            steps. If live AI is configured, the product uses it and keeps a local fallback option
            available.
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
          <p className="eyebrow">What You Get</p>
          <h2>Each review produces structured output your team can use.</h2>
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
