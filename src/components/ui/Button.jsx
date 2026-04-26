import Link from 'next/link';
import styles from './Button.module.scss';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const cls = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
