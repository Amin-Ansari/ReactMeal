import { FaShoppingCart } from "../../../node_modules/react-icons/fa";
import "./CartButton.css";

const CartButton = (props) => {
  return (
    <button className="button-style ">
      <FaShoppingCart />
      <span className="hide-on-mobile">Cart</span>
      <span className="stock-number">0</span>
    </button>
  );
};

export default CartButton;
