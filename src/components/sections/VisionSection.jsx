import SectionHeader from '@/components/ui/SectionHeader';
import { visionContent } from '@/data/siteContent';
import styles from './VisionSection.module.scss';

export default function VisionSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label={visionContent.label}
          headline={visionContent.headline}
          subheadline={visionContent.subheadline}
          align="center"
          dark
          maxWidth={680}
        />

        <div className={styles.stages}>
          {visionContent.stages.map((stage) => (
            <div key={stage.phase} className={[styles.stage, stage.active ? styles['stage--active'] : ''].join(' ')}>
              <span className={styles.phase}>{stage.phase}</span>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDesc}>{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
