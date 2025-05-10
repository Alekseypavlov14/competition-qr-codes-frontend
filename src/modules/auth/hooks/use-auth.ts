import { defaultHandleHTTPException } from '@/shared/utils/exception'
import { useNotifications } from '@/app/notifications'
import { defaultHandler } from '@oleksii-pavlov/error-handling'
import { useNavigation } from '@/app/navigation'
import { Credentials } from '../types/credentials'
import { authAPI } from '../auth.api'

export function useAuth() {
  const { navigateHomePage } = useNavigation()
  const { success, failure } = useNotifications()

  function signIn(credentials: Credentials) {
    authAPI.signIn(credentials)
      .then(() => {
        navigateHomePage()
        success('You are logged in')
      })
      .catch(defaultHandleHTTPException({
        401: () => failure('Email or password is invalid'),
        [defaultHandler]: () => failure('Error occurred. Try again later')
      }))
  }

  function signUp(credentials: Credentials) {
    authAPI.signUp(credentials)
      .then(() => {
        navigateHomePage()
        success('You are signed in')
      })
      .catch(defaultHandleHTTPException({
        401: () => failure('Email or password is invalid'),
        409: () => failure('This email is registered'),
        [defaultHandler]: () => failure('Error occurred. Try again later')
      }))
  }

  return ({ signIn, signUp })
}
