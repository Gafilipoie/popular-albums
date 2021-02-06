import React from "react";
import './Input.css';

const Input = ({ className, error, ...otherProps}) => (
  <span className={`styledInput ${className}`}>
    <input {...otherProps} />
    {error && <span className="input-error">{error}</span>}
  </span>
);

export default Input;
