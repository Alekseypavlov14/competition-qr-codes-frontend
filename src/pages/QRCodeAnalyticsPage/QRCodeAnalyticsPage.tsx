import { QRCodeAnalytics, useHandleQRCodeLoading, useQRCodeById } from '@/modules/qr-codes'
import { useWebsiteTitle } from '@/shared/hooks/use-website-title'
import { StructureLayout } from '@/layouts/StructureLayout'
import { AuthGuard } from '@/modules/auth'
import { Section } from '@/shared/components/Section'

export function QRCodeAnalyticsPage() {
  useWebsiteTitle('Analytics')

  useQRCodeById()
  useHandleQRCodeLoading()

  return (
    <AuthGuard>
      <StructureLayout>
        <Section>
          <QRCodeAnalytics />
        </Section>
      </StructureLayout>
    </AuthGuard>
  )
}