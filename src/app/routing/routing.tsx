import { QRCodeAnalyticsRedirect } from '@/modules/qr-codes'
import { QRCodeGenerationPage } from '@/pages/QRCodeGenerationPage'
import { QRCodeAnalyticsPage } from '@/pages/QRCodeAnalyticsPage'
import { createBrowserRouter } from 'react-router-dom'
import { SignInPage } from '@/pages/SignInPage'
import { SignUpPage } from '@/pages/SignUpPage'
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
