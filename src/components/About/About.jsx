// src/components/About/About.jsx

import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")} // CORRECTED to .jpg
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> {/* CORRECTED typo */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites using React.js and React Native.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> {/* CORRECTED typo */}
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and scalable back-end systems
                and APIs using Node.js, Java (Spring Boot), and Python.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/datalcon.png")} alt="Data icon" /> {/* CORRECTED to use your data icon */}
            <div className={styles.aboutItemText}>
              <h3>Data & Cloud Engineer</h3>
              <p>
                I specialize in designing ETL pipelines with Airflow, managing cloud infrastructure on AWS & GCP, and ensuring data integrity.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};