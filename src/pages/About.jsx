import React from 'react';
import styles from './About.module.css';
import headshot from '../assets/images/headshot.jpg';   // <-- your photo
import SkillsTicker from '../components/SkillsTicker';

export default function About() {
  const resumeUrl = `${import.meta.env.BASE_URL}Resume_NBose.pdf`;
  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        <img
          className={styles.photo}
          src={headshot}
          alt="Nekha Bose headshot"
          loading="lazy"
        />

        <div className={styles.content}>
          <h2>About Me</h2>
          <p>
            I’m Nekha Bose, a result-driven Full-Stack Engineer & AI with 5+ years across
            enterprise and startup settings. Currently pursuing my MS in IT at Illinois Tech,
            I build secure, scalable systems and clean, usable interfaces—always focused
            on impact.
          </p>

          <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.resumeBtn}
          download="Nekha_Bose_Resume.pdf"  // <-- download attribute
      >
            Download Resume
          </a>
        </div>
      </div>

      <h3 className={styles.subTitle}>My Skillset</h3>
      <SkillsTicker />
    </section>
  );
}
