import React from "react";
import profile from "../../data/profile";
import styles from "./Hero.module.css";
import SectionReveal from "../../components/SectionReveal/SectionReveal";
import TypingText from "../../components/TypingText/TypingText";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <SectionReveal className={styles.profileWrap} delay={0.05}>
            <div className={styles.avatarFrame} aria-hidden="true">
              <img
                className={styles.avatar}
                src={`${process.env.PUBLIC_URL}/vishuverma.jpeg`}
                alt={`${profile.name} profile`}
              />
            </div>
            <div className={styles.profileMeta}>
              <p className={styles.metaLine}>
                <span className={styles.metaLabel}>Location:</span> {profile.location}
              </p>
              <p className={styles.metaLine}>
                <span className={styles.metaLabel}>Email:</span>{" "}
                <a className={styles.metaLink} href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
              <p className={styles.metaLine}>
                <span className={styles.metaLabel}>Phone:</span>{" "}
                <a className={styles.metaLink} href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </p>
              <p className={styles.metaLine}>
                <span className={styles.metaLabel}>LinkedIn:</span>{" "}
                <a className={styles.metaLink} href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/vishu-verma-680728342
                </a>
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className={styles.content} delay={0.12}>
            <div className={styles.kicker}>Available for opportunities</div>
            <h1 className={styles.title}>
              Hi, I'm {profile.name} -{" "}
              <span className={styles.accent}>
                <TypingText strings={[profile.role, "React.js Developer", "Backend Learner"]} />
              </span>
            </h1>
            <p className={styles.subtitle}>{profile.tagline}</p>
            <p className={styles.summary}>{profile.shortIntro}</p>

            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#projects">
                View Projects
              </a>
              <a
                className={styles.secondaryButton}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <ul className={styles.bullets} aria-label="Highlights">
              <li className={styles.bullet}>{profile.yearsExperience} building scalable web apps</li>
              <li className={styles.bullet}>Strong React.js + Redux + Context API expertise</li>
              <li className={styles.bullet}>Expanding into Java, Spring Boot, and Microservices</li>
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

