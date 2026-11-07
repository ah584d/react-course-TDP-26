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
      'Submit shows a pending state and prevents duplicate requests.',
      'The API rechecks and claims the username; the password and other values are not sent.',
      'Success and failure are displayed in place. Routing is added in a later checkpoint.',
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