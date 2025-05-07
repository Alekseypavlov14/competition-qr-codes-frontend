import { QRCodeGetByIdRequestDTO } from './dto/qr-code-get-by-id-request-dto'
import { QRCodeScanRequestDTO } from './dto/qr-code-scan-request-dto'
import { authorizedHTTPClient } from '@/app/http'
import { Id } from '@/shared/types/id'

export class QRCodeAnalyticsAPI {
  async scan(dto: QRCodeScanRequestDTO): Promise<void> {
    await authorizedHTTPClient.post<QRCodeScanRequestDTO, void>('/analytics/scan', dto)
  }

  async getById(id: Id): Promise<any> {
    return authorizedHTTPClient.get<QRCodeGetByIdRequestDTO>(`/qr-codes/${id}`)
  }
}

export const qrCodeAnalyticsAPI = new QRCodeAnalyticsAPI()
