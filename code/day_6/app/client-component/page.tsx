"use client";

import { useState } from "react";
import Link from "next/link";

// This is a Client Component (note the "use client" directive)
export default function ClientComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
          💻 Client Component
        </h1>

        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
              Rendered in the Browser
            </h2>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <p>
                📁 File:{" "}
                <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  app/client-component/page.tsx
                </code>
              </p>
              <p>
                ✨ Has{" "}
                <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  "use client"
                </code>{" "}
                directive at the top
              </p>
              <p>🎯 Enables interactivity and React hooks</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Counter Example */}
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
                Interactive Counter
              </h3>
              <div className="flex flex-col items-center gap-4">
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                  {count}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setCount(0)}
                    className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Input Example */}
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
                Interactive Input
              </h3>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type something..."
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
                />
                {text && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      You typed: <strong>{text}</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Client Component Features:
            </h3>
            <ul className="text-zinc-700 dark:text-zinc-300">
              <li>✅ Can use React hooks (useState, useEffect, etc.)</li>
              <li>✅ Event handlers (onClick, onChange, etc.)</li>
              <li>✅ Browser APIs (localStorage, window, etc.)</li>
              <li>✅ Interactive user interfaces</li>
              <li>❌ Adds JavaScript to the bundle</li>
              <li>❌ Can't directly access server-only resources</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              💡 <strong>Best Practice:</strong> Use Client Components only when
              you need interactivity. Keep them small and compose them with
              Server Components for optimal performance.
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
                href="/server-component"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                ← Back to Server Component
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
