import { counterTasks } from './constants'

interface CounterPreviewProps {
  variant: 'starter' | 'solution'
}

export default function CounterPreview(props: CounterPreviewProps) {
  const isStarter = props.variant === 'starter'

  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">{isStarter ? 'File to edit' : 'File to review'}</p>
        <code className="exercise-file-path">
          exercises/day-1/counter/{props.variant}/entry.tsx
        </code>
      </div>
      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">{isStarter ? 'Todo' : 'Completed'}</p>
        <strong>Primitive state and click handlers</strong>
        <div className="task-list">
          {counterTasks.map(task => <p key={task}>{task}</p>)}
        </div>
      </div>
    </section>
  )
}