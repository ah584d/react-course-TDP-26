import { products } from "../../data/products";
import { useCartStore } from "../../stores/useCartStore";

function ProductList() {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="shop-panel">
      <h2>Products</h2>
      {products.map((product) => {
        const inCart =
          items.find((item) => item.id === product.id)?.quantity ?? 0;

        return (
          <div key={product.id} className="shop-row">
            <span>
              {product.emoji} {product.name} - ${product.price}
            </span>
            <span>
              {inCart > 0 && <span className="shop-badge">{inCart} in cart</span>}
              <button onClick={() => addToCart(product)}>Add</button>
            </span>
          </div>
        );
      })}
    </section>
  );
}

export default ProductList;
