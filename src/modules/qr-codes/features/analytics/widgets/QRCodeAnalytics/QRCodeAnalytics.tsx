import { QRCodeAnalyticsHeadline } from '../QRCodeAnalyticsHeadline'
import { QRCodeAnalyticsPreview } from '../QRCodeAnalyticsPreview'
import { Container } from '@/shared/components/Container'
import styles from './QRCodeAnalytics.module.css'

export function QRCodeAnalytics() {
  return (
    <Container>
      <div className={styles.QRCodeAnalytics}>
        <QRCodeAnalyticsHeadline />
        <QRCodeAnalyticsPreview />
      </div>
    </Container>
  )
}