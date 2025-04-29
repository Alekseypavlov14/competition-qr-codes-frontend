import { ComponentProps } from 'react'
import styles from './AuthForm.module.css'
import clsx from 'clsx'

interface AuthFormProps extends ComponentProps<'div'> {}

export function AuthForm({ className, children, ...props }: AuthFormProps) {
  return (
    <div 
      className={clsx(styles.AuthForm, className)}
      {...props}
    >
      {children}
    </div>
  )
}