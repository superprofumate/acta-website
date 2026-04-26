import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import DemoCTA from '@/components/sections/DemoCTA';
import styles from './page.module.scss';

export const metadata = {
  title: 'Platform',
  description:
    'ACTA is not a summary tool. It is a decision engine that maps every legislative change to every client in your portfolio and delivers specific, actionable guidance.',
};

function ProductFeature({ label, title, description, reverse, visual }) {
  return (
    <div className={[styles.feature, reverse ? styles['feature--reverse'] : ''].join(' ')}>
      <div className={styles.featureContent}>
        <p className={styles.featureLabel}>{label}</p>
        <h2 className={styles.featureTitle}>{title}</h2>
        <p className={styles.featureDesc}>{description}</p>
      </div>
      <div className={styles.featureVisual}>{visual}</div>
    </div>
  );
}

function ImpactBriefingCard() {
  return (
    <div className={styles.briefingCard}>
      <div className={styles.briefingCardHeader}>
        <span className={styles.briefingCardTitle}>Impact Briefing</span>
        <Badge variant="high">HIGH RISK</Badge>
      </div>
      {[
        { label: 'Source', value: 'OUG 115/2024 · Monitorul Oficial' },
        { label: 'AI Summary', value: 'Micro-company threshold reduced to €250,000. 8 clients will lose micro-company status on Jan 1, 2025.' },
        { label: 'Affected Clients', value: '8 clients · Must change regime' },
        { label: 'Required Action', value: 'Notify clients, prepare regime transition documentation' },
        { label: 'Deadline', value: 'January 1, 2025 · 18 days remaining' },
        { label: 'Legal Reference', value: 'Art. 47 alin. (1) lit. c) Codul Fiscal' },
      ].map((row) => (
        <div key={row.label} className={styles.briefingRow}>
          <span className={styles.briefingRowLabel}>{row.label}</span>
          <span className={styles.briefingRowValue}>{row.value}</span>
        </div>
      ))}
      <div className={styles.briefingCardActions}>
        <button className={styles.briefingBtn}>Export PDF</button>
        <button className={styles.briefingBtn}>Draft Client Message</button>
        <button className={[styles.briefingBtn, styles['briefingBtn--primary']].join(' ')}>Mark Reviewed</button>
      </div>
    </div>
  );
}

function ClientTableVisual() {
  const clients = [
    { name: 'Sigma Consulting SRL', revenue: '€267,000', regime: 'Micro-company', risk: 'high', action: 'Regime change required' },
    { name: 'Alpha Tech SRL', revenue: '€289,000', regime: 'Micro-company', risk: 'high', action: 'Regime change required' },
    { name: 'Beta Retail SRL', revenue: '€198,000', regime: 'Micro-company', risk: 'low', action: 'No action needed' },
    { name: 'Delta Services SRL', revenue: '€256,000', regime: 'Micro-company', risk: 'medium', action: 'Review recommended' },
  ];
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableCardHeader}>
        <span>Client Portfolio — OUG 115/2024 Impact</span>
        <Badge variant="accent">8 Affected</Badge>
      </div>
      <div className={styles.tableCardBody}>
        {clients.map((c) => (
          <div key={c.name} className={styles.tableRow}>
            <div>
              <p className={styles.clientName}>{c.name}</p>
              <p className={styles.clientRevenue}>{c.revenue} revenue</p>
            </div>
            <div className={styles.tableRight}>
              <span className={styles.clientAction}>{c.action}</span>
              <span className={[styles.riskPill, styles[`riskPill--${c.risk}`]].join(' ')}>{c.risk.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <Badge variant="accent">Platform Overview</Badge>
            <h1 className={styles.heroHeadline}>
              Not a Summary Tool.<br />A Decision Engine.
            </h1>
            <p className={styles.heroSubheadline}>
              ACTA maps every legislative change to every client in your portfolio — and delivers specific, actionable guidance with the legal basis always visible.
            </p>
            <div className={styles.heroCtas}>
              <Button href="/demo" variant="primary" size="lg">Request a Demo</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">How It Works</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <ProductFeature
            label="Impact Briefing"
            title="Every Legislative Change, Fully Briefed"
            description="ACTA generates a complete briefing for every regulation: source, AI interpretation, affected clients, required actions, legal deadline, and risk level — all in one view. The legal reference is always visible, always verifiable."
            visual={<ImpactBriefingCard />}
          />
          <ProductFeature
            label="Client Portfolio Mapping"
            title="Who Is Affected. Exactly. Automatically."
            description="ACTA cross-references every new law with every client profile in your portfolio. Risk is scored automatically. You see which clients require urgent action, which require review, and which have optimization opportunities — without reading a single legal document manually."
            reverse
            visual={<ClientTableVisual />}
          />
          <ProductFeature
            label="Action Checklist"
            title="Clear Actions. No Ambiguity."
            description="Every impact briefing includes a structured checklist: what to do, for whom, by when, and on what legal basis. Consultants can mark items as reviewed, assign actions, and track completion status across the entire portfolio."
            visual={
              <div className={styles.checklistCard}>
                <div className={styles.checklistHeader}>Action Checklist — OUG 115/2024</div>
                {[
                  { done: true, text: 'Identify all clients above new threshold', tag: 'Done' },
                  { done: false, text: 'Notify Sigma Consulting SRL — regime change', tag: 'Pending', urgent: true },
                  { done: false, text: 'Notify Alpha Tech SRL — regime change', tag: 'Pending', urgent: true },
                  { done: false, text: 'Prepare IRC standard regime documentation', tag: 'In Progress' },
                  { done: false, text: 'Schedule review call with affected clients', tag: 'Pending' },
                ].map((item, i) => (
                  <div key={i} className={[styles.checkItem, item.done ? styles['checkItem--done'] : '', item.urgent ? styles['checkItem--urgent'] : ''].filter(Boolean).join(' ')}>
                    <span className={styles.checkMark}>{item.done ? '✓' : '○'}</span>
                    <span className={styles.checkText}>{item.text}</span>
                    <span className={styles.checkTag}>{item.tag}</span>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </section>

      <DemoCTA
        headline="See the Platform Live"
        subheadline="Request a demo and see how ACTA works with your actual client portfolio."
        primaryLabel="Request a Demo"
        secondaryLabel="View Pricing"
      />
    </>
  );
}
