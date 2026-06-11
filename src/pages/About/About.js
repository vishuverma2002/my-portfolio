import React from "react";
import profile from "../../data/profile";
import styles from "./About.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionReveal from "../../components/SectionReveal/SectionReveal";

const focusAreas = [
  {
    icon: "🧩",
    title: "Component-Based Architecture",
    text: "Clean, responsive, component-driven React.js and Next.js applications built to scale across teams and products.",
  },
  {
    icon: "⚡",
    title: "Performance & Core Web Vitals",
    text: "Code splitting, lazy loading, memoization, and Webpack optimization — delivering a 35% Core Web Vitals improvement in production.",
  },
  {
    icon: "🔄",
    title: "State Management & APIs",
    text: "Predictable global state with Redux Toolkit, Context API, and React Query, integrated with secure REST APIs at sub-200ms response times.",
  },
  {
    icon: "🤝",
    title: "Agile Collaboration",
    text: "Sprint planning, backlog grooming, API contract design, and structured GitHub code reviews in Agile/Scrum teams.",
  },
];

const journey = [
  {
    index: "01",
    title: "Bachelor of Computer Applications (2021 – 2024)",
    text: "Maa Shakumbari University, Uttar Pradesh — strong foundation in software development and problem solving.",
  },
  {
    index: "02",
    title: "Frontend Specialisation",
    text: "3 years building production React.js applications for fintech and education platforms, serving 200+ concurrent users.",
  },
  {
    index: "03",
    title: "Continuous Upskilling",
    text: "Currently advancing in Next.js, Docker, Microservices, System Design, PostgreSQL, GSAP, and Framer Motion.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          eyebrow="01 · About"
          title="Engineer focused on impact, not just code"
          subtitle={`Frontend Developer with ${profile.yearsExperience} of experience crafting scalable, high-performance web applications — strong in React.js, Next.js, TypeScript, and Redux Toolkit, with a track record of measurable results in production.`}
        />

        <div className={styles.grid}>
          {focusAreas.map((area, idx) => (
            <SectionReveal key={area.title} className={styles.card} delay={idx * 0.06}>
              <span className={styles.cardIcon} aria-hidden="true">
                {area.icon}
              </span>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardText}>{area.text}</p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className={styles.journey} delay={0.1}>
          <h3 className={styles.journeyTitle}>Education &amp; Growth</h3>
          <div className={styles.steps}>
            {journey.map((step) => (
              <div key={step.index} className={styles.step}>
                <span className={styles.stepIndex}>{step.index}</span>
                <div>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
