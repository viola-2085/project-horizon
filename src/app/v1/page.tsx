import Image from 'next/image';
import styles from '../../../styles/v1.module.scss';
import SignupForm from '@/components/SignupForm';
import StickyCTA from '@/components/StickyCTA';
import ContentImgLeft from '@/components/ContentImgLeft/ContentImgLeft';
import LeftImg from '../../../public/images/img.png';
import RightImg from '../../../public/images/grow-capital.png';
import LastImg from '../../../public/images/connect.png';
import AOSProvider from '../../components/AOSProvider/AOSProvider';
import SaveTheDate from '../../components/SaveTheDate/SaveTheDate';
import poster from '../../../public/images/img.png';

export default function Page() {
  return (
      <AOSProvider>
        <>
        <section className={styles.hero}>
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
                <h1 data-aos="fade-up">
                  The Art of Growing Capital
                  <span>Property Credit · Income · Risk & Governance</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  A focused evening for sophisticated investors. Pragmatic views on secured
                  lending, inflation-linked income, and disciplined underwriting—
                  with transparent discussion under the Chatham House Rule.
                </p>
                <ul className={styles.bullets}>
                  <li data-aos="fade-up" data-aos-delay="150">A Private Tour of an Exclusive Art Collection</li>
                  <li data-aos="fade-up" data-aos-delay="220">A Keynote from our Executive Chairman</li>
                  <li data-aos="fade-up" data-aos-delay="290">Connect with Fellow Guests</li>
                </ul>
                  <SaveTheDate
                      className={styles.addCalBtn}
                      title="The Art of Growing Capital"
                      details="Please save the date — full details to follow."
                      location="London"
                      startLocalISO="2025-10-16T18:30:00"
                      endLocalISO="2025-10-16T20:30:00"
                  />
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

          <div data-aos="fade-right" data-aos-delay="500">
        <ContentImgLeft
            image={LeftImg}
            imageAlt="Minimal portrait"
            eyebrow="Art, up close"
            title="A Private Tour of an Exclusive Art Collection"
            ctaLabel="Sign up now"
            ctaHref="#"
            align="left"
            indent="56px"
            maxWidth="1200px"
        >
          <p>
            An intimate, guided walk-through of a seldom-seen collection—how pieces live, age and are looked after in a working space. Unhurried, conversational, and designed for close looking.
          </p>
          <p>
            Limited places. Event specifics to follow.
          </p>
        </ContentImgLeft>
          </div>

          <div data-aos="fade-left" data-aos-delay="500">
        <ContentImgLeft
            image={RightImg}
            imageAlt="Minimal portrait"
            eyebrow="Perspective you can act on"
            title="A Keynote from our Executive Chairman"
            ctaLabel="Sign up now"
            ctaHref="#"
            align="right"
            indent="56px"
            maxWidth="1200px"
        >
          <p>
            Hear our Executive Chairman reflect on the year’s inflection points and what they mean for disciplined investors. From the cost of capital to risk and opportunity, he’ll outline the principles shaping our approach and the areas we’re watching next.
          </p>
          <p>
            A short Q&A will follow to explore themes most relevant to you.
          </p>
        </ContentImgLeft>
        </div>

          <div data-aos="fade-right" data-aos-delay="500">
        <ContentImgLeft
            image={LastImg}
            imageAlt="Minimal portrait"
            eyebrow="Conversations worth having"
            title="Connect with Fellow Guests"
            ctaLabel="Sign up now"
            ctaHref="#"
            align="left"
            indent="56px"
            maxWidth="1200px"
        >
          <p>
            Meet peers from finance, property and the arts in a relaxed setting designed for genuine connection. Swap ideas, compare notes and build new relationships over drinks and light refreshments.
          </p>
          <p>
            No hard sell—just good company and useful conversations.
          </p>
        </ContentImgLeft>
          </div>s
        {/*<section className={styles.gallery}>*/}
        {/*  <div className="container">*/}
        {/*    <div className={styles.galleryGrid} role="list">*/}
        {/*      <figure role="listitem">*/}
        {/*        <Image*/}
        {/*            src="/images/miquel-parera-PuDezGdk8u4-unsplash.jpg"*/}
        {/*            alt="Fireside discussion on private credit"*/}
        {/*            width={900}*/}
        {/*            height={560}*/}
        {/*            sizes="(min-width: 900px) 33vw, 100vw"*/}
        {/*        />*/}
        {/*        <figcaption>Panel: disciplined underwriting & covenants</figcaption>*/}
        {/*      </figure>*/}

        {/*      <figure role="listitem">*/}
        {/*        <Image*/}
        {/*            src="/images/miquel-parera-PuDezGdk8u4-unsplash.jpg"*/}
        {/*            alt="Networking between sessions"*/}
        {/*            width={900}*/}
        {/*            height={560}*/}
        {/*            sizes="(min-width: 900px) 33vw, 100vw"*/}
        {/*        />*/}
        {/*        <figcaption>Connections with managers and peers</figcaption>*/}
        {/*      </figure>*/}

        {/*      <figure role="listitem">*/}
        {/*        <Image*/}
        {/*            src="/images/miquel-parera-PuDezGdk8u4-unsplash.jpg"*/}
        {/*            alt="Calm, elegant venue"*/}
        {/*            width={900}*/}
        {/*            height={560}*/}
        {/*            sizes="(min-width: 900px) 33vw, 100vw"*/}
        {/*        />*/}
        {/*        <figcaption>Calm setting, quiet conversations</figcaption>*/}
        {/*      </figure>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section id="agenda" className={styles.agenda}>
          <div className="container">
            <h2>Agenda</h2>
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
      </AOSProvider>
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
