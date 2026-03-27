import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Experience</h2>
          <p className={styles.subtitle}>
            Professional journey focused on scalable React applications and measurable impact.
          </p>
        </div>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <article key={item.company} className={styles.card}>
              <div className={styles.topRow}>
                <h3 className={styles.company}>{item.company}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.role}>{item.role}</p>
              <ul className={styles.list}>
                {item.achievements.map((point) => (
                  <li key={point} className={styles.listItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

