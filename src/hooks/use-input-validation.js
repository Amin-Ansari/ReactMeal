import React, { useReducer } from "react";

const nameReducer = (state, action) => {
  let newValues = { ...state };
  if (action.type === "BLUR") {
    newValues = {
      isTouched: true,
      eventState: action.type,
      hasValue: action.value !== "" ? true : false
    };
  } else if (action.type === "FOCUS") {
    newValues = { ...state, eventState: action.type, isTouched: true };
  }

  return newValues;
};

const UserInputVAlidation = (input) => {
  const [inputValidation, dispatchName] = useReducer(nameReducer, {
    eventState: null,
    isTouched: false,
    hasValue: false
  });

  let validOrInvalid = !inputValidation.isTouched && true;
  if (inputValidation.isTouched == true) {
    validOrInvalid = inputValidation.isTouched == inputValidation.hasValue;
  }

  const touchTheInput = (e) => {
    dispatchName({ type: "FOCUS", value: e.target.value });
  };
  const blurTheInput = (e) => {
    dispatchName({ type: "BLUR", value: e.target.value });
  };
  const eventState = inputValidation.eventState;

  return { eventState, validOrInvalid, touchTheInput, blurTheInput };
};

export default UserInputVAlidation;
