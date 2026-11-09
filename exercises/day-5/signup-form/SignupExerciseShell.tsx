import { useState, type KeyboardEvent, type ReactNode } from 'react'
import './SignupForm.css'

export interface SignupExercisePhase {
  title: string
  tasks: string[]
  codeExample?: string
  tabLabel?: string
}

interface SignupExerciseShellProps {
  badge: string
  title: string
  entryPath: string
  phases: SignupExercisePhase[]
  exerciseTabs?: boolean
  intro?: string
  note?: string
  children: ReactNode
}

export default function SignupExerciseShell(props: SignupExerciseShellProps) {
  const [activeExercise, setActiveExercise] = useState(() => {
    const requestedExercise = new URLSearchParams(window.location.search).get('exercise')
    const requestedIndex = props.phases.findIndex((phase, index) =>
      (phase.tabLabel ?? String(index + 1)) === requestedExercise,
    )
    return requestedIndex >= 0 ? requestedIndex : 0
  })

  function selectExercise(index: number) {
    setActiveExercise(index)
    const url = new URL(window.location.href)
    url.searchParams.set('exercise', props.phases[index].tabLabel ?? String(index + 1))
    window.history.replaceState(null, '', url)
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % props.phases.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + props.phases.length) % props.phases.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = props.phases.length - 1

    if (nextIndex !== index) {
      event.preventDefault()
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus()
      selectExercise(nextIndex)
    }
  }

  return (
    <div className="lesson-surface">
      <section className="lesson-card exercise-header-card">
        <div className="exercise-header-copy">
          <p className="eyebrow">{props.badge}</p>
          <h2 className="exercise-title">{props.title}</h2>
          <code className="exercise-file-path">{props.entryPath}</code>
        </div>
        <div className="exercise-task-block exercise-task-block-inline">
          <p className="eyebrow">{props.badge === 'Starter' ? 'Todo' : 'Checkpoint'}</p>
          {props.intro && <p className="product-meta">{props.intro}</p>}
          {props.exerciseTabs ? (
            <>
              <div className="signup-exercise-tabs" role="tablist" aria-label="Signup form exercises">
                {props.phases.map((phase, index) => (
                  <button
                    key={phase.title}
                    id={`signup-exercise-tab-${index + 1}`}
                    className="signup-exercise-tab"
                    type="button"
                    role="tab"
                    aria-selected={activeExercise === index}
                    aria-controls="signup-exercise-panel"
                    tabIndex={activeExercise === index ? 0 : -1}
                    onClick={() => selectExercise(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                  >
                    Exercise {phase.tabLabel ?? index + 1}
                  </button>
                ))}
              </div>
              <div
                id="signup-exercise-panel"
                className="signup-exercise-panel"
                role="tabpanel"
                aria-labelledby={`signup-exercise-tab-${activeExercise + 1}`}
                tabIndex={0}
              >
                <p className="eyebrow">Exercise {props.phases[activeExercise].tabLabel ?? activeExercise + 1}: {props.phases[activeExercise].title}</p>
                {props.phases[activeExercise].codeExample && (
                  <pre className="signup-exercise-code"><code>{props.phases[activeExercise].codeExample}</code></pre>
                )}
                <div className="task-list">
                  {props.phases[activeExercise].tasks.map((task) => <p key={task}>{task}</p>)}
                </div>
              </div>
            </>
          ) : props.phases.map((phase) => (
            <div key={phase.title}>
              <p className="eyebrow">{phase.title}</p>
              <div className="task-list">
                {phase.tasks.map((task) => <p key={task}>{task}</p>)}
              </div>
            </div>
          ))}
          {props.note && <p className="product-meta">{props.note}</p>}
        </div>
      </section>

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your signup form</h3>
        <div className="exercise-preview-shell signup-preview-shell">
          {props.children}
        </div>
      </section>
    </div>
  )
}