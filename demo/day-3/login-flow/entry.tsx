import type { CourseTargetMeta } from '../../../src/course'
import LoginFlowDemo from './LoginFlowDemo'

export const meta: CourseTargetMeta = {
  id: 'day-3/demo/login-flow',
  title: 'Login Flow: Navigation and Errors',
  description: 'Choose a mocked login outcome and compare navigation with error handling.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'demo',
  variant: 'demo',
  order: 3,
  routing: 'browser',
}

export default function LoginFlowTarget() {
  return <LoginFlowDemo />
}