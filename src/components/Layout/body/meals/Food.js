import FoodAddingForm from "./FoodAddingForm";

import "./Food.css";

const Food = (props) => {
  return (
    <div className="food-item">
      <div className="food-description">
        <h3>{props.foodData.foodName}</h3>
        <p>{props.foodData.description}</p>
        <p>{`$ ${props.foodData.price}`}</p>
      </div>
      <FoodAddingForm />
    </div>
  );
};

export default Food;
