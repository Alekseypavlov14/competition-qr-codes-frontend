import { ComponentProps } from 'react'
import styles from './Section.module.css'
import clsx from 'clsx'

interface SectionProps extends ComponentProps<'section'> {}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section 
      className={clsx(styles.Section, className)}
      {...props}
    >
      {children}
    </section>
  )
}