import React, { useReducer } from "react";

const FormInput = React.forwardRef((props, inputRef) => {
  return (
    <label>
      {props.label}
      <input
        className={`${!props.isInputValid ? "invalid" : ""}`}
        onClick={props.onTouch}
        onBlur={props.onBlurTheInput}
        ref={inputRef}
      ></input>
      <p
        className={`${
          props.eventState == "BLUR" && !props.isInputValid
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
