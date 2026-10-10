import type { AnalyticsEvent } from './constants'

/**
 * Simulates an expensive computation over the events list.
 * In real apps this could be a complex aggregation, statistical analysis, etc.
 */
export function computeSummary(events: AnalyticsEvent[]) {
  console.log(`📊 Computing summary for ${events.length} events...`)

  // Artificially slow — simulate expensive work
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