import { useRef, useState, type SubmitEvent } from 'react'
import SignupTextField from './SignupTextField'
import { validateSignup, type SignupErrors, type SignupTextFieldName, type SignupValues } from '../../../signupValidation'
type UsernameCheck =
  | { kind: 'idle'; username: '' }
  | { kind: 'checking'; username: string }
  | { kind: 'available' | 'unavailable' | 'error'; username: string; message: string }

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
  const [errors, setErrors] = useState<SignupErrors>({})
  const [usernameCheck, setUsernameCheck] = useState<UsernameCheck>({ kind: 'idle', username: '' })
  const latestUsername = useRef('')
  const checkSequence = useRef(0)

  function updateValues(nextValues: SignupValues) {
    setValues(nextValues)
    if (Object.keys(errors).length > 0) setErrors(validateSignup(nextValues))
  }

  function updateTextField(fieldName: SignupTextFieldName, newValue: string) {
    updateValues({ ...values, [fieldName]: newValue })
  }

  function handleUsernameChange(username: string) {
    latestUsername.current = normalizeUsername(username)
    checkSequence.current += 1
    setUsernameCheck({ kind: 'idle', username: '' })
    updateTextField('username', username)
  }

  async function checkUsername() {
    const username = normalizeUsername(values.username)
    if (!username) {
      setUsernameCheck({ kind: 'idle', username: '' })
      return
    }

    const sequence = ++checkSequence.current
    setUsernameCheck({ kind: 'checking', username })

    try {
      const response = await fetch(`/api/usernames/check?username=${encodeURIComponent(username)}`)
      if (!response.ok) throw new Error('Could not check this username. Try again.')
      const result = await response.json() as { valid: boolean; message: string }
      if (sequence !== checkSequence.current || latestUsername.current !== username) return
      setUsernameCheck({ kind: result.valid ? 'available' : 'unavailable', username, message: result.message })
    } catch {
      if (sequence === checkSequence.current && latestUsername.current === username) {
        setUsernameCheck({ kind: 'error', username, message: 'Could not check this username. Try again.' })
      }
    }
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrors(validateSignup(values))
  }

  const normalizedUsername = normalizeUsername(values.username)
  const usernameHint = usernameCheck.username === normalizedUsername
    ? usernameCheck.kind === 'checking'
      ? 'Checking availability…'
      : usernameCheck.kind === 'available' || usernameCheck.kind === 'unavailable' || usernameCheck.kind === 'error'
        ? usernameCheck.message
        : undefined
    : undefined

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="signup-form__fields">
        <SignupTextField id="signup-name" label="Name" autoComplete="name" value={values.name} errorMessage={errors.name} onChange={(newValue) => updateTextField('name', newValue)} />
        <SignupTextField id="signup-email" label="Email" type="email" autoComplete="email" value={values.email} errorMessage={errors.email} onChange={(newValue) => updateTextField('email', newValue)} />
        <SignupTextField
          id="signup-username"
          label="Username"
          autoComplete="username"
          value={values.username}
          errorMessage={errors.username}
          hint={usernameHint}
          pending={usernameCheck.kind === 'checking'}
          hintTone={usernameCheck.kind === 'available' ? 'success' : usernameCheck.kind === 'unavailable' || usernameCheck.kind === 'error' ? 'error' : 'neutral'}
          onChange={handleUsernameChange}
          onBlur={checkUsername}
        />
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
    </form>
  )
}