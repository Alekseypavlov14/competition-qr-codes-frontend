import { combine, Config, HandlerCallback } from '@oleksii-pavlov/error-handling'
import { defaultHandleHTTPException } from '@/shared/utils/exception'
import { useAuthHandler } from '@/modules/auth'

export function useAppExceptionHandler() {
  const authConfig = useAuthHandler()

  return (config: Config<number | symbol, HandlerCallback<Error>>) => {
    return defaultHandleHTTPException(combine(authConfig, config))
  }
}
