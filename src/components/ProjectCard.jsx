import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => (
  <Link to={`/portfolio/${project.id}`} className={styles.card}>
    <figure className={styles.media}>
      <img src={project.thumb} alt={project.title} loading="lazy" />
    </figure>
    <div className={styles.body}>
      <h4>{project.title}</h4>
      <p>{project.short}</p>
    </div>
  </Link>
);

export default ProjectCard;