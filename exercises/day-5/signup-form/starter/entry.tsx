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
      'Make the name and email inputs controlled, using React state.',
      'Create handler functions for updating name and email, use these in the controlled inputs',
      'In handleSubmit, remove the formData constant, and use the controlled name and email state to set the submittedName.',
      'Remove the name attributes from both inputs.',
      'Keep the form on the page after submit and show a message such as: Submitted for Maya Chen (maya@example.com).',
    ],
  },
  {
    title: 'Build a reusable text field',
    tasks: [
      'Create SignupTextField.tsx beside SignupForm.tsx in the folder structure.',
      'Create its props type, including id, label, value, required and change handler props. Accept optional type and autoComplete props',
      'Destructure the props in the component signature, use a default value of type = "text"',
      'Render a JSX native label and input, using the correct values for id and htmlFor to link label and input. Make the input required.',
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
      'Use the provided SignupValues interface to create one values object saved in state containing name, email, username, password, passwordConfirmation, and boolean acceptedTerms.',
      'Create one change handler per text field. Each handler should update only its field with a functional setValues update, preserving the previous object.',
      'Remove the current name and email saved in state, replace their use where needed.',
      'Use SignupTextField for the text inputs.',
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
      'Import validateSignup and derive the current errors from form values; do not store the error map in state.',
      'Track whether the form has been submitted to control when derived errors are shown.',
      'Create updateValues(nextValues: SignupValues). Inside it, call setValues(nextValues), clear the existing submit confirmation, and call setSubmissionNotice("") to clear any notice about the previous values. Change updateTextField and the terms checkbox handler to call updateValues with the new values instead of calling setValues directly.',
      'Add submissionNotice state initialized to an empty string. In the submit handler, when validation errors exist, set it to "Please correct the highlighted fields." and return; otherwise clear it and keep the existing valid-submit confirmation. If the submissionNotice is non-empty, render below the fields with className="signup-form__error" and role="alert".',
      'Extend SignupTextField with an optional errorMessage prop and show each field’s validation message.',
      'Remove the "required" property inside the input in SignupTextField and the checkbox.',
      'Add aria-invalid={Boolean(<relevant_error_message>)} inside the inputs',
      'Conditionally show each field’s error message using a <span></span> element in SignupTextField or <p></p> below the checkbox. Use className="signup-form__error".',
      'Keep Submit enabled so users can request validation feedback.',
    ],
  },
  {
    title: 'Check username availability',
    tabLabel: '5',
    tasks: [
      'Check out the server code at code/day_5/forms-api/server.mjs and add your name to the Set of allowed usernames.',
      'Open a new terminal at the project root and run npm run day5:api',
      'Create usernameCheck state with isPending and result. Start with isPending: false and result: null; result is either null or { status: "success" | "error", message: string }.',
      'Write async validateUsername. First set { isPending: true, result: null }, then await checkUsername from signupApi.ts with the current username and store the returned result with isPending: false.',
      'checkUsername handles the API response and request failures. It returns success when available, error with the API message when unavailable, or error with a retry message if the request fails; no try/catch is needed in validateUsername.',
      'Create handleUsernameChange(username). In it, set usernameCheck to { isPending: false, result: null }, then call updateTextField("username", username).',
      'Last, replace the username SignupTextField with the provided SignupAsyncTextField from ../SignupAsyncTextField. Pass id, label, value, errorMessage, pending, result, onChange={handleUsernameChange}, and onBlur={validateUsername}. The field disables itself while pending.',
      'Each blur calls validateUsername and makes a fresh request. The component shows Loading... and the result message; do not render duplicate feedback beside it.',
    ],
  },
  {
    title: 'Submit the signup',
    tabLabel: '6',
    tasks: [
      'Add submitSignup and type SignupSubmissionFeedback to the existing import from ../signupApi. Add isSubmitting state initialized to false and submissionResult state initialized to null with type SignupSubmissionFeedback | null. A result is { status: "success" | "error", message: string }.',
      'Extend updateValues(nextValues) from Exercise 4 to call setSubmissionResult(null), alongside setSubmissionNotice(""), whenever form values change. This clears a result that belongs to the previous values.',
      'Keep the local validation guard from Exercise 4. If hasErrors is true, set the existing submissionNotice to "Please correct the highlighted fields." and return.',
      'After local validation passes, require usernameCheck.result?.status === "success". Otherwise set submissionNotice to "Check the username field and wait until it says your username is available before submitting." and return without sending a POST.',
      'Set isSubmitting to true, then call const result = await submitSignup(normalizeUsername(values.username)) and pass result to setSubmissionResult(result). This stores the returned { status, message } object so the UI can display its message. Then set isSubmitting back to false.',
      'Show a pending label and disable Submit and SignupAsyncTextField while isSubmitting is true.',
      'Render submissionResult.message in place. Keep the entered values if the result is an error so the user can retry. Clear the values if it is a success so the user can do another call.',
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