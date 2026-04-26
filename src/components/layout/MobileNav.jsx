'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.scss';

export default function MobileNav({ items }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <span className={[styles.bar, open ? styles['bar--top-open'] : ''].join(' ')} />
        <span className={[styles.bar, open ? styles['bar--mid-open'] : ''].join(' ')} />
        <span className={[styles.bar, open ? styles['bar--bot-open'] : ''].join(' ')} />
      </button>

      {open && (
        <div id="mobile-nav" className={styles.overlay} role="dialog" aria-modal="true">
          <nav className={styles.nav} aria-label="Mobile navigation">
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.link}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCtaWrapper}>
              <Link
                href="/demo"
                className={styles.mobileCta}
                onClick={() => setOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
