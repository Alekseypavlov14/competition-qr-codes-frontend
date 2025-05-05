import { StructureLayout } from '@/layouts/StructureLayout'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { QRCodesList } from '@/modules/qr-codes'
import { Section } from '@/shared/components/Section'

export function HomePage() {
  return (
    <StructureLayout>
      <Section>
        <SectionTitle>QR Codes</SectionTitle>
        <QRCodesList />
      </Section>
    </StructureLayout>
  )
}