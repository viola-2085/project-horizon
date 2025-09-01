'use client';

import styles from '../../styles/StickyCTA.module.scss';

export default function StickyCTA() {
  const scrollToForm = () => {
    const el = document.getElementById('signup');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <div className={styles.bar} role="region" aria-label="Signup quick access">
      <button onClick={scrollToForm} aria-label="Open signup form">Sign up</button>
    </div>
  );
}
