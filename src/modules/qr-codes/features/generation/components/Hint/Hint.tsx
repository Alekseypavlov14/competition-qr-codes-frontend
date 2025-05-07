import { ComponentProps } from 'react'
import styles from './Hint.module.css'
import clsx from 'clsx'

interface HintProps extends ComponentProps<'div'> {}

export function Hint({ className, children, ...props }: HintProps) {
  return (
    <div 
      className={clsx(styles.Hint, className)}
      {...props}
    >
      {children}
    </div>
  )
}