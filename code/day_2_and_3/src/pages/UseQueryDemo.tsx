import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PersonHeader from "./useQueryDemo/PersonHeader";
import PersonProfile from "./useQueryDemo/PersonProfile";
import { clearRequestLog, useRequestLog } from "./useQueryDemo/requestLog";
import {
  usePersonFetch,
  usePersonQuery,
  type UsePerson,
} from "./useQueryDemo/usePerson";
import "./UseQueryDemo.css";

type Mode = "query" | "fetch";

const PEOPLE = [
  { id: 1, label: "Luke" },
  { id: 4, label: "Darth Vader" },
  { id: 5, label: "Leia" },
];

// A fresh QueryClient (= an empty cache) for every run of the demo.
function FreshQueryClient(props: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
}

function Panels(props: { personId: number; usePerson: UsePerson }) {
  return (
    <div className="uq-panels">
      <PersonHeader personId={props.personId} usePerson={props.usePerson} />
      <PersonProfile personId={props.personId} usePerson={props.usePerson} />
    </div>
  );
}

function UseQueryDemo() {
  const [mode, setMode] = useState<Mode>("query");
  const [personId, setPersonId] = useState(1);
  const [runId, setRunId] = useState(0);
  const requests = useRequestLog();

  function restart(nextMode: Mode) {
    clearRequestLog();
    setMode(nextMode);
    setPersonId(1);
    setRunId((current) => current + 1);
  }

  return (
    <div className="uq-page">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useQuery vs classic fetch</h1>
      <p className="uq-subtitle">
        Two components show different info about the same character. How many
        HTTP requests does it take?
      </p>

      <div className="uq-toolbar">
        <button
          className={`uq-button${mode === "query" ? " uq-active" : ""}`}
          onClick={() => restart("query")}
        >
          ⚡ useQuery (shared cache)
        </button>
        <button
          className={`uq-button${mode === "fetch" ? " uq-active uq-active-bad" : ""}`}
          onClick={() => restart("fetch")}
        >
          🐌 Classic fetch (useEffect)
        </button>
        <button
          className="uq-button uq-reset"
          onClick={() => restart(mode)}
        >
          Reset
        </button>
      </div>

      <div className="uq-toolbar">
        <span className="uq-label">Character:</span>
        {PEOPLE.map((person) => (
          <button
            key={person.id}
            className={`uq-button${person.id === personId ? " uq-active" : ""}`}
            onClick={() => setPersonId(person.id)}
          >
            {person.label}
          </button>
        ))}
      </div>

      {mode === "query" ? (
        <FreshQueryClient key={`query-${runId}`}>
          <Panels personId={personId} usePerson={usePersonQuery} />
        </FreshQueryClient>
      ) : (
        <Panels
          key={`fetch-${runId}`}
          personId={personId}
          usePerson={usePersonFetch}
        />
      )}

      <div
        className={`uq-counter${mode === "fetch" ? " uq-counter-bad" : ""}`}
      >
        <span>HTTP requests sent:</span>
        <strong>{requests.length}</strong>
      </div>

      <table className="uq-log">
        <thead>
          <tr>
            <th>#</th>
            <th>Sent by</th>
            <th>URL</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {requests.length === 0 && (
            <tr>
              <td colSpan={4} className="uq-empty">
                No requests yet
              </td>
            </tr>
          )}
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.source}</td>
              <td>{request.url}</td>
              <td>{request.durationMs} ms</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="uq-hint">
        {mode === "query"
          ? "Same queryKey in both components = one request. Go back to a character you already loaded: no new request at all."
          : "Each component runs its own useEffect + fetch = two requests per character, every time you switch."}
        {" "}Open the Network tab to see the same thing.
        In dev, StrictMode may also show a cancelled duplicate in the Network
        tab for classic fetch.
      </p>
    </div>
  );
}

export default UseQueryDemo;
