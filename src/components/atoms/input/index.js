import React from "react";
import "./input.scss";

const Input = () => {
  return (
    <div className="input-wrapper">
      <p className="label">Label Input</p>
      <input className="input" placeholder="form input" />
    </div>
  );
};

export default Input;
