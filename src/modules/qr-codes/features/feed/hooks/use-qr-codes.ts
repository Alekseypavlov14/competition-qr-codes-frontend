import { useAppExceptionHandler } from '@/app/exceptions'
import { useEffect, useState } from 'react'
import { sortQRCodesByDate } from '../utils/sort-qr-codes-by-date'
import { qrCodesFeedAPI } from '../qr-codes-feed.api'
import { alwaysHandler } from '@oleksii-pavlov/error-handling'
import { QRCodeEntity } from '@/modules/qr-codes'

export function useQRCodes() {
  const [qrCodes, setQRCodes] = useState<QRCodeEntity[]>([])
  const appExceptionHandler = useAppExceptionHandler()

  useEffect(() => {
    qrCodesFeedAPI.getAll()
      .then(qrCodes => {
        setQRCodes(sortQRCodesByDate(qrCodes))
      })
      .catch(appExceptionHandler({
        [alwaysHandler]: () => setQRCodes([])
      }))
  }, [])

  return qrCodes
}
