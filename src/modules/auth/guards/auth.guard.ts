import { useNavigation } from '@/app/navigation'
import { tokenStorage } from '../storages/token.storage'
import { useEffect } from 'react'
import { authAPI } from '../auth.api'

export function useAuthGuard() {
  const { navigateSignInPage } = useNavigation()
  
  const token = tokenStorage.getValue()

  useEffect(() => {
    if (!token) return navigateSignInPage()

    authAPI.verifyToken().catch(() => navigateSignInPage())
  }, [])
}
