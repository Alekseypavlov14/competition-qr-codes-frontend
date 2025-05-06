import { StructureLayout } from '@/layouts/StructureLayout'
import { QRCodeForm } from '@/modules/qr-codes'
import { AuthGuard } from '@/modules/auth'
import { Section } from '@/shared/components/Section'

export function QRCodeGenerationPage() {
  return (
    <AuthGuard>
      <StructureLayout>
        <Section>
          <QRCodeForm />
        </Section>
      </StructureLayout>
    </AuthGuard>
  )
}