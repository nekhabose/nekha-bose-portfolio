import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <Link
        to="/blog"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '2.5rem',
          transition: 'color 0.15s',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#3b82f6')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)')}
      >
        ← All posts
      </Link>

      <div style={{ maxWidth: '720px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {post.tags.map((tag) => (
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

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          lineHeight: 1.2,
          marginBottom: '1rem',
        }}>
          {post.title}
        </h1>

        <div style={{
          display: 'flex',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-display)',
          marginBottom: '2.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <span>Nekha Bose</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div
          style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: '1.02rem' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <style>{`
        .section-container h2 { font-size: 1.35rem; font-weight: 700; color: var(--color-text-primary); margin: 2.25rem 0 0.85rem; font-family: var(--font-display); }
        .section-container p  { margin-bottom: 1.1rem; }
        .section-container ul { padding-left: 1.5rem; margin-bottom: 1.1rem; display: flex; flex-direction: column; gap: 0.45rem; }
        .section-container li { line-height: 1.7; }
        .section-container strong { color: var(--color-text-primary); font-weight: 600; }
        .section-container code { font-family: monospace; font-size: 0.88em; background: rgba(255,255,255,0.06); padding: 0.1em 0.4em; border-radius: 4px; color: #3b82f6; }
      `}</style>
    </div>
  );
};

export default BlogPost;
