import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionReveal from "../../components/SectionReveal/SectionReveal";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          eyebrow="04 · Projects"
          title="Selected work, built for real users"
          subtitle="Case studies of production platforms — architecture decisions, measurable outcomes, and the stack behind them."
        />

        <div className={styles.grid}>
          {projects.map((p, idx) => (
            <SectionReveal key={p.title} delay={idx * 0.08}>
              <ProjectCard {...p} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
