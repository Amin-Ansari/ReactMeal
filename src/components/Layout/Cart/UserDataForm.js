import React, { useState, useReducer } from "react";
import "./TotalPrice.css";

const UserDataForm = (props) => {
  return (
    <div className="form-container">
      <form className="user-data-form">
        <label>
          Name:
          <input></input>
        </label>
        <label>
          Full address:
          <input></input>
        </label>
        <lable>
          Postal code:
          <input></input>
        </lable>
        <label>
          City:
          <input></input>
        </label>
      </form>
    </div>
  );
};

export default UserDataForm;
