import Link from "next/link";

import { RehearsalLab } from "@/components/rehearsal-lab";
import { capabilities, founderNote, metrics, pathways, pilotLoop } from "@/data/site-content";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">AI Decision Rehearsal</p>
          <h1>Train your next launch against futures that have not happened yet.</h1>
          <p className={styles.heroText}>
            SignalLoom helps product, strategy, and operations teams rehearse critical moves before
            reality makes the first move. Launches, pricing changes, expansions, and response plans
            can all be pressure-tested in one AI-guided room.
          </p>

          <div className={styles.heroActions}>
            <Link href="/rehearse" className="pillButton">
              Open Rehearsal Lab
            </Link>
            <Link href="#capabilities" className="ghostButton">
              Explore Capabilities
            </Link>
          </div>

          <div className={styles.metricStrip}>
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.heroConsole}>
          <div className={styles.consoleTop}>
            <span>Founder-led product</span>
            <span className={styles.liveTag}>live platform</span>
          </div>

          <div className={styles.consoleBody}>
            <div>
              <p className={styles.consoleLabel}>Built by</p>
              <h2>James Solomon</h2>
            </div>

            <div className={styles.scoreBlock}>
              <span>mission</span>
              <strong>Clarity</strong>
              <small>
                Give teams a disciplined way to rehearse decisions before customers, partners, or
                regulators react in the real world.
              </small>
            </div>

            <div className={styles.consoleGrid}>
              <article>
                <p className={styles.consoleLabel}>Core output</p>
                <strong>Readiness score, flashpoints, drills, proof points, and launch checklist.</strong>
              </article>
              <article>
                <p className={styles.consoleLabel}>Operating mode</p>
                <strong>Live AI with local fallback, recent-room memory, and structured output.</strong>
              </article>
            </div>

            <div className={styles.timeline}>
              <div>
                <span>Input</span>
                <p>Paste the initiative, audience, tension, and forecast horizon.</p>
              </div>
              <div>
                <span>Room</span>
                <p>SignalLoom maps stakeholders, objections, and first-order execution risks.</p>
              </div>
              <div>
                <span>Action</span>
                <p>Your team leaves with concrete execution steps instead of vague AI copy.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.ribbon}>
        <span>Built for launch strategy</span>
        <span>pricing resets</span>
        <span>market entries</span>
        <span>incident response</span>
      </section>

      <section className={styles.section} id="capabilities">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">What Makes It Different</p>
          <h2>Not another chatbot. A rehearsal system for high-stakes decisions.</h2>
        </div>

        <div className={styles.cardGrid}>
          {capabilities.map((capability, index) => (
            <article key={capability.title} className={styles.capabilityCard}>
              <span className={styles.cardNumber}>0{index + 1}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.useCaseSection}>
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Operating Lanes</p>
          <h2>Three rooms founders and operators keep coming back to.</h2>
        </div>

        <div className={styles.pathGrid}>
          {pathways.map((path) => (
            <article key={path.title} className={styles.pathCard}>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.pilotPanel}>
          <div className={styles.sectionIntro}>
            <p className="eyebrow">How The Loop Works</p>
            <h2>From raw memo to a reusable playbook in four moves.</h2>
          </div>

          <div className={styles.loopGrid}>
            {pilotLoop.map((item) => (
              <article key={item.step} className={styles.loopCard}>
                <h3>{item.step}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.labSection}>
        <RehearsalLab />
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Founder Note</p>
          <h2>SignalLoom is being built by James Solomon as a focused decision-rehearsal platform.</h2>
        </div>

        <div className={styles.testimonialGrid}>
          <article className={styles.testimonialCard}>
            <p>{founderNote.quote}</p>
            <strong>{founderNote.name}</strong>
            <span>{founderNote.role}</span>
          </article>
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className="eyebrow">Ready To Explore</p>
          <h2>From memo to simulated quarter in one room.</h2>
          <p>
            Open the rehearsal lab and test how SignalLoom reframes launches, pricing changes, and
            market-entry bets before they go public.
          </p>
        </div>
        <Link href="/rehearse" className="pillButton">
          Start A Scenario
        </Link>
      </section>
    </main>
  );
}
