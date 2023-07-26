import React, { useState, useReducer } from "react";
import FormInput from "./FormInput";
import "./TotalPrice.css";

const UserDataForm = (props) => {
  return (
    <div className="form-container">
      <form className="user-data-form">
        <FormInput label="Name: " />
        <FormInput label="Full Addres: " />
        <FormInput label="Postal Code: " />
        <FormInput label="City: " />
      </form>
    </div>
  );
};

export default UserDataForm;
