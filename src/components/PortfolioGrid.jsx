// src/components/PortfolioGrid.jsx
import React from 'react';
import { projects } from '../utils';
import ProjectCard from './ProjectCard';
import styles from './PortfolioGrid.module.css';

const PortfolioGrid = () => (
  <section className={styles.grid}>
    {projects.map((p) => (
      <ProjectCard key={p.id} project={p} />
    ))}
  </section>
);

export default PortfolioGrid;
