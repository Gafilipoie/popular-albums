import React from "react";
import "./Select.css";

const Select = ({
  className,
  value,
  placeholder,
  options,
  error,
  ...otherProps
}) => (
  <span className={`styledSelect ${className}`}>
    <select value={value} {...otherProps}>
      <option value="" disabled>
        {placeholder}
      </option>
      {Object.keys(options).length
        ? Object.keys(options).map(key => (
            <option key={options[key].id} value={options[key].id}>
              {options[key].username}
            </option>
          ))
        : null}
    </select>
    {error && <span className="select-error">{error}</span>}
  </span>
);

export default Select;
