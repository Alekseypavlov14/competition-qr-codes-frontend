import { ComponentProps } from 'react'
import styles from './ErrorCorrectionList.module.css'
import clsx from 'clsx'

interface ErrorCorrectionListProps extends ComponentProps<'div'> {}

export function ErrorCorrectionList({ className, children, ...props }: ErrorCorrectionListProps) {
  return (
    <div 
      className={clsx(styles.ErrorCorrectionList, className)}
      {...props}
    >
      {children}
    </div>
  )
}