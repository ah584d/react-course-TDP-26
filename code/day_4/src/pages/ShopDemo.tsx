import { Link } from "react-router-dom";
import CartPanel from "../components/shop/CartPanel.tsx";
import ProductList from "../components/shop/ProductList.tsx";
import ShopFooter from "../components/shop/ShopFooter.tsx";
import ShopHeader from "../components/shop/ShopHeader.tsx";
import "./ShopDemo.css";

function ShopDemo() {
  return (
    <div className="shop-page">
      <div className="shop-container">
        <section className="back-menu">
          <nav>
            <Link to="/">← Back to Home</Link>
          </nav>
        </section>

        <h1>Zustand - Mini Shop</h1>
        <p className="shop-subtitle">
          Header, products, basket and footer all read the same store - no
          props, no provider
        </p>

        <ShopHeader />
        <div className="shop-columns">
          <ProductList />
          <CartPanel />
        </div>
        <ShopFooter />
      </div>
    </div>
  );
}

export default ShopDemo;
