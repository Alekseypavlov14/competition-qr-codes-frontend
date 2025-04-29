import { Credentials } from './types/credentials'
import { httpClient } from '@/shared/utils/http'
import { BASE_API } from '@/shared/constants'

export class AuthAPI {
  signIn(credentials: Credentials): Promise<void> {
    return httpClient.post<Credentials, void>(`${BASE_API}/auth/sign-in`, credentials)
  }

  signUp(credentials: Credentials): Promise<void> {
    return httpClient.post<Credentials, void>(`${BASE_API}/auth/sign-up`, credentials)
  }
}

export const authAPI = new AuthAPI()
