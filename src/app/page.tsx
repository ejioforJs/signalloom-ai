import Image from "next/image";
import Link from "next/link";

import { RehearsalLab } from "@/components/rehearsal-lab";
import {
  capabilities,
  companyFacts,
  companyLinks,
  contactDetails,
  faqItems,
  foundingTeam,
  metrics,
  pathways,
  pilotLoop,
  securityPrinciples,
  teamSummary,
  tractionItems,
} from "@/data/site-content";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">Decision Planning Software</p>
          <h1>Review launches, pricing changes, and market plans before they go live.</h1>
          <p className={styles.heroText}>
            SignalLoom helps product, strategy, and operations teams review important decisions
            before release. It gives teams a structured way to assess risk, stakeholder concerns,
            and next steps.
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
            <span>Product overview</span>
            <span className={styles.liveTag}>web app</span>
          </div>

          <div className={styles.consoleBody}>
            <div className={styles.scoreBlock}>
              <span>purpose</span>
              <strong>Review risk early</strong>
              <small>
                Help teams understand likely objections, execution gaps, and launch risks before a
                decision becomes public.
              </small>
            </div>

            <div className={styles.consoleGrid}>
              <article>
                <p className={styles.consoleLabel}>What you get</p>
                <strong>Readiness score, key risks, stakeholder input, and recommended next steps.</strong>
              </article>
              <article>
                <p className={styles.consoleLabel}>How it runs</p>
                <strong>Browser-based workflow with live AI generation and a local fallback option.</strong>
              </article>
            </div>

            <div className={styles.timeline}>
              <div>
                <span>Input</span>
                <p>Enter the initiative, audience, main concern, and review horizon.</p>
              </div>
              <div>
                <span>Analysis</span>
                <p>SignalLoom reviews the scenario and highlights likely issues and stakeholder concerns.</p>
              </div>
              <div>
                <span>Output</span>
                <p>Your team gets a structured result it can use in planning and internal review.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.ribbon}>
        <span>nvidia inception program</span>
        <span>launch planning</span>
        <span>pricing resets</span>
        <span>market entries</span>
        <span>incident response</span>
      </section>

      <section className={styles.section} id="product">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Product</p>
          <h2>Structured decision review for teams making important changes.</h2>
          <p>
            SignalLoom is built for practical planning. Instead of a generic text response, the
            product organizes a scenario into clear risks, stakeholder concerns, timelines, and
            action items.
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
          <h2>Common ways teams can use SignalLoom.</h2>
          <p>
            The product focuses on situations where a team needs a clear review before making a
            public or customer-facing change.
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
            <p className="eyebrow">Workflow</p>
            <h2>From scenario to action plan in four steps.</h2>
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

      <section className={styles.aboutSection} id="team">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Team</p>
          <h2>SignalLoom is being built by James Solomon and Ekene Nweke.</h2>
          <p>
            Signal Loom is focused on helping teams make better launch and operating decisions
            through structured review, clearer execution planning, and a solid technical foundation.
          </p>
        </div>

        <div className={styles.teamShowcase}>
          <div className={styles.teamGrid}>
            {foundingTeam.map((member) => (
              <article key={member.name} className={styles.teamMemberCard}>
                <div className={styles.memberImagePanel}>
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    width={720}
                    height={720}
                    className={styles.founderImage}
                    priority={member.name === "James Solomon"}
                  />

                  <div className={styles.memberOverlay}>
                    <span className={styles.memberRole}>{member.role}</span>
                    <h3 className={styles.memberName}>{member.name}</h3>
                  </div>
                </div>

                <div className={styles.memberNoteCard}>
                  <p>{member.note}</p>
                </div>
              </article>
            ))}
          </div>

          <article className={styles.teamRail}>
            <div className={styles.teamSummaryCard}>
              <span className={styles.cardEyebrow}>Founding Team</span>
              <strong>Product, strategy, and engineering under one roof.</strong>
              <p>{teamSummary}</p>
            </div>

            <div className={styles.teamDivider} />

            <div className={styles.teamBioList}>
              {foundingTeam.map((member) => (
                <article key={member.name} className={styles.teamBioItem}>
                  <span className={styles.cardEyebrow}>{member.role}</span>
                  <strong>{member.name}</strong>
                  <p>{member.bio}</p>
                </article>
              ))}
            </div>

            <div className={styles.teamFactsGrid}>
              {companyFacts.map((fact) => (
                <article key={fact.label} className={styles.teamFact}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.companySection} id="company">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Company</p>
          <h2>Company details, contact information, and current traction.</h2>
          <p>
            This section gives reviewers and partners the core details they need: who is building
            the company, how to reach it, and what progress has already been made.
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
          <h2>Current product handling and planned security improvements.</h2>
          <p>
            SignalLoom is still early-stage. These pages explain what the product stores today and
            what controls are planned next.
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
          <h2>Key questions about the product.</h2>
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
          <p className="eyebrow">Try the Product</p>
          <h2>Start with one decision and review it clearly.</h2>
          <p>
            Open the product workspace and review a launch, pricing change, or market expansion
            plan before it goes live.
          </p>
        </div>
        <Link href="/rehearse" className="pillButton">
          Start A Scenario
        </Link>
      </section>
    </main>
  );
}
