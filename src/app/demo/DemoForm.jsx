'use client';

import { useState } from 'react';
import styles from './DemoForm.module.scss';

const clientOptions = [
  '1–10 clients',
  '11–30 clients',
  '31–60 clients',
  '61–100 clients',
  '100+ clients',
];

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    clients: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successTitle}>Demo Requested</h2>
        <p className={styles.successText}>
          Thank you, {form.name}. We will be in touch within 24 hours to schedule your demo.
        </p>
        <p className={styles.successSub}>Check your inbox at {form.email}.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.formTitle}>Request Your Demo</h2>
      <p className={styles.formSub}>Free 30-minute walkthrough. No commitment required.</p>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Dr. Ana Ionescu"
          className={styles.input}
          autoComplete="name"
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="email">Work Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="ana@consultfirm.ro"
          className={styles.input}
          autoComplete="email"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="company">Company / Practice</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Ionescu Consulting SRL"
            className={styles.input}
            autoComplete="organization"
          />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="role">Your Role</label>
          <input
            id="role"
            name="role"
            type="text"
            value={form.role}
            onChange={handleChange}
            placeholder="Tax Consultant"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="clients">Clients Managed</label>
        <select
          id="clients"
          name="clients"
          value={form.clients}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="" disabled>Select range</option>
          {clientOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="message">
          Anything specific you want to see? <span className={styles.optional}>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. How does ACTA handle micro-company threshold changes?"
          className={styles.textarea}
        />
      </div>

      <button type="submit" className={styles.submit} disabled={loading || !form.name || !form.email}>
        {loading ? 'Sending request…' : 'Request Demo'}
      </button>

      <p className={styles.privacy}>
        We respect your privacy. No spam, no sharing of your data with third parties.
      </p>
    </form>
  );
}
