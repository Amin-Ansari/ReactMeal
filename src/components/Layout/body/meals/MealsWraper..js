import { useState } from "react";
import ContainerFluid from "../../../UI/ContainerFluid";
import Food from "./Food";
import "./MealsWraper.css";

const MealsWraper = (props) => {
  const [availableFoods, updateAvailableFoods] = useState([
    {
      foodName: "Sushi",
      price: "22.99",
      description: "Finest fish and Veggies",
    },
    {
      foodName: "Schnitzel",
      price: "16.5",
      description: "A german speciality!",
    },
    {
      foodName: "Barbecue Burger",
      price: "12.99",
      description: "American, raw, meaty",
    },
    {
      foodName: "Green Bowl",
      price: "18.99",
      description: "Healthy...and green...",
    },
  ]);
  return (
    <ContainerFluid className="flex-container">
      <div className="meal-wrapper">
        <ul>
          {availableFoods.map((item, index) => (
            <li key={index}>
              <Food foodData={item} />
            </li>
          ))}
        </ul>
      </div>
    </ContainerFluid>
  );
};

export default MealsWraper;
