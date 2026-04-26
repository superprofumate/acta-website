import styles from './Badge.module.scss';

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span className={[styles.badge, styles[`badge--${variant}`], className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}
