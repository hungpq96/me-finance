import React from "react";
import { connect } from "react-redux";

import DailyRecord from "../DailyRecord";
import ItemEditor from "../ItemEditor";
import Calendar from "../../components/Calendar";
import { getWeekDays } from "store/selectors";

const Viewer = ({ weekDays }) => {
  return (
    <div>
      {(weekDays).map(day => (
        <DailyRecord key={day.getDay()} day={day} />
      ))}
      <Calendar />
      <ItemEditor />
    </div>
  );
};

export default connect(
  getWeekDays,
)(Viewer);
