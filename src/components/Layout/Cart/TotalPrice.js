import React from "react";
import MealContext from "../../store/meal-context";

const TotalPrice = () => {
  const meals = React.useContext(MealContext);
  let priceList = [];
  meals.foodItems.forEach((item) => priceList.push(item.price * item.amount));
  let totalPrice = 0;
  for (let i = 0; i < priceList.length; i++) {
    totalPrice += priceList[i];
  }

  return (
    <div className="price-section">
      <span>Total amount</span>
      <span>${`${totalPrice}`}</span>
    </div>
  );
};

export default TotalPrice;
