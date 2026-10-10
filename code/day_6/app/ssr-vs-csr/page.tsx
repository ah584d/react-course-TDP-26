import Link from "next/link";
import ClientClock from "./ClientClock";

// This is a Server Component (no "use client" directive)
export default async function RSCvsClient() {
  // These run ONLY on the server — never sent to the browser
  const serverTime = new Date().toLocaleTimeString();
  const secretMessage = "DB_PASSWORD=super_secret_123";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-50">
          ⚡ RSC vs Client — Feel the Difference
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Both components render on this page. Spot the differences!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Server Component side */}
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
              🖥️ Server Component
            </h2>
            <p className="text-xs mb-3 text-green-700 dark:text-green-300">
              No directive — server by default
            </p>

            <div className="space-y-3 text-sm text-green-800 dark:text-green-200">
              <p>
                ⏰ Server Time (fixed):{" "}
                <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded font-mono">
                  {serverTime}
                </code>
              </p>
              <p>
                🔒 Secret (safe on server):{" "}
                <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded font-mono">
                  {secretMessage.slice(0, 12)}...
                </code>
              </p>
              <p>
                🔄 Refresh the page — the time updates (server re-renders)
              </p>
            </div>

            <div className="mt-4 bg-green-100 dark:bg-green-900 rounded p-3 text-xs text-green-700 dark:text-green-300">
              <strong>JS sent to browser:</strong> None — this component&apos;s
              code stays on the server. Only HTML is sent.
            </div>
          </div>

          {/* Client Component side */}
          <ClientClock />
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
            🔍 What to Notice
          </h3>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>
              🟢 <strong>Server time is frozen</strong> — it was set once when
              the server rendered the page
            </li>
            <li>
              🟠 <strong>Client clock ticks live</strong> — it runs in your
              browser with useEffect
            </li>
            <li>
              🟢 <strong>Server can hold secrets</strong> — the full password
              never reaches the browser
            </li>
            <li>
              🟠 <strong>Client can be interactive</strong> — try the counter
              button!
            </li>
            <li>
              💡 <strong>View Page Source</strong> (Ctrl+U) — the server
              HTML is there, but the client JS is a separate bundle
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
