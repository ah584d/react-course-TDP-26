import CartDemoLayout from '../cart-state/CartDemoLayout'
import Store from './Store'
import storeSource from './Store.tsx?raw'
import productCardSource from './ProductCard.tsx?raw'
import './CartSharingDemo.css'

export default function CartSharingDemo() {
  return (
    <CartDemoLayout className="cart-sharing-demo" sources={[
      { path: 'demo/day-1/cart-sharing/Store.tsx', source: storeSource, label: 'Parent' },
      { path: 'demo/day-1/cart-sharing/ProductCard.tsx', source: productCardSource, label: 'Product card' },
    ]}>
      <Store />
    </CartDemoLayout>
  )
}
