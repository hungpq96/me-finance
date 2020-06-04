import React, { useState } from "react";

import { CATEGORIES } from "apps/transactions/constants";
import { Select } from "./styles";

const CategorySelect = ({ name, large, value, onChange, ...rest }) => {
  const [current, setCurrent] = useState(value || CATEGORIES[0]);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setCurrent(value);
    onChange({
      target: {
        name,
        value,
      },
    });
  };

  return (
    <Select
      fill
      large={large}
      options={CATEGORIES}
      {...rest}
      name={name}
      value={current}
      onChange={handleChange}
    />
  );
};

export default CategorySelect;
