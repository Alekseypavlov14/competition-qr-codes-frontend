import { DashboardLayout } from '@/layouts/DashboardLayout'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { Section } from '@/shared/components/Section'

export function HomePage() {
  return (
    <DashboardLayout>
      <Section>
        <SectionTitle>QR Codes</SectionTitle>
      </Section>
    </DashboardLayout>
  )
}