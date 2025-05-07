import { useNavigation } from '@/app/navigation'
import { Header } from '@/shared/components/Header'
import { Logo } from '@/shared/components/Logo'
import styles from './DashboardHeader.module.css'

export function DashboardHeader() {
  const { navigateHomePage } = useNavigation()

  return (
    <Header className={styles.DashboardHeader}>
      <Logo onClick={navigateHomePage} />
    </Header>
  )
}