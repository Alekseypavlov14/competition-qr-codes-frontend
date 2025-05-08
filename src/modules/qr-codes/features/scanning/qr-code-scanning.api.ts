import { QRCodeScanResponseDTO } from './dto/qr-code-scan-response-dto'
import { QRCodeScanRequestDTO } from './dto/qr-code-scan-request-dto'
import { authorizedHTTPClient } from '@/app/http'

export class QRCodeScanningAPI {
  async scan(dto: QRCodeScanRequestDTO): Promise<QRCodeScanResponseDTO> {
    return await authorizedHTTPClient.post<QRCodeScanRequestDTO, QRCodeScanResponseDTO>('/analytics/scan', dto)
  }
}

export const qrCodeScanningAPI = new QRCodeScanningAPI()
