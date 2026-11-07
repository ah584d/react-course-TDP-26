import { useState, type SubmitEvent } from 'react'
import SignupTextField from './SignupTextField'
import { validateSignup, type SignupErrors, type SignupTextFieldName, type SignupValues } from '../../../signupValidation'

const initialValues: SignupValues = {
  name: '',
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
  acceptedTerms: false,
}

export default function SignupForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<SignupErrors>({})
  const [submittedName, setSubmittedName] = useState('')

  function updateValues(nextValues: SignupValues) {
    setValues(nextValues)
    setSubmittedName('')
    if (Object.keys(errors).length > 0) setErrors(validateSignup(nextValues))
  }

  function updateTextField(fieldName: SignupTextFieldName, newValue: string) {
    updateValues({ ...values, [fieldName]: newValue })
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateSignup(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmittedName(values.name)
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="signup-form__fields">
        <SignupTextField id="signup-name" label="Name" autoComplete="name" value={values.name} errorMessage={errors.name} onChange={(newValue) => updateTextField('name', newValue)} />
        <SignupTextField id="signup-email" label="Email" type="email" autoComplete="email" value={values.email} errorMessage={errors.email} onChange={(newValue) => updateTextField('email', newValue)} />
        <SignupTextField id="signup-username" label="Username" autoComplete="username" value={values.username} errorMessage={errors.username} onChange={(newValue) => updateTextField('username', newValue)} />
        <SignupTextField id="signup-password" label="Password" type="password" autoComplete="new-password" value={values.password} errorMessage={errors.password} onChange={(newValue) => updateTextField('password', newValue)} />
        <SignupTextField id="signup-password-confirmation" label="Confirm password" type="password" autoComplete="new-password" value={values.passwordConfirmation} errorMessage={errors.passwordConfirmation} onChange={(newValue) => updateTextField('passwordConfirmation', newValue)} />
        <div className="signup-form__field signup-form__field--full">
          <label className="signup-form__checkbox-row" htmlFor="signup-terms">
            <input className="signup-form__checkbox" id="signup-terms" type="checkbox" checked={values.acceptedTerms} onChange={(event) => updateValues({ ...values, acceptedTerms: event.target.checked })} aria-invalid={Boolean(errors.acceptedTerms)} aria-describedby={errors.acceptedTerms ? 'signup-terms-error' : undefined} />
            I agree to the terms
          </label>
          {errors.acceptedTerms && <span className="signup-form__error" id="signup-terms-error">{errors.acceptedTerms}</span>}
        </div>
      </div>
      {Object.keys(errors).length > 0 && <p className="signup-form__error" role="alert">Please correct the highlighted fields.</p>}
      <button className="signup-form__button" type="submit">Submit</button>
      {submittedName && <p className="signup-form__message" role="status">The form is valid for {submittedName}.</p>}
    </form>
  )
}