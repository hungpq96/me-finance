import React, { useState } from "react";
import { Intent } from "@blueprintjs/core";

import { Wrapper, ToggleButton, Collapsable, SumButton, Footer, AddItemButton } from "./styles";
import Item from "../../components/Item";

const Day = () => {
  const [isOpen, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper>
      <ToggleButton large icon="properties" onClick={handleToggle}>Today</ToggleButton>

      <Collapsable isOpen={isOpen} keepChildrenMounted>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

        <Footer>
          <AddItemButton large icon="plus" intent={Intent.SUCCESS} />

          <SumButton large icon="equals" minimal intent={Intent.WARNING}>
            123456,000
          </SumButton>
        </Footer>
      </Collapsable>
    </Wrapper>
  )
};

export default Day;
