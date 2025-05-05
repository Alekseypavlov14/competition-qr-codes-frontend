import { authorizationHeader, saveToken, tokenStorage } from '@/modules/auth'
import { parseHTTPExceptions } from '@/shared/utils/http'
import { HTTPClient } from '@oleksii-pavlov/http'
import { BASE_API } from '@/shared/constants'
import { pipe } from '@/shared/utils/function-utils'

export const authorizedHTTPClient = new HTTPClient({
  base: BASE_API,
  json: true,
  middleware: pipe(parseHTTPExceptions, saveToken),
  headers: () => ({
    [authorizationHeader]: tokenStorage.getValue() ?? ''
  })
})
