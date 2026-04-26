import SectionHeader from '@/components/ui/SectionHeader';
import WorkflowSection from '@/components/sections/WorkflowSection';
import SolutionSection from '@/components/sections/SolutionSection';
import DemoCTA from '@/components/sections/DemoCTA';
import styles from './page.module.scss';

export const metadata = {
  title: 'How It Works',
  description:
    'See how ACTA monitors legislation, interprets impact with AI, maps it to your clients, and delivers structured briefings — in seconds.',
};

export default function HowItWorksPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>How It Works</p>
            <h1 className={styles.heroHeadline}>From Law to Action in Seconds</h1>
            <p className={styles.heroSub}>
              ACTA takes a legislative event and transforms it into a structured, client-specific action plan — without requiring the consultant to read a single page of legal text.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className="container">
          <SectionHeader
            label="Core Design Principles"
            headline="Built Around How Tax Consultants Actually Work"
            align="center"
            maxWidth={640}
          />
          <div className={styles.principleGrid}>
            {[
              { title: 'Legal basis always visible', desc: 'Every recommendation includes the exact article reference and official source. Consultants verify before they act.' },
              { title: 'Human consultant in control', desc: 'ACTA surfaces information and flags risks. The consultant reviews, approves, and acts. AI does the research, not the decisions.' },
              { title: 'Client-specific, not generic', desc: 'No generic summaries. Every output is specific to individual clients and their exact situation.' },
              { title: 'Audit trail built in', desc: 'Every action taken in ACTA is logged — when a briefing was reviewed, what was sent to clients, and what was marked complete.' },
            ].map((p) => (
              <div key={p.title} className={styles.principle}>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkflowSection />
      <SolutionSection />

      <DemoCTA
        headline="See ACTA Work With Real Legislation"
        subheadline="Request a demo and walk through a real legislative change with your own client data."
        primaryLabel="Request a Demo"
        secondaryLabel="View Platform"
      />
    </>
  );
}
