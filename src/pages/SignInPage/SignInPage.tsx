import { useWebsiteTitle } from '@/shared/hooks/use-website-title'
import { SignInForm } from '@/modules/auth'
import { Container } from '@/shared/components/Container'
import { Center } from '@/shared/components/Center'
import { Page } from '@/shared/components/Page'

export function SignInPage() {
  useWebsiteTitle('Enter your account')  

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