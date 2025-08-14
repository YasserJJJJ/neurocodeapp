export default function Page() {
  const GRADIENT = "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400";
  const GRADIENT_TEXT = `${GRADIENT} bg-clip-text text-transparent`;

  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Explore our <span className={GRADIENT_TEXT}>E-books</span>
        </h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Curated, practical guides on software engineering, AI and data — crafted for fast, real-world learning.
        </p>

        <div className="mt-10 rounded-3xl border border-neutral-200 p-8 bg-white shadow-sm">
          <div className={`inline-flex h-9 items-center rounded-xl px-4 text-sm text-white ${GRADIENT}`}>
            Coming soon
          </div>
          <p className="mt-4 text-neutral-600">
            We’re editing the first titles. Want early access? Follow us on TikTok or subscribe on the homepage.
          </p>
        </div>
      </div>
    </main>
  );
}
