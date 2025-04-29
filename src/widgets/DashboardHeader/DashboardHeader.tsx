import { Header } from '@/shared/components/Header'
import { Logo } from '@/shared/components/Logo'
import styles from './DashboardHeader.module.css'

export function DashboardHeader() {
  return (
    <Header className={styles.DashboardHeader}>
      <Logo />
    </Header>
  )
}