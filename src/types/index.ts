export interface Product {
  id: string
  name: string
  slug: string
  price: number
  image: string
  description: string
  category: string
  isNew?: boolean
  isPopular?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CheckoutForm {
  email: string
  name: string
  address: string
  city: string
  zip: string
  card: string
  expiry: string
  cvc: string
}
