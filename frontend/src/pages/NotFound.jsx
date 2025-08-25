export default function NotFound() {
  return (
    <section className="min-h-[50vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-zinc-400">That page rode off into the mist.</p>
        <a href="/" className="mt-4 inline-block rounded-lg bg-indigo-600 px-4 py-2 font-semibold hover:bg-indigo-500">
          Go Home
        </a>
      </div>
    </section>
  )
}
