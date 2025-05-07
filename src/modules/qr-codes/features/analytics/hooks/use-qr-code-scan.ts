import { mapDateToISOString } from '@/shared/utils/datetime'
import { qrCodeAnalyticsAPI } from '../qr-code-analytics.api'

export function useQRCodeScan() {
  function scanQRCode(hash: string) {
    const date = mapDateToISOString(new Date())

    qrCodeAnalyticsAPI.scan({ hash, date })
  }

  return { scanQRCode }
}
