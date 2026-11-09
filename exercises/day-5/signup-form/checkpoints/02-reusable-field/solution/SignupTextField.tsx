interface SignupTextFieldProps {
  id: string
  label: string
  value: string
  type?: 'text' | 'email' | 'password'
  onChange: (value: string) => void
}

export default function SignupTextField(props: SignupTextFieldProps) {
  return (
    <div className="signup-form__field">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="signup-form__input"
        id={props.id}
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        required
      />
    </div>
  )
}