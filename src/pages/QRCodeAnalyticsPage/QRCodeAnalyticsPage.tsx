import { QRCodeAnalytics, useHandleQRCodeLoading, useQRCodeById } from '@/modules/qr-codes'
import { StructureLayout } from '@/layouts/StructureLayout'
import { AuthGuard } from '@/modules/auth'
import { Section } from '@/shared/components/Section'

export function QRCodeAnalyticsPage() {
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