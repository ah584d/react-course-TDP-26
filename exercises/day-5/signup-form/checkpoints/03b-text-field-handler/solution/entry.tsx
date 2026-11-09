import type { CourseTargetMeta } from '../../../../../../src/course.ts'
import SignupExerciseShell, { type SignupExercisePhase } from '../../../SignupExerciseShell'
import SignupForm from './SignupForm'

export const meta: CourseTargetMeta = {
  id: 'day-5/exercises/signup-form/checkpoints/03b-text-field-handler/solution',
  title: 'Signup Form - Checkpoint 3b: Shared Text-Field Handler',
  description: 'Refactor repeated text-field updates into one field-name handler.',
  dayOrder: 5,
  dayLabel: 'Day 5',
  kind: 'exercise',
  variant: 'solution',
  order: 5,
}

const phases: SignupExercisePhase[] = [
  {
    title: 'Checkpoint 3b',
    tasks: [
      'One handler updates any string field while preserving the previous state object.',
      'The terms checkbox keeps a separate boolean update.',
      'The submitted confirmation remains unchanged and excludes password values.',
    ],
  },
]

export default function SignupFormSharedTextFieldHandlerSolution() {
  return (
    <SignupExerciseShell
      badge="Solution - Checkpoint 3b"
      title="Signup Form"
      entryPath="exercises/day-5/signup-form/checkpoints/03b-text-field-handler/solution/entry.tsx"
      phases={phases}
    >
      <SignupForm />
    </SignupExerciseShell>
  )
}