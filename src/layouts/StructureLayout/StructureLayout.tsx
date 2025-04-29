import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Container } from '@/shared/components/Container'
import { ReactNode } from 'react'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'
import styles from './StructureLayout.module.css'

interface StructureLayoutProps {
  children: ReactNode
}

export function StructureLayout({ children }: StructureLayoutProps) {
  return (
    <Page className={styles.StructureLayout}>
      <DashboardHeader />

      <Main className={styles.Main}>
        <Container>
          {children}
        </Container>
      </Main>     
    </Page>
  )
}