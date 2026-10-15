import { solutionTasks } from './constants'

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to review</p>
        <code className="exercise-file-path">exercises/day-1/podcast-episode-cards/solution/entry.tsx</code>
        <code className="exercise-file-path">exercises/day-1/podcast-episode-cards/solution/EpisodeCard.tsx</code>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>Props, primitive state, and a controlled input wired in each episode card</strong>
        <div className="task-list">
          {solutionTasks.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
