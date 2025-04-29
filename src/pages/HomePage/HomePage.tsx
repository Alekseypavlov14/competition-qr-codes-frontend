import { StructureLayout } from '@/layouts/StructureLayout'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { Section } from '@/shared/components/Section'

export function HomePage() {
  return (
    <StructureLayout>
      <Section>
        <SectionTitle>QR Codes</SectionTitle>
      </Section>
    </StructureLayout>
  )
}