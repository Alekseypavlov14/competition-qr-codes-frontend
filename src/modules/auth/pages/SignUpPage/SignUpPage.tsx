import { SignUpForm } from '../../widgets/SignUpForm'
import { Container } from '@/shared/components/Container'
import { Center } from '@/shared/components/Center'
import { Page } from '@/shared/components/Page'

export function SignUpPage() {
  return (
    <Page>
      <Container page>
        <Center>
          <SignUpForm />
        </Center>
      </Container>
    </Page>
  )
}