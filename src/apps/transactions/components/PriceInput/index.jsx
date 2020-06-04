import React, { useState } from "react";

import { StyledInput, InputWrapper, PrefixIcon } from "./styles";

const PriceInput = ({ name, value, onChange, large, ...rest }) => {
  const [amount, setAmount] = useState(value);

  const handleChange = (_, maskedValue, rawValue) => {
    setAmount(maskedValue);
    onChange({
      target: {
        name,
        value: rawValue,
      },
    });
  };

  return (
    <InputWrapper className="bp3-input-group" large={large}>
      <PrefixIcon className="bp3-icon bp3-icon-dollar" large={large} />
      <StyledInput
        large={large}
        className={`bp3-input ${large ? "bp3-large" : ""}`}
        spellCheck="false"
        precision="3"
        suffix="   VND"
        value={amount}
        onChangeEvent={handleChange}
        {...rest}
      />
    </InputWrapper>
  );
};

export default PriceInput;
