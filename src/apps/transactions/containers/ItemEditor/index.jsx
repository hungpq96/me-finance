import React, { useState } from "react";
import { connect } from "react-redux";
import { Intent } from "@blueprintjs/core";

import { toggleItemEditor, addTransaction } from "apps/transactions/actions";
import { getItemEditorOpenStatus } from "store/selectors";
import { getMinimalDate, getUnix } from "utils";
import schema from "./schema";
import {
  Wrapper,
  Content,
  Input,
  ConfirmButton,
  CancelButton,
  Footer,
  ErrorMsg,
} from "./styles";

const ItemEditor = ({ isItemEditorOpen, toggleItemEditor, addTransaction }) => {
  const [inputs, setInputs] = useState({
    name: "",
    price: "0",
    note: "",
  });
  const [errors, setErrors] = useState({});

  const handleConfirm = () => {
    schema
      .validate(inputs, { abortEarly: false })
      .then(() => {
        addTransaction({
          ...inputs,
          id: getUnix(),
          timestamp: getMinimalDate(new Date()),
        });
        toggleItemEditor();
      })
      .catch(({ inner }) => {
        const errors = {};
        inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      });
  };

  const handleClose = () => {
    toggleItemEditor();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: name === "price" && !value ? 0 : value,
    });
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
          fill
          leftIcon="shopping-cart"
          name="name"
          intent={errors.name ? Intent.DANGER : Intent.NONE}
          value={inputs.name}
          onChange={handleInputChange}
        />
        {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}

        <Input
          large
          fill
          leftIcon="dollar"
          name="price"
          intent={errors.price ? Intent.DANGER : Intent.NONE}
          values={inputs.price}
          onChange={handleInputChange}
        />
        {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}

        <Input
          large
          fill
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
