import { useSyncExternalStore } from 'react'
import { getRequestCount, subscribeToRequestCount } from './api'

export default function RequestCounter() {
  const requestCount = useSyncExternalStore(subscribeToRequestCount, getRequestCount)

  return (
    <div className="swq-counter">
      <span>Network requests sent:</span>
      <strong>{requestCount}</strong>
    </div>
  )
}
