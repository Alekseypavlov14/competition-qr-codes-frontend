import { qrCodeSelector, useQRCodeStore } from '../stores/qr-code.store'
import { getQRCodeScanStatistics } from '../utils/get-qr-code-scan-statistics'
import { useEffect, useState } from 'react'

export function useQRCodeAnalytics() {
  const qrCode = useQRCodeStore(qrCodeSelector)

  // scans analytics
  const [todayScans, setTodayScans] = useState(0)
  const [yesterdayScans, setYesterdayScans] = useState(0)
  const [lastWeekScans, setLastWeekScans] = useState(0)
  const [lastMonthScans, setLastMonthScans] = useState(0)

  useEffect(() => {
    // handle cases with no qr codes
    if (!qrCode) {
      setTodayScans(0)
      setYesterdayScans(0)
      setLastWeekScans(0)
      setLastMonthScans(0)

      return
    }

    // load analytics
    const { todayScans, yesterdayScans, lastWeekScans, lastMonthScans } = getQRCodeScanStatistics(qrCode)
    
    setTodayScans(todayScans)
    setYesterdayScans(yesterdayScans)
    setLastWeekScans(lastWeekScans)
    setLastMonthScans(lastMonthScans)
  }, [qrCode])

  return ({
    todayScans,
    yesterdayScans,
    lastWeekScans,
    lastMonthScans,
  })
}
