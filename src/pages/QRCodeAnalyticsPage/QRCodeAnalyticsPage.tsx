import { QRCodeAnalyticsHeadline, useHandleQRCodeLoading, useQRCodeById } from '@/modules/qr-codes'
import { StructureLayout } from '@/layouts/StructureLayout'
import { AuthGuard } from '@/modules/auth'
import { Container } from '@/shared/components/Container'
import { Section } from '@/shared/components/Section'

export function QRCodeAnalyticsPage() {
  useQRCodeById()
  useHandleQRCodeLoading()

  return (
    <AuthGuard>
      <StructureLayout>
        <Section>
          <Container>
            <QRCodeAnalyticsHeadline />
          </Container>
        </Section>
      </StructureLayout>
    </AuthGuard>
  )
}