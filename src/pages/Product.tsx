import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import { useCartStore } from '../store/useCartStore'

export default function Product() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const addItem = useCartStore((s) => s.addItem)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl text-ink-800">Product not found</h1>
        <button
          type="button"
          onClick={() => navigate('/products')}
          className="mt-4 text-brand-600 hover:text-brand-700 font-medium"
        >
          Back to products
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-square max-h-[80vh] rounded-2xl overflow-hidden bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-brand-600 uppercase tracking-wider">
            {product.category}
          </p>
          <h1 className="font-display text-3xl font-bold text-ink-950 mt-1">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-ink-900 mt-4">
            ${product.price}
          </p>
          <p className="mt-6 text-stone-600 leading-relaxed">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-12 h-12 flex items-center justify-center hover:bg-stone-100 text-ink-700"
              >
                −
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-12 h-12 flex items-center justify-center hover:bg-stone-100 text-ink-700"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="h-12 px-6 rounded-xl bg-ink-950 text-white font-medium hover:bg-ink-800 transition-colors disabled:opacity-70"
            >
              {added ? 'Added to cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
