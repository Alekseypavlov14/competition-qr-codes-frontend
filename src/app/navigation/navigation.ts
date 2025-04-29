import { useNavigate } from 'react-router-dom'

export function useNavigation() {
  const navigate = useNavigate()

  return ({
    navigateHomePage: () => navigate('/'),
    navigateSignInPage: () => navigate('/sign-in'),
    navigateSignUpPage: () => navigate('/sign-up'),
  })
}