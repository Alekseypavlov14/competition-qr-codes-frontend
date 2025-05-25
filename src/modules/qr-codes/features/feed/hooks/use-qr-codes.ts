import { useAppExceptionHandler } from '@/app/exceptions'
import { useEffect, useState } from 'react'
import { sortQRCodesByDate } from '../utils/sort-qr-codes-by-date'
import { useNotifications } from '@/app/notifications'
import { qrCodesFeedAPI } from '../qr-codes-feed.api'
import { alwaysHandler } from '@oleksii-pavlov/error-handling'
import { QRCodeEntity } from '@/modules/qr-codes'

export function useQRCodes() {
  const [qrCodes, setQRCodes] = useState<QRCodeEntity[]>([])
  const [isLoading, setLoading] = useState(false)

  const appExceptionHandler = useAppExceptionHandler()
  const { failure } = useNotifications()

  useEffect(() => {
    setLoading(true)

    qrCodesFeedAPI.getAll()
      .then(qrCodes => {
        setQRCodes(sortQRCodesByDate(qrCodes))
      })
      .catch(appExceptionHandler({
        [alwaysHandler]: () => {
          failure('Error occurred. Try again')
          setQRCodes([])
        }
      }))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { qrCodes, isLoading }
}
