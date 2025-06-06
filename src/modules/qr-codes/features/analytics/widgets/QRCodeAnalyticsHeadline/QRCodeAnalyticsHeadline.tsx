import { qrCodeSelector, useQRCodeStore } from '../../stores/qr-code.store'
import styles from './QRCodeAnalyticsHeadline.module.css'

export function QRCodeAnalyticsHeadline() {
  const qrCode = useQRCodeStore(qrCodeSelector)

  return (
    <h3 className={styles.QRCodeAnalyticsHeadline}>
      QR&nbsp;Code:&nbsp;{qrCode?.content ?? 'Loading...'}
    </h3>
  )
}