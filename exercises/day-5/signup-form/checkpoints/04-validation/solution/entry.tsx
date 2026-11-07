import type { CourseTargetMeta } from '../../../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../../../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/checkpoints/04-validation/solution',
  title: 'Signup Form - Checkpoint 4: Validation',
  description: 'Wire the provided validator to accessible inline field feedback.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 6,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Checkpoint 4',
    tasks: [
      'Import validateSignup and call it when the form is submitted.',
      'Add an optional errorMessage prop to SignupTextField and associate the message with its input.',
      'Update field feedback after an invalid submit; keep Submit enabled.',
    ],
  },
]

export default function SignupFormReusableFieldSolution() {
  return (
    <SignupExerciseShell
      badge="Solution - Checkpoint 4"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/checkpoints/04-validation/solution/entry.tsx"
      phases={phases}
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}