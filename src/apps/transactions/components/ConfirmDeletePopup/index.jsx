import React from "react";

import { Intent } from "@blueprintjs/core";

import {
  PopupWrapper,
  ConfirmButton,
  CancelButton,
  WrapperContent,
} from "./styles";

const ConfirmDeletePopup = ({ isOpen, onToggle, onConfirm }) => {
  return (
    <PopupWrapper
      usePortal
      canEscapeKeyClose
      canOutsideClickClose
      className="bp3-dark"
      isOpen={isOpen}
      isCloseButtonShown={false}
      icon="trash"
      title="Remove this item?"
    >
      <WrapperContent>
        <CancelButton onClick={onToggle}>Nope!</CancelButton>
        <ConfirmButton onClick={onConfirm} intent={Intent.DANGER}>
          Sure!
        </ConfirmButton>
      </WrapperContent>
    </PopupWrapper>
  );
};

export default ConfirmDeletePopup;
