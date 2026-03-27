import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills";
import SectionReveal from "../../components/SectionReveal/SectionReveal";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>A quick snapshot of what I use to build products.</p>
        </div>

        <SectionReveal className={styles.grid} delay={0.08}>
          {skills.map((group, idx) => (
            <SectionReveal key={group.category} className={styles.card} delay={0.08 + idx * 0.08}>
              <h3 className={styles.cardTitle}>{group.category}</h3>
              <ul className={styles.chips}>
                {group.items.map((item) => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}

