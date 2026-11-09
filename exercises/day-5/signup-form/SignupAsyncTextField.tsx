import type { FocusEventHandler } from 'react'
import type { UsernameCheckFeedback } from './signupApi'

interface SignupAsyncTextFieldProps {
  id: string
  label: string
  autoComplete: string
  value: string
  errorMessage?: string
  pending: boolean
  disabled?: boolean
  result?: UsernameCheckFeedback | null
  onChange: (value: string) => void
  onBlur: FocusEventHandler<HTMLInputElement>
}

export default function SignupAsyncTextField(props: SignupAsyncTextFieldProps) {
  const errorId = `${props.id}-error`
  const resultId = `${props.id}-result`
  const describedBy = [props.errorMessage && errorId, props.result && resultId].filter(Boolean).join(' ')

  return (
    <div className="signup-form__field">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="signup-form__input"
        id={props.id}
        type="text"
        autoComplete={props.autoComplete}
        value={props.value}
        disabled={props.pending || props.disabled}
        onChange={(event) => props.onChange(event.target.value)}
        onBlur={props.onBlur}
        aria-invalid={Boolean(props.errorMessage)}
        aria-describedby={describedBy || undefined}
        required
      />
      {props.errorMessage && <span className="signup-form__error" id={errorId}>{props.errorMessage}</span>}
      {props.pending && <span className="signup-form__hint signup-form__hint--pending" role="status">Loading...</span>}
      {props.result && (
        <span className={`signup-form__hint signup-form__hint--${props.result.status === 'success' ? 'success' : 'error'}`} id={resultId} role="status">
          {props.result.message}
        </span>
      )}
    </div>
  )
}