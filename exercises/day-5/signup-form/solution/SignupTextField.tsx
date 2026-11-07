import type { FocusEventHandler, HTMLInputTypeAttribute } from 'react'

interface SignupTextFieldProps {
  id: string
  label: string
  value: string
  type?: HTMLInputTypeAttribute
  autoComplete?: string
  errorMessage?: string
  hint?: string
  hintTone?: 'neutral' | 'success' | 'error'
  pending?: boolean
  onChange: (value: string) => void
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export default function SignupTextField(props: SignupTextFieldProps) {
  const errorId = `${props.id}-error`
  const hintId = `${props.id}-hint`
  const describedBy = [props.errorMessage && errorId, props.hint && hintId].filter(Boolean).join(' ')

  return (
    <div className="signup-form__field">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="signup-form__input"
        id={props.id}
        type={props.type ?? 'text'}
        autoComplete={props.autoComplete}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        onBlur={props.onBlur}
        aria-invalid={Boolean(props.errorMessage)}
        aria-describedby={describedBy || undefined}
        required
      />
      {props.errorMessage && <span className="signup-form__error" id={errorId}>{props.errorMessage}</span>}
      {props.hint && (
        <span
          className={`signup-form__hint signup-form__hint--${props.hintTone ?? 'neutral'}${props.pending ? ' signup-form__hint--pending' : ''}`}
          id={hintId}
          role={props.pending ? 'status' : undefined}
        >
          {props.pending && <span className="signup-form__spinner" aria-hidden="true" />}
          {props.hint}
        </span>
      )}
    </div>
  )
}