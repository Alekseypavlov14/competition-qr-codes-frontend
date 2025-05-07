import { useEffect, useState } from 'react'
import { qrCodesFeedAPI } from '../qr-codes-feed.api'
import { QRCodeEntity } from '@/modules/qr-codes'

export function useQRCodes() {
  const [qrCodes, setQRCodes] = useState<QRCodeEntity[]>([])

  useEffect(() => {
    qrCodesFeedAPI.getAll()
      .then(qrCodes => {
        setQRCodes(qrCodes)
      })
      .catch(() => setQRCodes([]))
  }, [])

  return qrCodes
}
