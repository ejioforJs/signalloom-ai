import Image from "next/image";
import Link from "next/link";

import { RehearsalLab } from "@/components/rehearsal-lab";
import {
  capabilities,
  companyFacts,
  companyLinks,
  contactDetails,
  faqItems,
  founderBio,
  founderNote,
  metrics,
  pathways,
  pilotLoop,
  securityPrinciples,
  tractionItems,
} from "@/data/site-content";

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
            <Link href="#product" className="ghostButton">
              Explore Product
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
        <span>nvidia inception program</span>
        <span>Built for launch strategy</span>
        <span>pricing resets</span>
        <span>market entries</span>
        <span>incident response</span>
      </section>

      <section className={styles.section} id="product">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Product</p>
          <h2>Not another chatbot. A rehearsal system for high-stakes decisions.</h2>
          <p>
            SignalLoom is designed for real operating decisions, not generic prompts. The product
            turns ambiguous strategic plans into structured guidance a team can review, challenge,
            and act on before public rollout.
          </p>
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

      <section className={styles.useCaseSection} id="how-it-works">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">How It Works</p>
          <h2>Three rooms founders and operators keep coming back to.</h2>
          <p>
            The product is built around recurring, high-stakes decisions where teams need signal
            before the market gives them consequences.
          </p>
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

      <section className={styles.aboutSection} id="founder">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Founder</p>
          <h2>SignalLoom is a founder-led AI software product built by James Solomon.</h2>
          <p>
            The company is focused on helping teams make stronger launch and operating decisions
            through structured rehearsal, scenario pressure-testing, and clearer execution prep.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.founderProfile}>
            <div className={styles.founderImageWrap}>
              <Image
                src="/founder.png"
                alt="James Solomon, Founder and CTO of Signal Loom"
                width={720}
                height={720}
                className={styles.founderImage}
                priority
              />
            </div>

            <article className={styles.founderCard}>
              <p>{founderNote.quote}</p>
              <strong>{founderNote.name}</strong>
              <span>{founderNote.role}</span>
            </article>
          </div>

          <div className={styles.founderStack}>
            <article className={styles.bioCard}>
              <span className={styles.cardEyebrow}>Founder Bio</span>
              <p>{founderBio}</p>
            </article>

            <div className={styles.factGrid}>
              {companyFacts.map((fact) => (
                <article key={fact.label} className={styles.factCard}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.companySection} id="company">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Company</p>
          <h2>Real company details, real contact paths, and early traction signals.</h2>
          <p>
            Signal Loom is being positioned as a serious startup company, not just a concept page.
            Reviewers and partners should be able to verify who is building it, how to reach the
            company, and what momentum already exists.
          </p>
        </div>

        <div className={styles.companyGrid}>
          <div className={styles.contactPanel}>
            <article className={styles.contactCard}>
              <span className={styles.cardEyebrow}>Contact</span>
              <a href={`mailto:${contactDetails.email}`} className={styles.contactLink}>
                {contactDetails.email}
              </a>
              <a href={contactDetails.phoneHref} className={styles.contactLink}>
                {contactDetails.phoneDisplay}
              </a>
              <p>{contactDetails.location}</p>
            </article>

            <article className={styles.contactCard}>
              <span className={styles.cardEyebrow}>Profiles</span>
              <div className={styles.linkList}>
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.externalLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          </div>

          <div className={styles.tractionGrid}>
            {tractionItems.map((item) => (
              <article key={item.title} className={styles.tractionCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.securitySection} id="security">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Security</p>
          <h2>Trust, product clarity, and honest data handling matter from day one.</h2>
          <p>
            SignalLoom is still founder-led and early-stage, but the product is being shaped with a
            clear bias toward transparent inputs, predictable outputs, and infrastructure maturity
            over time.
          </p>
        </div>

        <div className={styles.securityGrid}>
          {securityPrinciples.map((item) => (
            <article key={item.title} className={styles.securityCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">FAQ</p>
          <h2>Everything a reviewer, partner, or early customer should understand quickly.</h2>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
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
