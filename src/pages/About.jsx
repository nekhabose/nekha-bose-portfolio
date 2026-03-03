import React from 'react';
import styles from './About.module.css';
import headshot from '../assets/images/headshot.jpg';
import { education, profile } from '../utils';

export default function About() {
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

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
          <p className={styles.eyebrow}>About</p>
          <h2>{profile.title}</h2>
          <p>{profile.about}</p>

          <div className={styles.educationGrid}>
            {education.map((item) => (
              <article key={`${item.degree}-${item.school}`} className={styles.eduCard}>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                {item.meta ? <span>{item.meta}</span> : null}
              </article>
            ))}
          </div>

          <div className={styles.achievementGrid}>
            {profile.achievements.map((item) => (
              <span key={item} className={styles.achievementChip}>
                {item}
              </span>
            ))}
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={`btn btnPrimary ${styles.resumeBtn}`}
            download="Nekha_Bose_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
