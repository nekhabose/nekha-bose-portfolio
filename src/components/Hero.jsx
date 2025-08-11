import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  const navigate = useNavigate();

  const goPortfolio = () => navigate('/portfolio');
  const goContact = () => navigate('/contact');

  return (
    <header className={styles.hero}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Hi, I’m Nekha Bose</h1>

        <p className={styles.line}>
          <strong>Front-End:</strong> React, TypeScript, Vite, modern UI systems (Figma → code), accessibility.
        </p>
        <p className={styles.line}>
          <strong>Back-End:</strong> Java Spring Boot, Node/Express, PostgreSQL/MongoDB, Firebase, Docker/K8s, GCP/AWS.
        </p>

        <div className={styles.actions}>
          <button onClick={goPortfolio} className={`${styles.btn} ${styles.primary}`}>
            View My Work
          </button>
          <button onClick={goContact} className={`${styles.btn} ${styles.primary}`}>
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}
