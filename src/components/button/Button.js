import React from "react";
import './Button.css';

const Button = ({ children, className, action, ...otherProps }) => (
  <button className={className} {...otherProps} onClick={action}>
    {children}
  </button>
);

export default Button;
