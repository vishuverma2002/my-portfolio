import React from "react";
import styles from "./SectionHeader.module.css";
import SectionReveal from "../SectionReveal/SectionReveal";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <SectionReveal className={styles.header}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </SectionReveal>
  );
}
