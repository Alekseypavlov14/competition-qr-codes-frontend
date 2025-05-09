import { QRCodeDeleteResponseDTO } from './dto/qr-code-delete-response-dto'
import { authorizedHTTPClient } from '@/app/http'
import { Id } from '@/shared/types/id'

export class QRCodesDeletionAPI {
  async deleteById(id: Id): Promise<QRCodeDeleteResponseDTO> {
    return await authorizedHTTPClient.delete<QRCodeDeleteResponseDTO>(`/qr-codes/${id}`)
  }
}

export const qrCodeDeletionAPI = new QRCodesDeletionAPI()
