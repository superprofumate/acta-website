import PricingSection from '@/components/sections/PricingSection';
import DemoCTA from '@/components/sections/DemoCTA';
import { expansionRevenue } from '@/data/pricing';
import { faqContent } from '@/data/siteContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Romanian tax consultants. Start with Starter at €199/month or scale with Growth at €399/month.',
};

export default function PricingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>Pricing</p>
            <h1 className={styles.heroHeadline}>Simple, Transparent Plans</h1>
            <p className={styles.heroSub}>
              No per-user fees. No setup costs. No long-term lock-in. Start with a 14-day free trial on the Growth plan.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />

      <section className={styles.expansion}>
        <div className="container">
          <div className={styles.expansionHeader}>
            <p className={styles.expansionLabel}>Expansion Revenue</p>
            <h2 className={styles.expansionHeadline}>More Value As You Grow</h2>
          </div>
          <div className={styles.expansionGrid}>
            {expansionRevenue.map((item) => (
              <div key={item.title} className={styles.expansionCard}>
                <h3 className={styles.expansionTitle}>{item.title}</h3>
                <p className={styles.expansionDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.faqHeadline}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqContent.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{item.question}</h3>
                <p className={styles.faqA}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoCTA
        headline="Start Your Free Trial"
        subheadline="14 days free on Growth. No credit card required. Cancel anytime."
        primaryLabel="Start Free Trial"
        secondaryLabel="Contact Sales"
      />
    </>
  );
}
