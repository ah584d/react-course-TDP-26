import { useState, type SubmitEvent } from 'react'
import SignupTextField from '../../02-reusable-field/solution/SignupTextField'
import type { SignupTextFieldName, SignupValues } from '../../../signupValidation'

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
  const [submittedValues, setSubmittedValues] = useState<SignupValues | null>(null)

  function updateTextField(fieldName: SignupTextFieldName, newValue: string) {
    setValues((previous) => ({
      ...previous,
      [fieldName]: newValue,
    }))
  }

  function updateAcceptedTerms(acceptedTerms: boolean) {
    setValues((previous) => ({ ...previous, acceptedTerms }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedValues(values)
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__fields">
        <SignupTextField id="signup-name" label="Name" value={values.name} onChange={(newValue) => updateTextField('name', newValue)} />
        <SignupTextField id="signup-email" label="Email" type="email" value={values.email} onChange={(newValue) => updateTextField('email', newValue)} />
        <SignupTextField id="signup-username" label="Username" value={values.username} onChange={(newValue) => updateTextField('username', newValue)} />
        <SignupTextField id="signup-password" label="Password" type="password" value={values.password} onChange={(newValue) => updateTextField('password', newValue)} />
        <SignupTextField id="signup-password-confirmation" label="Confirm password" type="password" value={values.passwordConfirmation} onChange={(newValue) => updateTextField('passwordConfirmation', newValue)} />
        <div className="signup-form__field signup-form__field--full">
          <label className="signup-form__checkbox-row" htmlFor="signup-terms">
            <input className="signup-form__checkbox" id="signup-terms" type="checkbox" checked={values.acceptedTerms} onChange={(event) => updateAcceptedTerms(event.target.checked)} />
            I agree to the terms
          </label>
        </div>
      </div>
      <button className="signup-form__button" type="submit">Submit</button>
      {submittedValues && (
        <p className="signup-form__message" role="status">
          Submitted for {submittedValues.name} ({submittedValues.email}) as {submittedValues.username}.
        </p>
      )}
      <p className="signup-form__hint">The demo confirmation does not display password values.</p>
    </form>
  )
}