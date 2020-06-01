import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Intent } from "@blueprintjs/core";

import { toggleItemEditor } from "apps/transactions/actions";
import { getDayName, getMonthlyDate, isToday } from "utils";
import {
  Wrapper,
  ToggleButton,
  Collapsable,
  SumButton,
  Footer,
  AddItemButton,
} from "./styles";
import Item from "../../components/Item";

const DailyRecord = ({ day, toggleItemEditor, transactions }) => {
  useEffect(() => {
    setOpen(isToday(day));
  }, [day]);

  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleItemAdd = () => {
    toggleItemEditor();
  };

  const getTitle = () => {
    const title = `${getDayName(day)} - ${getMonthlyDate(day)}`;

    return isToday(day) ? `${title} (today)` : title;
  };

  const getSum = () =>
    transactions.reduce((acc, next) => acc + Number(next.price), 0);

  return (
    <Wrapper>
      <ToggleButton large icon="properties" onClick={handleToggle}>
        {getTitle()}
      </ToggleButton>

      <Collapsable isOpen={isOpen} keepChildrenMounted>
        {transactions.map((trans) => (
          <Item transaction={trans} />
        ))}

        <Footer>
          <AddItemButton
            large
            icon="plus"
            intent={Intent.SUCCESS}
            onClick={handleItemAdd}
          />

          <SumButton large icon="equals" minimal intent={Intent.WARNING}>
            {getSum()}
          </SumButton>
        </Footer>
      </Collapsable>
    </Wrapper>
  );
};

export default connect(null, { toggleItemEditor })(DailyRecord);
