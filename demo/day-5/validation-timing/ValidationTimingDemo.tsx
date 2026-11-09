import { useState, type KeyboardEvent, type SubmitEvent } from 'react'
import './ValidationTimingDemo.css'

type FieldName = 'username' | 'password'
type FieldValues = Record<FieldName, string>
type FieldErrors = Partial<Record<FieldName, string>>
type VisibleFields = Partial<Record<FieldName, boolean>>

interface ValidationStrategy {
  id: string
  label: string
  title: string
  description: string
  code: string
}

const initialValues: FieldValues = { username: '', password: '' }

const strategies: ValidationStrategy[] = [
  {
    id: 'submit',
    label: 'After submit',
    title: 'Show all errors after submit',
    description: 'Keep messages hidden until submission; afterward, all current errors stay visible and update as you edit.',
    code: `const showError = isSubmitted`,
  },
  {
    id: 'blur',
    label: 'On blur',
    title: 'Show a field error after blur',
    description: 'A field’s message appears after its first blur and stays visible while you edit.',
    code: `function handleBlur(fieldName) {
  setVisibleFields(previous => ({ ...previous, [fieldName]: true }))
}

const showError = isSubmitted || visibleFields[fieldName]`,
  },
  {
    id: 'change',
    label: 'On change',
    title: 'Show a field error after its first edit',
    description: 'A field’s message appears after its first edit and stays visible as its value changes.',
    code: `function handleChange(fieldName, value) {
  setValues(previous => ({ ...previous, [fieldName]: value }))
  setVisibleFields(previous => ({ ...previous, [fieldName]: true }))
}

const showError = isSubmitted || visibleFields[fieldName]`,
  },
  {
    id: 'blur-clear',
    label: 'Blur, hide on edit',
    title: 'Hide an edited field error until blur',
    description: 'Submit reveals all errors. Editing hides only that field’s message until blur reveals any remaining error.',
    code: `function handleBlur(fieldName) {
  setVisibleFields(previous => ({ ...previous, [fieldName]: true }))
}

function handleChange(fieldName, value) {
  setValues(previous => ({ ...previous, [fieldName]: value }))
  setVisibleFields(previous => ({ ...previous, [fieldName]: false }))
}

const showError = visibleFields[fieldName] ?? isSubmitted`,
  },
]

function validateField(fieldName: FieldName, value: string) {
  if (fieldName === 'username' && !value.trim()) return 'Enter a username.'
  if (fieldName === 'password' && value.length < 8) return 'Use at least 8 characters.'
  return ''
}

function validateForm(values: FieldValues): FieldErrors {
  const errors: FieldErrors = {}
  for (const fieldName of Object.keys(values) as FieldName[]) {
    const message = validateField(fieldName, values[fieldName])
    if (message) errors[fieldName] = message
  }
  return errors
}

