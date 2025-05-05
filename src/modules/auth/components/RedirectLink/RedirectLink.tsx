import { ReactNode } from 'react'
import styles from './RedirectLink.module.css'

interface RedirectLinkProps {
  onClick: () => void
  children: ReactNode
}

export function RedirectLink({ children, onClick }: RedirectLinkProps) {
  return (
    <div 
      className={styles.RedirectLink}
      onClick={onClick}
    >
      {children}
    </div>
  )
}