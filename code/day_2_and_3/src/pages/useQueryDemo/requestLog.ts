import { useSyncExternalStore } from "react";

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface RequestLogEntry {
  id: number;
  source: string;
  url: string;
  durationMs: number;
}

let entries: RequestLogEntry[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

// Every HTTP request goes through here, so the page can show exactly how many were sent.
// A request is logged once its response arrives; aborted requests (e.g. the user switches
// character before the response comes back) are never logged.
export async function fetchPerson(
  personId: number,
  source: string,
  signal?: AbortSignal,
): Promise<Person> {
  const url = `https://swapi.py4e.com/api/people/${personId}/`;
  const startedAt = performance.now();

  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const person: Person = await response.json();

  entries = [
    ...entries,
    {
      id: entries.length + 1,
      source,
      url,
      durationMs: Math.round(performance.now() - startedAt),
    },
  ];
  emit();

  return person;
}

export function clearRequestLog() {
  entries = [];
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useRequestLog() {
  return useSyncExternalStore(subscribe, () => entries);
}
