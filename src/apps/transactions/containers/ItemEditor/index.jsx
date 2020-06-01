import React, { useState } from "react";
import { Intent } from '@blueprintjs/core';

import { Wrapper, Content, Input, ConfirmButton, CancelButton, Footer } from './styles';

const ItemEditor = () => {
  const [isOpen, setOpen] = useState(true);

  const toggleOpen = () => setOpen(!isOpen);

  const handleConfirm = () => {
    toggleOpen();
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
      isOpen={isOpen}
      onClose={toggleOpen}
    >
      <Content>
        <Input large leftIcon="shopping-cart" />
        <Input large leftIcon="dollar" />
        <Input large leftIcon="annotation" />
      </Content>

      <Footer>
        <ConfirmButton
          intent={Intent.SUCCESS}
          onClick={handleConfirm}
        >
          OK
        </ConfirmButton>

        <CancelButton onClick={toggleOpen}>
          Cancel
        </CancelButton>
      </Footer>
    </Wrapper>
  );
};

export default ItemEditor;
