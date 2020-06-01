import React from "react";
import { Intent } from "@blueprintjs/core";

import { ItemWrapper, Input, StyledButton } from "./styles";

const Item = ({ transaction }) => {
  const { name, price, note, id } = transaction || {};

  return (
    <ItemWrapper key={id}>
      <Input leftIcon="shopping-cart" value={name} />
      <Input leftIcon="dollar" value={price} />
      <Input leftIcon="annotation" value={note} />
      <StyledButton icon="cross" intent={Intent.DANGER} />
    </ItemWrapper>
  );
};

export default Item;
