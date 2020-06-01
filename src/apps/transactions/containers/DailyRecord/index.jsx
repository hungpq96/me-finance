import React, { useState, useEffect } from "react";
import { Intent } from "@blueprintjs/core";

import { Wrapper, ToggleButton, Collapsable, SumButton, Footer, AddItemButton } from "./styles";
import Item from "../../components/Item";
import { getDayName, getMonthlyDate, isToday } from "utils";

const DailyRecord = ({ day }) => {
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
          <AddItemButton large icon="plus" intent={Intent.SUCCESS} />

          <SumButton large icon="equals" minimal intent={Intent.WARNING}>
            123456,000
          </SumButton>
        </Footer>
      </Collapsable>
    </Wrapper>
  )
};

export default DailyRecord;
