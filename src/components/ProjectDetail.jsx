import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ProjectDetail.module.css';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../utils';

const Counter = ({ to = 0, duration = 800 }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span>{n}</span>;
};

const useReveal = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      (e) => e.forEach((v) => v.isIntersecting && setShow(true)),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, show];
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  const [heroRef, heroShow] = useReveal();
  const [probRef, probShow] = useReveal();
  const [appRef, appShow] = useReveal();
  const [hiRef, hiShow] = useReveal();

  if (!project) {
    return (
      <section className={styles.notfound}>
        <h2>Project not found.</h2>
        <Link className={styles.back} to="/portfolio">← Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className={styles.wrap}>
      {/* HERO */}
      <div
        ref={heroRef}
        className={`${styles.hero} ${heroShow ? styles.reveal : ''}`}
        style={{ backgroundImage: `url(${project.hero || project.thumb})` }}
      >
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{project.title}</h1>

          {project.tech?.length ? (
            <div className={styles.chips}>
              {project.tech.map((t, i) => (
                <span className={styles.chip} key={i}>
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {project.links?.length ? (
            <div className={styles.cta}>
              {project.links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  className={styles.btn}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* STATS */}
      {project.stats?.length ? (
        <div className={styles.stats}>
          {project.stats.map((s, i) => (
            <div className={styles.stat} key={i}>
              <div className={styles.statVal}>
                <Counter to={Number(s.value) || 0} />
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      ) : null}

      {/* BODY */}
      <div className={styles.body}>
        {project.problem && (
          <section
            ref={probRef}
            className={`${styles.card} ${probShow ? styles.revealUp : ''}`}
          >
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </section>
        )}

        {project.approach && (
          <section
            ref={appRef}
            className={`${styles.card} ${appShow ? styles.revealUp : ''}`}
          >
            <h3>Solution & Approach</h3>
            <p>{project.approach}</p>
          </section>
        )}

        {project.highlights?.length ? (
          <section
            ref={hiRef}
            className={`${styles.card} ${hiShow ? styles.revealUp : ''}`}
          >
            <h3>Highlights</h3>
            <ul className={styles.bullets}>
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.impact && (
          <section className={`${styles.card} ${styles.revealUp}`}>
            <h3>Impact</h3>
            <p>{project.impact}</p>
          </section>
        )}

        <div className={styles.footerCTA}>
          <Link className={styles.backLink} to="/portfolio">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
