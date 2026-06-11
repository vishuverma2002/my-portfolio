import React from "react";
import profile from "../../data/profile";
import styles from "./Hero.module.css";
import SectionReveal from "../../components/SectionReveal/SectionReveal";
import TypingText from "../../components/TypingText/TypingText";

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <SectionReveal className={styles.content} delay={0.05}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              {profile.availability}
            </div>

            <h1 className={styles.title}>
              Hi, I&apos;m {profile.name}.
              <br />
              <span className={styles.gradientText}>
                <TypingText strings={profile.roles} />
              </span>
            </h1>

            <p className={styles.summary}>
              {profile.tagline} {profile.shortIntro}
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#projects">
                View My Work <ArrowIcon />
              </a>
              <a className={styles.secondaryButton} href={`mailto:${profile.email}`}>
                Get In Touch
              </a>
              <a
                className={styles.ghostButton}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className={styles.ghostButton}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>

            <dl className={styles.stats} aria-label="Career highlights">
              {profile.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <dt className={styles.statLabel}>{stat.label}</dt>
                  <dd className={styles.statValue}>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </SectionReveal>

          <SectionReveal className={styles.visual} delay={0.16}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRing} aria-hidden="true" />
              <div className={styles.avatarFrame}>
                <img
                  className={styles.avatar}
                  src={`${process.env.PUBLIC_URL}/vishuverma.jpeg`}
                  alt={`${profile.name} portrait`}
                  width="380"
                  height="475"
                  decoding="async"
                />
              </div>

              <div className={`${styles.floatCard} ${styles.floatCardTop}`} aria-hidden="true">
                <span className={styles.floatIcon}>⚛</span> React.js · Next.js
              </div>
              <div className={`${styles.floatCard} ${styles.floatCardBottom}`} aria-hidden="true">
                <span className={styles.floatIcon}>⚡</span> TypeScript · Redux Toolkit
              </div>
            </div>

            <div className={styles.metaCard}>
              <a className={styles.metaItem} href={`mailto:${profile.email}`}>
                <span className={styles.metaLabel}>Email</span>
                <span className={styles.metaValue}>{profile.email}</span>
              </a>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>{profile.location}, India</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
