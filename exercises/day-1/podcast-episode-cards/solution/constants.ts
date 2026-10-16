import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/podcast-episode-cards/solution',
  title: 'Podcast Episode Cards',
  description: 'Completed version – props passed, local state wired with event handlers.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'solution',
  order: 4,
}

export const solutionTasks = [
  'Pass title and host props from the parent to each EpisodeCard.',
  'Add separate useState variables for likeCount and note inside EpisodeCard.',
  'Wire onClick on the Like button to increment likeCount with a functional setter.',
  'Control the input with value={note} and update note in onChange.',
  'Display likeCount and note as text.',
]
