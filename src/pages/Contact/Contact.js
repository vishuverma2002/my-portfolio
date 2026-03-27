import React, { useMemo, useState } from "react";
import styles from "./Contact.module.css";
import profile from "../../data/profile";
import SectionReveal from "../../components/SectionReveal/SectionReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = useMemo(() => `Portfolio contact from ${name || "website visitor"}`, [name]);

  function handleSubmit(e) {
    e.preventDefault();

    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message || "",
    ].join("\n");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>Have a project in mind? Send a message and let's talk.</p>
        </div>

        <div className={styles.grid}>
          <SectionReveal className={styles.infoCard} delay={0.08}>
            <h3 className={styles.infoTitle}>Get in touch</h3>
            <p className={styles.infoText}>
              I am open to freelance work, full-time roles, and collaborations. If you share your goals,
              I will respond with next steps.
            </p>

            <div className={styles.infoList} aria-label="Contact info">
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Email</span>
                <a className={styles.infoValue} href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Phone</span>
                <a className={styles.infoValue} href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>{profile.location}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>LinkedIn</span>
                <a className={styles.infoValue} href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/vishu-verma-680728342
                </a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Response time</span>
                <span className={styles.infoValue}>Usually within 24-48 hours</span>
              </div>
            </div>

            <div className={styles.note}>
              Tip: you can use the form to prefill an email draft automatically.
            </div>
          </SectionReveal>

          <SectionReveal delay={0.14}>
            <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Your name
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex"
                autoComplete="name"
                required={false}
              />
            </label>

            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
                required={false}
              />
            </label>

            <label className={styles.label}>
              Message
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, timeline, and goals."
                rows={6}
                required
              />
            </label>

            <div className={styles.actions}>
              <button type="submit" className={styles.primaryButton}>
                Send Message
              </button>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
              >
                Clear
              </button>
            </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

