import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionReveal from "../../components/SectionReveal/SectionReveal";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.subtitle}>
              A few selected projects showcasing reusable components and clean CSS Modules styling.
            </p>
          </div>

          <div className={styles.hint} aria-hidden="true">
            Hover to see details
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((p, idx) => (
            <SectionReveal key={p.title} delay={0.08 + idx * 0.07}>
              <ProjectCard
                title={p.title}
                description={p.description}
                tech={p.tech}
                liveUrl={p.liveUrl}
                githubUrl={p.githubUrl}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

