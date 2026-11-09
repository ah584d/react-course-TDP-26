import { useState, type SubmitEvent } from 'react'

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
        <label className="signup-form__field" htmlFor="signup-name">
          Name
          <input
            className="signup-form__input"
            id="signup-name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="signup-form__field" htmlFor="signup-email">
          Email
          <input
            className="signup-form__input"
            id="signup-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
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