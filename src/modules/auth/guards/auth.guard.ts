import { useNavigation } from '@/app/navigation'
import { tokenStorage } from '../storages/token.storage'
import { useEffect } from 'react'

export function useAuthGuard() {
  const { navigateSignInPage } = useNavigation()
  
  const token = tokenStorage.getValue()

  useEffect(() => {
    if (!token) navigateSignInPage()
  }, [])
}
