import DemoForm from './DemoForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Request a Demo',
  description:
    'Request a demo of ACTA and see how it works with your actual client portfolio and legislative monitoring workflow.',
};

export default function DemoPage() {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <p className={styles.label}>Request a Demo</p>
        <h1 className={styles.headline}>See ACTA Work With Your Portfolio</h1>
        <p className={styles.sub}>
          Schedule a live demo tailored to your practice. We will walk through a real legislative change and show you exactly how ACTA maps the impact to your client portfolio.
        </p>

        <div className={styles.expectations}>
          <p className={styles.expectationsTitle}>What to expect</p>
          <ul className={styles.expectationsList}>
            <li>30-minute focused walkthrough</li>
            <li>Live demonstration with real legislation</li>
            <li>Portfolio impact simulation</li>
            <li>Q&amp;A with the product team</li>
            <li>Access to trial environment after the call</li>
          </ul>
        </div>

        <div className={styles.quotes}>
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>
              &ldquo;For the first time, I saw exactly which clients were affected by a new law — before I finished my morning coffee.&rdquo;
            </p>
            <footer className={styles.quoteAuthor}>Tax Consultant, Bucharest</footer>
          </blockquote>
        </div>
      </div>

      <div className={styles.right}>
        <DemoForm />
      </div>
    </div>
  );
}
