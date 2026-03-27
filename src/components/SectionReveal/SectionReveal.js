import React from "react";

/**
 * Reveal on scroll wrapper.
 * GSAP will animate elements that have `data-reveal`.
 */
export default function SectionReveal({ children, className, delay = 0 }) {
  return (
    <div className={className} data-reveal="true" data-reveal-delay={delay}>
      {children}
    </div>
  );
}

