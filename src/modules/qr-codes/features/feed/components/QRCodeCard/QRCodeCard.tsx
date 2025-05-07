import { formatDateFull, mapISOStringToDate } from '@/shared/utils/datetime'
import { QRCodeEntity } from '../../../../qr-code.entity'
import styles from './QRCodeCard.module.css'

interface QRCodeCardProps {
  qrCode: QRCodeEntity
}

export function QRCodeCard({ qrCode }: QRCodeCardProps) {
  return (
    <div className={styles.QRCodeCard}>
      <div className={styles.Image}>

      </div>

      <div className={styles.Body}>
        <div className={styles.Title}>
          {qrCode.content}
        </div>
      </div>

      <div className={styles.Footer}>
        <div className={styles.Scans}>
          Scans: {qrCode.scans.length}
        </div>

        <div className={styles.Date}>
          {formatDateFull(mapISOStringToDate(qrCode.date).getTime())}
        </div>
      </div>
    </div>
  )
}
