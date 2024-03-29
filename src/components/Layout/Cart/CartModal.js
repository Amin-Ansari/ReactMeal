import MealContext from "../../store/meal-context";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";
import TotalPrice from "./TotalPrice";
import React, { useState } from "react";
import Modal from "./Modal";
import "./CartModal.css";
import "../body/meals/Food.css";

const CartModal = (props) => {
  const [isFormVisible, updateFormVisibility] = useState(false);
  const [isFoodListEmpty, updateEmptyFoodList] = useState(false);
  const [isSubmitting, updateSubmitting] = useState(false);
  const [httpStatus, setHttpStatus] = useState(null);

  const ctx = React.useContext(MealContext);
  const mealList = ctx.foodItems;
  const availableContent = mealList.length ? (
    <ul>
      {mealList.map((item, index) => (
        <li className="cart-meal" key={index}>
          <div className="food-item orange-border">
            <div className="food-description">
              <h3>{item.name}</h3>
              <div className="price-and-amount">
                <p className="cart-pice">
                  {`$ ${item.price}`}
                  <span className="amount-span">x{item.amount}</span>
                </p>
              </div>
            </div>
            <div className="button-container">
              <DecreaseButton foodIndex={index} />
              <IncreaseButton foodIndex={index} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-meal">There is no meal available</p>
  );

  const showTheForm = () => {
    if (ctx.foodItems.length > 0) {
      updateFormVisibility((prevState) => !prevState);
      updateEmptyFoodList(false);
    } else {
      updateEmptyFoodList(true);
    }
  };

  const submissionState = (state) => {
    updateSubmitting(state);
  };
  const updatingStatusCode = (code) => {
    setHttpStatus(code);
  };

  return (
    <Modal onClosingModal={props.onClosingModal}>
      <div className="cart-modal modal-animation">
        {!isSubmitting && httpStatus != 200 && (
          <>
            <div className="available-meals side-padding">
              {availableContent}
            </div>
            <div className="total-price side-padding">
              <TotalPrice
                formVisibility={isFormVisible}
                updateTheVisibility={updateFormVisibility}
                onSubmitting={submissionState}
                passingCode={updatingStatusCode}
                httpCode={httpStatus}
                httpSubmitting={isSubmitting}
              />
              <div className="cart-modal-buttons ">
                <button
                  className={`close-button ${
                    !isFormVisible ? "dis-inline-block" : "dis-none"
                  }`}
                  onClick={props.onClosingModal}
                >
                  Close
                </button>

                <button
                  onClick={showTheForm}
                  className={`order-button ${
                    !isFormVisible ? "dis-inline-block" : "dis-none"
                  }`}
                >
                  Order
                </button>
              </div>
              {isFoodListEmpty && (
                <p className="empty-food-list-error">
                  No food is added to the Card
                </p>
              )}
            </div>
          </>
        )}
        {isSubmitting && (
          <p className="centered-feedBack">The Order is Submitting...</p>
        )}
        {!isSubmitting && httpStatus == 200 ? (
          <div className="after-submit-container">
            <p className="centered-feedBack">The order is Submitted!</p>
            <button
              className={`close-button after-submit`}
              onClick={props.onClosingModal}
            >
              Close
            </button>
          </div>
        ) : (
          ""
        )}
        {!isSubmitting && httpStatus != null && httpStatus != 200 ? (
          <div className="after-submit-container">
            <p className="centered-feedBack">Submitting the order is Failed!</p>
            <button
              className={`close-button after-submit`}
              onClick={props.onClosingModal}
            >
              Close
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
};

export default CartModal;
