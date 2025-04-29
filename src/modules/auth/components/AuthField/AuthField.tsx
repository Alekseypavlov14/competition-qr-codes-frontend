import { ComponentProps } from 'react'
import styles from './AuthField.module.css'
import clsx from 'clsx'

interface AuthFieldProps extends ComponentProps<'div'> {}

export function AuthField({ 
  className, 
  children, 
  ...props 
}: AuthFieldProps) {
  return (
    <div 
      className={clsx(styles.AuthField, className)} 
      {...props}
    >
      {children}
    </div>
  )
}