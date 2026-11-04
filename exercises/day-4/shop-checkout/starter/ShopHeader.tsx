export default function ShopHeader() {
  // TODO (Phase 1): read these two values from the cart store with selectors
  //   totalArticles = sum of item.quantity
  //   totalPrice    = sum of item.price * item.quantity
  const totalArticles = 0
  const totalPrice = 0

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
