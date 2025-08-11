import React from 'react';
import styles from './SkillsTicker.module.css';

const skills = [
  // Front-end
  'React', 'TypeScript', 'Redux', 'React Native', 'Angular', 'HTML5', 'CSS3', 'SCSS',
  'JavaScript', 'D3.js', 'Bootstrap', 'FlutterFlow',
  // Back-end & APIs
  'Node.js', 'Express', 'Java Spring Boot', 'Python', 'REST APIs', 'GraphQL', 'Maven',
  // Data & Cloud
  'PostgreSQL', 'MongoDB', 'SQLite', 'AWS', 'GCP', 'Kafka', 'S3', 'GCS',
  // DevOps & Tools
  'Docker', 'Kubernetes', 'Nginx', 'CI/CD', 'Jenkins', 'GitHub Actions', 'PM2',
  'Tableau', 'Airflow', 'Autosys', 'Teradata', 'A/B Testing', 'Postman', 'Swagger',
  // Design & Collaboration
  'Figma', 'Jira', 'Confluence'
];

export default function SkillsTicker() {
  // duplicate the list for seamless loop
  const row = [...skills, ...skills];

  return (
    <div className={styles.wrap} aria-label="Continuous list of skills">
      <div className={styles.track}>
        {row.map((s, i) => (
          <span key={i} className={styles.item}>{s}</span>
        ))}
      </div>
    </div>
  );
}
