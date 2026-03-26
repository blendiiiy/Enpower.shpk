import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl sm:text-8xl font-bold text-slate-200 dark:text-slate-700">404</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 text-center max-w-md">
        Faqja që kërkoni nuk u gjet.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
      >
        Kthehu në kryefaqe
      </Link>
    </div>
  )
}
