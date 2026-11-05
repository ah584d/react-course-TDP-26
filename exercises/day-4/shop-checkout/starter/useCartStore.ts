import { create } from 'zustand'
import type { CartItem, Product } from '../products'

interface CartStore {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

// TODO (Phase 1): replace the empty placeholder actions with real ones.
//   - addToCart: if the product is already in items, increase its quantity by 1,
//     otherwise add it with quantity: 1
//   - removeFromCart: remove the item with this id from items
//   - clearCart: reset items to an empty array
const useCartStore = create<CartStore>(() => ({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
}))

export default useCartStore
