import { useAuthGuard } from '../../guards/auth.guard'
import { ReactNode } from 'react'

interface AuthGuardProps {
  children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  useAuthGuard()
  
  return <>{children}</>
}