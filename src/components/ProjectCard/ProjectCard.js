import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  description,
  tech = [],
  liveUrl,
  githubUrl,
}) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <p className={styles.description}>{description}</p>

      {tech.length ? (
        <ul className={styles.techList} aria-label={`${title} technologies`}>
          {tech.map((t) => (
            <li key={t} className={styles.techItem}>
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      <div className={styles.actions}>
        {liveUrl ? (
          <a
            className={styles.primaryButton}
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        ) : null}
        {githubUrl ? (
          <a
            className={styles.secondaryButton}
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}

