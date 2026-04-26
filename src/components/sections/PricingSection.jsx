import SectionHeader from '@/components/ui/SectionHeader';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/data/pricing';
import styles from './PricingSection.module.scss';

export default function PricingSection({ compact = false }) {
  const plans = compact ? pricingPlans.slice(0, 3) : pricingPlans;

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Pricing"
          headline="Simple, Transparent Plans"
          subheadline="No per-user fees. No setup costs. Cancel anytime."
          align="center"
          maxWidth={560}
        />

        <div className={styles.cards}>
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
