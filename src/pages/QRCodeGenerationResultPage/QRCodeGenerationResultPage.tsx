import { QRCodeGenerationResult, useResultScreenGuard } from '@/modules/qr-codes'
import { StructureLayout } from '@/layouts/StructureLayout'
import { AuthGuard } from '@/modules/auth'
import { Section } from '@/shared/components/Section'

export function QRCodeGenerationResultPage() {
  useResultScreenGuard()

  return (
    <AuthGuard>
      <StructureLayout>
        <Section>
          <QRCodeGenerationResult />
        </Section>
      </StructureLayout>
    </AuthGuard>
  )
}
