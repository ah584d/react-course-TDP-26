import { useState, type SubmitEvent } from 'react'
import SignupAsyncTextField from '../SignupAsyncTextField'
import SignupTextField from './SignupTextField'
import { validateSignup, type SignupTextFieldName, type SignupValues } from '../signupValidation'
import { checkUsername as requestUsernameCheck, submitSignup, type SignupSubmissionFeedback, type UsernameCheckFeedback } from '../signupApi'
import '../SignupForm.css'

const initialValues: SignupValues = {
  name: '',
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
  acceptedTerms: false,
}

function normalizeUsername(username: string) {
  return username.trim().toLowerCase()
}

export default function SignupForm() {
  const [values, setValues] = useState(initialValues)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [usernameCheck, setUsernameCheck] = useState<{ isPending: boolean; result: UsernameCheckFeedback | null }>({
    isPending: false,
    result: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<SignupSubmissionFeedback | null>(null)
  const [submissionNotice, setSubmissionNotice] = useState('')
  const errors = validateSignup(values)
  const hasErrors = Object.keys(errors).length > 0

  function updateValues(nextValues: SignupValues) {
    setValues(nextValues)
    setSubmissionNotice('')
    setSubmissionResult(null)
  }

  function updateTextField(fieldName: SignupTextFieldName, newValue: string) {
    updateValues({ ...values, [fieldName]: newValue })
  }

  function handleUsernameChange(username: string) {
    setUsernameCheck({ isPending: false, result: null })
    updateTextField('username', username)
  }

  async function validateUsername() {
    const username = normalizeUsername(values.username)
    if (!username) {
      setUsernameCheck({ isPending: false, result: null })
      return
    }

    if (!isSubmitting) {
      setSubmissionResult(null)
      setSubmissionNotice('')
    }

    setUsernameCheck({ isPending: true, result: null })
    const result = await requestUsernameCheck(username)
    setUsernameCheck({ isPending: false, result })
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    setHasSubmitted(true)
    setSubmissionResult(null)
    setSubmissionNotice('')
    if (hasErrors) {
      setSubmissionNotice('Please correct the highlighted fields.')
      return
    }

    const username = normalizeUsername(values.username)
    if (usernameCheck.result?.status !== 'success') {
      setSubmissionNotice('Check the username field and wait until it says your username is available before submitting.')
      return
    }

    setIsSubmitting(true)
    const result = await submitSignup(username)
    setSubmissionResult(result)
    setIsSubmitting(false)
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="signup-form__fields">
        <SignupTextField id="signup-name" label="Name" autoComplete="name" value={values.name} errorMessage={hasSubmitted ? errors.name : undefined} onChange={(newValue) => updateTextField('name', newValue)} />
        <SignupTextField id="signup-email" label="Email" type="email" autoComplete="email" value={values.email} errorMessage={hasSubmitted ? errors.email : undefined} onChange={(newValue) => updateTextField('email', newValue)} />
        <SignupAsyncTextField
          id="signup-username"
          label="Username"
          autoComplete="username"
          value={values.username}
          errorMessage={hasSubmitted ? errors.username : undefined}
          pending={usernameCheck.isPending}
          disabled={isSubmitting}
          result={usernameCheck.result}
          onChange={handleUsernameChange}
          onBlur={validateUsername}
        />
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
      {hasSubmitted && hasErrors && <p className="signup-form__error" role="alert">Please correct the highlighted fields.</p>}
      {submissionNotice && <p className="signup-form__error" role="alert">{submissionNotice}</p>}
      {submissionResult?.status === 'error' && <p className="signup-form__error" role="alert">{submissionResult.message}</p>}
      <button className="signup-form__button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Submit'}
      </button>
      {submissionResult?.status === 'success' && <p className="signup-form__message" role="status">{submissionResult.message}</p>}
    </form>
  )
}