import React, { useRef, useState } from "react";
import MealContext from "../../store/meal-context";
import UserInputVAlidation from "../../../hooks/use-input-validation";
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

  const {
    eventState: nameEventState,
    validOrInvalid: nameValid,
    touchTheInput: touchTheName,
    blurTheInput: blurTheName
  } = UserInputVAlidation();
  const {
    eventState: addressEventState,
    validOrInvalid: addressValid,
    touchTheInput: touchTheAddres,
    blurTheInput: blurTheAddres
  } = UserInputVAlidation();
  const {
    eventState: postalCodeEventState,
    validOrInvalid: postalCodeValid,
    touchTheInput: touchThePostalCode,
    blurTheInput: blurThePostalCode
  } = UserInputVAlidation();
  const {
    eventState: cityEventState,
    validOrInvalid: cityValid,
    touchTheInput: touchTheCity,
    blurTheInput: blurTheCity
  } = UserInputVAlidation();

  return (
    <div className="form-container">
      <form className="user-data-form" onSubmit={props.onSubmission}>
        <FormInput
          label="Name: "
          isInputValid={nameValid}
          eventState={nameEventState}
          onTouch={touchTheName}
          onBlurTheInput={blurTheName}
          ref={nameRef}
        />
        <FormInput
          label="Full Addres: "
          isInputValid={addressValid}
          eventState={addressEventState}
          onTouch={touchTheAddres}
          onBlurTheInput={blurTheAddres}
          ref={addressRef}
        />
        <FormInput
          label="Postal Code: "
          isInputValid={postalCodeValid}
          eventState={postalCodeEventState}
          onTouch={touchThePostalCode}
          onBlurTheInput={blurThePostalCode}
          ref={postalCodeRef}
        />
        <FormInput
          label="City: "
          isInputValid={cityValid}
          eventState={cityEventState}
          onTouch={touchTheCity}
          onBlurTheInput={blurTheCity}
          ref={cityRef}
        />
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
