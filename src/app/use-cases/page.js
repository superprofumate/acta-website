import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import DemoCTA from '@/components/sections/DemoCTA';
import { useCases } from '@/data/useCases';
import styles from './page.module.scss';

export const metadata = {
  title: 'Use Cases',
  description:
    'See how ACTA helps tax consultants detect compliance risks, monitor deadlines, identify tax optimization opportunities, and communicate proactively with clients.',
};

export default function UseCasesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>Use Cases</p>
          <h1 className={styles.heroHeadline}>Every Scenario. One Platform.</h1>
          <p className={styles.heroSub}>
            ACTA is built around the real daily workflows of tax consultants — from compliance risk detection to client communication drafting.
          </p>
        </div>
      </section>

      <section className={styles.cases}>
        <div className="container">
          <div className={styles.grid}>
            {useCases.map((uc, i) => (
              <article key={uc.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{uc.icon}</span>
                  <h2 className={styles.cardTitle}>{uc.title}</h2>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.field}>
                    <p className={styles.fieldLabel}>The pain</p>
                    <p className={styles.fieldText}>{uc.pain}</p>
                  </div>
                  <div className={styles.field}>
                    <p className={styles.fieldLabel}>What ACTA detects</p>
                    <p className={styles.fieldText}>{uc.detects}</p>
                  </div>
                  <div className={styles.field}>
                    <p className={styles.fieldLabel}>What you receive</p>
                    <p className={styles.fieldText}>{uc.receives}</p>
                  </div>
                  <div className={styles.field}>
                    <p className={styles.fieldLabel}>Why it matters</p>
                    <p className={styles.fieldText}>{uc.matters}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  {uc.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DemoCTA
        headline="Which Use Case Describes Your Day?"
        subheadline="Request a demo and see ACTA handle your most common scenarios live."
        primaryLabel="Request a Demo"
        secondaryLabel="See Platform"
      />
    </>
  );
}
