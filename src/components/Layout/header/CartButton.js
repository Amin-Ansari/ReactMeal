import { FaShoppingCart } from "react-icons/fa";
import MealContext from "../../store/meal-context";
import React from "react";
import "./CartButton.css";
import { useEffect } from "react";
import { useState } from "react";

const CartButton = (props) => {
  const mealsTotalAmount = React.useContext(MealContext);
  const [animaitonState, updateAnimationState] = useState(false);
  let animationClass = "";
  useEffect(() => {
    if (mealsTotalAmount.foodItems.length) {
      updateAnimationState(true);
    }
    setTimeout(() => {
      updateAnimationState(false);
    }, 300);
  }, [mealsTotalAmount.totalAmount]);

  animationClass = `${animaitonState ? "bump" : ""}`;

  return (
    <button
      className={`button-style ${animationClass}`}
      onClick={props.onTogglingCart}
    >
      <FaShoppingCart />
      <span className="hide-on-mobile">Cart</span>
      <span className="stock-number">{mealsTotalAmount.totalAmount}</span>
    </button>
  );
};

export default CartButton;
