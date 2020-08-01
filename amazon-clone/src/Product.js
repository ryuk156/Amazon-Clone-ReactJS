import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, Price, rating, image }) {
  const [{ basket, user }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rating: rating,
        image: image,
        Price: Price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>

        <p className="product_price">
          <small>₹</small>
          <strong>{Price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
      </div>

      <img src={image} alt="productimg" />
      {user ? (
        <button className="button_basket" onClick={addToBasket}>
          Add To Basket
        </button>
      ) : (
        <Link to="/login">
          <button className="button_basket">
            Sign in to Add Product in cart
          </button>
        </Link>
      )}
    </div>
  );
}

export default Product;
