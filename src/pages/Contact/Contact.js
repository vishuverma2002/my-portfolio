import React, { useMemo, useState } from "react";
import styles from "./Contact.module.css";
import profile from "../../data/profile";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
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
        <SectionHeader
          eyebrow="05 · Contact"
          title="Let's build something together"
          subtitle="Open to full-time roles, freelance work, and collaborations. Share your goals and I'll respond with next steps — usually within 24–48 hours."
        />

        <div className={styles.grid}>
          <SectionReveal className={styles.infoCard} delay={0.06}>
            <h3 className={styles.infoTitle}>Get in touch</h3>
            <p className={styles.infoText}>
              Prefer email? Reach out directly, or use the form to prefill a draft automatically.
            </p>

            <div className={styles.infoList} aria-label="Contact info">
              <a className={styles.infoRow} href={`mailto:${profile.email}`}>
                <span className={styles.infoIcon} aria-hidden="true">✉</span>
                <span className={styles.infoBody}>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>{profile.email}</span>
                </span>
              </a>
              <a className={styles.infoRow} href={`tel:+91${profile.phone}`}>
                <span className={styles.infoIcon} aria-hidden="true">✆</span>
                <span className={styles.infoBody}>
                  <span className={styles.infoLabel}>Phone</span>
                  <span className={styles.infoValue}>+91 {profile.phone}</span>
                </span>
              </a>
              <a className={styles.infoRow} href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className={styles.infoIcon} aria-hidden="true">in</span>
                <span className={styles.infoBody}>
                  <span className={styles.infoLabel}>LinkedIn</span>
                  <span className={styles.infoValue}>linkedin.com/in/vishu-verma-dev ↗</span>
                </span>
              </a>
              <a className={styles.infoRow} href={profile.github} target="_blank" rel="noreferrer">
                <span className={styles.infoIcon} aria-hidden="true">gh</span>
                <span className={styles.infoBody}>
                  <span className={styles.infoLabel}>GitHub</span>
                  <span className={styles.infoValue}>github.com/vishuverma2002 ↗</span>
                </span>
              </a>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">⌖</span>
                <span className={styles.infoBody}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>{profile.location}, India</span>
                </span>
              </div>
            </div>

            <div className={styles.availability}>
              <span className={styles.availabilityDot} aria-hidden="true" />
              {profile.availability}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <label className={styles.label}>
                  Your name
                  <input
                    className={styles.input}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex"
                    autoComplete="name"
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
                  />
                </label>
              </div>

              <label className={styles.label}>
                Message
                <textarea
                  className={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, role, timeline, and goals."
                  rows={7}
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
