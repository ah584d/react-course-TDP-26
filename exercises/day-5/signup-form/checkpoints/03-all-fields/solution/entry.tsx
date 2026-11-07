import type { CourseTargetMeta } from '../../../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../../../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/checkpoints/03-all-fields/solution',
  title: 'Signup Form - Checkpoint 3: Add the Fields',
  description: 'Add the remaining signup fields using the text-field component.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 4,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Checkpoint 3',
    tasks: [
      'Add username, password, and password confirmation using SignupTextField.',
      'Keep the terms checkbox native and read its checked value as a boolean.',
      'Keep password values out of the submit confirmation.',
    ],
  },
]

export default function SignupFormValidationSolution() {
  return (
    <SignupExerciseShell
      badge="Solution - Checkpoint 3"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/checkpoints/03-all-fields/solution/entry.tsx"
      phases={phases}
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}