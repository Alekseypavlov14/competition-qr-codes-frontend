import { ComponentProps } from 'react'
import styles from './Container.module.css'
import clsx from 'clsx'

interface ContainerProps extends ComponentProps<'div'> {
  page?: boolean
}

export function Container({ className, children, page, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(styles.Container, page && styles.ContainerPage, className)}
      {...props}
    >
      {children}
    </div>
  )
}
