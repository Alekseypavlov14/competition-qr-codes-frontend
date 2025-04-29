import { ComponentProps } from 'react'
import styles from './SectionTitle.module.css'
import clsx from 'clsx'

interface SectionTitleProps extends ComponentProps<'h4'> {}

export function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <h4 
      className={clsx(styles.SectionTitle, className)}
      {...props}
    >
      {children}
    </h4>
  )
}