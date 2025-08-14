export default function Page() {
  const GRADIENT = "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400";
  const GRADIENT_TEXT = `${GRADIENT} bg-clip-text text-transparent`;

  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Hands-on <span className={GRADIENT_TEXT}>Courses</span>
        </h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Short, project-based modules to build portfolio-ready skills in weeks, not months.
        </p>

        <div className="mt-10 rounded-3xl border border-neutral-200 p-8 bg-white shadow-sm">
          <div className={`inline-flex h-9 items-center rounded-xl px-4 text-sm text-white ${GRADIENT}`}>
            Coming soon
          </div>
          <ul className="mt-4 text-neutral-700 list-disc pl-5 space-y-1">
            <li>AI for Software Engineers</li>
            <li>Production-grade Next.js</li>
            <li>Data workflows for builders</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
