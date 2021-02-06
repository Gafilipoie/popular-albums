import React from 'react';

const Select = ({ placeholder }) => (
  <select>
    <option value="">{placeholder}</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
);

export default Select;
