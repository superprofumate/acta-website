import Button from '@/components/ui/Button';
import styles from './DemoCTA.module.scss';

export default function DemoCTA({
  headline = 'Ready to See ACTA in Action?',
  subheadline = 'Join tax consultants using ACTA to turn legislative complexity into competitive advantage.',
  primaryLabel = 'Request a Demo',
  secondaryLabel = 'View Platform',
  dark = false,
}) {
  return (
    <section className={[styles.section, dark ? styles['section--dark'] : ''].join(' ')}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.subheadline}>{subheadline}</p>
          <div className={styles.ctas}>
            <Button href="/demo" variant={dark ? 'primary' : 'primary'} size="lg">
              {primaryLabel}
            </Button>
            <Button href="/product" variant={dark ? 'outline-white' : 'secondary'} size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
