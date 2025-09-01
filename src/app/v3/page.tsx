import styles from '../../../styles/v3.module.scss';
import SignupForm from '@/components/SignupForm';
import StickyCTA from '@/components/StickyCTA';

export default function Page() {
  return (
    <>
      <section className={styles.wrap}>
        <div className="container">
          <div className={styles.layout}>
            <article className={styles.story}>
              <h1>Build production-grade features in one day</h1>
              <p>
                This is a deep-dive for engineers who want to make pragmatic,
                senior-level calls under real constraints: users, budgets, and time.
              </p>

              <section id="about">
                <h2>What you’ll learn</h2>
                <ul>
                  <li>Designing resilient frontends (hooks, state, async boundaries)</li>
                  <li>API contracts that age well</li>
                  <li>Security and error budgets you can defend</li>
                </ul>
              </section>

              <section id="agenda">
                <h2>Program</h2>
                <ol>
                  <li>Talks · 10:00–12:00</li>
                  <li>Labs · 13:30–17:30</li>
                  <li>Panel + mixer · 18:00–20:00</li>
                </ol>
              </section>
            </article>

            <div className={styles.rail}>
              <SignupForm variant="v3" />
            </div>
          </div>
        </div>
      </section>

      <StickyCTA />
    </>
  );
}
