import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteContent';
import styles from './Footer.module.scss';

const footerLinks = [
  {
    group: 'Product',
    items: [
      { label: 'Platform', href: '/product' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Use Cases', href: '/use-cases' },
    ],
  },
  {
    group: 'Company',
    items: [
      { label: 'Vision', href: '/vision' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Request Demo', href: '/demo' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" aria-label="ACTA — Home">
            <Image
              src="/acta_logo.svg"
              alt="ACTA logo"
              width={88}
              height={28}
              className={styles.logo}
            />
          </Link>
          <p className={styles.tagline}>
            Legislative Impact Engine<br />
            for Tax Consultants
          </p>
          <p className={styles.mission}>
            Turn legislative changes into client-specific actions — automatically, accurately, and at scale.
          </p>
        </div>

        <div className={styles.links}>
          {footerLinks.map((group) => (
            <div key={group.group} className={styles.linkGroup}>
              <p className={styles.groupLabel}>{group.group}</p>
              <ul className={styles.groupList}>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.demoCta}>
          <p className={styles.demoText}>Ready to see ACTA in action?</p>
          <Link href="/demo" className={styles.demoBtn}>Request a Demo</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.legal}>
            © {new Date().getFullYear()} ACTA Technologies. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.dot}>·</span>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
            <span className={styles.dot}>·</span>
            <Link href="#" className={styles.legalLink}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
