import type { CourseTargetMeta } from '../../../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../../../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/checkpoints/02-reusable-field/solution',
  title: 'Signup Form - Checkpoint 2: Build a Text Field',
  description: 'Build a reusable React component around a native text input.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 3,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Checkpoint 2',
    tasks: [
      'Build SignupTextField with id, label, value, type, and onChange props.',
      'Connect its label to the native input and keep the form state in SignupForm.',
      'Replace the name and email markup with the component without changing behavior.',
    ],
  },
]

export default function SignupFormAllFieldsSolution() {
  return (
    <SignupExerciseShell
      badge="Solution - Checkpoint 2"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/checkpoints/02-reusable-field/solution/entry.tsx"
      phases={phases}
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}