import SectionHeader from '@/components/ui/SectionHeader';
import { problemContent } from '@/data/siteContent';
import styles from './ProblemSection.module.scss';

export default function ProblemSection() {
  return (
    <section className={[styles.section, 'section--ivory'].join(' ')}>
      <div className="container">
        <SectionHeader
          label={problemContent.label}
          headline={problemContent.headline}
          subheadline={problemContent.subheadline}
          align="center"
          maxWidth={700}
        />

        <div className={styles.cards}>
          {problemContent.cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <span className={styles.icon}>{card.icon}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.insight}>
          <span className={styles.insightIcon}>◈</span>
          <p className={styles.insightText}>{problemContent.insight}</p>
        </div>
      </div>
    </section>
  );
}
