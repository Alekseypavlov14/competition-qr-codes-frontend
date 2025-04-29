import { SignInPage, SignUpPage } from '@/modules/auth'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'

export const routing = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignInPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  },

  {
    path: '/',
    element: <HomePage />
  }
])
