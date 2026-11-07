import type { HTMLInputTypeAttribute } from 'react'

interface SignupTextFieldProps {
  id: string
  label: string
  value: string
  type?: HTMLInputTypeAttribute
  autoComplete?: string
  errorMessage?: string
  onChange: (value: string) => void
}

export default function SignupTextField(props: SignupTextFieldProps) {
  const errorId = `${props.id}-error`

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
        aria-invalid={Boolean(props.errorMessage)}
        aria-describedby={props.errorMessage ? errorId : undefined}
        required
      />
      {props.errorMessage && <span className="signup-form__error" id={errorId}>{props.errorMessage}</span>}
    </div>
  )
}