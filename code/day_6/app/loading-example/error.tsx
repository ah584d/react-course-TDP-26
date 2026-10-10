"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="w-full max-w-xl rounded-2xl border border-red-900 bg-zinc-900 p-8 text-center shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
          Loading Example Error
        </p>
        <h1 className="mt-3 text-3xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-zinc-300">
          The page could not load its data. Generate an error in
          <code className="mx-1 rounded bg-zinc-800 px-2 py-1 text-red-300">
            page.tsx
          </code>
          to see this boundary.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
