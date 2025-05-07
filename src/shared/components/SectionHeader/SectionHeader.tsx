import { ComponentProps } from 'react'
import styles from './SectionHeader.module.css'
import clsx from 'clsx'

interface SectionHeaderProps extends ComponentProps<'div'> {}

export function SectionHeader({ className, children, ...props }: SectionHeaderProps) {
  return (
    <div 
      className={clsx(styles.SectionHeader, className)}
      {...props}
    >
      {children}
    </div>
  )
}