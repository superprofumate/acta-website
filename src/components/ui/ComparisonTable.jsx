import styles from './ComparisonTable.module.scss';

const CHECK = '✓';
const CROSS = '—';

export default function ComparisonTable({ capabilities, columns }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.capCol}>Capability</th>
            {columns.map((col) => (
              <th
                key={col}
                className={[styles.col, col === 'ACTA' ? styles['col--acta'] : ''].join(' ')}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {capabilities.map((row) => (
            <tr key={row.label} className={styles.row}>
              <td className={styles.capability}>{row.label}</td>
              <td className={[styles.cell, row.portals ? styles['cell--yes'] : styles['cell--no']].join(' ')}>
                {row.portals ? CHECK : CROSS}
              </td>
              <td className={[styles.cell, row.newsletters ? styles['cell--yes'] : styles['cell--no']].join(' ')}>
                {row.newsletters ? CHECK : CROSS}
              </td>
              <td className={[styles.cell, row.software ? styles['cell--yes'] : styles['cell--no']].join(' ')}>
                {row.software ? CHECK : CROSS}
              </td>
              <td className={[styles.cell, styles['cell--acta'], row.acta ? styles['cell--yes'] : styles['cell--no']].join(' ')}>
                {row.acta ? CHECK : CROSS}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
