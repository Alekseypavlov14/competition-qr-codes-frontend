import { useNavigation } from '@/app/navigation'
import { GridFallback } from '@/shared/components/GridFallback'
import { QRCodeCard } from '../../components/QRCodeCard'
import { useQRCodes } from '../../hooks/use-qr-codes'
import { Center } from '@/shared/components/Center'
import { Loader } from '@/shared/components/Loader'
import { Grid } from '@/shared/components/Grid'
import styles from './QRCodesList.module.css'

export function QRCodesList() {
  const { navigateQRCodeAnalyticsPage } = useNavigation()
  const { qrCodes, isLoading } = useQRCodes()

  if (isLoading) return (
    <Center>
      <Loader />
    </Center>
  )

  return (
    <Grid 
      className={styles.QRCodesList}
      columns={3}
    >
      {qrCodes.map((qrCode, index) => (
        <QRCodeCard 
          qrCode={qrCode}
          onClick={() => navigateQRCodeAnalyticsPage(qrCode.id)}
          key={index}
        />
      ))}

      {qrCodes.length === 0 ? (
        <GridFallback>No QR Codes found</GridFallback>
      ) : null}
    </Grid>
  )
}