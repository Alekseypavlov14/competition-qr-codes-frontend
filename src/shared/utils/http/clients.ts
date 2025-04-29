import { HTTPException } from '../exception'
import { HTTPClient } from '@oleksii-pavlov/http'
import { BASE_API } from '@/shared/constants'
import { pipe } from '../function-utils'

export const httpClient = new HTTPClient({
  base: BASE_API,
  json: true,
  middleware: pipe(parseHTTPExceptions),
})

export function parseHTTPExceptions(response: Response) {
  if (!response.ok) throw new HTTPException(response.status)

  return response
}
