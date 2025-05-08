import { useNavigate } from 'react-router-dom'
import { Id } from '@/shared/types/id'

export function useNavigation() {
  const navigate = useNavigate()
  
  return ({
    navigateSignInPage: () => navigate('/sign-in'),
    navigateSignUpPage: () => navigate('/sign-up'),

    navigateHomePage: () => navigate('/'),
    navigateQRCodeAnalyticsPage: (id: Id) => navigate(`/qr-codes/${id}`),
    navigateQRCodeGenerationPage: () => navigate('/qr-codes/generation'),
  })
}
