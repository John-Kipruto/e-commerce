import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'

export default function Checkout() {
  const navigate = useNavigate()
  const { items, totalPrice, clearCart } = useCartStore()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvc: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    clearCart()
    setTimeout(() => navigate('/products'), 3000)
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-950">
          No items to checkout
        </h1>
        <Link to="/products" className="mt-4 inline-block text-brand-600 hover:text-brand-700 font-medium">
          Add products to cart
        </Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto text-2xl">
          ✓
        </div>
        <h1 className="font-display text-2xl font-bold text-ink-950 mt-6">
          Order confirmed
        </h1>
        <p className="mt-2 text-stone-600">
          Thanks for your order. You’ll be redirected to the home page shortly.
        </p>
        <Link to="/products" className="mt-6 inline-block text-brand-600 hover:text-brand-700 font-medium">
          Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl font-bold text-ink-950 mb-8">
        Checkout
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4">
          <h2 className="font-display font-semibold text-ink-900">Contact</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4">
          <h2 className="font-display font-semibold text-ink-900">Shipping</h2>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP code"
              value={form.zip}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4">
          <h2 className="font-display font-semibold text-ink-900">Payment</h2>
          <input
            type="text"
            name="card"
            placeholder="Card number"
            value={form.card}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={form.expiry}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={form.cvc}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <Link to="/cart" className="text-stone-600 hover:text-ink-900 font-medium">
            ← Back to cart
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl font-semibold text-ink-950">
              ${totalPrice().toFixed(2)}
            </span>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-ink-950 text-white font-medium hover:bg-ink-800 transition-colors"
            >
              Place order
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
