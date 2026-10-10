import { useState, useEffect, useMemo } from 'react'
import { meta, sampleEvents, categories } from './constants'
import type { AnalyticsEvent } from './constants'
import Preview from './Preview'

export { meta }

function computeSummary(events: AnalyticsEvent[]) {
  console.log(`📊 Computing summary for ${events.length} events...`)

  let waste = 0
  for (let i = 0; i < 5_000_000; i++) {
    waste += Math.sqrt(i)
  }
  void waste

  const totalValue = events.reduce((sum, e) => sum + e.value, 0)
  const avgValue = events.length > 0 ? totalValue / events.length : 0

  return {
    count: events.length,
    totalValue,
    avgValue: Math.round(avgValue * 100) / 100,
  }
}

export default function FilteredAnalyticsSummarySolution() {
  const [filter, setFilter] = useState<string>('all')
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 80)
    return () => clearInterval(id)
  }, [])

  const filteredEvents = sampleEvents.filter(
    (e) => filter === 'all' || e.category === filter
  )

  const summary = useMemo(() => computeSummary(filteredEvents), [filteredEvents])

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Analytics Dashboard</h3>
        <p style={{ fontSize: '12px', opacity: 0.6 }}>Tick: {tick} (forces parent rerender every 80ms)</p>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="category-filter" style={{ marginRight: '8px' }}>Filter by category:</label>
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

          <div style={{ padding: '12px', border: '1px solid #444', borderRadius: '8px' }}>
            <p><strong>Events:</strong> {summary.count}</p>
            <p><strong>Total Value:</strong> {summary.totalValue}</p>
            <p><strong>Avg Value:</strong> {summary.avgValue}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
