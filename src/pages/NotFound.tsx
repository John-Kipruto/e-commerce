import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <h1 className="font-display text-6xl font-bold text-ink-950">404</h1>
      <p className="mt-4 text-stone-600 text-lg">
        This page doesn’t exist. Head back to the homepage.
      </p>
      <Link
        to="/"
        className="inline-block mt-8 px-6 py-3 rounded-xl bg-ink-950 text-white font-medium hover:bg-ink-800 transition-colors"
      >
        Go to homepage
      </Link>
    </div>
  )
}
