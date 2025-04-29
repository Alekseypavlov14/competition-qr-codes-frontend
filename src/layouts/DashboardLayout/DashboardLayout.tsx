import { DashboardHeader } from '@/widgets/DashboardHeader'
import { ReactNode } from 'react'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'
import styles from './DashboardLayout.module.css'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Page className={styles.DashboardLayout}>
      <DashboardHeader />

      <Main className={styles.Main}>
        {children}
      </Main>     
    </Page>
  )
}