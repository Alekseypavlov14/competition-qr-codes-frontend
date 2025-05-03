import { GetQRCodeByIdResponseDTO } from './dto/get-qr-code-by-id-response-dto'
import { CreateQRCodeResponseDTO } from './dto/create-qr-code-response-dto'
import { CreateQRCodeRequestDTO } from './dto/create-qr-code-request-dto'
import { GetQRCodesResponseDTO } from './dto/get-qr-codes-response-dto'
import { authorizedHTTPClient } from '@/app/http'
import { BASE_API } from './constants'
import { Id } from '@/shared/types/id'

export class QRCodesAPI {
  getAll(): Promise<GetQRCodesResponseDTO> {
    return authorizedHTTPClient.get<GetQRCodesResponseDTO>(`${BASE_API}`)
  }

  create(dto: CreateQRCodeRequestDTO): Promise<CreateQRCodeResponseDTO> {
    return authorizedHTTPClient.post<CreateQRCodeRequestDTO, CreateQRCodeResponseDTO>(`${BASE_API}`, dto)
  }

  getById(id: Id): Promise<GetQRCodeByIdResponseDTO> {
    return authorizedHTTPClient.get<GetQRCodeByIdResponseDTO>(`${BASE_API}/${id}`)
  }
}

export const qrCodesAPI = new QRCodesAPI()
