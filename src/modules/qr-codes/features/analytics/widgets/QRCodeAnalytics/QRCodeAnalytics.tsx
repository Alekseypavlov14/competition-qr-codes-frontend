import { QRCodeAnalyticsHeadline } from '../QRCodeAnalyticsHeadline'
import { QRCodeAnalyticsEditor } from '../QRCodeAnalyticsEditor'
import { Container } from '@/shared/components/Container'
import styles from './QRCodeAnalytics.module.css'

export function QRCodeAnalytics() {
  return (
    <Container>
      <div className={styles.QRCodeAnalytics}>
        <QRCodeAnalyticsHeadline />
        <QRCodeAnalyticsEditor />
      </div>
    </Container>
  )
}