import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import profile from "../../data/profile";
import styles from "./Navbar.module.css";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("navOpen", menuOpen);
    return () => document.body.classList.remove("navOpen");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleNavClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
    window.history.pushState(null, "", `#${id}`);
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: { id } }));
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.progressTrack} aria-hidden="true">
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.inner}>
          <a className={styles.brand} href="#top" onClick={(e) => handleNavClick(e, "top")}>
            <span className={styles.brandMark} aria-hidden="true">
              {profile.name.split(" ").map((w) => w[0]).join("")}
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>{profile.name}</span>
              <span className={styles.brandRole}>{profile.role}</span>
            </span>
          </a>

          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={`${styles.navLink} ${activeId === item.id ? styles.navLinkActive : ""}`}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.themeButton}
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a className={styles.ctaButton} href={`mailto:${profile.email}`}>
              Hire Me
            </a>

            <button
              type="button"
              className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
            >
              <span className={styles.menuIcon} aria-hidden="true">
                {menuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-menu"
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
          role="dialog"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`${styles.mobileLink} ${activeId === item.id ? styles.mobileLinkActive : ""}`}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
          <a
            className={styles.mobileCta}
            href={`mailto:${profile.email}`}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            Hire Me — Get In Touch
          </a>
        </div>
      </header>

      <button
        type="button"
        className={`${styles.mobileBackdrop} ${menuOpen ? styles.mobileBackdropVisible : ""}`}
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
