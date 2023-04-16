import Modal from "./Modal";
import "./CartModal.css";

const CartModal = () => {
  const mealList = [];
  const availableContent = mealList.length ? (
    <ul>
      {mealList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className="no-meal">There is no meal available</p>
  );
  return (
    <Modal>
      <div className="cart-modal modal-animation">
        <div className="available-meals">{availableContent}</div>
        <div className="total-price">
          <div className="price-section">
            <span>Total amount</span>
            <span>$0</span>
          </div>
          <div className="cart-modal-buttons">
            <button className="close-button">Close</button>
            <button className="order-button">Order</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
