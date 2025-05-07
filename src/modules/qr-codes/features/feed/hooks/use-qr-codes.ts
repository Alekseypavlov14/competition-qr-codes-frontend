import { useAppExceptionHandler } from '@/app/exceptions'
import { useEffect, useState } from 'react'
import { qrCodesFeedAPI } from '../qr-codes-feed.api'
import { alwaysHandler } from '@oleksii-pavlov/error-handling'
import { QRCodeEntity } from '@/modules/qr-codes'

export function useQRCodes() {
  const [qrCodes, setQRCodes] = useState<QRCodeEntity[]>([])
  const appExceptionHandler = useAppExceptionHandler()

  useEffect(() => {
    qrCodesFeedAPI.getAll()
      .then(qrCodes => {
        setQRCodes(qrCodes)
      })
      .catch(appExceptionHandler({
        [alwaysHandler]: () => setQRCodes([])
      }))
  }, [])

  return qrCodes
}
