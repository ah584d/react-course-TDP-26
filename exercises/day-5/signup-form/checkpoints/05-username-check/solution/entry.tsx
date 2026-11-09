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
      'Continue deriving local validation errors from the current form values and reuse submissionNotice for form-level feedback; keep username request state separate.',
      'usernameCheck starts as { isPending: false, result: null }; result is null or { status: "success" | "error", message }.',
      'validateUsername sets pending and clears the result, awaits checkUsername, then stores success/error feedback. Catch request failures and set pending false there too.',
      'A username edit sets { isPending: false, result: null }. The async field disables itself while pending, preventing overlapping checks.',
      'SignupAsyncTextField renders Loading... and the result message; pass the result object as a prop instead of rendering another message.',
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