import { redirectStatusFail, redirectStatusPending, redirectStatusSuccess } from '../constants'
import { updateStatusSelector, useRedirectStatusStore } from '../stores/redirect-status.store'
import { mapDateToISOString } from '@/shared/utils/datetime'
import { qrCodeAnalyticsAPI } from '../qr-code-analytics.api'
import { useRef } from 'react'

export function useQRCodeScan() {
  const isExecutedRef = useRef<boolean>(false)
  const updateStatus = useRedirectStatusStore(updateStatusSelector)

  function scanQRCode(hash: string) {
    const date = mapDateToISOString(new Date())

    // locker
    if (isExecutedRef.current) return
    isExecutedRef.current = true

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
