import { ComponentProps } from 'react'
import styles from './Main.module.css'
import clsx from 'clsx'

interface MainProps extends ComponentProps<'main'> {}

export function Main({ className, children, ...props }: MainProps) {
  const classNames = clsx(styles.Main, className)

  return (
    <main 
      className={classNames}
      {...props}
    >
      {children}
    </main>
  )
}