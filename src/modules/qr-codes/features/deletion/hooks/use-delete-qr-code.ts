import { useAppExceptionHandler } from '@/app/exceptions'
import { qrCodeDeletionAPI } from '../qr-codes-deletion.api'
import { useNotifications } from '@/app/notifications'
import { defaultHandler } from '@oleksii-pavlov/error-handling'
import { Id } from '@/shared/types/id'

export function useDeleteQRCode() {
  const { success, failure } = useNotifications()

  const handleException = useAppExceptionHandler()

  async function deleteQRCode(id: Id) {
    return qrCodeDeletionAPI.deleteById(id)
      .then(() => {
        success('QR Code is successfully deleted')
      })
      .catch(handleException({
        404: () => failure('This QR Code is not found'),
        [defaultHandler]: () => failure('Internal error. Try again later')
      }))
  }

  return { deleteQRCode }
}
