import { starterTasks } from './constants'

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to edit</p>
        <code className="exercise-file-path">exercises/day-1/podcast-episode-cards/starter/entry.tsx</code>
        <code className="exercise-file-path">exercises/day-1/podcast-episode-cards/starter/EpisodeCard.tsx</code>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>Add props, primitive state, and a controlled input to each episode card</strong>
        <div className="task-list">
          {starterTasks.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
