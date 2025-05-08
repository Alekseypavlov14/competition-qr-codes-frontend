import { formatDateFull, mapISOStringToDate } from '@/shared/utils/datetime'
import { QRCodeEntity, QRCodePreview } from '@/modules/qr-codes'
import { getQRCodeAnalyticContent } from '@/modules/qr-codes'
import { ComponentProps } from 'react'
import styles from './QRCodeCard.module.css'
import clsx from 'clsx'

interface QRCodeCardProps extends Omit<ComponentProps<'div'>, 'children'> {
  qrCode: QRCodeEntity
  className?: string
}

export function QRCodeCard({ 
  qrCode,
  className,
  ...props
}: QRCodeCardProps) {
  return (
    <div 
      className={clsx(styles.QRCodeCard, className)}
      {...props}
    >
      <div className={styles.Image}>
        <QRCodePreview 
          content={getQRCodeAnalyticContent(qrCode.hash)}
          responsive
        />
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
