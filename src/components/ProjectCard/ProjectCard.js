import React from "react";
import styles from "./ProjectCard.module.css";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ProjectCard({
  title,
  category,
  description,
  highlights = [],
  metrics = [],
  tech = [],
  liveUrl,
  githubUrl,
}) {
  const hasLive = liveUrl && liveUrl !== "#";
  const hasGithub = githubUrl && githubUrl !== "#";

  return (
    <article className={styles.card}>
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.header}>
        {category ? <span className={styles.category}>{category}</span> : null}
        <h3 className={styles.title}>{title}</h3>
      </header>

      <p className={styles.description}>{description}</p>

      {metrics.length ? (
        <div className={styles.metrics}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      ) : null}

      {highlights.length ? (
        <ul className={styles.highlights} aria-label={`${title} key highlights`}>
          {highlights.map((h) => (
            <li key={h} className={styles.highlight}>
              <span className={styles.checkIcon} aria-hidden="true">
                <CheckIcon />
              </span>
              {h}
            </li>
          ))}
        </ul>
      ) : null}

      <footer className={styles.footer}>
        {tech.length ? (
          <ul className={styles.techList} aria-label={`${title} technologies`}>
            {tech.map((t) => (
              <li key={t} className={styles.techItem}>
                {t}
              </li>
            ))}
          </ul>
        ) : null}

        {hasLive || hasGithub ? (
          <div className={styles.actions}>
            {hasLive ? (
              <a className={styles.primaryButton} href={liveUrl} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            ) : null}
            {hasGithub ? (
              <a className={styles.secondaryButton} href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </footer>
    </article>
  );
}
