import { QRCodeCard } from '../../components/QRCodeCard'
import { useQRCodes } from '../../hooks/use-qr-codes'
import { Grid } from '@/shared/components/Grid'
import styles from './QRCodesList.module.css'

export function QRCodesList() {
  const qrCodes = useQRCodes()

  return (
    <Grid 
      className={styles.QRCodesList}
      columns={3}
    >
      {qrCodes.map((qrCode, index) => (
        <QRCodeCard 
          qrCode={qrCode}
          key={index}
        />
      ))}
    </Grid>
  )
}