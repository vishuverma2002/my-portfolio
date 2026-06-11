import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionReveal from "../../components/SectionReveal/SectionReveal";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          eyebrow="03 · Experience"
          title="Professional journey, measured in impact"
          subtitle="Production React applications for fintech and enterprise platforms — every line backed by a metric."
        />

        <div className={styles.timeline}>
          {experience.map((item, idx) => (
            <SectionReveal key={item.company} className={styles.entry} delay={idx * 0.08}>
              <div className={styles.marker} aria-hidden="true">
                <span className={`${styles.dot} ${item.current ? styles.dotCurrent : ""}`} />
              </div>

              <article className={styles.card}>
                <div className={styles.topRow}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>
                      {item.company} <span className={styles.location}>· {item.location}</span>
                    </p>
                  </div>
                  <span className={`${styles.period} ${item.current ? styles.periodCurrent : ""}`}>
                    {item.current ? "● " : ""}
                    {item.period}
                  </span>
                </div>

                <div className={styles.metrics}>
                  {item.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                <ul className={styles.list}>
                  {item.achievements.map((point) => (
                    <li key={point} className={styles.listItem}>
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className={styles.techList} aria-label="Technologies used">
                  {item.tech.map((t) => (
                    <li key={t} className={styles.techChip}>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
