import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const latestProducts = products.filter((p) => p.isNew)
const popularProducts = products.filter((p) => p.isPopular)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <h1 className="font-display text-4xl sm:text-5xl font-bold max-w-2xl">
            Electronics for work and play
          </h1>
          <p className="mt-4 text-stone-300 text-lg max-w-xl">
            Premium audio, peripherals, and gadgets. Fast shipping and a 2-year warranty on every order.
          </p>
          <Link
            to="/products"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-ink-950 font-semibold hover:bg-stone-200 transition-colors"
          >
            Shop all products
          </Link>
        </div>
      </section>

      {/* Latest */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950">
              Latest arrivals
            </h2>
            <p className="mt-1 text-stone-600">
              New gear just dropped.
            </p>
          </div>
          <Link
            to="/products"
            className="text-brand-600 hover:text-brand-700 font-medium shrink-0"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Popular */}
      <section className="bg-stone-100/80">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-950">
                Popular picks
              </h2>
              <p className="mt-1 text-stone-600">
                Bestsellers our customers love.
              </p>
            </div>
            <Link
              to="/products"
              className="text-brand-600 hover:text-brand-700 font-medium shrink-0"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
