import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPerson, type Person } from "./requestLog";

export interface PersonState {
  person: Person | undefined;
  isPending: boolean;
  error: Error | null;
}

export type UsePerson = (personId: number, component: string) => PersonState;

// Both hooks have the same signature, so the components below do not know which one they use.

// useQuery: every component with the same queryKey shares one cache entry, so queryFn runs once.
export function usePersonQuery(personId: number): PersonState {
  const { data, isPending, error } = useQuery({
    queryKey: ["person", personId],
    queryFn: () => fetchPerson(personId, "useQuery · queryFn (shared)"),
  });

  return { person: data, isPending, error };
}

// Classic useEffect + fetch: every component that calls this hook sends its own request.
export function usePersonFetch(personId: number, component: string): PersonState {
  const [result, setResult] = useState<{
    personId: number;
    person?: Person;
    error?: Error;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const person = await fetchPerson(personId, component, controller.signal);
        setResult({ personId, person });
      } catch (error) {
        if (controller.signal.aborted) return;
        setResult({ personId, error: error as Error });
      }
    }

    load();
    return () => controller.abort();
  }, [personId, component]);

  const current = result?.personId === personId ? result : null;

  return {
    person: current?.person,
    isPending: current === null,
    error: current?.error ?? null,
  };
}
