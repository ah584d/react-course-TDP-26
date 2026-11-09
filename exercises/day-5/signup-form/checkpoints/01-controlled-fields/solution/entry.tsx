import type { CourseTargetMeta } from '../../../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../../../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/checkpoints/01-controlled-fields/solution',
  title: 'Signup Form - Checkpoint 1: Controlled Fields',
  description: 'Keep name and email in React state and display them in an on-page message after submit.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 2,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Checkpoint 1',
    tasks: [
      'Name and email are controlled by React state, and the submit handler reads those state values instead of FormData.',
      'After Submit, the page displays the name and email, for example: Submitted for Maya Chen (maya@example.com).',
      'The button stays enabled so the form can be submitted at any time.',
    ],
  },
]

export default function SignupFormControlledFieldsSolution() {
  return (
    <SignupExerciseShell
      badge="Solution - Checkpoint 1"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/checkpoints/01-controlled-fields/solution/entry.tsx"
      phases={phases}
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}