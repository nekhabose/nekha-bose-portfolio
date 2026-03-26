import React from 'react';
import styles from './About.module.css';
import headshot from '../assets/images/headshot.jpg';
import { education, profile } from '../utils';
import Reveal from '../components/Reveal';

export default function About() {
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.photoWrapper}>
          <img
            className={styles.photo}
            src={headshot}
            alt="Nekha Bose headshot"
            loading="lazy"
          />
        </div>

        <div className={styles.content}>
          <Reveal delay={0}>
            <p className={styles.eyebrow}>About</p>
          </Reveal>
          <Reveal delay={100}>
            <h2>{profile.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p>{profile.about}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className={styles.educationGrid}>
              {education.map((item) => (
                <article key={`${item.degree}-${item.school}`} className={styles.eduCard}>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  {item.meta ? <span>{item.meta}</span> : null}
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className={styles.achievementGrid}>
              {profile.achievements.map((item) => (
                <span key={item} className={styles.achievementChip}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={520}>
            <a
              href={resumeUrl}
              className={`btn btnPrimary ${styles.resumeBtn}`}
              download="Nekha_Bose_Resume.pdf"
            >
              Download Resume
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
