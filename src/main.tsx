import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routing } from './app/routing'
import '@/styles'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <RouterProvider router={routing} />
  </StrictMode>
)
