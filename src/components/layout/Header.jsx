import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteContent';
import Button from '@/components/ui/Button';
import MobileNav from './MobileNav';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="ACTA — Home">
          <Image
            src="/acta_logo.svg"
            alt="ACTA logo"
            width={96}
            height={32}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.ctas}>
          <Button href="/demo" variant="primary" size="sm">
            Request Demo
          </Button>
        </div>

        <MobileNav items={siteConfig.nav} />
      </div>
    </header>
  );
}
