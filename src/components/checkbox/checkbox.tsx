import React from "react";
import "./checkbox.css";
const CheckBox = () => {
  return (
    <div>
      <label className="container">
        <input type="checkbox" />
        <div className="checkmark"></div>
      </label>
    </div>
  );
};

export default CheckBox;
