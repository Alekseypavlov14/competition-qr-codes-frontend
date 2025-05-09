import { qrCodeSelector, useQRCodeStore } from '../../stores/qr-code.store'
import { useNotifications } from '@/app/notifications'
import { useDeleteQRCode } from '@/modules/qr-codes'
import { useNavigation } from '@/app/navigation'
import { Button } from '@/shared/components/Button'
import styles from './QRCodeAnalyticsDelete.module.css'

export function QRCodeAnalyticsDelete() {
  const qrCode = useQRCodeStore(qrCodeSelector)

  const { navigateHomePage } = useNavigation()
  const { failure } = useNotifications()

  const { deleteQRCode } = useDeleteQRCode()

  function deleteHandler() {
    if (!qrCode) return failure('QR Code is not loaded')

    deleteQRCode(qrCode.id)
      .then(navigateHomePage)
  }

  return (
    <div className={styles.QRCodeAnalyticsDelete}>
      <h4 className={styles.Title}>Danger Zone</h4>

      <Button danger onClick={deleteHandler}>Delete QR Code</Button>
    </div>
  )
}