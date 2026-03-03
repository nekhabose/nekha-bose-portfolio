import React from 'react';
import styles from './CertificationsList.module.css';
import { certifications } from '../utils';

const CertificationsList = () => (
  <div className={styles.grid}>
    {certifications.map((item) => (
      <article key={item.title} className={styles.card}>
        <p className={styles.kicker}>Certification</p>
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </article>
    ))}
  </div>
);

export default CertificationsList;
