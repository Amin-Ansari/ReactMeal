import React from "react";
import MealContext from "../../../store/meal-context";
import { useRef, useState } from "react";
import "./FoodAddingForm.css";

const FoodAddingForm = (props) => {
  const inputRef = useRef();
  const [inputValue, updateInputValue] = useState("1");

  const mealContext = React.useContext(MealContext);
  const formSubmission = (e) => {
    e.preventDefault();
    const foodItem = {
      name: props.foodItem.foodName,
      price: props.foodItem.price,
      amount: Number(inputRef.current.value)
    };
    mealContext.pushFood(foodItem);
    updateInputValue("1");
  };

  const changeTheInputValue = () => {
    updateInputValue(inputRef.current.value);
  };
  return (
    <form className="food-adding-form" onSubmit={formSubmission}>
      <div>
        <label className="amount-lable" htmlFor="amount-input">
          Amount
        </label>
        <input
          ref={inputRef}
          className="amount-input"
          id="amount-input"
          type="number"
          value={inputValue}
          min={1}
          max={5}
          onChange={changeTheInputValue}
        />
      </div>
      <div className="adding-button-wrapper">
        <button type="submit" className="adding-button">
          + Add
        </button>
      </div>
    </form>
  );
};

export default FoodAddingForm;
