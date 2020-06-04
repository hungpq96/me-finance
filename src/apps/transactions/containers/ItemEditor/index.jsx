import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Intent } from "@blueprintjs/core";

import { toggleItemEditor, addTransaction } from "apps/transactions/actions";
import { CATEGORIES } from "apps/transactions/constants";
import { getItemEditorState } from "store/selectors";
import { getUnix } from "utils";
import schema from "./schema";
import {
  Wrapper,
  Content,
  Input,
  ConfirmButton,
  CancelButton,
  Footer,
  ErrorMsg,
  SelectWrapper,
} from "./styles";
import PriceInput from "../../components/PriceInput";
import CategorySelect from "../../components/CategorySelect";

const initInputs = {
  name: "",
  price: "0",
  category: CATEGORIES[0],
  note: "",
};

const ItemEditor = ({
  isOpening,
  openingDay,
  toggleItemEditor,
  addTransaction,
}) => {
  useEffect(() => {
    setInputs(initInputs);
    setErrors({});
  }, [isOpening]);

  const [inputs, setInputs] = useState(initInputs);
  const [errors, setErrors] = useState({});

  const handleConfirm = () => {
    schema
      .validate(inputs, { abortEarly: false })
      .then(() => {
        addTransaction({
          ...inputs,
          id: getUnix(),
          timestamp: openingDay,
        });
        toggleItemEditor();
      })
      .catch(({ inner }) => {
        const errors = {};
        if (inner) {
          inner.forEach((error) => {
            errors[error.path] = error.message;
          });
          setErrors(errors);
        } else {
          setErrors({});
        }
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

  const handleKeyEnterPress = (e) => {
    if (e.key === "Enter") handleConfirm();
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
      isOpen={isOpening}
      onClose={handleClose}
    >
      <Content>
        <Input
          large
          fill
          autoFocus
          leftIcon="shopping-cart"
          name="name"
          intent={errors.name ? Intent.DANGER : Intent.NONE}
          value={inputs.name}
          onChange={handleInputChange}
          onKeyPress={handleKeyEnterPress}
        />
        {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}

        <PriceInput
          large
          name="price"
          value={inputs.price}
          onChange={handleInputChange}
          onKeyPress={handleKeyEnterPress}
        />

        <SelectWrapper>
          <CategorySelect
            large
            name="category"
            value={inputs.category}
            onChange={handleInputChange}
          />
        </SelectWrapper>

        <Input
          large
          fill
          leftIcon="annotation"
          name="note"
          valuse={inputs.note}
          onChange={handleInputChange}
          onKeyPress={handleKeyEnterPress}
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

export default connect(getItemEditorState, {
  toggleItemEditor,
  addTransaction,
})(ItemEditor);
