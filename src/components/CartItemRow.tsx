import { Link } from 'react-router-dom'
import type { CartItem as CartItemType } from '../types'
import { useCartStore } from '../store/useCartStore'

interface CartItemRowProps {
  item: CartItemType
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCartStore()
  const { product, quantity } = item

  return (
    <div className="flex gap-4 py-4 border-b border-stone-200 last:border-0">
      <Link
        to={`/product/${product.slug}`}
        className="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-stone-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link
          to={`/product/${product.slug}`}
          className="font-display font-medium text-ink-900 hover:text-brand-600"
        >
          {product.name}
        </Link>
        <p className="text-stone-500 text-sm mt-0.5">${product.price} each</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="w-8 h-8 rounded-lg border border-stone-300 flex items-center justify-center hover:bg-stone-100 text-ink-700"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="w-8 h-8 rounded-lg border border-stone-300 flex items-center justify-center hover:bg-stone-100 text-ink-700"
            aria-label="Increase quantity"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="ml-2 text-sm text-red-600 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="font-semibold text-ink-900">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  )
}
