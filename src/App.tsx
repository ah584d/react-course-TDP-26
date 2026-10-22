import { useEffect } from 'react'
import Sandbox from '../sandbox/Sandbox'
import {
  courseDays,
  courseTargets,
  getCourseDay,
  getDayHref,
  getDayTargets,
  getVariantLabel,
  resolveRequestedDay,
  resolveRequestedTarget,
} from './course'

function App() {
  const requestedTarget = resolveRequestedTarget()
  const requestedDay = resolveRequestedDay()
  const selectedTarget = requestedTarget
    ? courseTargets.find((target) => target.meta.id === requestedTarget)
    : undefined
  const selectedDay = requestedDay ? getCourseDay(requestedDay) : undefined

  useEffect(() => {
    if (requestedTarget === 'sandbox') {
      document.title = 'Live Coding Sandbox | React Course Material'
      return
    }

    if (selectedTarget) {
      document.title = `${selectedTarget.meta.title} | React Course Material`
      return
    }

    if (selectedDay) {
      document.title = `${selectedDay.dayLabel} | React Course Material`
      return
    }

    document.title = 'React Course Material | Presentations, Demos, and Exercises'
  }, [requestedTarget, selectedDay, selectedTarget])

  if (requestedTarget === 'sandbox') {
    return <Sandbox />
  }

  if (requestedTarget && selectedTarget) {
    const SelectedTarget = selectedTarget.component
    const targetDay = getCourseDay(selectedTarget.meta.dayLabel)

    return (
      <main className="app-shell">
        <section className="viewer-shell">
          <div className="viewer-topbar">
            <a className="viewer-back" href={targetDay ? getDayHref(targetDay) : '/'}>
              <span className="viewer-back-icon" aria-hidden="true">
                ←
              </span>
              <span>{targetDay ? `Back to ${targetDay.dayLabel}` : 'Back to all days'}</span>
            </a>
            <div className="viewer-context-pills" aria-label="Current selection metadata">
              <span className="viewer-pill viewer-pill-day">{selectedTarget.meta.dayLabel}</span>
              <span className={`viewer-pill viewer-pill-variant viewer-pill-variant-${selectedTarget.meta.variant}`}>
                {getVariantLabel(selectedTarget.meta.variant)}
              </span>
            </div>
          </div>

          <header className="viewer-header">
            <div>
              <p className="eyebrow">{selectedTarget.meta.kind === 'demo' ? 'Live demo' : 'Exercise target'}</p>
              <h1>{selectedTarget.meta.title}</h1>
              {selectedTarget.meta.description ? <p>{selectedTarget.meta.description}</p> : null}
            </div>
          </header>

          <section className="viewer-stage">
            <SelectedTarget />
          </section>
        </section>
      </main>
    )
  }

  const invalidSelectionMessage = requestedTarget
    ? `No target matched "${requestedTarget}". Pick a day below and open a valid demo or exercise.`
    : requestedDay && !selectedDay
      ? `No day matched "${requestedDay}". Pick one of the course days below.`
      : undefined

  if (selectedDay) {
    const demos = getDayTargets(selectedDay.dayLabel, 'demo')
    const exercises = getDayTargets(selectedDay.dayLabel, 'exercise')
    const exerciseGroups = Array.from(
      exercises
        .reduce(
          (groups, target) => {
            const groupId = target.meta.id.replace(/\/(starter|solution)$/, '')
            const existingGroup = groups.get(groupId) ?? {
              key: groupId,
              title: target.meta.title,
              description: target.meta.description,
              starter: undefined as typeof target | undefined,
              solution: undefined as typeof target | undefined,
            }

            existingGroup.description ||= target.meta.description

            if (target.meta.variant === 'starter') {
              existingGroup.starter = target
            }

            if (target.meta.variant === 'solution') {
              existingGroup.solution = target
            }

            groups.set(groupId, existingGroup)
            return groups
          },
          new Map<
            string,
            {
              key: string
              title: string
              description?: string
              starter?: (typeof exercises)[number]
              solution?: (typeof exercises)[number]
            }
          >(),
        )
        .values(),
    )

    return (
      <main className="app-shell">
        <a className="page-back-link" href="/">
          <span aria-hidden="true">←</span>
          <span>Back to home</span>
        </a>

        <section className="hero-panel hero-panel-compact day-hero-panel">
          <div className="day-hero-header">
            <div className="day-hero-copy">
              <p className="eyebrow">{selectedDay.dayLabel}</p>
              <h1>{selectedDay.dayLabel} materials.</h1>
              <p className="hero-copy">
                Open the presentation or jump directly into the demos and exercises for this workshop day.
              </p>
            </div>

            <div className="hero-actions day-hero-actions">
              {selectedDay.presentationHref ? (
                <a className="hero-link" href={selectedDay.presentationHref} target="_blank" rel="noreferrer">
                  Open presentation
                </a>
              ) : (
                <span className="hero-link hero-link-muted">Presentation coming soon</span>
              )}
            </div>
          </div>
        </section>

        <section className="day-detail-grid">
          <article className="day-section-panel day-section-panel-demos">
            <div className="day-section">
              <div className="day-section-heading">
                <h3>Demos</h3>
              </div>

              {demos.length > 0 ? (
                <div className="target-list">
                  {demos.map((target) => (
                    <a className="target-card target-card-demo" href={`/?target=${target.meta.id}`} key={target.meta.id}>
                      <div className="target-card-top">
                        <span className="target-kind target-kind-demo">Demo</span>
                      </div>
                      <h3>{target.meta.title}</h3>
                      {target.meta.description ? <p>{target.meta.description}</p> : null}
                      <code>{target.meta.id}</code>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="empty-state">No demos added yet.</p>
              )}
            </div>
          </article>

          <article className="day-section-panel day-section-panel-exercises">
            <div className="day-section">
              <div className="day-section-heading">
                <h3>Exercises</h3>
              </div>

              {exerciseGroups.length > 0 ? (
                <div className="target-list">
                  {exerciseGroups.map((exerciseGroup) => (
                    <article className="target-card target-card-exercise exercise-group-card" key={exerciseGroup.key}>
                      <div className="target-card-top">
                        <span className="target-kind target-kind-exercise">Exercise</span>
                      </div>
                      <h3>{exerciseGroup.title}</h3>
                      {exerciseGroup.description ? <p>{exerciseGroup.description}</p> : null}
                      <div className="exercise-links">
                        {exerciseGroup.starter ? (
                          <a className="exercise-link exercise-link-starter" href={`/?target=${exerciseGroup.starter.meta.id}`}>
                            Starter
                          </a>
                        ) : null}
                        {exerciseGroup.solution ? (
                          <a className="exercise-link exercise-link-solution" href={`/?target=${exerciseGroup.solution.meta.id}`}>
                            Solution
                          </a>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="empty-state">No exercises added yet.</p>
              )}
            </div>
          </article>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">React course material</p>
        <h1 className="hero-title-short">Course materials</h1>
        <p className="hero-copy">
          Start from a clean overview of all days, open a presentation, or move into a dedicated page for each
          day's demos and exercises.
        </p>
      </section>

      {invalidSelectionMessage ? (
        <section className="status-panel">
          <p className="status-title">Selection not found</p>
          <p>{invalidSelectionMessage}</p>
        </section>
      ) : null}

      <section className="overview-grid" aria-label="Course day overview">
        {courseDays.map((day) => {
          return (
            <article className="overview-card" key={day.dayId}>
              <h2>{day.folderName}</h2>
              <div className="overview-actions">
                {day.presentationHref ? (
                  <a className="overview-action overview-action-presentation" href={day.presentationHref} target="_blank" rel="noreferrer">
                    Presentation
                  </a>
                ) : (
                  <span className="overview-action overview-action-muted">Presentation pending</span>
                )}
                <a className="overview-action overview-action-primary" href={getDayHref(day)}>
                  Demos and exercises
                </a>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default App