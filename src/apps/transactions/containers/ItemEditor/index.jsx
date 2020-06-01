import React, { useState } from "react";
import { connect } from "react-redux";
import { Intent } from "@blueprintjs/core";

import { toggleItemEditor, addTransaction } from "apps/transactions/actions";
import { getItemEditorOpenStatus } from "store/selectors";
import { getMinimalDate, getUnix } from "utils";
import {
  Wrapper,
  Content,
  Input,
  ConfirmButton,
  CancelButton,
  Footer,
} from "./styles";

const ItemEditor = ({ isItemEditorOpen, toggleItemEditor, addTransaction }) => {
  const [inputs, setInputs] = useState({
    name: "",
    price: 0,
    note: "",
  });

  const handleConfirm = () => {
    addTransaction({
      ...inputs,
      id: getUnix(),
      timestamp: getMinimalDate(new Date()),
    });
    toggleItemEditor();
  };

  const handleClose = () => {
    toggleItemEditor();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Wrapper
      usePortal
      canEscapeKeyClose
      canOutsideClickClose
      isCloseButtonShown={false}
      className="bp3-dark"
      icon="add"
      title="Add Item"
      isOpen={isItemEditorOpen}
      onClose={handleClose}
    >
      <Content>
        <Input
          large
          leftIcon="shopping-cart"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
        />
        <Input
          large
          leftIcon="dollar"
          name="price"
          values={inputs.price}
          onChange={handleInputChange}
        />
        <Input
          large
          leftIcon="annotation"
          name="note"
          valuse={inputs.note}
          onChange={handleInputChange}
        />
      </Content>

      <Footer>
        <ConfirmButton intent={Intent.SUCCESS} onClick={handleConfirm}>
          OK
        </ConfirmButton>

        <CancelButton onClick={handleClose}>Cancel</CancelButton>
      </Footer>
    </Wrapper>
  );
};

export default connect(getItemEditorOpenStatus, {
  toggleItemEditor,
  addTransaction,
})(ItemEditor);
