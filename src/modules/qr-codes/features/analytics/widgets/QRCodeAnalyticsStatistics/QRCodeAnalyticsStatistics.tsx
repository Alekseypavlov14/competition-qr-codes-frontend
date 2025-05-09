import { useQRCodeAnalytics } from '../../hooks/use-qr-code-analytics'
import styles from './QRCodeAnalyticsStatistics.module.css'

export function QRCodeAnalyticsStatistics() {
  const { todayScans, yesterdayScans, lastWeekScans, lastMonthScans } = useQRCodeAnalytics()

  return (
    <div className={styles.QRCodeAnalyticsStatistics}>
      <h4 className={styles.Title}>Statistics</h4>

      <div className={styles.Statistics}>
        <div className={styles.Row}>
          <div className={styles.Label}>Today</div>
          <div className={styles.Value}>{todayScans} scans</div>
        </div>

        <div className={styles.Row}>
          <div className={styles.Label}>Yesterdays</div>
          <div className={styles.Value}>{yesterdayScans} scans</div>
        </div>

        <div className={styles.Row}>
          <div className={styles.Label}>Last week</div>
          <div className={styles.Value}>{lastWeekScans} scans</div>
        </div>

        <div className={styles.Row}>
          <div className={styles.Label}>Last month</div>
          <div className={styles.Value}>{lastMonthScans} scans</div>
        </div>
      </div>
    </div>
  )
}