import React from "react";
import { connect } from "react-redux";

import { getWeekDays } from "store/selectors";
import DailyRecord from "../DailyRecord";
import ItemEditor from "../ItemEditor";
import Calendar from "../../components/Calendar";
import { ViewWrapper } from "./styles";

const Viewer = ({ weekDays }) => {
  return (
    <ViewWrapper>
      {(weekDays).map(day => (
        <DailyRecord key={day.getDay()} day={day} />
      ))}
      <Calendar />
      <ItemEditor />
    </ViewWrapper>
  );
};

export default connect(
  getWeekDays,
)(Viewer);
