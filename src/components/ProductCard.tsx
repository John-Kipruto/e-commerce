import { Link } from 'react-router-dom'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200"
    >
      <div className="aspect-square overflow-hidden bg-stone-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex gap-1.5">
          {product.isNew && (
            <span className="px-2 py-0.5 rounded-md bg-brand-500 text-white text-xs font-medium">
              New
            </span>
          )}
          {product.isPopular && (
            <span className="px-2 py-0.5 rounded-md bg-ink-900 text-white text-xs font-medium">
              Popular
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-brand-600 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h2 className="font-display font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
          {product.name}
        </h2>
        <p className="mt-2 text-lg font-semibold text-ink-950">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}
