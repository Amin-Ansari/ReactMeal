import Container from "../UI/Container";
import CartButton from "./CartButton";
import "./Header.css";
import "../UI/ContainerFluid.css";

const Header = (props) => {
  return (
    <div className=" container-fluid header">
      <Container className={"container-style"}>
        <h1>ReactMeals</h1>
        <CartButton />
      </Container>
    </div>
  );
};

export default Header;
