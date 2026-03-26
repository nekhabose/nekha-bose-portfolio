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
      <div className={styles.layout}>
        <div className={styles.copy}>
          <Reveal delay={0}>
            <p className={styles.kicker}>Senior software delivery</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className={styles.title}>{profile.name}</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className={styles.role}>{profile.title}</p>
          </Reveal>
          <Reveal delay={360}>
            <div className={styles.focusRow}>
              {profile.focusAreas.map((item) => (
                <span key={item} className={styles.focusChip}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className={styles.actions}>
              <button onClick={goPortfolio} className="btn btnPrimary">
                View Projects
              </button>
              <a
                href={resumeUrl}
                className="btn btnSecondary"
                download="Nekha_Bose_Resume.pdf"
              >
                Download Resume
              </a>
              <button onClick={goContact} className="btn btnGhost">
                Contact
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
