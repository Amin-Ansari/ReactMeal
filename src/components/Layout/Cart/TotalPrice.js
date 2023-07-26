import React from "react";
import MealContext from "../../store/meal-context";
import "./TotalPrice.css";
import UserDataForm from "./UserDataForm";

const TotalPrice = (props) => {
  const meals = React.useContext(MealContext);
  let priceList = [];
  meals.foodItems.forEach((item) => priceList.push(item.price * item.amount));
  let totalPrice = 0;
  for (let i = 0; i < priceList.length; i++) {
    totalPrice += priceList[i];
  }
  const cancelTheForm = () => {
    props.updateTheVisibility(false);
  };
  return (
    <React.Fragment>
      <div className="price-section">
        <span>Total amount</span>
        <span>${`${totalPrice.toFixed(2)}`}</span>
      </div>
      {props.formVisibility && (
        <UserDataForm
          formButtonVisibility={props.formVisibility}
          updateTheVisibility={cancelTheForm}
        />
      )}
    </React.Fragment>
  );
};

export default TotalPrice;
