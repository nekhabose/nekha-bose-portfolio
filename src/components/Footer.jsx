import React from 'react';
import styles from './Footer.module.css';
import { profile } from '../utils';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <strong>{profile.name}</strong>
      <p>{profile.title}</p>
    </div>
    <div className={styles.links}>
      <a href={profile.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span>{profile.location}</span>
    </div>
  </footer>
);

export default Footer;
