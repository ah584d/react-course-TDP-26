export interface SignupValues {
  name: string
  email: string
  username: string
  password: string
  passwordConfirmation: string
  acceptedTerms: boolean
}

export type SignupTextFieldName = Exclude<keyof SignupValues, 'acceptedTerms'>

export type SignupErrors = Partial<Record<keyof SignupValues, string>>

export function validateSignup(values: SignupValues): SignupErrors {
  const errors: SignupErrors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (!values.username.trim()) errors.username = 'Choose a username.'
  if (values.password.length < 8) errors.password = 'Use at least 8 characters.'
  if (values.passwordConfirmation !== values.password) errors.passwordConfirmation = 'Passwords do not match.'
  if (!values.acceptedTerms) errors.acceptedTerms = 'Accept the terms to continue.'
  return errors
}