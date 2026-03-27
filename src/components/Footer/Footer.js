import React from "react";
import profile from "../../data/profile";
import styles from "./Footer.module.css";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {year} {profile.name}. All rights reserved.</p>
        <div className={styles.links} aria-label="Quick links">
          {quickLinks.map((link) => (
            <a key={link.id} className={styles.link} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

