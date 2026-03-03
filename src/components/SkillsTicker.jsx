import React from 'react';
import styles from './SkillsTicker.module.css';
import { skillGroups } from '../utils';

export default function SkillsTicker() {
  return (
    <div className={styles.grid}>
      {skillGroups.map((group) => (
        <section key={group.title} className={styles.card} aria-label={group.title}>
          <h3>{group.title}</h3>
          <div className={styles.items}>
            {group.items.map((item) => (
              <span key={item} className={styles.item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
