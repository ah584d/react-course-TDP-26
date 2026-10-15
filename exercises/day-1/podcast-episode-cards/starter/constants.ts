import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/podcast-episode-cards/starter',
  title: 'Podcast Episode Cards',
  description: 'Pass props and add local state to two episode cards.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'starter',
  order: 4,
}

export const starterTasks = [
  'Pass title and host props from the parent to each EpisodeCard.',
  'Add separate useState variables: likeCount starts at 0 and note starts at "".',
  'Wire the Like button onClick to increment likeCount with a functional setter.',
  'Control the input with value={note} and update note in onChange.',
  'Display likeCount and note as text in the marked spots.',
]
