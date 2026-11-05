export interface Product {
  id: number
  name: string
  price: number
  emoji: string
}

export interface CartItem extends Product {
  quantity: number
}

export const products: Product[] = [
  { id: 1, name: 'Sneakers', price: 80, emoji: '👟' },
  { id: 2, name: 'Backpack', price: 45, emoji: '🎒' },
  { id: 3, name: 'Sunglasses', price: 25, emoji: '🕶️' },
  { id: 4, name: 'Water bottle', price: 12, emoji: '🧴' },
]
