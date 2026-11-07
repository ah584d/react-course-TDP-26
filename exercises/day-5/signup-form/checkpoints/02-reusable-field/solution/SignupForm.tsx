import { useState, type SubmitEvent } from 'react'
import SignupTextField from './SignupTextField'

interface SubmittedValues {
  name: string
  email: string
}

export default function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submittedValues, setSubmittedValues] = useState<SubmittedValues | null>(null)

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedValues({ name, email })
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__fields">
        <SignupTextField id="signup-name" label="Name" value={name} onChange={setName} />
        <SignupTextField id="signup-email" label="Email" type="email" value={email} onChange={setEmail} />
      </div>
      <button className="signup-form__button" type="submit">Submit</button>
      {submittedValues && (
        <p className="signup-form__message" role="status">
          Submitted for {submittedValues.name} ({submittedValues.email}).
        </p>
      )}
    </form>
  )
}