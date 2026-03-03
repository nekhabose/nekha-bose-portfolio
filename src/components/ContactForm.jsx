// src/components/ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { profile } from '../utils';

const SERVICE_ID  = 'service_c223ey7';
const TEMPLATE_ID = 'template_mkh5c8j';
const USER_ID     = 'Ju2BNeTAbsarFxyw4';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        USER_ID
      )
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

  return (
    <section className={styles.contact}>
      <div className={styles.info}>
        <div className={styles.intro}>
          <p className={styles.kicker}>Contact</p>
          <h3>Open to senior engineering and platform roles.</h3>
          <p>
            Reach out for full-stack, AI platform, cloud architecture, or technical leadership conversations.
          </p>
        </div>

        <div className={styles.infoRow}>
          <FaEnvelope />{' '}
          <a href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <div className={styles.infoRow}>
          <FaPhone /> <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </div>
        <div className={styles.infoRow}>
          <FaLinkedin />{' '}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nekha-bose
          </a>
        </div>
        <div className={styles.infoRow}>
          <FaGithub />{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/nekhabose
          </a>
        </div>
        <div className={styles.infoRow}>
          <FaMapMarkerAlt /> <span>{profile.location}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          aria-label="Your name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          aria-label="Your email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          aria-label="Your message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btnPrimary" disabled={status === 'sending'}>
          {status === 'sending'
            ? 'Sending...'
            : status === 'success'
            ? 'Sent!'
            : 'Send Message'}
        </button>

        {status === 'error' && (
          <p className={styles.error}>
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
