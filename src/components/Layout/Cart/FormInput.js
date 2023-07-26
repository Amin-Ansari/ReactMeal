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
const FormInput = React.forwardRef((props, inputRef) => {
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

  return (
    <label>
      {props.label}
      <input
        className={`${!validOrInvalid ? "invalid" : ""}`}
        onClick={touchTheInput}
        onBlur={blurTheInput}
        ref={inputRef}
      ></input>
      <p
        className={`${
          inputValidation.eventState == "BLUR" && !validOrInvalid
            ? "dis-block"
            : "dis-none "
        }`}
      >
        This input can NOT be empty
      </p>
    </label>
  );
});

export default FormInput;
