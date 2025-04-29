import { ComponentProps } from 'react'
import styles from './Header.module.css'
import clsx from 'clsx'
import { Container } from '@/shared/components/Container'

interface HeaderProps extends ComponentProps<'header'> {}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header 
      className={clsx(styles.Header, className)}
      {...props}
    >
      <Container className={styles.Container}>
        {children}
      </Container>
    </header>
  )
}