export default function ValidationTimingDemo() {
  const [activeStrategyId, setActiveStrategyId] = useState(strategies[0].id)
  const [values, setValues] = useState(initialValues)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [visibleFields, setVisibleFields] = useState<VisibleFields>({})
  const [status, setStatus] = useState('')

  const activeStrategy = strategies.find((strategy) => strategy.id === activeStrategyId) ?? strategies[0]
  const errors = validateForm(values)

  function isFeedbackVisible(fieldName: FieldName) {
    if (activeStrategyId === 'blur-clear') {
      return visibleFields[fieldName] ?? hasSubmitted
    }
    return hasSubmitted || (activeStrategyId !== 'submit' && visibleFields[fieldName] === true)
  }

  const usernameError = isFeedbackVisible('username') ? errors.username : undefined
  const passwordError = isFeedbackVisible('password') ? errors.password : undefined

  function resetForStrategy(strategyId: string) {
    setActiveStrategyId(strategyId)
    setValues(initialValues)
    setHasSubmitted(false)
    setVisibleFields({})
    setStatus('')
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % strategies.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + strategies.length) % strategies.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = strategies.length - 1

    if (nextIndex !== index) {
      event.preventDefault()
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus()
      resetForStrategy(strategies[nextIndex].id)
    }
  }

  function handleChange(fieldName: FieldName, value: string) {
    setValues((previous) => ({ ...previous, [fieldName]: value }))
    setStatus('')

    if (activeStrategyId === 'change') {
      setVisibleFields((previous) => ({ ...previous, [fieldName]: true }))
    } else if (activeStrategyId === 'blur-clear') {
      setVisibleFields((previous) => ({ ...previous, [fieldName]: false }))
    }
  }

  function handleBlur(fieldName: FieldName) {
    if (activeStrategyId === 'blur' || activeStrategyId === 'blur-clear') {
      setVisibleFields((previous) => ({ ...previous, [fieldName]: true }))
    }
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setHasSubmitted(true)
    setVisibleFields({})
    setStatus(Object.keys(errors).length ? 'Fix the highlighted fields, then submit again.' : 'Both values are valid.')
  }

  return (
    <div className="validation-timing-demo">
      <header className="validation-demo-header">
        <div>
          <p className="validation-demo-kicker">FORM VALIDATION</p>
          <h2>When to show validation feedback</h2>
          <p className="validation-demo-source"><code>demo/day-5/validation-timing/ValidationTimingDemo.tsx</code></p>
        </div>
        <p>Errors are derived from current values. Choose when to show them; submitting reveals all current errors.</p>
      </header>

      <div className="validation-strategy-tabs" role="tablist" aria-label="Validation strategies">
        {strategies.map((strategy, index) => (
          <button
            key={strategy.id}
            id={`validation-strategy-tab-${strategy.id}`}
            type="button"
            role="tab"
            aria-selected={activeStrategyId === strategy.id}
            aria-controls="validation-strategy-panel"
            tabIndex={activeStrategyId === strategy.id ? 0 : -1}
            onClick={() => resetForStrategy(strategy.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {strategy.label}
          </button>
        ))}
      </div>

      <p className="validation-strategy-description">{activeStrategy.description}</p>

      <div className="validation-demo-grid">
        <section className="validation-form-panel" aria-label="Interactive form example">
          <p className="validation-panel-label">LIVE FORM</p>
          <p className="validation-strategy-title">{activeStrategy.title}</p>
          <form noValidate onSubmit={handleSubmit}>
            <div className="validation-field">
              <label htmlFor="demo-username">Username</label>
              <input
                id="demo-username"
                name="username"
                autoComplete="off"
                value={values.username}
                onChange={(event) => handleChange('username', event.target.value)}
                onBlur={() => handleBlur('username')}
                aria-invalid={Boolean(usernameError)}
                aria-describedby={usernameError ? 'demo-username-error' : undefined}
              />
              {usernameError && <span className="validation-field-error" id="demo-username-error">{usernameError}</span>}
            </div>

            <div className="validation-field">
              <label htmlFor="demo-password">Password</label>
              <input
                id="demo-password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={values.password}
                onChange={(event) => handleChange('password', event.target.value)}
                onBlur={() => handleBlur('password')}
                aria-invalid={Boolean(passwordError)}
                aria-describedby={passwordError ? 'demo-password-error' : undefined}
              />
              {passwordError && <span className="validation-field-error" id="demo-password-error">{passwordError}</span>}
            </div>

            <button className="validation-submit-button" type="submit">Submit</button>
            {status && <p className="validation-form-status" role="status">{status}</p>}
          </form>
        </section>

        <aside className="validation-code-panel" id="validation-strategy-panel" role="tabpanel" aria-labelledby={`validation-strategy-tab-${activeStrategy.id}`} tabIndex={0}>
          <p className="validation-panel-label">DERIVED ERRORS AND VISIBILITY</p>
          <pre><code>{`const errors = validateForm(values)\n\nfunction handleSubmit(event) {\n  event.preventDefault()\n  setHasSubmitted(true)\n}\n\n${activeStrategy.code}`}</code></pre>
          <p className="validation-code-caption">Errors update with values. Switch strategies to reset the form; submit reveals every current error.</p>
        </aside>
      </div>
    </div>
  )
}