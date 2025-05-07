import { QRCodeAnalyticsPagePath } from '@/app/navigation'

export function getQRCodeAnalyticContent(hash: string) {
  const origin = window.location.origin
  const path = QRCodeAnalyticsPagePath
  const content = `${origin}${path}/${hash}`
  
  return content
}
