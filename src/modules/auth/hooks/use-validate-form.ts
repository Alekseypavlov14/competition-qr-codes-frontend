import { AuthFormState, emailSelector, passwordSelector, useAuthFormStore } from '../form.store'
import { createFormValidator, FormErrors, isEmail, isFormValid, isNotEmptyString } from '@oleksii-pavlov/forms'
import { useEffect, useState } from 'react'

export function useValidateForm() {
  const [errors, setErrors] = useState<FormErrors<AuthFormState>>({})
  const [isValid, setIsValid] = useState(false)

  // connect errors and validity
  useEffect(() => setIsValid(isFormValid(errors)), [errors])

  // data
  const email = useAuthFormStore(emailSelector)
  const password = useAuthFormStore(passwordSelector)

  // validation
  const validateAuthForm = createFormValidator({
    email: isEmail,
    password: isNotEmptyString
  })

  // callback
  function validateForm() {
    setErrors(validateAuthForm({ email, password }))
  }

  // resetters 
  function resetEmailInvalidity() {
    setErrors((errors) => {
      delete errors.email
      return errors
    })
  }
  function resetPasswordInvalidity() {
    setErrors((errors) => {
      delete errors.password
      return errors
    })
  }

  return ({ isValid, errors, validateForm, resetEmailInvalidity, resetPasswordInvalidity })
}
