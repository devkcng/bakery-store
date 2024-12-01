import React from "react";
import "./checkbox.css";

interface CheckBoxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultStatus?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ onChange, defaultStatus }) => {
  return (
    <div>
      <label className="container">
        <input type="checkbox" onChange={onChange} checked={defaultStatus} />
        <div className="checkmark"></div>
      </label>
    </div>
  );
};

export default CheckBox;
