import { useWebsiteTitle } from '@/shared/hooks/use-website-title'
import { SignUpForm } from '@/modules/auth'
import { Container } from '@/shared/components/Container'
import { Center } from '@/shared/components/Center'
import { Page } from '@/shared/components/Page'

export function SignUpPage() {
  useWebsiteTitle('Create new account')

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