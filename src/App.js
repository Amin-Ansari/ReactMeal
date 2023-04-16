import { Fragment, useState } from "react";
import Header from "./components/Layout/header/Header";
import CartModal from "./components/Layout/Cart/CartModal";
import FoodTableImage from "./components/Layout/header/FoodTableImage";
import TextBox from "./components/Layout/body/TextBox";
import "./App.css";

function App() {
  const [isCartShown, updateCartVisibility] = useState(false);

  const toggleTheCartModal = () => {
    updateCartVisibility(true);
  };
  return (
    <Fragment>
      {isCartShown ? <CartModal></CartModal> : ""}
      <Header onTogglingCart={toggleTheCartModal}>
        <FoodTableImage />
      </Header>
      <TextBox />
    </Fragment>
  );
}

export default App;
