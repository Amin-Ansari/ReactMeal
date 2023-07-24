import { useState } from "react";
import ContainerFluid from "../../../UI/ContainerFluid";
import Food from "./Food";
import useFetch from "../../../../hooks/use-fetch";
import "./MealsWraper.css";

const MealsWraper = (props) => {
  const [foodList, setFoodList] = useState([]);

  const applyData = (data) => {
    const tempArray = [];
    for (let key in data) {
      const food = data[key];
      tempArray.push(food);
    }
    setFoodList(tempArray);
  };
  const { error, isLoading } = useFetch(
    "https://meals-84bef-default-rtdb.firebaseio.com/meals.json",
    applyData
  );
  return (
    <ContainerFluid className="flex-container">
      <div className="meal-wrapper">
        <ul>
          {isLoading && <p className="loading">Loading...</p>}
          {error ? <p className="error">{error.toString()}</p> : ""}
          {!isLoading && foodList.length
            ? foodList.map((item, index) => (
                <li key={index}>
                  <Food foodData={item} />
                </li>
              ))
            : ""}
        </ul>
      </div>
    </ContainerFluid>
  );
};

export default MealsWraper;
