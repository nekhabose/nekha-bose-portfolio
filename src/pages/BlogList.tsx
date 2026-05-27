import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const BlogList: React.FC = () => {
  return (
    <div className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <span className="eyebrow">Writing</span>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        color: 'var(--color-text-primary)',
        fontWeight: 800,
        marginBottom: '0.75rem',
        marginTop: '0.5rem',
      }}>
        Technical Writing
      </h1>
      <p style={{
        color: 'var(--color-text-secondary)',
        fontSize: '1.05rem',
        maxWidth: '560px',
        marginBottom: '3rem',
        lineHeight: 1.7,
      }}>
        Deep dives on RAG systems, agentic AI engineering, and full-stack delivery at scale.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <article
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(59,130,246,0.35)';
                el.style.boxShadow = '0 0 32px rgba(59,130,246,0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.85rem' }}>
                {post.tags.slice(0, 4).map((tag) => (
                  <span key={tag} style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    background: 'rgba(59,130,246,0.12)',
                    color: '#3b82f6',
                    border: '1px solid rgba(59,130,246,0.25)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '0.6rem',
                lineHeight: 1.3,
              }}>
                {post.title}
              </h2>

              <p style={{
                color: 'var(--color-text-secondary)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                marginBottom: '1rem',
                maxWidth: '680px',
              }}>
                {post.description}
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-display)',
              }}>
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span style={{ marginLeft: 'auto', color: '#3b82f6', fontWeight: 600, fontSize: '0.82rem' }}>
                  Read →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
