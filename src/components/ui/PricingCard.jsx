import Button from './Button';
import styles from './PricingCard.module.scss';

export default function PricingCard({ plan }) {
  const { name, price, period, description, clientLimit, highlighted, badge, cta, trialNote, features, notIncluded } = plan;

  return (
    <div className={[styles.card, highlighted ? styles['card--highlighted'] : ''].filter(Boolean).join(' ')}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>{price}</span>
          {period && <span className={styles.period}>{period}</span>}
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.limit}>{clientLimit}</p>
      </div>
      <div className={styles.divider} />
      <ul className={styles.features}>
        {features.map((f) => (
          <li key={f} className={styles.feature}>
            <span className={styles.check}>✓</span>
            {f}
          </li>
        ))}
        {notIncluded?.map((f) => (
          <li key={f} className={[styles.feature, styles['feature--disabled']].join(' ')}>
            <span className={styles.cross}>—</span>
            {f}
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <Button
          href="/demo"
          variant={highlighted ? 'primary' : 'secondary'}
          size="md"
          className={styles.cta}
        >
          {cta}
        </Button>
        {trialNote && <p className={styles.trial}>{trialNote}</p>}
      </div>
    </div>
  );
}
