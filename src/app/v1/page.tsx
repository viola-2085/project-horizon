import Image from 'next/image';
import styles from '../../../styles/v1.module.scss';
import SignupForm from '@/components/SignupForm';
import StickyCTA from '@/components/StickyCTA';

export default function Page() {
  return (
      <>
        <section className={styles.hero}>
          {/* Background hero image */}
          <div className={styles.media} aria-hidden="true">
            <Image
                src="/images/miquel-parera-PuDezGdk8u4-unsplash.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 900px) 1200px, 100vw"
                style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.overlay} />

          <div className="container">
            <div className={styles.grid}>
              <div className={styles.copy}>
                <h1>
                  Private Markets Briefing 2025
                  <span>Property Credit · Income · Risk & Governance</span>
                </h1>
                <p>
                  A focused half-day for sophisticated investors. Pragmatic views on secured
                  lending, inflation-linked income, and disciplined underwriting—
                  with transparent discussion under the Chatham House Rule.
                </p>
                <ul className={styles.bullets}>
                  <li>Macro & credit outlook for H2/H3</li>
                  <li>Due diligence, risk controls & reporting</li>
                  <li>Case studies from active managers</li>
                </ul>
              </div>

              <div className={styles.formCol}>
                <SignupForm variant="v1" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className="container">
            <div className={styles.kards}>
              <article>
                <h3>Who attends</h3>
                <p>HNWI, family offices, and private client advisers.</p>
              </article>
              <article>
                <h3>Format</h3>
                <p>Keynotes, panel, and concise Q&A. No sales theatre.</p>
              </article>
              <article>
                <h3>Outcome</h3>
                <p>Clear frameworks for allocation and risk management.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Discreet image gallery */}
        <section className={styles.gallery}>
          <div className="container">
            <div className={styles.galleryGrid} role="list">
              <figure role="listitem">
                <Image
                    src="/images/fireside-chat.jpg"
                    alt="Fireside discussion on private credit"
                    width={900}
                    height={560}
                    sizes="(min-width: 900px) 33vw, 100vw"
                />
                <figcaption>Panel: disciplined underwriting & covenants</figcaption>
              </figure>

              <figure role="listitem">
                <Image
                    src="/images/networking.jpg"
                    alt="Networking between sessions"
                    width={900}
                    height={560}
                    sizes="(min-width: 900px) 33vw, 100vw"
                />
                <figcaption>Connections with managers and peers</figcaption>
              </figure>

              <figure role="listitem">
                <Image
                    src="/images/venue-detail.jpg"
                    alt="Calm, elegant venue"
                    width={900}
                    height={560}
                    sizes="(min-width: 900px) 33vw, 100vw"
                />
                <figcaption>Calm setting, quiet conversations</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="agenda" className={styles.agenda}>
          <div className="container">
            <h2>Programme</h2>
            <div className={styles.timeline}>
              <div><strong>08:30</strong> Arrival & coffee</div>
              <div><strong>09:00</strong> Outlook: rates, spreads, and real assets</div>
              <div><strong>10:15</strong> Panel: secured income & portfolio resilience</div>
              <div><strong>11:30</strong> Case studies & Q&A</div>
            </div>
          </div>
        </section>

        <StickyCTA />
      </>
  );
}

// import styles from '../../../styles/v1.module.scss';
// import SignupForm from '@/components/SignupForm';
// import StickyCTA from '@/components/StickyCTA';
//
// export default function Page() {
//   return (
//     <>
//       <section className={styles.hero}>
//         <div className="container">
//           <div className={styles.grid}>
//             <div className={styles.copy}>
//               <h1>
//                 London Tech Night 2025
//                 <span>— Meet. Learn. Build.</span>
//               </h1>
//               <p>
//                 Join 300+ engineers and founders for talks, live demos, and hands-on labs.
//                 Food, swag, and a rooftop mixer included.
//               </p>
//               <ul className={styles.bullets}>
//                 <li>Keynotes from FAANG & fintech</li>
//                 <li>Three tracks: Frontend · Backend · AI</li>
//                 <li>Certificates for workshop attendees</li>
//               </ul>
//             </div>
//             <div className={styles.formCol}>
//               <SignupForm variant="v1" />
//             </div>
//           </div>
//         </div>
//       </section>
//
//       <section id="about" className={styles.about}>
//         <div className="container">
//           <div className={styles.kards}>
//             <article>
//               <h3>Who it’s for</h3>
//               <p>Senior SWE, tech leads, and ambitious juniors.</p>
//             </article>
//             <article>
//               <h3>When & where</h3>
//               <p>Oct 12 · 10:00–20:00 · Shoreditch, London</p>
//             </article>
//             <article>
//               <h3>What you’ll get</h3>
//               <p>Real-world patterns, code labs, and networking.</p>
//             </article>
//           </div>
//         </div>
//       </section>
//
//       <section id="agenda" className={styles.agenda}>
//         <div className="container">
//           <h2>Agenda snapshot</h2>
//           <div className={styles.timeline}>
//             <div><strong>10:00</strong> Check-in & coffee</div>
//             <div><strong>11:00</strong> Keynote — Shipping AI features safely</div>
//             <div><strong>14:00</strong> Workshops — React, Go, Prompting</div>
//             <div><strong>18:00</strong> Rooftop mixer & DJ</div>
//           </div>
//         </div>
//       </section>
//
//       <StickyCTA />
//     </>
//   );
// }
