import React from "react";
import MealContext from "../../store/meal-context";

const IncreaseButton = (props) => {
  const meals = React.useContext(MealContext);
  const increaseTheFood = () => {
    meals.increaseFood(props.foodIndex);
  };
  return <button onClick={increaseTheFood}>+</button>;
};

export default IncreaseButton;
