'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { heroContent } from '@/data/siteContent';
import styles from './Hero.module.scss';

const stats = [
  { value: '2 min', label: 'From law published to portfolio impact mapped' },
  { value: '100+', label: 'Legislative sources monitored automatically' },
  { value: '0 hrs', label: 'Manual research per legislative change' },
  { value: '30 min', label: 'To see ACTA work with your own clients' },
];

export default function Hero() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    let frame;
    let x = 0;
    const speed = 0.4;
    const halfW = el.scrollWidth / 2;

    const tick = () => {
      x -= speed;
      if (Math.abs(x) >= halfW) x = 0;
      el.style.transform = `translateX(${x}px)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.label}>{heroContent.label}</p>
        <h1 className={styles.headline}>{heroContent.headline}</h1>
        <p className={styles.sub}>{heroContent.subheadline}</p>

        <div className={styles.ctas}>
          <Button href={heroContent.primaryCta.href} variant="primary" size="lg">
            {heroContent.primaryCta.label}
          </Button>
          <Button href={heroContent.secondaryCta.href} variant="outline-white" size="lg">
            {heroContent.secondaryCta.label}
          </Button>
        </div>

        <div className={styles.trust}>
          <span>✓ GDPR compliant</span>
          <span>✓ EU servers</span>
          <span>✓ No credit card for demo</span>
        </div>
      </div>

      {/* Scrolling stats ticker */}
      <div className={styles.tickerWrap} aria-hidden="true">
        <div className={styles.tickerTrack} ref={tickerRef}>
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className={styles.tickerItem}>
              <span className={styles.tickerValue}>{s.value}</span>
              <span className={styles.tickerLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
