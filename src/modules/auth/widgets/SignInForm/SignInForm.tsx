import { emailSelector, passwordSelector, updateEmailSelector, updatePasswordSelector, useAuthFormStore } from '../../form.store'
import { ChangeEvent, useId } from 'react'
import { useValidateForm } from '../../hooks/use-validate-form'
import { AuthField } from '../../components/AuthField'
import { AuthForm } from '../../components/AuthForm'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import styles from './SignInForm.module.css'

export function SignInForm() {
  const emailInputId = useId()
  const passwordInputId = useId()

  const email = useAuthFormStore(emailSelector)
  const password = useAuthFormStore(passwordSelector)
  
  const updateEmail = useAuthFormStore(updateEmailSelector)
  const updatePassword = useAuthFormStore(updatePasswordSelector)

  const { 
    resetEmailInvalidity,
    resetPasswordInvalidity,
    validateForm, 
    isValid, 
    errors, 
  } = useValidateForm()

  function updateEmailHandler(e: ChangeEvent<HTMLInputElement>) {
    updateEmail(e.target.value.trim())
  }
  function updatePasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    updatePassword(e.target.value.trim())
  } 

  function submitForm() {
    validateForm()

    if (!isValid) return

    // TODO add callback
  }

  return (
    <AuthForm className={styles.SignInForm}>
      <h4>Welcome Back!</h4>

      <AuthField>
        <label 
          htmlFor={emailInputId} 
          className='text-small'
        >
          Email
        </label>
        
        <Input 
          id={emailInputId} 
          onChange={updateEmailHandler}
          onFocus={resetEmailInvalidity}
          invalid={Boolean(errors.email)}
          value={email}
          block
        />
      </AuthField>

      <AuthField>
        <label 
          htmlFor={passwordInputId} 
          className='text-small'
        >
          Password
        </label>
        
        <Input 
          id={passwordInputId} 
          onChange={updatePasswordHandler}
          onFocus={resetPasswordInvalidity}
          invalid={Boolean(errors.password)}
          value={password}
          type='password' 
          block
        />
      </AuthField>

      <Button block filled onClick={submitForm}>
        Sign in
      </Button>
    </AuthForm>
  )
}