import { QRCodeAnalyticsRedirect } from '@/modules/qr-codes'
import { SignInPage, SignUpPage } from '@/modules/auth'
import { QRCodeGenerationPage } from '@/pages/QRCodeGenerationPage'
import { QRCodeAnalyticsPage } from '@/pages/QRCodeAnalyticsPage'
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
  },

  {
    path: '/qr-codes/generation',
    element: <QRCodeGenerationPage />
  },
  {
    path: '/qr-codes/:id',
    element: <QRCodeAnalyticsPage />
  },

  {
    path: '/go/:hash',
    element: <QRCodeAnalyticsRedirect />
  }
])
