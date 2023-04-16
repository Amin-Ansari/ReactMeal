import "./FoodTableImage.css";
import tableImage from "../../assets/images/meals.jpg";

const FoodTableImage = (props) => {
  return (
    <img
      className="table-image-style"
      src={tableImage}
      alt="A table full of delicious foods"
    />
  );
};

export default FoodTableImage;
