import { alwaysHandler, defaultHandler } from '@oleksii-pavlov/error-handling'
import { useAppExceptionHandler } from '@/app/exceptions'
import { useEffect, useState } from 'react'
import { sortQRCodesByDate } from '../utils/sort-qr-codes-by-date'
import { useNotifications } from '@/app/notifications'
import { qrCodesFeedAPI } from '../qr-codes-feed.api'
import { useNavigation } from '@/app/navigation'
import { QRCodeEntity } from '@/modules/qr-codes'

export function useQRCodes() {
  const [qrCodes, setQRCodes] = useState<QRCodeEntity[]>([])
  const [isLoading, setLoading] = useState(false)

  const appExceptionHandler = useAppExceptionHandler()

  const { navigateSignInPage } = useNavigation()
  const { failure } = useNotifications()

  useEffect(() => {
    setLoading(true)

    qrCodesFeedAPI.getAll()
      .then(qrCodes => {
        setQRCodes(sortQRCodesByDate(qrCodes))
      })
      .catch(appExceptionHandler({
        401: () => navigateSignInPage(),
        [defaultHandler]: () => {
          failure('Error occurred. Try again')
        },
        [alwaysHandler]: () => {
          setQRCodes([])
        }
      }))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { qrCodes, isLoading }
}
