import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, image, rating, Price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="Checkoutproduct_img" src={image} alt="product_img" />
      <div className="Checkoutproduct_info">
        <p className="Checkout_title">{title}</p>

        <p className="Checkout_price">
          <small>₹</small>
          <strong>{Price}</strong>
        </p>

        <div className="Checkout_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
        <button onClick={removeFromBasket}> Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
