export interface Person {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

let requestCount = 0
const listeners = new Set<() => void>()

function notify() {
  listeners.forEach((listener) => listener())
}

export async function fetchPerson(personId: number): Promise<Person> {
  requestCount += 1
  notify()

  const response = await fetch(`https://swapi.py4e.com/api/people/${personId}/`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}

// The helpers below only power the "Network requests" counter in the UI.
export function getRequestCount() {
  return requestCount
}

export function resetRequestCount() {
  requestCount = 0
  notify()
}

export function subscribeToRequestCount(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
