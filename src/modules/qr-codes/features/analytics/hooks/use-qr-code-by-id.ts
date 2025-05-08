import { updateLoadingSelector, updateQRCodeSelector, useQRCodeStore } from '../stores/qr-code.store'
import { qrCodeLoadingStateFailure, qrCodeLoadingStateSuccess } from '../constants'
import { qrCodeAnalyticsAPI } from '../qr-code-analytics.api'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function useQRCodeById() {
  const updateQRCode = useQRCodeStore(updateQRCodeSelector)
  const updateLoading = useQRCodeStore(updateLoadingSelector)

  const id = useParams().id

  useEffect(() => {
    // handle errors
    if (!id) {
      updateLoading(qrCodeLoadingStateFailure)
      return updateQRCode(null)
    }

    qrCodeAnalyticsAPI.getById(Number(id))
      .then((qrCode) => {
        updateQRCode(qrCode)
        updateLoading(qrCodeLoadingStateSuccess)
      })
      .catch(() => {
        updateLoading(qrCodeLoadingStateFailure)
        updateQRCode(null)
      })
  }, [])
}
