import React from "react";
import "./checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg"
          alt="ads"
          className="checkout_ad"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your cart is Empty!!</h2>
            <p>
              You have no items in your basket,to buy one "Add to basket" nect
              to the item.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="checkout_title">Your cart</h3>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                Price={item.Price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
