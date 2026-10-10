import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const messageFilePath = path.join(process.cwd(), "data", "shoutout.txt");

async function readShoutout() {
  try {
    return await readFile(messageFilePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

async function saveShoutout(formData: FormData): Promise<void> {
  "use server";

  const message = formData.get("message");

  if (typeof message !== "string" || message.trim().length < 3) {
    return;
  }

  await writeFile(messageFilePath, message.trim().slice(0, 120), "utf8");

  revalidatePath("/server-action-demo");
}

export default async function ServerActionDemo() {
  const savedMessage = await readShoutout();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Server Action Demo
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          Send a shoutout without an API route
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-300">
          Submit the form and watch the server validate and save your message
          in a text file. There is no client fetch and no <code>/api</code>
          endpoint.
        </p>

        <form
          action={saveShoutout}
          className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl"
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-200"
          >
            Your message
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="message"
              name="message"
              required
              minLength={3}
              maxLength={120}
              placeholder="Server Actions are neat!"
              className="min-w-0 flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-cyan-400"
            />
            <button
              type="submit"
              className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Save on server
            </button>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            The <code>saveShoutout</code> function runs on the server and writes
            to <code>data/shoutout.txt</code>.
          </p>
        </form>

        <section className="mt-8 rounded-2xl border border-cyan-900 bg-cyan-950/40 p-6">
          <h2 className="text-lg font-semibold text-cyan-200">Latest shoutout</h2>
          <p className="mt-3 text-xl text-zinc-100">
            {savedMessage ?? "Nothing saved yet. Be the first!"}
          </p>
        </section>

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
