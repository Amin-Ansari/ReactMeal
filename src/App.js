import { Fragment, useState } from "react";
import Header from "./components/Layout/header/Header";
import CartModal from "./components/Layout/Cart/CartModal";
import FoodTableImage from "./components/Layout/header/FoodTableImage";
import TextBox from "./components/Layout/body/TextBox";
import MealsWraper from "./components/Layout/body/meals/MealsWraper.";
import MealProvider from "./components/store/MealProvider";
import "./App.css";

function App() {
  const [isCartShown, updateCartVisibility] = useState(false);

  const toggleTheCartModal = () => {
    updateCartVisibility(true);
  };
  const closeTheCart = () => {
    updateCartVisibility(false);
  };
  return (
    <MealProvider>
      {isCartShown ? <CartModal onClosingModal={closeTheCart} /> : ""}
      <Header onTogglingCart={toggleTheCartModal}>
        <FoodTableImage />
      </Header>
      <TextBox />
      <MealsWraper />
    </MealProvider>
  );
}

export default App;
