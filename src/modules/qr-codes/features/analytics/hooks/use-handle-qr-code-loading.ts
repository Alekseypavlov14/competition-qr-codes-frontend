import { loadingSelector, useQRCodeStore } from '../stores/qr-code.store'
import { qrCodeLoadingStateFailure } from '../constants'
import { useNotifications } from '@/app/notifications'
import { useNavigation } from '@/app/navigation'
import { useEffect } from 'react'

export function useHandleQRCodeLoading() {
  const { navigateHomePage } = useNavigation()
  const { failure } = useNotifications()

  const loading = useQRCodeStore(loadingSelector)

  useEffect(() => {
    if (loading === qrCodeLoadingStateFailure) {
      navigateHomePage()
      failure('QR Code is not found. Retry later')
    }
  }, [loading])
}
