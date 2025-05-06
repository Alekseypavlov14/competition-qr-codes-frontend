import { StructureLayout } from '@/layouts/StructureLayout'
import { QRCodeForm } from '@/modules/qr-codes'
import { AuthGuard } from '@/modules/auth'

export function QRCodeGenerationPage() {
  return (
    <AuthGuard>
      <StructureLayout>
        <QRCodeForm />
      </StructureLayout>
    </AuthGuard>
  )
}