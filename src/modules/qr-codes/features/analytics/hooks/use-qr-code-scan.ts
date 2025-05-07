import { updateStatusSelector, useRedirectStatusStore } from '../stores/redirect-status.store'
import { redirectStatusFail, redirectStatusPending, redirectStatusSuccess } from '../constants'
import { mapDateToISOString } from '@/shared/utils/datetime'
import { qrCodeAnalyticsAPI } from '../qr-code-analytics.api'

export function useQRCodeScan() {
  const updateStatus = useRedirectStatusStore(updateStatusSelector)

  function scanQRCode(hash: string) {
    const date = mapDateToISOString(new Date())

    // set pending status
    updateStatus(redirectStatusPending)

    qrCodeAnalyticsAPI.scan({ hash, date })
      .then(qrCode => {
        updateStatus(redirectStatusSuccess)
        window.location.assign(qrCode.content)
      })
      .catch(() => {
        updateStatus(redirectStatusFail)
      })
  }

  return { scanQRCode }
}
