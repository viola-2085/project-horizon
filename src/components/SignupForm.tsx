'use client';

import { useState } from 'react';
import styles from '../../styles/SignupForm.module.scss';

type Variant = 'v1' | 'v2' | 'v3';
type Props = { variant: Variant };

type FormValues = {
  fullName: string;
  email: string;
  company?: string;
  role?: string;
  attendance: 'in-person' | 'online';
  notes?: string;
};

function formToObject<T extends Record<string, string>>(form: HTMLFormElement): T {
  const fd = new FormData(form);
  return Object.fromEntries(
      Array.from(fd.entries()).map(([k, v]) => [k, String(v)])
  ) as T;
}

export default function SignupForm({ variant }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const data = formToObject<FormValues>(form);

    setStatus('loading');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({ ...data, variant }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Bad response');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
      <aside className={styles.card} id="signup">
        <h3 className={styles.title}>Reserve your spot</h3>
        <form onSubmit={onSubmit} className={styles.form} aria-describedby="form-note">
          <input name="fullName" placeholder="Full name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="company" placeholder="Company (optional)" />
          <input name="role" placeholder="Role (optional)" />
          <select name="attendance" defaultValue="" required>
            <option value="" disabled>Attendance</option>
            <option value="in-person">In-person</option>
            <option value="online">Online</option>
          </select>
          <textarea name="notes" placeholder="Any accessibility or dietary needs?" rows={3} />
          <button disabled={status === 'loading'} type="submit">
            {status === 'loading' ? 'Submitting…' : 'Sign me up'}
          </button>
          <small id="form-note" className={styles.note}>
            We’ll send a confirmation and calendar invite.
          </small>
          {status === 'success' && <p className={styles.ok}>Thanks! Check your inbox.</p>}
          {status === 'error' && <p className={styles.err}>Something went wrong. Try again.</p>}
        </form>
      </aside>
  );
}
