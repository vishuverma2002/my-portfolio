import React, { useEffect, useMemo, useState } from "react";
import styles from "./TypingText.module.css";

export default function TypingText({ strings = [], className, speed = 32, hold = 900, deleteSpeed = 18 }) {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const safeStrings = useMemo(() => {
    if (!strings || !strings.length) return ["Frontend Developer"];
    return strings.filter(Boolean);
  }, [strings]);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting

  useEffect(() => {
    if (reducedMotion) {
      setText(safeStrings[index] || safeStrings[0]);
      return;
    }

    const current = safeStrings[index] || "";
    const typingTimer = setTimeout(() => {
      if (phase === "typing") {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setPhase("holding");
      } else if (phase === "holding") {
        setPhase("deleting");
      } else if (phase === "deleting") {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setPhase("typing");
          setIndex((i) => (i + 1) % safeStrings.length);
        }
      }
    }, phase === "typing" ? speed : phase === "holding" ? hold : deleteSpeed);

    return () => clearTimeout(typingTimer);
  }, [deleteSpeed, hold, index, phase, reducedMotion, safeStrings, safeStrings.length, speed, text.length]);

  if (!safeStrings.length) return null;

  return (
    <span className={`${styles.typing} ${className || ""}`} aria-label={safeStrings[index]}>
      {text}
      <span className={styles.cursor} aria-hidden="true" />
    </span>
  );
}

