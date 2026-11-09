import { useState, type SubmitEvent } from 'react'
import SignupAsyncTextField from '../../../SignupAsyncTextField'
import SignupTextField from './SignupTextField'
import { validateSignup, type SignupTextFieldName, type SignupValues } from '../../../signupValidation'
import { checkUsername as requestUsernameCheck, type UsernameCheckFeedback } from '../../../signupApi'

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
  const [submissionNotice, setSubmissionNotice] = useState('')
  const errors = validateSignup(values)
  const hasErrors = Object.keys(errors).length > 0

  function updateValues(nextValues: SignupValues) {
    setValues(nextValues)
    setSubmissionNotice('')
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

    setUsernameCheck({ isPending: true, result: null })
    const result = await requestUsernameCheck(username)
    setUsernameCheck({ isPending: false, result })
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setHasSubmitted(true)
    setSubmissionNotice(hasErrors ? 'Please correct the highlighted fields.' : '')
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
      {submissionNotice && <p className="signup-form__error" role="alert">{submissionNotice}</p>}
      <button className="signup-form__button" type="submit">Submit</button>
    </form>
  )
}