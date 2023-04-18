import React from "react";
import MealContext from "./meal-context";
import { useReducer } from "react";

const reducerFunction = (state, action) => {
  if (action.type == "ADDING") {
    const exestingIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );
    let exestingCartItem = state.items[exestingIndex];
    let updatedItems = state.items;
    if (exestingCartItem) {
      exestingCartItem = {
        ...exestingCartItem,
        amount: exestingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exestingIndex] = exestingCartItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.amount,
    };
  } else if (action.type == "REMOVING") {
  }
};

const MealProvider = (props) => {
  const [mealsReducer, dispatchMeals] = useReducer(reducerFunction, {
    items: [],
    totalAmount: 0,
  });
  const foodAddingHandler = (item) => {
    dispatchMeals({ type: "ADDING", item: item });
  };

  const foodRemovingHandler = (id) => {
    dispatchMeals({ type: "REMOVING", id: id });
  };
  const proviedMeals = {
    foodItems: mealsReducer.items,
    totalAmount: mealsReducer.totalAmount,
    pushFood: foodAddingHandler,
    pullFood: foodRemovingHandler,
  };

  return (
    <MealContext.Provider value={proviedMeals}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealProvider;
