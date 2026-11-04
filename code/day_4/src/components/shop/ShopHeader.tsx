import { useCartStore } from "../../stores/useCartStore";

function ShopHeader() {
  const totalArticles = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const totalPrice = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <header className="shop-header">
      <strong>🛍️ Mini Shop</strong>
      <div className="shop-header-info">
        <span>🛒 {totalArticles} articles</span>
        <span>💰 ${totalPrice}</span>
        <button onClick={clearCart} disabled={totalArticles === 0}>
          Empty cart
        </button>
      </div>
    </header>
  );
}

export default ShopHeader;
