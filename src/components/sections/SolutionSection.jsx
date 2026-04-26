import SectionHeader from '@/components/ui/SectionHeader';
import { solutionContent } from '@/data/siteContent';
import styles from './SolutionSection.module.scss';

export default function SolutionSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label={solutionContent.label}
          headline={solutionContent.headline}
          subheadline={solutionContent.subheadline}
          align="center"
          maxWidth={700}
        />

        <div className={styles.steps}>
          {solutionContent.steps.map((step) => (
            <div
              key={step.number}
              className={[styles.step, step.highlighted ? styles['step--highlighted'] : ''].join(' ')}
            >
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>{step.number}</span>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              <span className={styles.stepTag}>{step.tag}</span>
            </div>
          ))}
        </div>

        <p className={styles.closing}>
          From passive awareness to active client guidance — automatically.
        </p>
      </div>
    </section>
  );
}
