import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './LoginFlowDemo.css'

type LoginOutcome = 'success' | 'failure'

async function mockLogin(outcome: LoginOutcome): Promise<void> {
  if (outcome === 'failure') {
    throw new Error('Simulated login failure')
  }
}

function LoginPage() {
  const [outcome, setOutcome] = useState<LoginOutcome>('success')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    try {
      await mockLogin(outcome)
      navigate('/profile')
    } catch (error) {
      console.error('Login failed:', error)
      setErrorMessage('Sign-in failed. Please try again.')
    }
  }

  return (
    <section className="login-flow-page">
      <h2>Sign in</h2>
      <form className="login-flow-form" onSubmit={handleSubmit}>
        <fieldset className="login-flow-outcome">
          <legend>Simulate login</legend>
          <label>
            <input
              type="radio"
              name="login-outcome"
              value="success"
              checked={outcome === 'success'}
              onChange={() => setOutcome('success')}
            />
            Succeed
          </label>
          <label>
            <input
              type="radio"
              name="login-outcome"
              value="failure"
              checked={outcome === 'failure'}
              onChange={() => setOutcome('failure')}
            />
            Fail
          </label>
        </fieldset>
        <button type="submit">Sign in</button>
        {errorMessage && <p className="login-flow-error" role="alert">{errorMessage}</p>}
      </form>
    </section>
  )
}

function ProfilePage() {
  return (
    <section className="login-flow-page">
      <h2>Signed in</h2>
      <p>The successful login navigated to the profile page.</p>
      <Link to="/">Return to login</Link>
    </section>
  )
}

export default function LoginFlow() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}