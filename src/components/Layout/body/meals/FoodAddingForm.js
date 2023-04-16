import "./FoodAddingForm.css";

const FoodAddingForm = (props) => {
  return (
    <div className="food-adding-form">
      <div>
        <label className="amount-lable" htmlFor="amount-input">
          Amount
        </label>
        <input
          className="amount-input"
          id="amount-input"
          type="number"
          defaultValue={1}
        />
      </div>
      <div className="adding-button-wrapper">
        <button type="submit" className="adding-button">
          + Add
        </button>
      </div>
    </div>
  );
};

export default FoodAddingForm;
