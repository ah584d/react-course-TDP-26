import { useCartStore } from "../../stores/useCartStore";

function ShopFooter() {
  const distinctProducts = useCartStore((state) => state.items.length);
  const totalArticles = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const totalPrice = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );

  return (
    <footer className="shop-footer">
      <span>{distinctProducts} different products</span>
      <span>{totalArticles} articles</span>
      <strong>Total: ${totalPrice}</strong>
    </footer>
  );
}

export default ShopFooter;
