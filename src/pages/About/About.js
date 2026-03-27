import React from "react";
import profile from "../../data/profile";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.subtitle}>
            Full Stack Developer with {profile.yearsExperience} of experience building scalable applications.
            Strong in React.js, JavaScript, and modern UI development, currently expanding into backend
            technologies like Java, Spring Boot, and Microservices.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Professional Focus</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Building clean, responsive, and scalable frontend applications</li>
              <li className={styles.listItem}>State management with Redux and Context API</li>
              <li className={styles.listItem}>Cross-team collaboration with backend and API teams</li>
              <li className={styles.listItem}>Using AI tools for faster development and debugging</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Education & Growth</h3>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepIndex}>BCA</div>
                <div className={styles.stepBody}>
                  <p className={styles.stepTitle}>Bachelor of Computer Applications</p>
                  <p className={styles.stepText}>Strong foundation in software development and problem solving.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIndex}>2</div>
                <div className={styles.stepBody}>
                  <p className={styles.stepTitle}>Backend Expansion</p>
                  <p className={styles.stepText}>Currently upskilling in Java, Spring Boot, and Microservices.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIndex}>3</div>
                <div className={styles.stepBody}>
                  <p className={styles.stepTitle}>Continuous Improvement</p>
                  <p className={styles.stepText}>Quick learner with practical AI-assisted engineering workflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.note}>
          Want to collaborate? Reach out in the <a className={styles.noteLink} href="#contact">Contact</a> section.
        </div>
      </div>
    </section>
  );
}

