import VisionSection from '@/components/sections/VisionSection';
import DemoCTA from '@/components/sections/DemoCTA';
import { marketContent } from '@/data/siteContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Vision',
  description:
    'ACTA is building the regulatory intelligence layer for professional firms — starting with Romanian tax law and expanding to full EU regulatory coverage.',
};

export default function VisionPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>Vision & Market</p>
            <h1 className={styles.heroHeadline}>
              Building the Regulatory Intelligence Layer for Professional Firms
            </h1>
            <p className={styles.heroSub}>
              ACTA starts with Romanian tax law. The vision extends to every regulatory domain where professional advisors carry the burden of translating legal complexity into client decisions.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.market}>
        <div className="container">
          <p className={styles.sectionLabel}>{marketContent.label}</p>
          <h2 className={styles.sectionHeadline}>{marketContent.headline}</h2>

          <div className={styles.tamGrid}>
            {[marketContent.tam, marketContent.sam, marketContent.som].map((m) => (
              <div key={m.label} className={styles.tamCard}>
                <span className={styles.tamValue}>{m.value}</span>
                <span className={styles.tamLabel}>{m.label}</span>
                <p className={styles.tamDesc}>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whyNow}>
        <div className="container">
          <p className={styles.sectionLabel}>Why Now</p>
          <h2 className={styles.sectionHeadline}>The Market Conditions Are Perfect</h2>
          <div className={styles.whyGrid}>
            {marketContent.whyNow.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.traction}>
        <div className="container">
          <div className={styles.tractionInner}>
            <div className={styles.tractionContent}>
              <p className={styles.sectionLabel}>Traction</p>
              <h2 className={styles.sectionHeadline}>Validated With Real Consultants</h2>
              <ul className={styles.tractionList}>
                {marketContent.traction.map((t) => (
                  <li key={t} className={styles.tractionItem}>
                    <span className={styles.tractionCheck}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.moatContent}>
              <p className={styles.sectionLabel}>Competitive Moat</p>
              <h2 className={styles.sectionHeadline}>Defensible From Day One</h2>
              <div className={styles.moatGrid}>
                {marketContent.moat.map((m) => (
                  <div key={m.title} className={styles.moatCard}>
                    <h3 className={styles.moatTitle}>{m.title}</h3>
                    <p className={styles.moatDesc}>{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisionSection />

      <DemoCTA
        headline="Join ACTA Early"
        subheadline="Be among the first consultants to turn legislative complexity into competitive advantage."
        primaryLabel="Request a Demo"
        secondaryLabel="View Pricing"
        dark
      />
    </>
  );
}
