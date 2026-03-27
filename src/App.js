import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import styles from "./App.module.css";
import Preloader from "./components/Preloader/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionVisible, setTransitionVisible] = useState(false);
  const transitionOverlayRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function onNavigate() {
      setTransitioning(true);
      window.setTimeout(() => setTransitioning(false), 260);
    }
    window.addEventListener("portfolio:navigate", onNavigate);
    return () => window.removeEventListener("portfolio:navigate", onNavigate);
  }, []);

  useEffect(() => {
    if (transitioning) {
      setTransitionVisible(true);
      return;
    }
    const t = window.setTimeout(() => setTransitionVisible(false), 280);
    return () => window.clearTimeout(t);
  }, [transitioning]);

  useEffect(() => {
    const el = transitionOverlayRef.current;
    if (!el) return;

    gsap.killTweensOf(el);
    if (transitioning) {
      gsap.fromTo(
        el,
        { opacity: 0, scaleX: 0.8, transformOrigin: "left center" },
        { opacity: 1, scaleX: 1, duration: 0.26, ease: "power3.out" }
      );
      return;
    }

    gsap.to(el, { opacity: 0, scaleX: 0.8, duration: 0.22, ease: "power3.out" });
  }, [transitioning]);

  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      // Ensure content is visible for reduced motion users.
      document.querySelectorAll('[data-reveal="true"]').forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const elements = Array.from(document.querySelectorAll('[data-reveal="true"]'));
    elements.forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-reveal-delay") || "0");
      gsap.fromTo(
        el,
        { opacity: 0, y: 18, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className={styles.app}>
      <Preloader loading={loading} />

      {transitionVisible ? (
        <div ref={transitionOverlayRef} className={styles.transitionOverlay} />
      ) : null}

      <Navbar />

      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
