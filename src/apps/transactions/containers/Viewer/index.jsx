import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { getWeekDays, getWeeklyTransactions } from "store/selectors";
import { isWithinDay } from "utils";
import DailyRecord from "../DailyRecord";
import ItemEditor from "../ItemEditor";
import Calendar from "../../components/Calendar";
import { ViewWrapper } from "./styles";

const Viewer = ({ weekDays, transactions }) => {
  const getTransactionByDay = (day) =>
    transactions.filter((trans) => isWithinDay(trans.timestamp, day));

  return (
    <ViewWrapper>
      {weekDays.map((day) => (
        <DailyRecord
          key={day.getDate()}
          day={day}
          transactions={getTransactionByDay(day)}
        />
      ))}
      <Calendar />
      <ItemEditor />
    </ViewWrapper>
  );
};

export default compose(
  connect(getWeekDays),
  connect(getWeeklyTransactions)
)(Viewer);
