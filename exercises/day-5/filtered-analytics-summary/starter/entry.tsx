import { useState, useEffect } from 'react'
import { meta, sampleEvents, categories } from './constants'
import Preview from './Preview'
import { computeSummary } from './utils'
import './styles.css'

export { meta }

export default function FilteredAnalyticsSummaryStarter() {
  const [filter, setFilter] = useState<string>('all')
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 80)
    return () => clearInterval(id)
  }, [])

  const filteredEvents = sampleEvents.filter(
    (e) => filter === 'all' || e.category === filter
  )

  const summary = computeSummary(filteredEvents)

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Analytics Dashboard</h3>
        <p className="tick-label">Tick: {tick} (forces parent rerender every 80ms)</p>
        <div className="dashboard-container">
          <div className="filter-row">
            <label htmlFor="category-filter" className="filter-label">Filter by category:</label>
            <select
              id="category-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="summary-box">
            <p><strong>Events:</strong> {summary.count}</p>
            <p><strong>Total Value:</strong> {summary.totalValue}</p>
            <p><strong>Avg Value:</strong> {summary.avgValue}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
