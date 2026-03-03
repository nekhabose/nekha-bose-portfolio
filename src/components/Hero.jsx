import React from 'react';
import styles from './Hero.module.css';
import Reveal from './Reveal';
import { profile } from '../utils';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${id}`);
      }
    }
  };

  const goPortfolio = () => scrollTo('projects');
  const goContact = () => scrollTo('contact');
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

  return (
    <header className={styles.hero}>
      <Reveal className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Senior software delivery</p>
          <h1 className={styles.title}>{profile.name}</h1>
          <p className={styles.role}>{profile.title}</p>
          <p className={styles.summary}>{profile.summary}</p>

          <div className={styles.focusRow}>
            {profile.focusAreas.map((item) => (
              <span key={item} className={styles.focusChip}>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.actions}>
            <button onClick={goPortfolio} className="btn btnPrimary">
              View Projects
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btnSecondary"
              download="Nekha_Bose_Resume.pdf"
            >
              Download Resume
            </a>
            <button onClick={goContact} className="btn btnGhost">
              Contact
            </button>
          </div>
        </div>

        <div className={styles.metricsCard}>
          <p className={styles.metricsLabel}>Selected impact</p>
          <div className={styles.metricsGrid}>
            {profile.heroMetrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <ul className={styles.achievementList}>
            {profile.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </header>
  );
}
