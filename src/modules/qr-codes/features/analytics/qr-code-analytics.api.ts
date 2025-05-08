import { QRCodeGetByIdRequestDTO } from './dto/qr-code-get-by-id-request-dto'
import { authorizedHTTPClient } from '@/app/http'
import { Id } from '@/shared/types/id'

export class QRCodeAnalyticsAPI {
  async getById(id: Id): Promise<any> {
    return authorizedHTTPClient.get<QRCodeGetByIdRequestDTO>(`/qr-codes/${id}`)
  }
}

export const qrCodeAnalyticsAPI = new QRCodeAnalyticsAPI()
