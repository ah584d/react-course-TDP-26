import type { CourseTargetMeta } from '../../../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../../../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/checkpoints/05-username-check/solution',
  title: 'Signup Form - Checkpoint 5: Username Check',
  description: 'Check the username with the prepared API and show asynchronous feedback.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 7,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Checkpoint 5',
    tasks: [
      'Username availability is checked on blur through GET /api/usernames/check.',
      'The field displays checking, available, unavailable, or request-failure feedback.',
      'Changing the username clears old feedback; stale responses are ignored.',
    ],
  },
]

export default function SignupFormUsernameCheckSolution() {
  return (
    <SignupExerciseShell
      badge="Solution - Checkpoint 5"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/checkpoints/05-username-check/solution/entry.tsx"
      phases={phases}
      note="The API validates usernames only; it does not receive passwords or create a login session."
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}