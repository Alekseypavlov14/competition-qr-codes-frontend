import { SignInForm } from '../../widgets/SignInForm'
import { Container } from '@/shared/components/Container'
import { Center } from '@/shared/components/Center'
import { Page } from '@/shared/components/Page'

export function SignInPage() {
  return (
    <Page>
      <Container page>
        <Center>
          <SignInForm />
        </Center>
      </Container>
    </Page>
  )
}