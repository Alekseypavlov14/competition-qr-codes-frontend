import { Credentials } from './types/credentials'
import { httpClient } from '@/shared/utils/http'
import { saveToken } from './middlewares/save-token'

export class AuthAPI {
  async signIn(credentials: Credentials): Promise<Response> {
    return await httpClient.post<Credentials, Response>(`/auth/sign-in`, credentials, {}, { parse: false })
      .then(saveToken)
  }

  async signUp(credentials: Credentials): Promise<Response> {
    return await httpClient.post<Credentials, Response>(`/auth/sign-up`, credentials, {}, { parse: false })
      .then(saveToken)
  }
}

export const authAPI = new AuthAPI()
