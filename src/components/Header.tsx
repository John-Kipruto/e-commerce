import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'

export default function Header() {
  const totalItems = useCartStore((s) => s.totalItems())

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-xl text-ink-950">
          TechStore
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-ink-800 hover:text-brand-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-ink-800 hover:text-brand-600 transition-colors"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-ink-800 hover:text-brand-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center gap-1 text-ink-800 hover:text-brand-600 transition-colors"
          >
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-brand-500 text-white text-xs font-medium">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
