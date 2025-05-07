import { StructureLayout } from '@/layouts/StructureLayout'
import { SectionHeader } from '@/shared/components/SectionHeader'
import { useNavigation } from '@/app/navigation'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { QRCodesList } from '@/modules/qr-codes'
import { AuthGuard } from '@/modules/auth'
import { Section } from '@/shared/components/Section'
import { Button } from '@/shared/components/Button'

export function HomePage() {
  const { navigateQRCodeGenerationPage } = useNavigation()

  return (
    <AuthGuard>
      <StructureLayout>
        <Section>
          <SectionHeader>
            <SectionTitle>QR Codes</SectionTitle>
            <Button filled onClick={navigateQRCodeGenerationPage}>Generate new</Button>
          </SectionHeader>
          
          <QRCodesList />
        </Section>
      </StructureLayout>
    </AuthGuard>
  )
}