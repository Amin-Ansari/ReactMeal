import React, { useEffect } from "react";
import MealContext from "../../store/meal-context";
import Container from "../../UI/Container";
import CartButton from "./CartButton";
import "./Header.css";
import "../../UI/ContainerFluid.css";

const Header = (props) => {
  const ctx = React.useContext(MealContext);
  useEffect(() => {
    ctx.fetchTheInitial([{ name: "Sushi", price: 22.99, amount: 1 }]);
  }, []);
  return (
    <>
      <div className=" container-fluid header">
        <Container className={"container-style"}>
          <h1>ReactMeals</h1>
          <CartButton onTogglingCart={props.onTogglingCart} />
        </Container>
      </div>
      {props.children}
    </>
  );
};

export default Header;
