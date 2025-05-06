import { useNavigate } from 'react-router-dom'

export function useNavigation() {
  const navigate = useNavigate()

  return ({
    navigateSignInPage: () => navigate('/sign-in'),
    navigateSignUpPage: () => navigate('/sign-up'),

    navigateHomePage: () => navigate('/'),
    navigateQRCodeGenerationPage: () => navigate('/qr-codes/generate'),
  })
}