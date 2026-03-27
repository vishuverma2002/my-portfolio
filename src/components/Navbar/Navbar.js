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

export default function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // If user lands with a hash (e.g. #projects), jump smoothly.
    const { hash } = window.location;
    if (!hash) return;
    const id = hash.replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => scrollToId(id), 50);
  }, []);

  function handleNavClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
    window.history.pushState(null, "", `#${id}`);
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: { id } }));
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" onClick={(e) => handleNavClick(e, "top")}>
          <span className={styles.brandName}>{profile.name}</span>
          <span className={styles.brandRole}>{profile.role}</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={styles.navLink}
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
            {theme === "dark" ? "Dark" : "Light"}
          </button>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={styles.mobileLink}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

