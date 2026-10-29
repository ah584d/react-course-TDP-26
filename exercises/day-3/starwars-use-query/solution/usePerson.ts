import { useQuery } from '@tanstack/react-query'
import { fetchPerson } from './api'

export function usePerson(personId: number) {
  return useQuery({
    queryKey: ['person', personId],
    queryFn: () => fetchPerson(personId),
  })
}
