import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProjectDetail.module.css';
import { projects } from '../utils';

const DetailSection = ({ title, children }) => (
  <section className={styles.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = useMemo(() => projects.find((item) => item.id === id), [id]);

  if (!project) {
    return (
      <section className={styles.notFound}>
        <h1>Project not found</h1>
        <Link to="/#projects" className={styles.backLink}>
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <article className={styles.wrap}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>{project.category}</p>
          <h1>{project.title}</h1>
          <p className={styles.summary}>{project.short}</p>

          <div className={styles.metricRow}>
            {project.metrics?.map((metric) => (
              <span key={metric} className={styles.metricChip}>
                {metric}
              </span>
            ))}
          </div>

          {project.links?.length ? (
            <div className={styles.actions}>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn btnPrimary">
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <img className={styles.heroImage} src={project.hero || project.thumb} alt={project.title} />
      </header>

      <div className={styles.detailGrid}>
        <DetailSection title="Problem">
          <p>{project.problem}</p>
        </DetailSection>

        <DetailSection title="Users">
          <p>{project.users}</p>
        </DetailSection>

        {project.constraints?.length ? (
          <DetailSection title="Constraints">
            <ul className={styles.list}>
              {project.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailSection>
        ) : null}

        {project.approach?.length ? (
          <DetailSection title="Approach">
            <ul className={styles.list}>
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailSection>
        ) : null}

        {project.architectureFlow?.length ? (
          <DetailSection title="Architecture">
            <div className={styles.architecture}>
              {project.architectureFlow.map((step, index) => (
                <React.Fragment key={step}>
                  <div className={styles.archNode}>{step}</div>
                  {index < project.architectureFlow.length - 1 ? (
                    <span className={styles.archArrow}>{'->'}</span>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </DetailSection>
        ) : null}

        {project.tech?.length ? (
          <DetailSection title="Tech stack">
            <div className={styles.techRow}>
              {project.tech.map((item) => (
                <span key={item} className={styles.techChip}>
                  {item}
                </span>
              ))}
            </div>
          </DetailSection>
        ) : null}

        {project.challenges?.length ? (
          <DetailSection title="Challenges">
            <ul className={styles.list}>
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailSection>
        ) : null}

        {project.results?.length ? (
          <DetailSection title={project.resultsTitle || 'Results'}>
            <ul className={styles.list}>
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailSection>
        ) : null}
      </div>

      <div className={styles.footer}>
        <Link to="/#projects" className={styles.backLink}>
          Back to projects
        </Link>
      </div>
    </article>
  );
};

export default ProjectDetail;
