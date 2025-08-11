import React, { useState } from 'react';
import styles from './ExperienceTimeline.module.css';
import { experiences } from '../utils';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const [openId, setOpenId] = useState(experiences[0]?.id || experiences[0]?.company);

  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((e) => {
          const id = e.id || e.company;
          const isOpen = openId === id;
          return (
            <article key={id} className={styles.item}>
              <div className={styles.stem} aria-hidden="true">
                <span className={styles.dot}/>
              </div>

              <button
                className={styles.header}
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
              >
                <div className={styles.headL}>
                  <h3 className={styles.role}>{e.role}</h3>
                  <div className={styles.meta}>
                    <span className={styles.company}><FaBuilding/> {e.company}</span>
                    <span><FaMapMarkerAlt/> {e.location}</span>
                    <span><FaCalendarAlt/> {e.period}</span>
                  </div>
                </div>
                <FaChevronDown className={isOpen ? styles.chevOpen : styles.chev}/>
              </button>

              <div className={isOpen ? styles.bodyOpen : styles.body}>
                <ul className={styles.bullets}>
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className={styles.techs}>
                  {e.tech.map((t, i) => <span key={i} className={styles.chip}>{t}</span>)}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
