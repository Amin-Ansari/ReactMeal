import React from "react";

const MealContext = React.createContext({
  foodItems: [],
  totalAmount: 0,
  pushFood: () => {},
  pullFood: () => {},
  increaseFood: () => {},
  wipeTheCard: () => {}
});

export default MealContext;
