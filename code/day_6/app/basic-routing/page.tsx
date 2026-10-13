import Link from "next/link";

export default function BasicRouting() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
          🛣️ Basic Routing
        </h1>

        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
              How This Route Works
            </h2>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <p>
                📁 File:{" "}
                <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  app/basic-routing/page.tsx
                </code>
              </p>
              <p>
                🌐 URL:{" "}
                <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  /basic-routing
                </code>
              </p>
              <p>
                ✨ This is a <strong>Server Component</strong> by default
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Key Concepts:
            </h3>
            <ul className="text-zinc-700 dark:text-zinc-300">
              <li>Folder name becomes the route path</li>
              <li>
                <code>page.tsx</code> makes the route publicly accessible
              </li>
              <li>
                Server Components render on the server (fast initial load)
              </li>
              <li>No client-side JavaScript needed for static content</li>
            </ul>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Navigation Example:
            </h3>
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
              >
                ← Home
              </Link>
              <Link
                href="/dynamic/my-post"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Dynamic Route →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
