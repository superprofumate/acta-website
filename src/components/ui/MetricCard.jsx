import styles from './MetricCard.module.scss';

export default function MetricCard({ value, label, description, color = 'default', dark = false }) {
  return (
    <div className={[styles.card, styles[`card--${color}`], dark ? styles['card--dark'] : ''].filter(Boolean).join(' ')}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
