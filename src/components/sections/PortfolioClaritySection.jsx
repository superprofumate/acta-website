import SectionHeader from '@/components/ui/SectionHeader';
import MetricCard from '@/components/ui/MetricCard';
import { portfolioMetrics } from '@/data/siteContent';
import styles from './PortfolioClaritySection.module.scss';

export default function PortfolioClaritySection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Portfolio Clarity"
          headline="Your Entire Portfolio, Assessed in Real Time"
          subheadline="What used to take half a day of manual review becomes a single prioritized notification."
          align="center"
          maxWidth={640}
        />

        <div className={styles.metrics}>
          {portfolioMetrics.map((m) => (
            <MetricCard
              key={m.label}
              value={m.value}
              label={m.label}
              description={m.description}
              color={m.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
