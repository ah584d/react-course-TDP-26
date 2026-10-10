"use client";

import { useState, useEffect } from "react";

export default function ClientClock() {
  const [time, setTime] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">
        💻 Client Component
      </h2>
      <p className="text-xs mb-3 text-orange-700 dark:text-orange-300">
        <code className="bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded">
          &quot;use client&quot;
        </code>{" "}
        at the top of the file
      </p>

      <div className="space-y-3 text-sm text-orange-800 dark:text-orange-200">
        <p>
          🕐 Client Time (live):{" "}
          <code className="bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded font-mono">
            {time ?? "Loading..."}
          </code>
        </p>
        <p>
          🔄 This clock updates every second <strong>in the browser</strong>
        </p>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
          >
            Count: {count}
          </button>
          <span className="text-xs text-orange-600 dark:text-orange-400">
            ← Interactive! (uses useState)
          </span>
        </div>
      </div>

      <div className="mt-4 bg-orange-100 dark:bg-orange-900 rounded p-3 text-xs text-orange-700 dark:text-orange-300">
        <strong>JS sent to browser:</strong> Yes — this component&apos;s code
        is in the client bundle. Needed for hooks &amp; interactivity.
      </div>
    </div>
  );
}
