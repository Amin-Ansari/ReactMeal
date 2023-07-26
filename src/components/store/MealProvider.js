import React from "react";
import MealContext from "./meal-context";
import { useReducer, useState } from "react";

const reducerFunction = (state, action) => {
  if (action.type === "ADDING") {
    const exestingIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );
    let exestingCartItem = state.items[exestingIndex];
    let updatedItems = [...state.items];
    if (exestingCartItem) {
      exestingCartItem = {
        ...exestingCartItem,
        amount: Number(exestingCartItem.amount) + Number(action.item.amount)
      };
      updatedItems[exestingIndex] = exestingCartItem;
    } else {
      updatedItems.push(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.amount
    };
  } else if (action.type === "REMOVING") {
    let foodList = [...state.items];
    if (foodList[action.id].amount <= 1) {
      foodList.splice(action.id, 1);
      return {
        items: foodList,
        totalAmount: state.totalAmount >= 2 ? state.totalAmount - 1 : 0
      };
    } else {
      foodList[action.id] = {
        ...foodList[action.id],
        amount: foodList[action.id].amount - 1
      };
      return {
        items: foodList,
        totalAmount: state.totalAmount >= 2 ? state.totalAmount - 1 : 0
      };
    }
  } else if (action.type === "INCREASE") {
    const myFoodList = [...state.items];
    myFoodList[action.id] = {
      ...myFoodList[action.id],
      amount: myFoodList[action.id].amount + 1
    };
    return { items: myFoodList, totalAmount: state.totalAmount + 1 };
  } else if (action.type === "INITIAL-FETCH") {
    return {
      items: action.fetchData,
      totalAmount: action.fetchData.length
    };
  }
};
const MealProvider = (props) => {
  const [mealsReducer, dispatchMeals] = useReducer(reducerFunction, {
    items: [],
    totalAmount: 0
  });
  const foodAddingHandler = (item) => {
    dispatchMeals({ type: "ADDING", item: item });
  };

  const foodRemovingHandler = (id) => {
    dispatchMeals({ type: "REMOVING", id: id });
  };
  const increasingFoodHandler = (id) => {
    dispatchMeals({ type: "INCREASE", id: id });
  };

  const proviedMeals = {
    foodItems: mealsReducer.items,
    totalAmount: mealsReducer.totalAmount,
    pushFood: foodAddingHandler,
    pullFood: foodRemovingHandler,
    increaseFood: increasingFoodHandler
  };

  return (
    <MealContext.Provider value={proviedMeals}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealProvider;
