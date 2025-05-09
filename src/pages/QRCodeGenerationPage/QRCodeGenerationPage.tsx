import { QRCodeGenerationForm } from '@/modules/qr-codes'
import { useWebsiteTitle } from '@/shared/hooks/use-website-title'
import { StructureLayout } from '@/layouts/StructureLayout'
import { AuthGuard } from '@/modules/auth'
import { Section } from '@/shared/components/Section'

export function QRCodeGenerationPage() {
  useWebsiteTitle('Generation')

  return (
    <AuthGuard>
      <StructureLayout>
        <Section>
          <QRCodeGenerationForm />
        </Section>
      </StructureLayout>
    </AuthGuard>
  )
}