// src/components/FeatureStrip/FeatureStrip.jsx
import React from "react";
import styles from "./FeatureStrip.module.css";
import { getImageUrl } from "../../utils";

export const FeatureStrip = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <img src={getImageUrl("features/customizationIcon.png")} alt="Customization Icon" className={styles.icon} />
        <h3 className={styles.cardTitle}>Customization</h3>
        <p className={styles.cardText}>
          “Every solution I build is tailored to each problem—from scalable systems to AI-powered dashboards.”
        </p>
      </div>
      <div className={styles.card}>
        <img src={getImageUrl("features/guidanceIcon.png")} alt="Expert Guidance Icon" className={styles.icon} />
        <h3 className={styles.cardTitle}>Expert Guidance</h3>
        <p className={styles.cardText}>
          “With over 5 years of experience, I’ve led cross-functional teams and mentored developers at scale.”
        </p>
      </div>
      <div className={styles.card}>
        <img src={getImageUrl("features/friendlyIcon.png")} alt="User-Friendly Icon" className={styles.icon} />
        <h3 className={styles.cardTitle}>User-Friendly</h3>
        <p className={styles.cardText}>
          “I combine clean UI, optimized typography, and intuitive workflows using Figma, React, and more.”
        </p>
      </div>
    </section>
  );
};