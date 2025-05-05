import { defaultHandleHTTPException } from '@/shared/utils/exception'
import { useNotifications } from '@/app/notifications'
import { alwaysHandler } from '@oleksii-pavlov/error-handling'
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
        [alwaysHandler]: () => failure('Email or password is invalid')
      }))
  }

  function signUp(credentials: Credentials) {
    authAPI.signUp(credentials)
      .then(() => {
        navigateHomePage()
        success('You are signed in')
      })
      .catch(defaultHandleHTTPException({
        [alwaysHandler]: () => failure('Email or password is invalid')
      }))
  }

  return ({ signIn, signUp })
}
