import React from "react";
import { Intent } from "@blueprintjs/core";

import { ItemWrapper, Input, StyledButton } from "./styles";


const Item = () => {
  return (
    <ItemWrapper id="aaa">
      <Input leftIcon="shopping-cart" />
      <Input leftIcon="dollar" />
      <Input leftIcon="annotation" />
      <StyledButton icon="cross" intent={Intent.DANGER} />
    </ItemWrapper>
  )
};

export default Item;
