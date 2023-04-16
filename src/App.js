import { Fragment, useState } from "react";
import Header from "./components/Layout/header/Header";
import CartModal from "./components/Layout/Cart/CartModal";
import FoodTableImage from "./components/Layout/header/FoodTableImage";
import TextBox from "./components/Layout/body/TextBox";
import MealsWraper from "./components/Layout/body/meals/MealsWraper.";
import "./App.css";

function App() {
  const [isCartShown, updateCartVisibility] = useState(false);

  const toggleTheCartModal = () => {
    updateCartVisibility(true);
  };
  return (
    <Fragment>
      {isCartShown ? <CartModal /> : ""}
      <Header onTogglingCart={toggleTheCartModal}>
        <FoodTableImage />
      </Header>
      <TextBox />
      <MealsWraper />
    </Fragment>
  );
}

export default App;
