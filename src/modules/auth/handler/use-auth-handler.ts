import { useNavigation } from '@/app/navigation'

export function useAuthHandler() {
  const { navigateSignInPage } = useNavigation()

  return ({
    401: navigateSignInPage
  })
}
