import { GetQRCodesResponseDTO } from './dto/get-qr-codes-response-dto'
import { authorizedHTTPClient } from '@/app/http'

export class QRCodesFeedAPI {
  getAll(): Promise<GetQRCodesResponseDTO> {
    return authorizedHTTPClient.get<GetQRCodesResponseDTO>(`/qr-codes`)
  }
}

export const qrCodesFeedAPI = new QRCodesFeedAPI()
