import { QRCodeCreateResponseDTO } from './dto/qr-code-create-response-dto'
import { QRCodeCreateRequestDTO } from './dto/qr-code-create-request-dto'
import { authorizedHTTPClient } from '@/app/http'
import { QRCodeEntity } from '../../qr-code.entity'

export class QRCodeGenerationAPI {
  async create(dto: QRCodeCreateRequestDTO): Promise<QRCodeEntity> {
    return authorizedHTTPClient.post<QRCodeCreateRequestDTO, QRCodeCreateResponseDTO>('/qr-codes', dto)
  }
}

export const qrCodeGenerationAPI = new QRCodeGenerationAPI()
