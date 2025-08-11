// src/components/Hero/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nekha Bose</h1>
        <p className={styles.description}>
          AI Engineer • Full-Stack Developer • Problem Solver
        </p>
        <div className={styles.buttonsContainer}>
          <a href="#portfolio" className={styles.contactBtn}>
            View My Work
          </a>
          <a href="#contact" className={styles.resumeBtn}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};