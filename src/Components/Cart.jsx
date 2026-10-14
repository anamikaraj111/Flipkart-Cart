import { useContext } from "react";
import { Cart } from "../Context/Cart";

const CartPage = ({ onContinueShopping }) => {
  const { items, setItems } = useContext(Cart);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" onClick={(event) => {
          event.preventDefault();
          onContinueShopping();
        }}>
          flipkart<span>plus</span>
        </a>
        <button className="header-cart-button" onClick={onContinueShopping}>
          Continue shopping
        </button>
      </header>

      <main className="cart-page">
        <div className="cart-title-row">
          <h1>My Cart</h1>
          <span>{items.length} {items.length === 1 ? "item" : "items"}</span>
        </div>

        {items.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon" aria-hidden="true">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven’t added anything to your cart yet.</p>
            <button className="continue-button" onClick={onContinueShopping}>
              Start shopping
            </button>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Cart items">
              {items.map((item, index) => (
                <article className="cart-item" key={`${item.name}-${index}`}>
                  <div className="cart-item-art" aria-hidden="true">📱</div>
                  <div className="cart-item-detail">
                    <h2>{item.name}</h2>
                    <p>Apple smartphone</p>
                    <button
                      className="remove-button"
                      onClick={() => setItems((currentItems) =>
                        currentItems.filter((_, itemIndex) => itemIndex !== index)
                      )}
                    >
                      Remove
                    </button>
                  </div>
                  <span className="cart-item-price">₹{item.price.toLocaleString("en-IN")}</span>
                </article>
              ))}
            </section>

            <aside className="price-summary">
              <h2>Price details</h2>
              <div className="summary-line">
                <span>Price ({items.length} {items.length === 1 ? "item" : "items"})</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="summary-line">
                <span>Delivery</span>
                <span className="free-delivery">Free</span>
              </div>
              <div className="summary-total">
                <span>Total amount</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
