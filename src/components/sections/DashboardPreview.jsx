import Badge from '@/components/ui/Badge';
import styles from './DashboardPreview.module.scss';

const sidebarItems = [
  { label: 'Dashboard', active: true },
  { label: 'Legislative Feed' },
  { label: 'Clients' },
  { label: 'Impact Briefings' },
  { label: 'Deadlines' },
  { label: 'Notifications' },
  { label: 'Settings' },
];

const feedItems = [
  {
    title: 'OUG 115/2024 — Fiscal Code Micro-company Threshold',
    source: 'Monitorul Oficial',
    date: 'Dec 29, 2024',
    risk: 'high',
    riskLabel: 'HIGH',
    clients: 8,
  },
  {
    title: 'Legea 296/2023 — VAT Rate Changes',
    source: 'Monitorul Oficial',
    date: 'Dec 26, 2024',
    risk: 'medium',
    riskLabel: 'MEDIUM',
    clients: 5,
  },
  {
    title: 'ANAF Order 338/2024 — e-Factura Extension',
    source: 'ANAF',
    date: 'Dec 22, 2024',
    risk: 'low',
    riskLabel: 'LOW',
    clients: 12,
  },
];

export default function DashboardPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Product Dashboard</p>
          <h2 className={styles.headline}>A Clear View of Your Entire Portfolio</h2>
          <p className={styles.subheadline}>
            One screen. Every legislative change. Every affected client. Every required action.
          </p>
        </div>

        <div className={styles.frame}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarLogo}>ACTA</div>
            <nav className={styles.sidebarNav}>
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={[styles.navItem, item.active ? styles['navItem--active'] : ''].join(' ')}
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          <div className={styles.main}>
            <div className={styles.topbar}>
              <p className={styles.greeting}>Good morning, Dr. Ionescu. <span className={styles.greetingNote}>3 new changes since yesterday.</span></p>
              <div className={styles.topbarRight}>
                <span className={styles.notifBell}>🔔</span>
                <span className={styles.avatar}>DI</span>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.kpiRow}>
                {[
                  { value: '24', label: 'New Changes', color: 'medium' },
                  { value: '17', label: 'Clients Affected', color: 'high' },
                  { value: '5', label: 'Urgent Actions', color: 'urgent' },
                  { value: '9', label: 'Opportunities', color: 'low' },
                ].map((kpi) => (
                  <div key={kpi.label} className={styles.kpi}>
                    <span className={[styles.kpiValue, styles[`kpiValue--${kpi.color}`]].join(' ')}>{kpi.value}</span>
                    <span className={styles.kpiLabel}>{kpi.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.feedSection}>
                <div className={styles.feedHeader}>
                  <span className={styles.feedTitle}>Recent Legislative Changes</span>
                  <span className={styles.feedLink}>View all →</span>
                </div>
                {feedItems.map((item) => (
                  <div key={item.title} className={styles.feedItem}>
                    <div className={styles.feedItemContent}>
                      <p className={styles.feedItemTitle}>{item.title}</p>
                      <p className={styles.feedItemMeta}>{item.source} · {item.date} · {item.clients} clients affected</p>
                    </div>
                    <Badge variant={item.risk}>{item.riskLabel}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
