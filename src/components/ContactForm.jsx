// src/components/ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const SERVICE_ID  = 'service_c223ey7';
const TEMPLATE_ID = 'template_mkh5c8j';
const USER_ID     = 'Ju2BNeTAbsarFxyw4';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log('Updated form state:', form);
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
        (data) => {
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
        <div>
          <FaEnvelope />{' '}
          <a href="mailto:nekhabose1998@gmail.com">
            nekhabose1998@gmail.com
          </a>
        </div>
        <div>
          <FaPhone /> <a href="tel:+13128749702">+1 312-874-9702</a>
        </div>
        <div>
          <FaLinkedin />{' '}
          <a
            href="https://linkedin.com/in/nekha-bose"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nekha-bose
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={status === 'sending'}>
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
