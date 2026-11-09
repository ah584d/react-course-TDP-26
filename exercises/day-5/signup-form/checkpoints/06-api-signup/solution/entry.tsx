import type { CourseTargetMeta } from '../../../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../../../SignupExerciseShell'
import SignupForm from '../../../solution/SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/checkpoints/06-api-signup/solution',
  title: 'Signup Form - Checkpoint 6: API Submission',
  description: 'Submit a valid signup to the prepared API and handle the result.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 8,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Checkpoint 6',
    tasks: [
      'Local validation feedback is derived from form values; keep the Exercise 4 submissionNotice for local-validation and username-check messages.',
      'SignupAsyncTextField renders username availability feedback from its result prop and is disabled during requests.',
      'Import submitSignup and type SignupSubmissionFeedback. Store its { status: "success" | "error", message: string } result in submissionResult, initialized to null.',
      'Submit only when local validation passes and usernameCheck.result?.status === "success". The helper sends only the username and returns success or error feedback.',
      'The API rechecks availability before claiming the username; if it is no longer available, display the returned error message.',
      'Submit shows a pending state and prevents duplicate requests while isSubmitting is true.',
      'Keep the form in place and show success or retryable failure feedback; routing is added in a later checkpoint.',
    ],
  },
]

export default function SignupFormApiSolution() {
  return (
    <SignupExerciseShell
      badge="Solution - Checkpoint 6"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/checkpoints/06-api-signup/solution/entry.tsx"
      phases={phases}
      note="Start the prepared API with npm run day5:api. This is simulated signup, not authentication."
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}