import { type Person } from './api'

interface UsePersonResult {
  data: Person | undefined
  isPending: boolean
  error: Error | null
}

// TODO: Replace this placeholder with a real useQuery call.
//   1. Import useQuery from "@tanstack/react-query" and fetchPerson from "./api"
//   2. Use queryKey: ["person", personId] so every component asking for the same person shares one cache entry
//   3. Use queryFn: () => fetchPerson(personId)
//   4. Return the result of useQuery directly
export function usePerson(personId: number): UsePersonResult {
  void personId
  return { data: undefined, isPending: false, error: null }
}
