import styles from './SectionHeader.module.scss';

export default function SectionHeader({
  label,
  headline,
  subheadline,
  align = 'center',
  dark = false,
  maxWidth,
}) {
  return (
    <div
      className={[styles.header, styles[`header--${align}`], dark ? styles['header--dark'] : ''].filter(Boolean).join(' ')}
      style={maxWidth ? { maxWidth, marginInline: align === 'center' ? 'auto' : undefined } : {}}
    >
      {label && <p className={styles.label}>{label}</p>}
      <h2 className={styles.headline}>{headline}</h2>
      {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
    </div>
  );
}
