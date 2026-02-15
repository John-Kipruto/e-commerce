import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="font-display text-3xl font-bold text-ink-950">
          All products
        </h1>
        <p className="mt-1 text-stone-600">
          Browse our full electronics catalog.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
