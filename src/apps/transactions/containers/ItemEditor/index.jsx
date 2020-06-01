import React from "react";
import { connect } from "react-redux";
import { Intent } from '@blueprintjs/core';

import { toggleItemEditor } from "apps/transactions/actions";
import { getItemEditorOpenStatus } from "store/selectors";
import { Wrapper, Content, Input, ConfirmButton, CancelButton, Footer } from './styles';

const ItemEditor = ({ isItemEditorOpen, toggleItemEditor }) => {
  const handleConfirm = () => {
    toggleItemEditor();
  };

  const handleClose = () => {
    toggleItemEditor();
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

        <CancelButton onClick={handleClose}>
          Cancel
        </CancelButton>
      </Footer>
    </Wrapper>
  );
};

export default connect(
  getItemEditorOpenStatus,
  { toggleItemEditor },
)(ItemEditor);
