import { emailSelector, passwordSelector, updateEmailSelector, updatePasswordSelector, useAuthFormStore } from '../../form.store'
import { defaultHandleHTTPException } from '@/shared/utils/exception'
import { ChangeEvent, useId } from 'react'
import { useValidateForm } from '../../hooks/use-validate-form'
import { defaultHandler } from '@oleksii-pavlov/error-handling'
import { AuthField } from '../../components/AuthField'
import { AuthForm } from '../../components/AuthForm'
import { authAPI } from '../../auth.api'
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
    // validate form and add invalids
    validateForm()

    // stop if invalid
    if (!isValid) return

    // api request
    authAPI.signUp({ email, password })
      .then(() => {})
      .catch(defaultHandleHTTPException({
        401: () => {},
        [defaultHandler]: () => {}
      }))
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