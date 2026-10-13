"use client";

import { useState } from "react";
import Link from "next/link";
import { getServerTime } from "./actions";

export default function ServerActionResponsePage() {
  const [response, setResponse] = useState<{
    message: string;
    timestamp: string;
    randomNumber: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const result = await getServerTime();
    setResponse(result);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Server Action Response
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          Server Actions can return values
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-300">
          A server action isn't just fire-and-forget. It can{" "}
          <strong>return data</strong> to the client — just like a REST API
          endpoint — without needing an <code>/api</code> route.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
          <button
            onClick={handleClick}
            disabled={loading}
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300 disabled:opacity-50"
          >
            {loading ? "Asking server…" : "Get data from server"}
          </button>

          {response && (
            <div className="mt-6 space-y-2 rounded-lg border border-cyan-900 bg-cyan-950/40 p-4">
              <p className="text-sm text-zinc-400">Server responded with:</p>
              <p className="text-lg text-cyan-200">{response.message}</p>
              <p className="text-sm text-zinc-300">
                Timestamp: <code>{response.timestamp}</code>
              </p>
              <p className="text-sm text-zinc-300">
                Random number: <code>{response.randomNumber}</code>
              </p>
            </div>
          )}
        </div>

        <Link
          href="/"
          className="mt-8 inline-block text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
        >
          ← Back to examples
        </Link>
      </div>
    </main>
  );
}
