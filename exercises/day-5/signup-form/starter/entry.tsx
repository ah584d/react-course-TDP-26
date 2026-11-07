import type { CourseTargetMeta } from '../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/starter',
  title: 'Signup Form',
  description: 'Build a working signup form, then add a reusable field, validation, and API feedback.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'starter',
  order: 1,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Control name and email',
    tasks: [
      'Replace the starter FormData read with controlled name and email state.',
      'Remove the name attributes from both inputs; submit using the React state values instead of FormData.',
      'Keep the form on the page after submit and show a message such as: Submitted for Maya Chen (maya@example.com).',
    ],
  },
  {
    title: 'Build a reusable text field',
    tasks: [
      'Create SignupTextField.tsx beside SignupForm.tsx in the folder structure.',
      'Create its props type, including id, label, value, and change handler props. Accept an optional type prop',
      'Destructure the props in the component signature, use a default value of type = "text"',
      'Render a JSX native label and input, using the correct values for id and htmlFor to link label and input',
      'Replace the name and email markup with your component without changing how the form behaves.',
      'Make sure to pass the correct "type" value for the email input'
    ],
  },
  {
    title: 'Add the remaining fields',
    codeExample: `interface SignupValues {
  name: string
  email: string
  username: string
  password: string
  passwordConfirmation: string
  acceptedTerms: boolean
}`,
    tasks: [
      'Use the provided SignupValues interface for one values object containing name, email, username, password, passwordConfirmation, and boolean acceptedTerms.',
      'Create one change handler per text field. Each handler should update only its field with a functional setValues update, preserving the previous object.',
      'Use SignupTextField for the text inputs',
      'Add "I agree to the terms" as a native checkbox and update acceptedTerms with event.target.checked when it is toggled.',
      'Keep the submit confirmation useful, but never display password values.',
    ],
  },
  {
    title: 'Refactor text-field updates',
    tabLabel: '3b',
    codeExample: `type SignupTextFieldName =
  | 'name'
  | 'email'
  | 'username'
  | 'password'
  | 'passwordConfirmation'`,
    tasks: [
      'Use SignupTextFieldName for the fieldName parameter in one shared updateTextField(fieldName, newValue) handler. The new handler should update only that field while preserving the rest of the form state.',
      'Pass each SignupTextField an onChange callback that supplies its field name and new string value.',
      'Keep the terms checkbox on its own handler because it updates a boolean from event.target.checked.',
      'Keep the submit confirmation unchanged and never display password values.',
    ],
  },
  {
    title: 'Show validation feedback',
    tabLabel: '4',
    tasks: [
      'Import validateSignup from the provided helper and use it when the form is submitted.',
      'Extend SignupTextField with an optional errorMessage prop and show each field’s validation message.',
      'Keep Submit enabled so users can request validation feedback.',
    ],
  },
  {
    title: 'Check username availability',
    tabLabel: '5',
    tasks: [
      'Call the prepared GET endpoint when the username field loses focus.',
      'Show pending, available, unavailable, and retryable request-error feedback.',
      'Clear stale feedback when the username changes.',
    ],
  },
  {
    title: 'Submit the signup',
    tabLabel: '6',
    tasks: [
      'Validate before sending the request and require a current available-username result.',
      'Send only the username to the prepared signup API. Do not send or store the password.',
      'Show a pending state and disable Submit only while a request is pending.',
      'Stay on the form and show a retryable message on failure or an in-place confirmation on success.',
    ],
  },
]

export default function SignupFormStarter() {
  return (
    <SignupExerciseShell
      badge="Starter"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/starter/entry.tsx"
      phases={phases}
      exerciseTabs
      intro="Continue in this same starter file. Each exercise builds on your previous changes."
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}