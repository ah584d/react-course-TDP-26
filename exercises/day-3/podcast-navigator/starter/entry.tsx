import '../PodcastNavigator.css'
import { meta } from './constants'
import Preview from './Preview'
import { MemoryRouter } from 'react-router-dom'
// MemoryRouter keeps this optional exercise's route state in memory; its
// internal navigation does not change the browser address bar.

export { meta }

export default function PodcastNavigatorStarter() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your podcast navigator</h3>
        <div className="exercise-preview-shell">
          <MemoryRouter>
            {/* TODO: Add a Routes block here with two Route elements:
                  one for the list page at "/" and one for the details page at "/episode/:id" */}
          </MemoryRouter>
        </div>
      </section>
    </div>
  )
}
