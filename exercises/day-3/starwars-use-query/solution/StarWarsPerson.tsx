import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { resetRequestCount } from './api'
import PersonDetails from './PersonDetails'
import PersonHeader from './PersonHeader'
import RequestCounter from './RequestCounter'

const PEOPLE = [
  { id: 1, label: 'Luke' },
  { id: 4, label: 'Darth Vader' },
  { id: 5, label: 'Leia' },
]

function PersonViewer(props: { queryClient: QueryClient }) {
  const [personId, setPersonId] = useState(1)

  function handleReset() {
    resetRequestCount()
    props.queryClient.resetQueries()
  }

  return (
    <div className="swq-app">
      <div className="swq-toolbar">
        <span className="swq-toolbar-label">Pick a character:</span>
        {PEOPLE.map((person) => (
          <button
            key={person.id}
            type="button"
            className={`swq-button${person.id === personId ? ' swq-button-active' : ''}`}
            onClick={() => setPersonId(person.id)}
          >
            {person.label}
          </button>
        ))}
        <button type="button" className="swq-button swq-button-reset" onClick={handleReset}>
          Clear cache &amp; counter
        </button>
      </div>

      <div className="swq-panels">
        <PersonHeader personId={personId} />
        <PersonDetails personId={personId} />
      </div>

      <RequestCounter />
      <p className="swq-hint">
        PersonHeader and PersonDetails both call usePerson({personId}). With useQuery they share one cache entry,
        so the counter should go up by 1 - and not at all when you go back to a character you already loaded.
      </p>
    </div>
  )
}

export default function StarWarsPerson() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          // Keep cached data "fresh" so going back to a character does not trigger a refetch.
          queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <PersonViewer queryClient={queryClient} />
    </QueryClientProvider>
  )
}
