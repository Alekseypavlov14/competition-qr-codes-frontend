import { getQRCodeAnalyticContent, QRCodePreview } from '@/modules/qr-codes'
import { qrCodeSelector, useQRCodeStore } from '../../stores/qr-code.store'
import styles from './QRCodeAnalyticsPreview.module.css'

export function QRCodeAnalyticsPreview() {
  const qrCode = useQRCodeStore(qrCodeSelector)
  if (!qrCode) return null

  return (
    <div className={styles.QRCodeAnalyticsPreview}>
      <QRCodePreview content={getQRCodeAnalyticContent(qrCode.hash)} />
    </div>
  )
}