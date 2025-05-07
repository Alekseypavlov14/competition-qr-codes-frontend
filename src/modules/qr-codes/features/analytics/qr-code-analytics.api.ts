import { QRCodeGetByIdRequestDTO } from './dto/qr-code-get-by-id-request-dto'
import { QRCodeScanResponseDTO } from './dto/qr-code-scan-response-dto'
import { QRCodeScanRequestDTO } from './dto/qr-code-scan-request-dto'
import { authorizedHTTPClient } from '@/app/http'
import { Id } from '@/shared/types/id'

export class QRCodeAnalyticsAPI {
  async scan(dto: QRCodeScanRequestDTO): Promise<QRCodeScanResponseDTO> {
    return await authorizedHTTPClient.post<QRCodeScanRequestDTO, QRCodeScanResponseDTO>('/analytics/scan', dto)
  }

  async getById(id: Id): Promise<any> {
    return authorizedHTTPClient.get<QRCodeGetByIdRequestDTO>(`/qr-codes/${id}`)
  }
}

export const qrCodeAnalyticsAPI = new QRCodeAnalyticsAPI()
