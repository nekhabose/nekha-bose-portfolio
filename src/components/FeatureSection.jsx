// src/components/FeatureSection.jsx
import React from 'react';
import styles from './FeatureSection.module.css';
import { FaCode, FaSitemap, FaBolt } from 'react-icons/fa';

const items = [
  {
    icon: <FaCode />,
    title: 'Design-to-Code Precision',
    text:
      'Pixel-perfect, accessible UI. I turn Figma into performant React (Vite, TypeScript), with clean component systems.'
  },
  {
    icon: <FaSitemap />,
    title: 'Pragmatic Architecture',
    text:
      'I design APIs and data models that age well—Spring Boot or Node/Express with Postgres/Mongo, CI/CD and tests.'
  },
  {
    icon: <FaBolt />,
    title: 'Built for Impact',
    text:
      'Fast releases, helpful analytics, and maintainable code. Teams ship faster and users get value sooner.'
  }
];

function FeatureSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        {items.map((it, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.icon}>{it.icon}</div>
            <h3 className={styles.title}>{it.title}</h3>
            <p className={styles.text}>{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
