import "./DecreaseButton.css";
import React, { useCallback, useContext } from "react";
import MealContext from "../../store/meal-context";

const DecreaseButton = (props) => {
  const mealContext = useContext(MealContext);
  const Decreasing = () => {
    mealContext.pullFood(props.foodIndex);
  };
  return <button onClick={Decreasing}>-</button>;
};

export default DecreaseButton;
