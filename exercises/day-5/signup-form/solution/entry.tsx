import type { CourseTargetMeta } from '../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/solution',
  title: 'Signup Form - Complete Forms Solution',
  description: 'Complete React signup form with validation and asynchronous API feedback.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 9,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Complete forms solution',
    tasks: [
      'The form derives local validation errors from current values and uses submissionNotice for form-level feedback.',
      'SignupAsyncTextField renders username availability feedback from its result prop; the field is disabled during checks and signup submission has separate pending state.',
      'submitSignup returns SignupSubmissionFeedback for the form to display; routing is intentionally not included yet.',
    ],
  },
]

export default function SignupFormCompleteSolution() {
  return (
    <SignupExerciseShell
      badge="Solution"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/solution/entry.tsx"
      phases={phases}
      note="Start the prepared API with npm run day5:api. This solution does not authenticate users or store passwords."
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}