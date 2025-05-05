import { authorizationHeader } from '../constants'
import { tokenStorage } from '../storages/token.storage'

export function saveToken(response: Response) {
  const token = response.headers.get(authorizationHeader)
  if (!token) return response
  
  tokenStorage.setValue(token)

  return response
}