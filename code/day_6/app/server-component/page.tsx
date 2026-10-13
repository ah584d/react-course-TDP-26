import Link from "next/link";

// This is a Server Component (default in App Router)
export default async function ServerComponent() {
  // Server-side operations can happen here
  const serverTime = new Date().toISOString();

  // Simulate a server-side data fetch
  const data = {
    message: "This data was fetched on the server",
    timestamp: serverTime,
    environment: "server",
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
          🖥️ Server Component
        </h1>

        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-green-900 dark:text-green-100">
              Rendered on the Server
            </h2>
            <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <p>
                📁 File:{" "}
                <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  app/server-component/page.tsx
                </code>
              </p>
              <p>
                ⏰ Server Time:{" "}
                <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  {serverTime}
                </code>
              </p>
              <p>✨ No 'use client' directive = Server Component</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
              Data from Server:
            </h3>
            <pre className="bg-zinc-100 dark:bg-zinc-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Server Component Benefits:
            </h3>
            <ul className="text-zinc-700 dark:text-zinc-300">
              <li>✅ Direct database access (no API needed)</li>
              <li>✅ Zero JavaScript sent to client</li>
              <li>✅ Faster initial page load</li>
              <li>✅ Better SEO (fully rendered HTML)</li>
              <li>✅ Can use server-only libraries</li>
              <li>❌ No interactivity (onClick, useState, etc.)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              💡 <strong>Tip:</strong> Server Components are the default in
              Next.js App Router. Use them for static content, data fetching,
              and anything that doesn't need client-side interactivity.
            </p>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
              >
                ← Home
              </Link>
              <Link
                href="/client-component"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Client Component →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
