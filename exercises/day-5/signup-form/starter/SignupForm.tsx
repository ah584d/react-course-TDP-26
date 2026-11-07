import { useState, type SubmitEvent } from 'react'

export default function SignupForm() {
  const [submittedName, setSubmittedName] = useState('')

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setSubmittedName(String(formData.get('name') ?? ''))
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__fields">
        <label className="signup-form__field" htmlFor="signup-name">
          Name
          <input className="signup-form__input" id="signup-name" name="name" autoComplete="name" required />
        </label>
        <label className="signup-form__field" htmlFor="signup-email">
          Email
          <input className="signup-form__input" id="signup-email" name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <button className="signup-form__button" type="submit">Submit</button>
      {submittedName && (
        <p className="signup-form__message" role="status">
          Thanks, {submittedName}. Your form was submitted.
        </p>
      )}
    </form>
  )
}