import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionReveal from "../../components/SectionReveal/SectionReveal";

const categoryIcons = {
  Frontend: "⚛️",
  "Styling & UI": "🎨",
  "State Management": "🔄",
  "Performance & SEO": "⚡",
  "APIs & Security": "🔐",
  "Testing & QA": "🧪",
  "Tools & Workflow": "🧰",
  Databases: "🗄️",
  "Currently Learning": "📚",
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          eyebrow="02 · Skills"
          title="A toolkit built for production"
          subtitle="Technologies I use daily to design, build, and ship scalable web applications."
        />

        <div className={styles.grid}>
          {skills.map((group, idx) => (
            <SectionReveal key={group.category} className={styles.card} delay={idx * 0.07}>
              <div className={styles.cardHead}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {categoryIcons[group.category] || "✦"}
                </span>
                <h3 className={styles.cardTitle}>{group.category}</h3>
              </div>
              <ul className={styles.chips}>
                {group.items.map((item) => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
