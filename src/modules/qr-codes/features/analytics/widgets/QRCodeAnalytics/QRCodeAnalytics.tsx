import { QRCodeAnalyticsHeadline } from '../QRCodeAnalyticsHeadline'
import { QRCodeAnalyticsEditor } from '../QRCodeAnalyticsEditor'
import { QRCodeAnalyticsDelete } from '../QRCodeAnalyticsDelete'
import styles from './QRCodeAnalytics.module.css'

export function QRCodeAnalytics() {
  return (
    <div className={styles.QRCodeAnalytics}>
      <QRCodeAnalyticsHeadline />
      <QRCodeAnalyticsEditor />
      <QRCodeAnalyticsDelete />
    </div>
  )
}