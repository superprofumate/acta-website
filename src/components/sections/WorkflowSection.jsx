import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { workflowContent } from '@/data/siteContent';
import styles from './WorkflowSection.module.scss';

export default function WorkflowSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label={workflowContent.label}
          headline={workflowContent.headline}
          subheadline={workflowContent.subheadline}
          align="center"
          dark
          maxWidth={640}
        />

        <div className={styles.steps}>
          {workflowContent.steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNum}>{step.number}</div>
              {i < workflowContent.steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.briefing}>
          <div className={styles.briefingHeader}>
            <span className={styles.briefingIcon}>📋</span>
            <h3 className={styles.briefingTitle}>{workflowContent.briefingExample.title}</h3>
            <Badge variant="high">{workflowContent.briefingExample.risk}</Badge>
          </div>
          <div className={styles.briefingGrid}>
            {[
              { label: 'Source', value: workflowContent.briefingExample.source },
              { label: 'AI Interpretation', value: workflowContent.briefingExample.interpretation },
              { label: 'Affected Clients', value: workflowContent.briefingExample.affected },
              { label: 'Required Action', value: workflowContent.briefingExample.action },
              { label: 'Deadline', value: workflowContent.briefingExample.deadline },
              { label: 'Legal Reference', value: workflowContent.briefingExample.legalRef },
            ].map((row) => (
              <div key={row.label} className={styles.briefingRow}>
                <span className={styles.briefingLabel}>{row.label}</span>
                <span className={styles.briefingValue}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
