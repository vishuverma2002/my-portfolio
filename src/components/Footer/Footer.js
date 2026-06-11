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

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brandName}>{profile.name}</span>
            <p className={styles.brandText}>
              {profile.role} crafting scalable, high-performance web applications with React.js, Next.js, and TypeScript.
            </p>
            <div className={styles.socials} aria-label="Social links">
              <a className={styles.socialLink} href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className={styles.socialLink} href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className={styles.socialLink} href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className={styles.socialLink} href={`tel:+91${profile.phone}`}>
                +91 {profile.phone}
              </a>
            </div>
          </div>

          <nav className={styles.links} aria-label="Quick links">
            {quickLinks.map((link) => (
              <a key={link.id} className={styles.link} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <button type="button" className={styles.topButton} onClick={scrollToTop} aria-label="Back to top">
            ↑ Top
          </button>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} {profile.name}. All rights reserved.</p>
          <p className={styles.credit}>Built with React, GSAP &amp; CSS Modules</p>
        </div>
      </div>
    </footer>
  );
}
