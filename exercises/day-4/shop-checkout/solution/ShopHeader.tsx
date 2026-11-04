import useCartStore from './useCartStore'

export default function ShopHeader() {
  const totalArticles = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0))
  const totalPrice = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  )

  return (
    <header className="sc-header">
      <strong>🛍️ Mini Shop</strong>
      <div className="sc-header-info">
        <span>🛒 {totalArticles} articles</span>
        <span>💰 ${totalPrice}</span>
      </div>
    </header>
  )
}
