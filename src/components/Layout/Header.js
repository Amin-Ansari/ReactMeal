import Container from "../UI/Container";
import { FaShoppingCart } from "../../../node_modules/react-icons/fa";
import "./Header.css";
import "../UI/ContainerFluid.css";

const Header = (props) => {
  return (
    <div className=" container-fluid header">
      <Container className={"container-style"}>
        <h1>ReactMeals</h1>
        <button>
          <FaShoppingCart />
          <span className="hide-on-mobile">Cart</span>
          <span className="stock-number">0</span>
        </button>
      </Container>
    </div>
  );
};

export default Header;
