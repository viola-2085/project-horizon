import styles from '../../../styles/v2.module.scss';
import SignupForm from '@/components/SignupForm';
import StickyCTA from '@/components/StickyCTA';

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.text}>
                <h1>Scale Systems. Grow Impact.</h1>
                <p>One intense day on production-ready patterns for modern teams.</p>
              </div>
              <div className={styles.formWrap}>
                <SignupForm variant="v2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.features}>
        <div className="container">
          <div className={styles.grid}>
            <div><h3>Hands-on labs</h3><p>Ship code, not slides.</p></div>
            <div><h3>Peer reviews</h3><p>Get real feedback on your stack.</p></div>
            <div><h3>Hiring hour</h3><p>Meet teams actively recruiting.</p></div>
          </div>
        </div>
      </section>

      <StickyCTA />
    </>
  );
}
