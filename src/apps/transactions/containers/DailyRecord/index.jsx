import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Intent } from "@blueprintjs/core";

import { toggleItemEditor } from "apps/transactions/actions";
import { getDayName, getMonthlyDate, isToday } from "utils";
import { Wrapper, ToggleButton, Collapsable, SumButton, Footer, AddItemButton } from "./styles";
import Item from "../../components/Item";

const DailyRecord = ({ day, toggleItemEditor }) => {
  useEffect(() => {
    setOpen(isToday(day));
  }, [day]);

  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const getTitle = () => {
    const title = `${getDayName(day)} - ${getMonthlyDate(day)}`;

    return isToday(day) ? `${title} (today)` : title;
  };

  const handleItemAdd = () => {
    toggleItemEditor();
  };

  return (
    <Wrapper>
      <ToggleButton large icon="properties" onClick={handleToggle}>
        {getTitle()}
      </ToggleButton>

      <Collapsable isOpen={isOpen} keepChildrenMounted>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

        <Footer>
          <AddItemButton large icon="plus" intent={Intent.SUCCESS} onClick={handleItemAdd} />

          <SumButton large icon="equals" minimal intent={Intent.WARNING}>
            123456,000
          </SumButton>
        </Footer>
      </Collapsable>
    </Wrapper>
  )
};

export default connect(
  null,
  { toggleItemEditor },
)(DailyRecord);
