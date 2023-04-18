import MealContext from "../../store/meal-context";
import React from "react";
import Modal from "./Modal";
import "./CartModal.css";
import "../body/meals/Food.css";

const CartModal = (props) => {
  const tt = React.useContext(MealContext);
  console.log(tt.foodItems);
  const mealList = tt.foodItems;
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
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-meal">There is no meal available</p>
  );
  return (
    <Modal onClosingModal={props.onClosingModal}>
      <div className="cart-modal modal-animation">
        <div className="available-meals side-padding">{availableContent}</div>
        <div className="total-price side-padding">
          <div className="price-section">
            <span>Total amount</span>
            <span>$0</span>
          </div>
          <div className="cart-modal-buttons side-padding">
            <button className="close-button" onClick={props.onClosingModal}>
              Close
            </button>
            <button className="order-button">Order</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
