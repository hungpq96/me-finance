import React, { useState } from "react";
import { connect } from "react-redux";
import { Intent } from "@blueprintjs/core";

import { editTransaction, removeTransaction } from "apps/transactions/actions";
import { ItemWrapper, Input, StyledButton, SelectWrapper } from "./styles";
import ConfirmDeletePopup from "../ConfirmDeletePopup";
import PriceInput from "../PriceInput";
import CategorySelect from "../CategorySelect";

const Item = ({ transaction, editTransaction, removeTransaction }) => {
  const { name, price, category, note, id } = transaction || {};
  const [inputs, setInputs] = useState({ name, price, category, note });
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => setPopupOpen(!isPopupOpen);

  const handleConfirm = () => {
    removeTransaction({ id });
    togglePopup();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleInputBlur = () => {
    editTransaction({
      id,
      ...inputs,
    });
  };

  return (
    <ItemWrapper key={id}>
      <Input
        leftIcon="shopping-cart"
        name="name"
        value={inputs.name}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <PriceInput
        name="price"
        value={inputs.price}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <SelectWrapper>
        <CategorySelect
          name="category"
          value={inputs.category}
          onChange={handleInputChange}
        />
      </SelectWrapper>
      <Input
        leftIcon="annotation"
        name="note"
        value={inputs.note}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <StyledButton icon="cross" intent={Intent.DANGER} onClick={togglePopup} />

      <ConfirmDeletePopup
        isOpen={isPopupOpen}
        onToggle={togglePopup}
        onConfirm={handleConfirm}
      />
    </ItemWrapper>
  );
};

export default connect(null, {
  editTransaction,
  removeTransaction,
})(Item);
