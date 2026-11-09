import { useState, type SubmitEvent } from 'react'
import SignupTextField from './SignupTextField'
import { validateSignup, type SignupTextFieldName, type SignupValues } from '../../../signupValidation'

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
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [submissionNotice, setSubmissionNotice] = useState('')
  const errors = validateSignup(values)
  const hasErrors = Object.keys(errors).length > 0

  function updateValues(nextValues: SignupValues) {
    setValues(nextValues)
    setSubmittedName('')
    setSubmissionNotice('')
  }

  function updateTextField(fieldName: SignupTextFieldName, newValue: string) {
    updateValues({ ...values, [fieldName]: newValue })
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setHasSubmitted(true)
    if (hasErrors) {
      setSubmissionNotice('Please correct the highlighted fields.')
      return
    }
    setSubmissionNotice('')
    setSubmittedName(values.name)
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="signup-form__fields">
        <SignupTextField id="signup-name" label="Name" autoComplete="name" value={values.name} errorMessage={hasSubmitted ? errors.name : undefined} onChange={(newValue) => updateTextField('name', newValue)} />
        <SignupTextField id="signup-email" label="Email" type="email" autoComplete="email" value={values.email} errorMessage={hasSubmitted ? errors.email : undefined} onChange={(newValue) => updateTextField('email', newValue)} />
        <SignupTextField id="signup-username" label="Username" autoComplete="username" value={values.username} errorMessage={hasSubmitted ? errors.username : undefined} onChange={(newValue) => updateTextField('username', newValue)} />
        <SignupTextField id="signup-password" label="Password" type="password" autoComplete="new-password" value={values.password} errorMessage={hasSubmitted ? errors.password : undefined} onChange={(newValue) => updateTextField('password', newValue)} />
        <SignupTextField id="signup-password-confirmation" label="Confirm password" type="password" autoComplete="new-password" value={values.passwordConfirmation} errorMessage={hasSubmitted ? errors.passwordConfirmation : undefined} onChange={(newValue) => updateTextField('passwordConfirmation', newValue)} />
        <div className="signup-form__field signup-form__field--full">
          <label className="signup-form__checkbox-row" htmlFor="signup-terms">
            <input className="signup-form__checkbox" id="signup-terms" type="checkbox" checked={values.acceptedTerms} onChange={(event) => updateValues({ ...values, acceptedTerms: event.target.checked })} aria-invalid={Boolean(hasSubmitted && errors.acceptedTerms)} aria-describedby={hasSubmitted && errors.acceptedTerms ? 'signup-terms-error' : undefined} />
            I agree to the terms
          </label>
          {hasSubmitted && errors.acceptedTerms && <span className="signup-form__error" id="signup-terms-error">{errors.acceptedTerms}</span>}
        </div>
      </div>
      {submissionNotice && <p className="signup-form__error" role="alert">{submissionNotice}</p>}
      <button className="signup-form__button" type="submit">Submit</button>
      {submittedName && <p className="signup-form__message" role="status">The form is valid for {submittedName}.</p>}
    </form>
  )
}