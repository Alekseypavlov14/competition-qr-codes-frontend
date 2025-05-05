import { useEffect, useState } from 'react'
import { QRCodeEntity } from '../qr-code.entity'
import { qrCodesAPI } from '../qr-codes.api'

export function useQRCodes() {
  const [qrCodes, setQRCodes] = useState<QRCodeEntity[]>([])

  useEffect(() => {
    qrCodesAPI.getAll()
      .then(qrCodes => {
        setQRCodes(qrCodes)
      })
      .catch(() => setQRCodes([]))
  }, [])

  return qrCodes
}
