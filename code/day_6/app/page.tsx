import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-16 px-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center w-full">
          <Image
            className="dark:invert mb-4"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={37}
            priority
          />

          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Next.js App Router Examples
          </h1>
          {/* Examples Menu */}
          <nav className="w-full ">
            <h3 className="text-xl font-semibold mb-6 text-black dark:text-zinc-50">
              📚 Course Examples - Day 6
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <Link
                href="/basic-routing"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">🛣️</span>
                Basic Routing
              </Link>

              <Link
                href="/dynamic/example-post"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">🔀</span>
                Dynamic Routes
              </Link>

              <Link
                href="/client-component"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">💻</span>
                Client Component
              </Link>
              <Link
                href="/server-component"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">🖥️</span>
                Server Component
              </Link>


              <Link
                href="/ssr-vs-csr"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">⚡</span>
                SSR vs CSR
              </Link>

              <Link
                href="/data-fetching"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">📡</span>
                Data Fetching
              </Link>

              <Link
                href="/streaming-demo"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">⏳</span>
                Streaming Demo
              </Link>

              <Link
                href="/loading-example"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">🔄</span>
                Loading States
              </Link>

              <Link
                href="/server-action-demo"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">🚀</span>
                Server Action Demo
              </Link>

              <Link
                href="/server-action-response"
                className="flex items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 text-base font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span className="text-2xl">📨</span>
                Server Action Response
              </Link>
            </div>
          </nav>

          {/* Documentation Links */}
          <div className="mt-12 flex flex-col gap-4 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Learn more about Next.js App Router:
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Documentation
              </a>
              <a
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn Next.js
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
