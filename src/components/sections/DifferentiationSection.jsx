import SectionHeader from '@/components/ui/SectionHeader';
import ComparisonTable from '@/components/ui/ComparisonTable';
import { differentiationContent } from '@/data/siteContent';
import styles from './DifferentiationSection.module.scss';

export default function DifferentiationSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label={differentiationContent.label}
          headline={differentiationContent.headline}
          subheadline={differentiationContent.subheadline}
          align="center"
          maxWidth={640}
        />
        <div className={styles.table}>
          <ComparisonTable
            capabilities={differentiationContent.capabilities}
            columns={differentiationContent.columns}
          />
        </div>
      </div>
    </section>
  );
}
