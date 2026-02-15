import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'
import CartItemRow from '../components/CartItemRow'

export default function Cart() {
  const { items, totalItems, totalPrice } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-950">
          Your cart is empty
        </h1>
        <p className="mt-2 text-stone-600">Add items from the shop to get started.</p>
        <Link
          to="/products"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-ink-950 text-white font-medium hover:bg-ink-800 transition-colors"
        >
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl font-bold text-ink-950 mb-8">
        Cart ({totalItems()} {totalItems() === 1 ? 'item' : 'items'})
      </h1>
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="divide-y divide-stone-200 px-4 sm:px-6">
          {items.map((item) => (
            <CartItemRow key={item.product.id} item={item} />
          ))}
        </div>
        <div className="px-4 sm:px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="font-semibold text-ink-900">Subtotal</span>
          <span className="font-display text-xl font-semibold text-ink-950">
            ${totalPrice().toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
        <Link
          to="/products"
          className="text-center px-6 py-3 rounded-xl border border-stone-300 font-medium hover:bg-stone-100 transition-colors"
        >
          Continue shopping
        </Link>
        <Link
          to="/checkout"
          className="text-center px-6 py-3 rounded-xl bg-ink-950 text-white font-medium hover:bg-ink-800 transition-colors"
        >
          Checkout
        </Link>
      </div>
    </div>
  )
}
