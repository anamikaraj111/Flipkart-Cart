import { useContext } from "react";
import { Cart } from "../Context/Cart";

const Items = ({ name, price }) => {
    const cart = useContext(Cart);

    return (
        <article className="product-card">
            <div className="product-art" aria-hidden="true">📱</div>
            <p className="product-tag">APPLE</p>
            <h2>{name}</h2>
            <p className="product-description">Latest features. Beautifully designed.</p>
            <p className="product-price">₹{price.toLocaleString("en-IN")}</p>
            <button
                className="add-button"
                onClick={() => cart.setItems((items) => [...items, { name, price }])}
            >
                Add to Cart
            </button>
        </article>
    );
};

export default Items;