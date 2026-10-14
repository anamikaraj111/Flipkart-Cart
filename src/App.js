import Items from "./Components/Items";
import CartPage from "./Components/Cart";
import { useContext, useState } from "react";
import { Cart } from "./Context/Cart";

const products = [
  { name: "iPhone 15", price: 67999 },
  { name: "iPhone 17", price: 86999 },
  { name: "iPhone 17 Pro", price: 134900 },
  { name: "iPhone 16", price: 79900 },
  { name: "iPhone 15 Pro", price: 135900 },
];

const App = () => {
  const { items } = useContext(Cart);
  const [showCart, setShowCart] = useState(false);

  if (showCart) {
    return <CartPage onContinueShopping={() => setShowCart(false)} />;
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" onClick={(event) => event.preventDefault()}>
          flipkart<span>plus</span>
        </a>
        <button className="header-cart-button" onClick={() => setShowCart(true)}>
          Go to Cart <span className="cart-count">{items.length}</span>
        </button>
      </header>

      <main className="shop-content">
        <section className="shop-heading">
          <p className="eyebrow">SMARTPHONES</p>
          <h1>Find your next iPhone.</h1>
          <p>Great devices, ready to add to your everyday.</p>
        </section>
        <div className="product-grid">
          {products.map((product, index) => (
            <Items key={`${product.name}-${index}`} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;