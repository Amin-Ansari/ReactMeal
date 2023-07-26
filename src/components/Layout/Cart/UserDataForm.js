import React, { useRef, useState } from "react";
import MealContext from "../../store/meal-context";
import FormInput from "./FormInput";
import "./TotalPrice.css";

const UserDataForm = (props) => {
  const [isFormValid, updateFormValidation] = useState(true);

  const nameRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const mealsContext = React.useContext(MealContext);

  const addedMeals = {};
  for (let i = 0; i < mealsContext.foodItems.length; i++) {
    addedMeals[i] = mealsContext.foodItems[i];
  }

  console.log(addedMeals);
  const submitTheForm = (e) => {
    e.preventDefault();
    e.target.focus();
    if (mealsContext.foodItems.length > 0) {
    } else {
      updateFormValidation(false);
    }
    if (isFormValid) {
      const theOrder = {
        orderedMeals: addedMeals,
        userData: {
          name: nameRef.current.value,
          address: addressRef.current.value,
          postalCode: postalCodeRef.current.value,
          city: cityRef.current.value
        }
      };

      fetch("https://meals-84bef-default-rtdb.firebaseio.com/orders.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(theOrder)
      });
    }
  };

  return (
    <div className="form-container">
      <form className="user-data-form" onSubmit={props.onSubmission}>
        <FormInput label="Name: " ref={nameRef} />
        <FormInput label="Full Addres: " ref={addressRef} />
        <FormInput label="Postal Code: " ref={postalCodeRef} />
        <FormInput label="City: " ref={cityRef} />
        <div className="form-buttons">
          <button
            className={`close-button ${
              props.formButtonVisibility ? "dis-inline-block" : "dis-none"
            }`}
            onClick={props.updateTheVisibility}
          >
            Cancel
          </button>
          <button
            onClick={submitTheForm}
            className={`order-button ${
              props.formButtonVisibility ? "dis-inline-block" : "dis-none"
            }`}
          >
            Conform
          </button>
        </div>
        {!isFormValid && (
          <p className="form-invalid">Form Can't be submitted!</p>
        )}
      </form>
    </div>
  );
};

export default UserDataForm;
