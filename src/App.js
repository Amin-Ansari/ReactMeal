import { Fragment, useState } from "react";
import Header from "./components/Layout/header/Header";
import CartModal from "./components/Layout/Cart/CartModal";
import "./App.css";
import Modal from "./components/Layout/Cart/Modal";

function App() {
  const [isCartShown, updateCartVisibility] = useState(false);

  const toggleTheCartModal = () => {
    updateCartVisibility(true);
  };
  return (
    <Fragment>
      {isCartShown ? <CartModal></CartModal> : ""}
      <Header onTogglingCart={toggleTheCartModal}></Header>
    </Fragment>
  );
}

export default App;
