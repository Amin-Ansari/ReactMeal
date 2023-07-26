import React from "react";
import MealContext from "../../store/meal-context";
import "./TotalPrice.css";

const TotalPrice = () => {
  const meals = React.useContext(MealContext);
  let priceList = [];
  meals.foodItems.forEach((item) => priceList.push(item.price * item.amount));
  let totalPrice = 0;
  for (let i = 0; i < priceList.length; i++) {
    totalPrice += priceList[i];
  }

  return (
    <div className="price">
      <div className="price-section">
        <span>Total amount</span>
        <span>${`${totalPrice.toFixed(2)}`}</span>
      </div>
      <div>
        <form>
          <label>
            Name:
            <input></input>
          </label>
          <label>
            Full address:
            <input></input>
          </label>
          <lable>
            Postal code:
            <iput></iput>
          </lable>
          <label>
            City:
            <input></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default TotalPrice;
