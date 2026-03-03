import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => (
  <Link to={`/portfolio/${project.id}`} className={styles.card}>
    <figure className={styles.media}>
      <img src={project.thumb} alt={project.title} loading="lazy" />
    </figure>
    <div className={styles.body}>
      {project.category ? <p className={styles.category}>{project.category}</p> : null}
      <h4>{project.title}</h4>
      <p>{project.short}</p>
      {project.metrics?.length ? (
        <div className={styles.metricRow}>
          {project.metrics.slice(0, 3).map((metric) => (
            <span key={metric} className={styles.metricChip}>
              {metric}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  </Link>
);

export default ProjectCard;
