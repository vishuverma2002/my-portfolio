import React from "react";
import styles from "./Preloader.module.css";

export default function Preloader({ loading }) {
  // Without AnimatePresence to keep compatibility with CRA 4 + framer-motion build.
  const [visible, setVisible] = React.useState(loading);

  React.useEffect(() => {
    if (loading) {
      setVisible(true);
      return;
    }
    const t = window.setTimeout(() => setVisible(false), 380);
    return () => window.clearTimeout(t);
  }, [loading]);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${loading ? "" : styles.overlayHidden}`}>
      <div className={styles.loader}>
        <div className={styles.rings} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className={styles.text}>Loading portfolio…</div>
      </div>
    </div>
  );
}

