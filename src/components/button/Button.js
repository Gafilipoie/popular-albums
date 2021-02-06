import React from "react";

const Button = ({ children, action, ...otherProps }) => (
  <button {...otherProps} onClick={action}>
    {children}
  </button>
);

export default Button;
