import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { profile } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICE_ID  = 'service_c223ey7';
const TEMPLATE_ID = 'template_mkh5c8j';
const USER_ID     = 'Ju2BNeTAbsarFxyw4';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.9rem 1.125rem',
  borderRadius: '0.75rem',
  backgroundColor: 'var(--color-elevated)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: 'var(--color-text-primary)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  display: 'block',
};

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useScrollReveal(containerRef as React.RefObject<HTMLElement>, '[data-contact-reveal]', { stagger: 0.12 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, { name: form.name, email: form.email, message: form.message }, USER_ID)
      .then(
        () => {
          setStatus('success');
          setForm({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('EmailJS error:', err);
          setStatus('error');
        }
      );
  };

  const contactRows = [
    { icon: <FaEnvelope size={13} />, label: profile.email,   href: `mailto:${profile.email}`,  external: false },
    { icon: <FaPhone    size={13} />, label: profile.phone,   href: `tel:${profile.phone}`,     external: false },
    { icon: <FaLinkedin size={13} />, label: 'linkedin.com/in/nekha-bose', href: profile.linkedin, external: true  },
    { icon: <FaGithub   size={13} />, label: 'github.com/nekhabose',       href: profile.github,   external: true  },
    { icon: <FaMapMarkerAlt size={13} />, label: profile.location, href: undefined, external: false },
  ];

  return (
    <div ref={containerRef}>
      <span className="eyebrow">Contact</span>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(2rem, 6vw, 5rem)',
        alignItems: 'start',
      }} className="contact-grid">

        {/* Info column */}
        <div data-contact-reveal style={{ opacity: 0 }}>
          <h2 style={{
            fontSize: 'var(--text-section)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            Open to senior engineering and platform roles.
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Reach out for full-stack, AI platform, cloud architecture, or technical leadership conversations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactRows.map(({ icon, label, href, external }) => {
              const content = (
                <>
                  <span style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-elevated)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                    transition: 'border-color 0.2s',
                  }}>
                    {icon}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>
                    {label}
                  </span>
                </>
              );

              const rowStyle: React.CSSProperties = {
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                textDecoration: 'none',
              };

              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  style={rowStyle}
                  onMouseEnter={(e) => {
                    const span = e.currentTarget.querySelector('span:last-child') as HTMLElement;
                    if (span) span.style.color = 'var(--color-text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    const span = e.currentTarget.querySelector('span:last-child') as HTMLElement;
                    if (span) span.style.color = 'var(--color-text-secondary)';
                  }}
                >
                  {content}
                </a>
              ) : (
                <div key={label} style={rowStyle}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* Form column */}
        <div data-contact-reveal style={{ opacity: 0 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              name="name"
              aria-label="Your name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(59,130,246,0.5)';
                e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <input
              type="email"
              name="email"
              aria-label="Your email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(59,130,246,0.5)';
                e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <textarea
              name="message"
              aria-label="Your message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(59,130,246,0.5)';
                e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
              style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p style={{ fontSize: '0.85rem', color: '#f87171' }}>
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
