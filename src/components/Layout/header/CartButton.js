import { FaShoppingCart } from "react-icons/fa";
import MealContext from "../../store/meal-context";
import React from "react";
import "./CartButton.css";

const CartButton = (props) => {
  const mealsTotalAmount = React.useContext(MealContext);

  return (
    <button className="button-style " onClick={props.onTogglingCart}>
      <FaShoppingCart />
      <span className="hide-on-mobile">Cart</span>
      <span className="stock-number">{mealsTotalAmount.totalAmount}</span>
    </button>
  );
};

export default CartButton;
