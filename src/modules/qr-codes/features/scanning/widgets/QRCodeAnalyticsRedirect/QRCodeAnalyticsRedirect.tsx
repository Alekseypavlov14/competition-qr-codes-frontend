import { redirectStatusFail, redirectStatusSuccess } from '../../constants'
import { statusSelector, useRedirectStatusStore } from '../../stores/redirect-status.store'
import { useQRCodeScan } from '../../hooks/use-qr-code-scan'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Center } from '@/shared/components/Center'
import styles from './QRCodeAnalyticsRedirect.module.css'

export function QRCodeAnalyticsRedirect() {
  const status = useRedirectStatusStore(statusSelector)
  const hash = useParams().hash

  // get qr code scanner
  const { scanQRCode } = useQRCodeScan()

  // scan qr on load
  useEffect(() => scanQRCode(hash ?? ''), [hash])

  if (status === redirectStatusSuccess) return (
    <Center>
      <h5 className={styles.Title}>Success...</h5>
    </Center>
  )

  if (status === redirectStatusFail) return (
    <Center>
      <h5 className={styles.Title}>Not found</h5>
    </Center>
  )

  return (
    <Center>
      <h5 className={styles.Title}>Redirect...</h5>
    </Center>
  )
}